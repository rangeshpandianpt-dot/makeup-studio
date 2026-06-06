import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">
            Mirror <span className="text-gradient-gold italic">Magic</span>
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-ivory/60 mt-1">Makeup Studio</p>
          <p className="mt-5 text-ivory/70 leading-relaxed max-w-md">
            Bridal makeup artistry by a Lakme-certified professional.
            Based in Theni & Chennai, available across Tamil Nadu.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="https://www.instagram.com/mirrormagic_makeupstudio_theni/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition"><Facebook size={18} /></a>
            <a href="tel:+919999999999" aria-label="Phone" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition"><Phone size={18} /></a>
            <a href="mailto:hello@mirrormagic.studio" aria-label="Email" className="w-10 h-10 rounded-full border border-ivory/20 flex items-center justify-center hover:bg-gradient-gold hover:border-transparent transition"><Mail size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-ivory/70">
            {["About","Services","Portfolio","Reviews","Contact"].map(l => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Services</h4>
          <ul className="space-y-2 text-sm text-ivory/70">
            {["Bridal Makeup","HD Makeup","Airbrush","Glass Skin","Hair Styling","Saree Draping"].map(l => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-ivory/10 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} Mirror Magic Makeup Studio. Crafted with love in Tamil Nadu.
      </div>
    </footer>
  );
}
