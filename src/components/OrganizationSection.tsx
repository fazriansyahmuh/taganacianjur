import { Crown, Star, Users, Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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

const tierGradients: Record<number, string> = {
  1: "from-primary to-accent",
  2: "from-secondary to-secondary/80",
  3: "from-muted-foreground/20 to-muted-foreground/10",
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

        {/* Motto */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-primary italic">
            "We are the first to help and care"
          </p>
        </div>

        {/* Org Chart - Modern Card Layout */}
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {/* Tier 1 - Ketua */}
          {ketua.map((member, i) => (
            <div key={i} className="relative mx-auto max-w-md">
              <div className="bg-card rounded-2xl border-2 border-primary/30 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${tierGradients[1]} flex items-center justify-center shadow-lg`}>
                    <Crown className="h-7 w-7 sm:h-8 sm:w-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-primary text-primary-foreground mb-1">
                      {member.position}
                    </span>
                    <h4 className="font-bold text-base sm:text-lg text-foreground">{member.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </div>
              </div>
              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-6 sm:h-8 bg-border" />
              </div>
            </div>
          ))}

          {/* Tier 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {wakil.map((member, i) => (
              <div key={i} className="bg-card rounded-xl border border-secondary/20 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-secondary/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${tierGradients[2]} flex items-center justify-center`}>
                    <member.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-secondary/10 text-secondary">
                    {member.position}
                  </span>
                </div>
                <h4 className="font-bold text-sm sm:text-base text-foreground">{member.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Connector */}
          <div className="flex justify-center">
            <div className="w-px h-4 sm:h-6 bg-border" />
          </div>

          {/* Tier 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {displayKoordinator.map((member, i) => (
              <div key={i} className="bg-card rounded-xl border p-4 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-sm text-foreground truncate">{member.name}</h4>
                  <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                </div>
              </div>
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

export default OrganizationSection;
