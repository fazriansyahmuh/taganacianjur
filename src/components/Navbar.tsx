import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Berita", href: "#berita" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Emergency Banner */}
      <div className="emergency-banner py-2 px-4">
        <div className="container flex items-center justify-center gap-3 text-sm font-medium text-primary-foreground">
          <Phone className="h-4 w-4" />
          <span>Hotline Darurat 24 Jam:</span>
          <a href="tel:119" className="font-bold underline">119</a>
          <span className="hidden sm:inline">|</span>
          <a href="tel:+622632270000" className="hidden sm:inline font-bold underline">(0263) 227-0000</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-card border-b">
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">T</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-foreground">TAGANA</span>
              <span className="text-xs text-muted-foreground -mt-1">CIANJUR</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="lg">
              Gabung Relawan
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t bg-card animate-slide-up">
            <div className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="hero" className="w-full mt-4">
                Gabung Relawan
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
