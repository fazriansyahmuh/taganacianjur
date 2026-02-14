import { Crown, Star, Users, Briefcase, Award, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import logoTagana from "@/assets/logo-tagana.png";

interface OrgMember {
  name: string;
  position: string;
  role: string;
  icon: typeof Crown;
  tier: number;
}

const orgMembers: OrgMember[] = [
  { name: "H. Asep Sunandar, S.Sos", position: "Ketua", role: "Ketua TAGANA Kab. Cianjur", icon: Crown, tier: 1 },
  { name: "Dedi Mulyadi, S.Pd", position: "Wakil Ketua", role: "Wakil Ketua TAGANA", icon: Star, tier: 2 },
  { name: "Rina Marlina, S.Sos", position: "Sekretaris", role: "Sekretaris Umum", icon: Briefcase, tier: 2 },
  { name: "Ahmad Hidayat, SE", position: "Bendahara", role: "Bendahara Umum", icon: Briefcase, tier: 2 },
  { name: "Bambang Hermawan", position: "Koordinator Lapangan", role: "Koordinator Tanggap Darurat", icon: Users, tier: 3 },
  { name: "Siti Nurhaliza", position: "Koordinator Logistik", role: "Koordinator Distribusi Bantuan", icon: Users, tier: 3 },
  { name: "Ujang Supriadi", position: "Koordinator Pelatihan", role: "Koordinator Edukasi & Pelatihan", icon: Users, tier: 3 },
  { name: "Neng Tati Sumiati", position: "Koordinator Humas", role: "Koordinator Hubungan Masyarakat", icon: Users, tier: 3 },
];

const tierColors: Record<number, string> = {
  1: "from-primary to-primary/80 text-primary-foreground",
  2: "from-secondary to-secondary/80 text-secondary-foreground",
  3: "from-accent to-accent/80 text-accent-foreground",
};

const tierBorders: Record<number, string> = {
  1: "border-primary/30 shadow-primary/10",
  2: "border-secondary/30 shadow-secondary/10",
  3: "border-accent/30 shadow-accent/10",
};

const OrganizationSection = () => {
  const [expanded, setExpanded] = useState(false);
  const ketua = orgMembers.filter(m => m.tier === 1);
  const wakil = orgMembers.filter(m => m.tier === 2);
  const koordinator = orgMembers.filter(m => m.tier === 3);

  const displayKoordinator = expanded ? koordinator : koordinator.slice(0, 2);

  return (
    <section id="organisasi" className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Struktur Organisasi
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Susunan <span className="text-gradient">Pengurus</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Struktur kepengurusan TAGANA Kabupaten Cianjur periode 2024-2028
          </p>
        </div>

        {/* Logo & Motto */}
        <div className="flex flex-col items-center mb-10 sm:mb-14">
          <img 
            src={logoTagana} 
            alt="Logo TAGANA" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain mb-3 sm:mb-4"
          />
          <p className="text-sm sm:text-base md:text-lg font-semibold text-primary italic text-center">
            "We are the first to help and care"
          </p>
        </div>

        {/* Org Chart */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Tier 1 - Ketua */}
          <div className="flex justify-center">
            {ketua.map((member, i) => (
              <OrgCard key={i} member={member} featured />
            ))}
          </div>

          {/* Connector line */}
          <div className="flex justify-center">
            <div className="w-px h-6 sm:h-8 bg-border" />
          </div>

          {/* Tier 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {wakil.map((member, i) => (
              <OrgCard key={i} member={member} />
            ))}
          </div>

          {/* Connector line */}
          <div className="flex justify-center">
            <div className="w-px h-6 sm:h-8 bg-border" />
          </div>

          {/* Tier 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {displayKoordinator.map((member, i) => (
              <OrgCard key={i} member={member} />
            ))}
          </div>

          {koordinator.length > 2 && (
            <div className="flex justify-center">
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors touch-manipulation"
              >
                {expanded ? "Tampilkan Lebih Sedikit" : `Lihat Semua Koordinator (${koordinator.length})`}
                {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const OrgCard = ({ member, featured }: { member: OrgMember; featured?: boolean }) => (
  <div className={`relative group p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-card border-2 shadow-md hover:shadow-lg transition-all duration-300 ${tierBorders[member.tier]} ${featured ? 'max-w-sm mx-auto w-full' : ''}`}>
    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${tierColors[member.tier]} mb-3 shadow-md`}>
      <member.icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </div>
    <div className={`absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${tierColors[member.tier]}`}>
      {member.position}
    </div>
    <h4 className={`font-bold text-foreground ${featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
      {member.name}
    </h4>
    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
      {member.role}
    </p>
  </div>
);

export default OrganizationSection;
