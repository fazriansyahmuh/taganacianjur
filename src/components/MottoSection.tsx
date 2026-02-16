import { Shield, Heart, Zap } from "lucide-react";

const values = [
  { icon: Zap, title: "Sigap", desc: "Respons cepat dan terkoordinasi" },
  { icon: Shield, title: "Tangguh", desc: "Terlatih menghadapi segala situasi" },
  { icon: Heart, title: "Peduli", desc: "Melayani dengan tulus dan ikhlas" },
];

const MottoSection = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNGM3LjczMiAwIDE0IDYuMjY4IDE0IDE0cy02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center mb-6 sm:mb-8">
            <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4 leading-tight">
            "We are the first to{" "}
            <span className="text-primary">help</span> and{" "}
            <span className="text-primary">care</span>"
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/70 max-w-2xl mb-8 sm:mb-12">
            TAGANA Cianjur berkomitmen menjadi yang pertama hadir untuk membantu dan peduli 
            terhadap masyarakat yang membutuhkan
          </p>
          
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-10 w-full max-w-2xl">
            {values.map((v, i) => (
              <div key={i} className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
                  <v.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-primary" />
                </div>
                <h3 className="font-bold text-sm sm:text-base md:text-lg text-primary-foreground">{v.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-primary-foreground/60 hidden sm:block">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;
