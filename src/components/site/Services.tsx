import {
  Crown, Heart, Sparkles, PartyPopper, Wind, Aperture,
  GlassWater, Scissors, Shirt, User,
} from "lucide-react";

const services = [
  { icon: Crown, name: "Bridal Makeup", desc: "Complete bridal transformation for your big day" },
  { icon: Heart, name: "Engagement Makeup", desc: "Soft, romantic looks for your engagement" },
  { icon: Sparkles, name: "Reception Makeup", desc: "Glamorous evening reception artistry" },
  { icon: PartyPopper, name: "Party Makeup", desc: "Statement looks for every celebration" },
  { icon: Wind, name: "Airbrush Makeup", desc: "Flawless, long-lasting airbrush finish" },
  { icon: Aperture, name: "HD Makeup", desc: "Camera-ready high-definition perfection" },
  { icon: GlassWater, name: "Glass Skin Makeup", desc: "Luminous, dewy glass-skin finish" },
  { icon: Scissors, name: "Hair Styling", desc: "Elegant updos & traditional styles" },
  { icon: Shirt, name: "Saree Draping", desc: "Pleated to perfection, every fold" },
  { icon: User, name: "Groom Makeup", desc: "Subtle, refined grooming for the groom" },
];

export function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rose-gold mb-2">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Signature <span className="text-gradient-gold italic">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            From bridal artistry to everyday glam — crafted with premium products and a personal touch.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="group p-7 rounded-2xl bg-card border border-border hover-gold-lift cursor-default"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold/10 flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-all">
                <s.icon className="text-gold group-hover:text-primary-foreground transition-colors" size={26} />
              </div>
              <h3 className="font-display text-xl text-charcoal mb-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
