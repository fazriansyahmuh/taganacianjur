import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "TAGANA Cianjur Gelar Simulasi Bencana Gempa di Sekolah",
    excerpt: "Kegiatan simulasi evakuasi gempa bumi dilaksanakan di SDN 1 Cianjur dengan melibatkan 200 siswa...",
    date: "12 Jan 2026",
    category: "Edukasi",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Distribusi Bantuan untuk Korban Banjir Cipanas",
    excerpt: "Tim TAGANA menyalurkan 500 paket sembako dan selimut kepada warga terdampak banjir di Kecamatan Cipanas...",
    date: "8 Jan 2026",
    category: "Tanggap Darurat",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Pelatihan Pertolongan Pertama untuk Relawan Baru",
    excerpt: "Sebanyak 50 calon relawan TAGANA mengikuti pelatihan intensif pertolongan pertama selama 3 hari...",
    date: "3 Jan 2026",
    category: "Pelatihan",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  "Edukasi": "bg-accent/10 text-accent",
  "Tanggap Darurat": "bg-destructive/10 text-destructive",
  "Pelatihan": "bg-primary/10 text-primary",
};

const NewsSection = () => {
  return (
    <section id="berita" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
          <div>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              Berita & Kegiatan
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Update <span className="text-gradient">Terkini</span>
            </h2>
          </div>
          <Button variant="outline" className="w-fit text-sm touch-manipulation">
            Lihat Semua Berita
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="group rounded-xl sm:rounded-2xl bg-card border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold ${categoryColors[news.category]}`}>
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>{news.date}</span>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-3 sm:mb-4">
                  {news.excerpt}
                </p>
                <button className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-primary hover:gap-2 sm:hover:gap-3 transition-all touch-manipulation">
                  Baca Selengkapnya
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
