import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Apa itu TAGANA?",
    a: "TAGANA (Taruna Siaga Bencana) adalah organisasi relawan sosial di bawah Kementerian Sosial RI yang bertugas membantu masyarakat dalam penanggulangan bencana dan permasalahan kesejahteraan sosial.",
  },
  {
    q: "Bagaimana cara melaporkan bencana?",
    a: "Anda dapat melaporkan bencana melalui hotline darurat 119, menghubungi kantor kami di (0263) 227-0000, atau mengisi formulir kontak di website ini dengan memilih subjek 'Laporan Bencana'.",
  },
  {
    q: "Apa saja kegiatan TAGANA Cianjur?",
    a: "Kegiatan kami meliputi tanggap darurat bencana, distribusi bantuan, trauma healing, edukasi kebencanaan di sekolah, pendirian posko siaga, dan dapur umum untuk korban bencana.",
  },
  {
    q: "Bagaimana cara berdonasi atau memberikan bantuan?",
    a: "Anda bisa menghubungi kami melalui formulir kontak atau datang langsung ke kantor TAGANA di Jl. Slamet Riyadi No. 1, Cianjur. Kami menerima bantuan berupa logistik, sembako, dan kebutuhan darurat lainnya.",
  },
  {
    q: "Apakah TAGANA beroperasi 24 jam?",
    a: "Ya, hotline darurat TAGANA beroperasi 24 jam nonstop. Untuk jam kantor operasional adalah Senin-Jumat pukul 08:00-16:00 WIB.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Pertanyaan <span className="text-gradient">Umum</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card border rounded-xl px-4 sm:px-5">
                <AccordionTrigger className="text-sm sm:text-base font-semibold text-foreground hover:text-primary py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-4 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
