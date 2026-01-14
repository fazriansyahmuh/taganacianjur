import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-tagana.jpg";

const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-32 pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="TAGANA Cianjur membantu korban bencana"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">Taruna Siaga Bencana</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Siap Siaga,{" "}
            <span className="text-primary">Peduli</span>,{" "}
            <br className="hidden sm:block" />
            Melayani Masyarakat
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            TAGANA Cianjur hadir sebagai garda terdepan dalam penanggulangan bencana dan kesejahteraan sosial. 
            Bersama kita wujudkan Cianjur yang tangguh bencana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl">
              Gabung Menjadi Relawan
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">250+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Relawan Aktif</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">32</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Kecamatan Terjangkau</p>
            </div>
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <Heart className="h-5 w-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-primary-foreground">15K+</span>
              </div>
              <p className="text-sm text-primary-foreground/70">Jiwa Terbantu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
