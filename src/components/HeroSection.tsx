import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users, Phone } from "lucide-react";
import heroImage from "@/assets/hero-tagana.jpg";
import logoTagana from "@/assets/logo-tagana.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="TAGANA Cianjur membantu korban bencana"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Logo */}
          <img src={logoTagana} alt="Logo TAGANA" className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain mb-4 sm:mb-5 animate-fade-in" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-4 sm:mb-6 animate-fade-in">
            <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary-foreground">Taruna Siaga Bencana Cianjur</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 animate-slide-up">
            Siap Siaga,{" "}
            <span className="text-primary">Peduli</span>,{" "}
            <br className="hidden sm:block" />
            Melayani Masyarakat
          </h1>

          {/* Motto */}
          <p className="text-xs sm:text-sm md:text-base text-primary font-semibold italic mb-2 animate-slide-up" style={{ animationDelay: "0.05s" }}>
            "We are the first to help and care"
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            TAGANA Cianjur hadir sebagai garda terdepan dalam penanggulangan bencana dan kesejahteraan sosial. 
            Bersama kita wujudkan Cianjur yang tangguh bencana.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              variant="hero" 
              size="lg"
              className="text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
              onClick={() => scrollToSection('berita')}
            >
              Lihat Berita Terkini
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              className="text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
              onClick={() => scrollToSection('tentang')}
            >
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Emergency Call */}
          <div className="mt-4 sm:mt-6 animate-slide-up" style={{ animationDelay: "0.25s" }}>
            <a 
              href="tel:119" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary-foreground/70 hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Darurat? Hubungi <strong className="text-primary">119</strong></span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-primary-foreground/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">250+</span>
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/70">Relawan Aktif</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">32</span>
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/70">Kecamatan</p>
            </div>
            <div className="text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-lg sm:text-2xl md:text-3xl font-bold text-primary-foreground">15K+</span>
              </div>
              <p className="text-xs sm:text-sm text-primary-foreground/70">Jiwa Terbantu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:block absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 md:w-1.5 md:h-3 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
