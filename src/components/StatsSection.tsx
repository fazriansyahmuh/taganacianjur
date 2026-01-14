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
    <section className="py-10 sm:py-12 md:py-16 bg-secondary">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group p-3 sm:p-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-primary/10 mb-3 sm:mb-4 group-hover:bg-primary transition-colors duration-300">
                <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-0.5 sm:mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-sm sm:text-base text-secondary-foreground/90 mb-0.5 sm:mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-secondary-foreground/60">
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
