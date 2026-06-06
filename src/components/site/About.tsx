import { Sparkles, Award, Heart } from "lucide-react";
import aboutImg from "@/assets/portfolio-5.jpg";

export function About() {
  return (
    <section id="about" className="py-28 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-script text-3xl text-rose-gold mb-2">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
            Crafting <span className="text-gradient-gold italic">timeless beauty</span> for every bride
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mirror Magic Makeup Studio is dedicated to creating timeless beauty for brides
            and clients across Tamil Nadu. With professional certification from Lakme
            Academy and years of experience, we deliver flawless makeup, elegant
            hairstyling, and unforgettable bridal transformations.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
            {[
              { icon: Award, label: "Lakme Certified" },
              { icon: Sparkles, label: "Premium Products" },
              { icon: Heart, label: "Personalized" },
            ].map((i) => (
              <div key={i.label} className="text-center">
                <i.icon className="mx-auto mb-2 text-gold" size={28} />
                <p className="text-xs uppercase tracking-wider text-charcoal">{i.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe">
            <img
              src={aboutImg}
              alt="Bridal artistry"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card px-6 py-4 rounded-xl shadow-card-soft border border-border">
            <p className="font-display text-3xl text-gradient-gold">5+</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Years of artistry</p>
          </div>
        </div>
      </div>
    </section>
  );
}
