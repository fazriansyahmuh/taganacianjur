import { 
  AlertTriangle, 
  Package, 
  Heart, 
  GraduationCap, 
  Home, 
  Truck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: AlertTriangle,
    title: "Tanggap Darurat Bencana",
    description: "Respons cepat dalam evakuasi, penyelamatan, dan penanganan darurat saat terjadi bencana alam.",
    color: "destructive" as const,
  },
  {
    icon: Package,
    title: "Distribusi Bantuan",
    description: "Penyaluran logistik, sembako, dan kebutuhan dasar kepada korban bencana dan masyarakat terdampak.",
    color: "primary" as const,
  },
  {
    icon: Heart,
    title: "Trauma Healing",
    description: "Pendampingan psikososial dan pemulihan mental bagi korban bencana, terutama anak-anak.",
    color: "accent" as const,
  },
  {
    icon: GraduationCap,
    title: "Edukasi Kebencanaan",
    description: "Sosialisasi dan pelatihan kesiapsiagaan bencana untuk masyarakat dan sekolah.",
    color: "secondary" as const,
  },
  {
    icon: Home,
    title: "Pendirian Posko",
    description: "Pembangunan dan pengelolaan posko pengungsian yang layak dan terkoordinasi.",
    color: "warning" as const,
  },
  {
    icon: Truck,
    title: "Dapur Umum",
    description: "Penyediaan makanan siap saji untuk korban bencana dan masyarakat terdampak.",
    color: "primary" as const,
  },
];

const colorClasses = {
  destructive: "bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-destructive-foreground",
  primary: "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  accent: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground group-hover:bg-secondary/80",
  warning: "bg-warning/20 text-foreground group-hover:bg-warning group-hover:text-warning-foreground",
};

const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-muted/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Program & <span className="text-gradient">Kegiatan</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Berbagai program dan kegiatan yang kami laksanakan untuk 
            melayani masyarakat dalam penanggulangan bencana dan kesejahteraan sosial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${colorClasses[service.color]}`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Selengkapnya
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ingin berkontribusi dalam kegiatan kami?
          </p>
          <Button variant="hero" size="lg">
            Daftar Sebagai Relawan
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
