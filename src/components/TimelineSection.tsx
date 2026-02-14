import { Calendar, Award, Users, Shield, MapPin } from "lucide-react";

const timelineEvents = [
  { year: "2005", title: "Pembentukan TAGANA Cianjur", desc: "Diresmikan di bawah Dinas Sosial Kab. Cianjur", icon: Award },
  { year: "2010", title: "Pelatihan Nasional", desc: "50 relawan mengikuti Diklat Nasional TAGANA", icon: Users },
  { year: "2016", title: "Tanggap Bencana Banjir", desc: "Penanganan banjir bandang di 5 kecamatan", icon: Shield },
  { year: "2022", title: "Gempa Cianjur M5.6", desc: "Respons darurat gempa bumi dengan 200+ relawan", icon: MapPin },
  { year: "2024", title: "Modernisasi Organisasi", desc: "Digitalisasi sistem dan penambahan 100 relawan baru", icon: Calendar },
];

const TimelineSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Perjalanan Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Jejak <span className="text-gradient">Langkah</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6 sm:space-y-8">
            {timelineEvents.map((event, i) => (
              <div key={i} className="relative pl-12 sm:pl-16">
                {/* Dot */}
                <div className="absolute left-2 sm:left-4 top-1 w-5 h-5 sm:w-5 sm:h-5 rounded-full bg-primary border-4 border-background shadow-md" />
                
                <div className="p-4 sm:p-5 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs sm:text-sm font-bold text-primary">{event.year}</span>
                    <event.icon className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-foreground">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
