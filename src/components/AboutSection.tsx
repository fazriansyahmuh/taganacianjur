import { Shield, Heart, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Tentang Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Mengenal <span className="text-gradient">TAGANA Cianjur</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Taruna Siaga Bencana adalah relawan sosial yang berasal dari masyarakat, 
            memiliki kepedulian dan aktif dalam penanggulangan bencana.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Garda Terdepan Penanggulangan Bencana
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                TAGANA Kabupaten Cianjur merupakan bagian dari organisasi kerelawanan 
                di bawah Dinas Sosial yang bertugas membantu masyarakat dalam menghadapi 
                situasi bencana dan permasalahan kesejahteraan sosial.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Sejak didirikan, TAGANA Cianjur telah aktif dalam berbagai kegiatan 
                tanggap darurat, rehabilitasi pasca bencana, hingga pemberdayaan 
                masyarakat untuk meningkatkan kesiapsiagaan bencana.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-primary/10 flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">Terlatih</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Pelatihan & sertifikasi</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-accent/10 flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">Tulus</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Melayani tanpa pamrih</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-secondary/50 flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">Solid</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Tim kompak & terkoordinasi</p>
                </div>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-warning/20 flex-shrink-0">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-warning-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base text-foreground">Sigap</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">Respons cepat 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Vision & Mission Cards */}
          <div className="space-y-4 sm:space-y-6">
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-secondary text-secondary-foreground">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Visi</h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed opacity-90">
                Mewujudkan masyarakat Cianjur yang tangguh, siap siaga, dan mandiri 
                dalam menghadapi bencana serta permasalahan sosial.
              </p>
            </div>

            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Misi</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 opacity-90 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Meningkatkan kesiapsiagaan bencana masyarakat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Memberikan pelayanan tanggap darurat yang cepat dan tepat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Melaksanakan rehabilitasi dan pemulihan pasca bencana</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Membangun jaringan relawan yang kuat dan profesional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
