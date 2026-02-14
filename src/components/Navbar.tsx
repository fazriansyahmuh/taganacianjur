import { Phone, Menu, X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logoTagana from "@/assets/logo-tagana.png";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Organisasi", href: "#organisasi" },
  { label: "Berita", href: "#berita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency Banner */}
      <div className="emergency-banner py-1.5 sm:py-2 px-3 sm:px-4">
        <div className="container flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-primary-foreground">
          <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <span className="hidden xs:inline">Hotline Darurat 24 Jam:</span>
          <span className="xs:hidden">Darurat:</span>
          <a href="tel:119" className="font-bold underline">119</a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+622632270000" className="hidden sm:inline font-bold underline">(0263) 227-0000</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`glass-card border-b transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-6">
          {/* Logo */}
          <a href="#beranda" onClick={(e) => { e.preventDefault(); scrollToSection('beranda'); }} className="flex items-center gap-2 sm:gap-3">
            <img src={logoTagana} alt="Logo TAGANA" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain flex-shrink-0" />
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg md:text-xl text-foreground">TAGANA</span>
              <span className="text-[10px] sm:text-xs text-muted-foreground -mt-0.5 sm:-mt-1">CIANJUR</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="emergency" 
              size="default"
              className="text-sm gap-2"
              onClick={() => scrollToSection('kontak')}
            >
              <AlertTriangle className="h-4 w-4" />
              Lapor Bencana
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground touch-manipulation"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-card animate-slide-up max-h-[calc(100vh-120px)] overflow-y-auto">
            <div className="container py-3 sm:py-4 space-y-1 px-3 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block py-2.5 sm:py-3 text-sm sm:text-base text-foreground/80 hover:text-primary transition-colors touch-manipulation"
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="emergency" 
                className="w-full mt-3 sm:mt-4 text-sm sm:text-base gap-2"
                onClick={() => scrollToSection('kontak')}
              >
                <AlertTriangle className="h-4 w-4" />
                Lapor Bencana
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
