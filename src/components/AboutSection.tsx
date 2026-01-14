import { Shield, Heart, Users, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mengenal <span className="text-gradient">TAGANA Cianjur</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Taruna Siaga Bencana adalah relawan sosial yang berasal dari masyarakat, 
            memiliki kepedulian dan aktif dalam penanggulangan bencana.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Garda Terdepan Penanggulangan Bencana
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                TAGANA Kabupaten Cianjur merupakan bagian dari organisasi kerelawanan 
                di bawah Dinas Sosial yang bertugas membantu masyarakat dalam menghadapi 
                situasi bencana dan permasalahan kesejahteraan sosial.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sejak didirikan, TAGANA Cianjur telah aktif dalam berbagai kegiatan 
                tanggap darurat, rehabilitasi pasca bencana, hingga pemberdayaan 
                masyarakat untuk meningkatkan kesiapsiagaan bencana.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Terlatih</h4>
                  <p className="text-sm text-muted-foreground">Pelatihan berkala & sertifikasi</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tulus</h4>
                  <p className="text-sm text-muted-foreground">Melayani tanpa pamrih</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 rounded-lg bg-secondary/50">
                  <Users className="h-5 w-5 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Solid</h4>
                  <p className="text-sm text-muted-foreground">Tim yang kompak & terkoordinasi</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-2 rounded-lg bg-warning/20">
                  <Target className="h-5 w-5 text-warning-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sigap</h4>
                  <p className="text-sm text-muted-foreground">Respons cepat 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Vision & Mission Cards */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-secondary text-secondary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">Visi</h3>
              </div>
              <p className="leading-relaxed opacity-90">
                Mewujudkan masyarakat Cianjur yang tangguh, siap siaga, dan mandiri 
                dalam menghadapi bencana serta permasalahan sosial.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">Misi</h3>
              </div>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Meningkatkan kesiapsiagaan bencana masyarakat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Memberikan pelayanan tanggap darurat yang cepat dan tepat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 shrink-0" />
                  <span>Melaksanakan rehabilitasi dan pemulihan pasca bencana</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-current mt-2 shrink-0" />
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
