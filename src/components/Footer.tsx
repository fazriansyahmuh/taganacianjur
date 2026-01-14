import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <div>
                <span className="font-bold text-xl">TAGANA</span>
                <p className="text-xs opacity-70">CIANJUR</p>
              </div>
            </div>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed mb-6">
              Taruna Siaga Bencana Kabupaten Cianjur. Garda terdepan dalam 
              penanggulangan bencana dan kesejahteraan sosial masyarakat.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#beranda" },
                { label: "Tentang Kami", href: "#tentang" },
                { label: "Layanan", href: "#layanan" },
                { label: "Berita", href: "#berita" },
                { label: "Galeri", href: "#galeri" },
                { label: "Kontak", href: "#kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Layanan Kami</h4>
            <ul className="space-y-3">
              {[
                "Tanggap Darurat",
                "Distribusi Bantuan",
                "Trauma Healing",
                "Edukasi Kebencanaan",
                "Dapur Umum",
                "Pendirian Posko",
              ].map((service) => (
                <li key={service}>
                  <span className="text-secondary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Kontak Darurat</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-secondary-foreground/80 text-sm">
                  <p className="font-semibold text-secondary-foreground">Hotline 24 Jam</p>
                  <a href="tel:119" className="text-primary font-bold text-lg">119</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-secondary-foreground/80 text-sm">
                  <p>tagana@cianjurkab.go.id</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div className="text-secondary-foreground/80 text-sm">
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
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/70 text-center md:text-left">
            &copy; {currentYear} TAGANA Kabupaten Cianjur. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/70">
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
