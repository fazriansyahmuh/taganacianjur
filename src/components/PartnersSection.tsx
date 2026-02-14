const partners = [
  { name: "Kemensos RI", abbr: "KS" },
  { name: "BNPB", abbr: "BP" },
  { name: "BPBD Cianjur", abbr: "BD" },
  { name: "Pemkab Cianjur", abbr: "PC" },
  { name: "PMI Cianjur", abbr: "PM" },
  { name: "Dinsos Cianjur", abbr: "DS" },
];

const PartnersSection = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-card border-y">
      <div className="container px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6 sm:mb-8">
          Mitra & Kerjasama
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="text-base sm:text-lg md:text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {p.abbr}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-tight">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
