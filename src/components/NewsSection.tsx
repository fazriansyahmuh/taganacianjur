import { useState, useEffect } from "react";
import { Calendar, ArrowRight, MapPin, Clock, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  location: string;
  readTime: string;
  views: number;
}

const staticNews: NewsItem[] = [
  {
    id: "1",
    title: "TAGANA Cianjur Gelar Simulasi Bencana Gempa di Sekolah",
    excerpt: "Kegiatan simulasi evakuasi gempa bumi dilaksanakan di SDN 1 Cianjur dengan melibatkan 200 siswa...",
    content: "Kegiatan simulasi evakuasi gempa bumi dilaksanakan di SDN 1 Cianjur dengan melibatkan 200 siswa dan 30 guru. Simulasi ini bertujuan untuk meningkatkan kesiapsiagaan warga sekolah dalam menghadapi bencana gempa bumi.",
    date: "12 Jan 2026",
    category: "Edukasi",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
    location: "SDN 1 Cianjur",
    readTime: "3 menit",
    views: 1250,
  },
  {
    id: "2",
    title: "Distribusi Bantuan untuk Korban Banjir Cipanas",
    excerpt: "Tim TAGANA menyalurkan 500 paket sembako dan selimut kepada warga terdampak banjir...",
    content: "Tim TAGANA Cianjur berhasil menyalurkan 500 paket sembako, 300 selimut, dan 200 paket hygiene kit kepada warga terdampak banjir di Kecamatan Cipanas.",
    date: "8 Jan 2026",
    category: "Tanggap Darurat",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=500&fit=crop",
    location: "Kec. Cipanas, Cianjur",
    readTime: "4 menit",
    views: 2340,
  },
  {
    id: "3",
    title: "Pelatihan Pertolongan Pertama untuk Relawan Baru",
    excerpt: "Sebanyak 50 calon relawan TAGANA mengikuti pelatihan intensif pertolongan pertama selama 3 hari...",
    content: "Sebanyak 50 calon relawan TAGANA mengikuti pelatihan intensif pertolongan pertama selama 3 hari di Aula Dinas Sosial Cianjur.",
    date: "3 Jan 2026",
    category: "Pelatihan",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop",
    location: "Dinas Sosial Cianjur",
    readTime: "5 menit",
    views: 890,
  },
];

const categoryColors: Record<string, string> = {
  "Edukasi": "bg-accent/10 text-accent",
  "Tanggap Darurat": "bg-destructive/10 text-destructive",
  "Pelatihan": "bg-primary/10 text-primary",
  "Kesiapsiagaan": "bg-secondary/10 text-secondary",
  "Umum": "bg-muted text-muted-foreground",
};

const NewsSection = () => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>(staticNews);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await supabase
        .from("news")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (data && data.length > 0) {
        const mapped: NewsItem[] = data.map(n => ({
          id: n.id,
          title: n.title,
          excerpt: n.excerpt,
          content: n.content,
          date: new Date(n.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
          category: n.category,
          image: n.image_url || "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
          location: n.location || "",
          readTime: n.read_time || "3 menit",
          views: n.views || 0,
        }));
        setNewsItems(mapped);
      }
    };
    fetchNews();
  }, []);

  const displayedNews = showAll ? newsItems : newsItems.slice(0, 3);

  return (
    <section id="berita" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
          <div>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Berita & Kegiatan
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Update <span className="text-gradient">Terkini</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-lg">
              Informasi terbaru seputar kegiatan dan program TAGANA Cianjur
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {displayedNews.map((news, index) => (
            <article
              key={news.id}
              className="group rounded-xl sm:rounded-2xl bg-card border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedNews(news)}
            >
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold backdrop-blur-sm ${categoryColors[news.category] || "bg-muted/80 text-foreground"}`}>
                    {news.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-primary-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="h-3.5 w-3.5" />
                  <span className="text-xs font-medium">{news.views.toLocaleString()}</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>{news.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>{news.readTime}</span>
                  </div>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate max-w-[120px] sm:max-w-[150px]">{news.location}</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-primary group-hover:gap-2 transition-all touch-manipulation">
                    Baca <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {newsItems.length > 3 && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <Button variant="outline" className="text-sm touch-manipulation" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Tampilkan Lebih Sedikit" : `Lihat Semua Berita (${newsItems.length})`}
              <ArrowRight className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedNews} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {selectedNews && (
            <>
              <DialogTitle className="sr-only">{selectedNews.title}</DialogTitle>
              <div className="relative h-48 sm:h-56 md:h-64 w-full">
                <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${categoryColors[selectedNews.category] || "bg-muted/80 text-foreground"}`}>
                    {selectedNews.category}
                  </span>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground leading-tight">{selectedNews.title}</h2>
                </div>
              </div>
              <div className="px-4 sm:px-6 pt-4 pb-2 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground border-b">
                <div className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /><span>{selectedNews.date}</span></div>
                <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /><span>{selectedNews.location}</span></div>
                <div className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /><span>{selectedNews.readTime}</span></div>
                <div className="flex items-center gap-1.5"><Eye className="h-3.5 w-3.5" /><span>{selectedNews.views.toLocaleString()} views</span></div>
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-6">
                <p className="text-sm sm:text-base text-foreground leading-relaxed whitespace-pre-line">{selectedNews.content}</p>
              </div>
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex items-center gap-3">
                <Button variant="outline" size="sm" className="text-xs gap-1.5" onClick={() => { if (navigator.share) navigator.share({ title: selectedNews.title, text: selectedNews.excerpt }); }}>
                  <Share2 className="h-3.5 w-3.5" /> Bagikan
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default NewsSection;
