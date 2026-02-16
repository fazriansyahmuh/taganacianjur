import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Users, MapPin, ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Member {
  id: string;
  name: string;
  position: string;
  kecamatan: string;
  joined_year: number | null;
}

const MembersSection = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [search, setSearch] = useState("");
  const [selectedKec, setSelectedKec] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data } = await supabase
        .from("tagana_members")
        .select("id, name, position, kecamatan, joined_year")
        .eq("is_active", true)
        .order("kecamatan");
      if (data) setMembers(data);
      setLoading(false);
    };
    fetchMembers();
  }, []);

  const kecamatanList = [...new Set(members.map(m => m.kecamatan))].sort();

  const filtered = members.filter(m => {
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.kecamatan.toLowerCase().includes(search.toLowerCase());
    const matchKec = !selectedKec || m.kecamatan === selectedKec;
    return matchSearch && matchKec;
  });

  const grouped = filtered.reduce((acc, m) => {
    if (!acc[m.kecamatan]) acc[m.kecamatan] = [];
    acc[m.kecamatan].push(m);
    return acc;
  }, {} as Record<string, Member[]>);

  return (
    <section id="anggota" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Daftar Anggota
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Anggota TAGANA <span className="text-gradient">Per Kecamatan</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Data anggota Taruna Siaga Bencana yang tersebar di seluruh kecamatan Kabupaten Cianjur
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari nama atau kecamatan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setSelectedKec(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${!selectedKec ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              Semua ({members.length})
            </button>
          </div>
        </div>

        {/* Kecamatan chips */}
        <div className="flex flex-wrap gap-1.5 justify-center mb-8 max-w-4xl mx-auto">
          {kecamatanList.map(kec => {
            const count = members.filter(m => m.kecamatan === kec).length;
            return (
              <button
                key={kec}
                onClick={() => setSelectedKec(selectedKec === kec ? null : kec)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all touch-manipulation ${
                  selectedKec === kec
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border text-foreground/70 hover:border-primary/50"
                }`}
              >
                {kec} ({count})
              </button>
            );
          })}
        </div>

        {/* Members Grid */}
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Memuat data anggota...</div>
        ) : Object.keys(grouped).length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">Tidak ada anggota ditemukan</div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            {Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b)).map(([kec, members]) => (
              <div key={kec} className="bg-card rounded-xl sm:rounded-2xl border overflow-hidden">
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-secondary/5 border-b flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <h3 className="font-bold text-sm sm:text-base text-foreground">Kec. {kec}</h3>
                  <span className="ml-auto text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{members.length} anggota</span>
                </div>
                <div className="divide-y">
                  {members.map(m => (
                    <div key={m.id} className="px-4 sm:px-6 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-primary">{m.name.charAt(0)}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">{m.name}</p>
                        <p className="text-xs text-muted-foreground">{m.position}{m.joined_year ? ` • Sejak ${m.joined_year}` : ""}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MembersSection;
