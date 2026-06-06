import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Lakshmi",
    role: "Bride, Chennai",
    rating: 5,
    text: "Absolutely the best decision for my wedding! The glass skin look was breathtaking and lasted all day. I felt like a queen.",
  },
  {
    name: "Anitha Selvam",
    role: "Bride, Theni",
    rating: 5,
    text: "So gentle, so professional. The HD makeup looked flawless in every single photo. Worth every rupee.",
  },
  {
    name: "Divya Krishnan",
    role: "Reception, Madurai",
    rating: 5,
    text: "Travelled to my venue without a fuss. The reception look was stunning — modern but rooted in tradition.",
  },
  {
    name: "Meera Raj",
    role: "Engagement, Coimbatore",
    rating: 5,
    text: "She listened to exactly what I wanted and elevated it. The airbrush finish was unreal!",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const r = reviews[idx];
  const next = () => setIdx((idx + 1) % reviews.length);
  const prev = () => setIdx((idx - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="font-script text-3xl text-rose-gold mb-2">Kind Words</p>
        <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-12">
          What Our <span className="text-gradient-gold italic">Brides Say</span>
        </h2>

        <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-soft border border-border shadow-card-soft">
          <Quote className="absolute -top-6 left-1/2 -translate-x-1/2 text-gold bg-background p-2 rounded-full" size={48} />
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} className="text-gold fill-gold" size={18} />
            ))}
          </div>
          <p className="font-display text-xl md:text-2xl text-charcoal leading-relaxed italic mb-6">
            "{r.text}"
          </p>
          <p className="font-medium text-charcoal">{r.name}</p>
          <p className="text-sm text-muted-foreground">{r.role}</p>

          <button
            onClick={prev}
            className="absolute left-2 md:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border hover:bg-gold hover:text-primary-foreground transition-all flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 md:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border hover:bg-gold hover:text-primary-foreground transition-all flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-8 bg-gradient-gold" : "w-2 bg-border"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
