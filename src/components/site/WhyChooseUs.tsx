import { Award, Gem, Palette, Clock, Plane, ThumbsUp } from "lucide-react";

const items = [
  { icon: Award, title: "Lakme Certified Artist", desc: "Professionally trained at Lakme Academy" },
  { icon: Gem, title: "Premium Products", desc: "Only high-end, skin-safe brands" },
  { icon: Palette, title: "Personalized Looks", desc: "Tailored to your features & outfit" },
  { icon: Clock, title: "On-Time Service", desc: "Punctuality you can rely on" },
  { icon: Plane, title: "Travel Availability", desc: "Available across Tamil Nadu" },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "Trusted by hundreds of brides" },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rose-gold mb-2">Why Brides Choose Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            The Mirror Magic <span className="text-gradient-gold italic">Promise</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div
              key={i.title}
              className="p-8 rounded-2xl bg-card border border-border hover-gold-lift flex gap-5 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                <i.icon className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl text-charcoal mb-1">{i.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
