import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";

const items = [
  { src: p1, cat: "Bridal", alt: "Traditional bridal close-up" },
  { src: p2, cat: "Engagement", alt: "Engagement soft glam" },
  { src: p3, cat: "Reception", alt: "Reception elegant look" },
  { src: p4, cat: "Traditional", alt: "Traditional Tamil bride" },
  { src: p5, cat: "Modern", alt: "Modern bridal glam" },
  { src: p6, cat: "Bridal", alt: "Bridal hairstyle" },
  { src: p7, cat: "Modern", alt: "Airbrush makeup application" },
  { src: p8, cat: "Reception", alt: "Party reception glam" },
];

const cats = ["All", "Bridal", "Engagement", "Reception", "Traditional", "Modern"];

export function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <section id="portfolio" className="py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-rose-gold mb-2">Our Work</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Portfolio <span className="text-gradient-gold italic">Gallery</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                filter === c
                  ? "bg-gradient-gold text-primary-foreground shadow-card-soft"
                  : "border border-border text-charcoal/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(it.src)}
              className="block w-full break-inside-avoid overflow-hidden rounded-xl group relative shadow-card-soft"
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-ivory text-sm font-medium tracking-wider uppercase">
                  {it.cat}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-up"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-ivory" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={lightbox} alt="Portfolio preview" className="max-w-full max-h-[90vh] rounded-lg shadow-luxe" />
        </div>
      )}
    </section>
  );
}
