import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle, DialogHeader } from "@/components/ui/dialog";
import {
  LogOut, Plus, Trash2, Edit, Newspaper, Users, LayoutDashboard, ChevronRight, X
} from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image_url: string | null;
  location: string | null;
  published: boolean;
  created_at: string;
}

interface MemberItem {
  id: string;
  name: string;
  position: string;
  kecamatan: string;
  phone: string | null;
  is_active: boolean;
  joined_year: number | null;
}

const Admin = () => {
  const [tab, setTab] = useState<"news" | "members">("news");
  const [news, setNews] = useState<NewsItem[]>([]);
  const [members, setMembers] = useState<MemberItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showNewsDialog, setShowNewsDialog] = useState(false);
  const [showMemberDialog, setShowMemberDialog] = useState(false);
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null);
  const [editingMember, setEditingMember] = useState<MemberItem | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  // News form
  const [newsForm, setNewsForm] = useState({ title: "", excerpt: "", content: "", category: "Umum", image_url: "", location: "" });
  // Member form
  const [memberForm, setMemberForm] = useState({ name: "", position: "Anggota", kecamatan: "", phone: "", joined_year: "" });

  useEffect(() => {
    checkAuth();
    fetchData();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { navigate("/login"); return; }
    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin");
    if (!roles || roles.length === 0) { navigate("/login"); }
  };

  const fetchData = async () => {
    setLoading(true);
    const [newsRes, membersRes] = await Promise.all([
      supabase.from("news").select("*").order("created_at", { ascending: false }),
      supabase.from("tagana_members").select("*").order("kecamatan"),
    ]);
    if (newsRes.data) setNews(newsRes.data);
    if (membersRes.data) setMembers(membersRes.data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  // NEWS CRUD
  const openNewsForm = (item?: NewsItem) => {
    if (item) {
      setEditingNews(item);
      setNewsForm({ title: item.title, excerpt: item.excerpt, content: item.content, category: item.category, image_url: item.image_url || "", location: item.location || "" });
    } else {
      setEditingNews(null);
      setNewsForm({ title: "", excerpt: "", content: "", category: "Umum", image_url: "", location: "" });
    }
    setShowNewsDialog(true);
  };

  const saveNews = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    if (editingNews) {
      const { error } = await supabase.from("news").update({ ...newsForm }).eq("id", editingNews.id);
      if (error) { toast({ title: "Gagal update", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Berita diperbarui" });
    } else {
      const { error } = await supabase.from("news").insert({ ...newsForm, created_by: user.id });
      if (error) { toast({ title: "Gagal tambah", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Berita ditambahkan" });
    }
    setShowNewsDialog(false);
    fetchData();
  };

  const deleteNews = async (id: string) => {
    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) { toast({ title: "Gagal hapus", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Berita dihapus" });
    fetchData();
  };

  // MEMBER CRUD
  const openMemberForm = (item?: MemberItem) => {
    if (item) {
      setEditingMember(item);
      setMemberForm({ name: item.name, position: item.position, kecamatan: item.kecamatan, phone: item.phone || "", joined_year: item.joined_year?.toString() || "" });
    } else {
      setEditingMember(null);
      setMemberForm({ name: "", position: "Anggota", kecamatan: "", phone: "", joined_year: "" });
    }
    setShowMemberDialog(true);
  };

  const saveMember = async () => {
    const payload = { ...memberForm, joined_year: memberForm.joined_year ? parseInt(memberForm.joined_year) : null };
    if (editingMember) {
      const { error } = await supabase.from("tagana_members").update(payload).eq("id", editingMember.id);
      if (error) { toast({ title: "Gagal update", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Anggota diperbarui" });
    } else {
      const { error } = await supabase.from("tagana_members").insert(payload);
      if (error) { toast({ title: "Gagal tambah", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Anggota ditambahkan" });
    }
    setShowMemberDialog(false);
    fetchData();
  };

  const deleteMember = async (id: string) => {
    const { error } = await supabase.from("tagana_members").delete().eq("id", id);
    if (error) { toast({ title: "Gagal hapus", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Anggota dihapus" });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b sticky top-0 z-40">
        <div className="container flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-5 w-5 text-primary" />
            <span className="font-bold text-foreground">Admin Panel</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")}>
              Beranda
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1.5">
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Keluar</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="container px-4 sm:px-6 py-6 sm:py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={tab === "news" ? "default" : "outline"}
            size="sm"
            onClick={() => setTab("news")}
            className="gap-1.5"
          >
            <Newspaper className="h-4 w-4" />
            Berita
          </Button>
          <Button
            variant={tab === "members" ? "default" : "outline"}
            size="sm"
            onClick={() => setTab("members")}
            className="gap-1.5"
          >
            <Users className="h-4 w-4" />
            Anggota
          </Button>
        </div>

        {/* NEWS TAB */}
        {tab === "news" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Kelola Berita & Kegiatan</h2>
              <Button size="sm" onClick={() => openNewsForm()} className="gap-1.5">
                <Plus className="h-4 w-4" />
                Tambah
              </Button>
            </div>

            {loading ? (
              <p className="text-muted-foreground text-sm">Memuat...</p>
            ) : news.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl border">
                <Newspaper className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Belum ada berita</p>
              </div>
            ) : (
              <div className="space-y-3">
                {news.map((item) => (
                  <div key={item.id} className="bg-card rounded-xl border p-4 flex items-start gap-4">
                    {item.image_url && (
                      <img src={item.image_url} alt="" className="w-16 h-16 rounded-lg object-cover flex-shrink-0 hidden sm:block" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{item.category}</span>
                        {!item.published && <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">Draft</span>}
                      </div>
                      <h3 className="font-semibold text-sm truncate">{item.title}</h3>
                      <p className="text-xs text-muted-foreground truncate">{item.excerpt}</p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openNewsForm(item)}>
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteNews(item.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* MEMBERS TAB */}
        {tab === "members" && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold">Kelola Anggota TAGANA</h2>
              <Button size="sm" onClick={() => openMemberForm()} className="gap-1.5">
                <Plus className="h-4 w-4" />
                Tambah
              </Button>
            </div>

            {loading ? (
              <p className="text-muted-foreground text-sm">Memuat...</p>
            ) : members.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl border">
                <Users className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Belum ada anggota</p>
              </div>
            ) : (
              <div className="space-y-3">
                {members.map((m) => (
                  <div key={m.id} className="bg-card rounded-xl border p-4 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{m.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm">{m.name}</h3>
                      <p className="text-xs text-muted-foreground">{m.position} • {m.kecamatan} {m.joined_year ? `• ${m.joined_year}` : ""}</p>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openMemberForm(m)}>
                        <Edit className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteMember(m.id)}>
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* News Dialog */}
      <Dialog open={showNewsDialog} onOpenChange={setShowNewsDialog}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingNews ? "Edit Berita" : "Tambah Berita"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label>Judul</Label>
              <Input value={newsForm.title} onChange={(e) => setNewsForm(f => ({ ...f, title: e.target.value }))} placeholder="Judul berita" />
            </div>
            <div className="space-y-1.5">
              <Label>Ringkasan</Label>
              <Textarea value={newsForm.excerpt} onChange={(e) => setNewsForm(f => ({ ...f, excerpt: e.target.value }))} placeholder="Ringkasan singkat" rows={2} />
            </div>
            <div className="space-y-1.5">
              <Label>Konten</Label>
              <Textarea value={newsForm.content} onChange={(e) => setNewsForm(f => ({ ...f, content: e.target.value }))} placeholder="Isi berita lengkap" rows={5} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Kategori</Label>
                <Input value={newsForm.category} onChange={(e) => setNewsForm(f => ({ ...f, category: e.target.value }))} placeholder="Edukasi" />
              </div>
              <div className="space-y-1.5">
                <Label>Lokasi</Label>
                <Input value={newsForm.location} onChange={(e) => setNewsForm(f => ({ ...f, location: e.target.value }))} placeholder="Cianjur" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>URL Gambar</Label>
              <Input value={newsForm.image_url} onChange={(e) => setNewsForm(f => ({ ...f, image_url: e.target.value }))} placeholder="https://..." />
            </div>
            <Button onClick={saveNews} className="w-full">{editingNews ? "Simpan Perubahan" : "Tambah Berita"}</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Member Dialog */}
      <Dialog open={showMemberDialog} onOpenChange={setShowMemberDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{editingMember ? "Edit Anggota" : "Tambah Anggota"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label>Nama</Label>
              <Input value={memberForm.name} onChange={(e) => setMemberForm(f => ({ ...f, name: e.target.value }))} placeholder="Nama lengkap" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Jabatan</Label>
                <Input value={memberForm.position} onChange={(e) => setMemberForm(f => ({ ...f, position: e.target.value }))} placeholder="Koordinator" />
              </div>
              <div className="space-y-1.5">
                <Label>Kecamatan</Label>
                <Input value={memberForm.kecamatan} onChange={(e) => setMemberForm(f => ({ ...f, kecamatan: e.target.value }))} placeholder="Cianjur" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label>Telepon</Label>
                <Input value={memberForm.phone} onChange={(e) => setMemberForm(f => ({ ...f, phone: e.target.value }))} placeholder="08xxx" />
              </div>
              <div className="space-y-1.5">
                <Label>Tahun Bergabung</Label>
                <Input value={memberForm.joined_year} onChange={(e) => setMemberForm(f => ({ ...f, joined_year: e.target.value }))} placeholder="2020" type="number" />
              </div>
            </div>
            <Button onClick={saveMember} className="w-full">{editingMember ? "Simpan Perubahan" : "Tambah Anggota"}</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
