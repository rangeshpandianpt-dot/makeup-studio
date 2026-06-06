import { Instagram } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";

const posts = [p1, p2, p3, p4, p7, p8];

export function InstagramFeed() {
  return (
    <section className="py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-rose-gold mb-2">@mirrormagic</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Follow Our <span className="text-gradient-gold italic">Journey</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((src, i) => (
            <a
              key={i}
              href="#"
              className="relative block aspect-square overflow-hidden rounded-xl group"
            >
              <img src={src} alt="Instagram post" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-80 transition-opacity flex items-center justify-center">
                <Instagram className="text-primary-foreground" size={28} />
              </div>
            </a>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gold text-charcoal hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition-all"
          >
            <Instagram size={18} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
