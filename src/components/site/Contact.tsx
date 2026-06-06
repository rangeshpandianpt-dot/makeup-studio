import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="font-script text-3xl text-rose-gold mb-2">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Visit Our <span className="text-gradient-gold italic">Studio</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: Phone, label: "Call us", value: "+91 99999 99999", href: "tel:+919999999999" },
              { icon: Mail, label: "Email us", value: "hello@mirrormagic.studio", href: "mailto:hello@mirrormagic.studio" },
              { icon: MapPin, label: "Studio", value: "Theni, Tamil Nadu • Chennai", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover-gold-lift"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-gold flex items-center justify-center">
                  <c.icon className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="font-display text-xl text-charcoal mt-1">{c.value}</p>
                </div>
              </a>
            ))}

            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/mirrormagic_makeupstudio_theni/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-charcoal hover:bg-gradient-gold hover:text-primary-foreground hover:border-transparent transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-card-soft min-h-[400px]">
            <iframe
              title="Studio location"
              src="https://www.google.com/maps?q=Theni,Tamil+Nadu&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 400, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
