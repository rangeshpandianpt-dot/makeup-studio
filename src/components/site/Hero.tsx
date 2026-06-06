import heroBride from "@/assets/hero-bride.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBride}
          alt="Bridal makeup by Mirror Magic"
          className="w-full h-full object-cover object-center"
          width={1600}
          height={1920}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="font-script text-3xl md:text-4xl text-rose-gold mb-4">
            Mirror Magic
          </p>
          <span className="inline-block text-xs uppercase tracking-[0.4em] text-gold mb-6">
            Certified by Lakme Academy
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-charcoal mb-6">
            Transforming every bride into her{" "}
            <span className="text-gradient-gold italic">most beautiful self</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Professional bridal makeup artist serving Theni, Chennai & all of Tamil Nadu.
            Specializing in Glass Skin, HD and Airbrush artistry.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover-gold-lift"
            >
              Book Appointment
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border border-gold text-charcoal hover:bg-gold/10 transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
