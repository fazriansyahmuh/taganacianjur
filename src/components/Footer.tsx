import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import logoTagana from "@/assets/logo-tagana.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-10 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img src={logoTagana} alt="Logo TAGANA" className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0" />
              <div>
                <span className="font-bold text-lg sm:text-xl">TAGANA</span>
                <p className="text-[10px] sm:text-xs opacity-70">CIANJUR</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm italic text-primary mb-2">"We are the first to help and care"</p>
            <p className="text-secondary-foreground/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
              Taruna Siaga Bencana Kabupaten Cianjur. Garda terdepan dalam 
              penanggulangan bencana dan kesejahteraan sosial masyarakat.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors touch-manipulation"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Beranda", href: "beranda" },
                { label: "Tentang Kami", href: "tentang" },
                { label: "Layanan", href: "layanan" },
                { label: "Berita", href: "berita" },
                { label: "Galeri", href: "galeri" },
                { label: "Kontak", href: "kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors touch-manipulation"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Layanan Kami</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Tanggap Darurat",
                "Distribusi Bantuan",
                "Trauma Healing",
                "Edukasi Kebencanaan",
                "Dapur Umum",
                "Pendirian Posko",
              ].map((service) => (
                <li key={service}>
                  <span className="text-xs sm:text-sm text-secondary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm sm:text-base md:text-lg mb-3 sm:mb-4">Kontak Darurat</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-xs sm:text-sm">
                  <p className="font-semibold text-secondary-foreground">Hotline 24 Jam</p>
                  <a href="tel:119" className="text-primary font-bold text-base sm:text-lg">119</a>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-xs sm:text-sm break-all">
                  <p>tagana@cianjurkab.go.id</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-secondary-foreground/80 text-xs sm:text-sm">
                  <p>Jl. Slamet Riyadi No. 1</p>
                  <p>Cianjur, Jawa Barat 43211</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container py-4 sm:py-6 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs md:text-sm text-secondary-foreground/70 text-center sm:text-left">
            &copy; {currentYear} TAGANA Kabupaten Cianjur. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs md:text-sm text-secondary-foreground/70">
            <a href="#" className="hover:text-primary transition-colors touch-manipulation">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors touch-manipulation">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
