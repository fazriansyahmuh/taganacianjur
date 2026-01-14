import { Users, Shield, Heart, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "250+",
    label: "Relawan Aktif",
    description: "Siap siaga 24/7",
  },
  {
    icon: Shield,
    value: "32",
    label: "Kecamatan",
    description: "Jangkauan layanan",
  },
  {
    icon: Heart,
    value: "15.000+",
    label: "Jiwa Terbantu",
    description: "Sejak didirikan",
  },
  {
    icon: MapPin,
    value: "100+",
    label: "Lokasi Bencana",
    description: "Telah ditangani",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-secondary-foreground/90 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-secondary-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
