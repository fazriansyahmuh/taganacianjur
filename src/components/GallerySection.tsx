import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    alt: "Tim TAGANA melakukan evakuasi",
    caption: "Evakuasi korban banjir",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&h=400&fit=crop",
    alt: "Distribusi bantuan logistik",
    caption: "Distribusi bantuan",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
    alt: "Pelatihan relawan",
    caption: "Pelatihan relawan",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
    alt: "Kegiatan sosial",
    caption: "Bakti sosial",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    alt: "Pertolongan pertama",
    caption: "Pelatihan P3K",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    alt: "Trauma healing anak",
    caption: "Trauma healing",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="galeri" className="py-12 sm:py-16 md:py-20 bg-muted/50">
      <div className="container px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Galeri
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Dokumentasi <span className="text-gradient">Kegiatan</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Momen-momen penting dari berbagai kegiatan TAGANA Cianjur dalam melayani masyarakat.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`relative group cursor-pointer rounded-lg sm:rounded-xl overflow-hidden touch-manipulation ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-48 sm:h-64 md:h-80 lg:h-full" : "h-32 sm:h-40 md:h-48 lg:h-64"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                  <p className="text-primary-foreground font-medium text-xs sm:text-sm md:text-base">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute -top-10 sm:-top-12 right-0 text-primary-foreground hover:text-primary transition-colors p-2 touch-manipulation"
                aria-label="Tutup"
              >
                <X className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
              <img
                src={selectedImage.src.replace("w=600", "w=1200").replace("h=400", "h=800")}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg sm:rounded-xl max-h-[70vh] object-contain"
              />
              <p className="text-center text-primary-foreground mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
