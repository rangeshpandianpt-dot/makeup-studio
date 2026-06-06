import { useState, type FormEvent } from "react";
import { z } from "zod";

const WHATSAPP = "919999999999"; // TODO: replace with real number

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().min(7).max(20),
  eventType: z.string().min(2).max(60),
  eventDate: z.string().min(1).max(20),
  location: z.string().trim().min(2).max(120),
  message: z.string().trim().max(500).optional(),
});

export function Booking() {
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError("Please fill in all required fields correctly.");
      return;
    }
    const d = parsed.data;
    const text = `Hi! I'd like to book an appointment with Mirror Magic Makeup Studio.%0A%0A*Name:* ${d.name}%0A*Phone:* ${d.phone}%0A*Event:* ${d.eventType}%0A*Date:* ${d.eventDate}%0A*Location:* ${d.location}%0A*Message:* ${d.message || "-"}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
  };

  return (
    <section id="booking" className="py-28 bg-gradient-soft">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-12">
          <p className="font-script text-3xl text-rose-gold mb-2">Reserve Your Date</p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            Book an <span className="text-gradient-gold italic">Appointment</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Fill the form and we'll get back to you on WhatsApp instantly.
          </p>
        </div>

        <form onSubmit={onSubmit} className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-card-soft grid sm:grid-cols-2 gap-5">
          <Field name="name" label="Your Name" required />
          <Field name="phone" label="Phone Number" type="tel" required />
          <Field name="eventType" label="Event Type" placeholder="Bridal, Engagement…" required />
          <Field name="eventDate" label="Event Date" type="date" required />
          <div className="sm:col-span-2">
            <Field name="location" label="Location" placeholder="City / Venue" required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-charcoal mb-2">Message</label>
            <textarea
              name="message"
              rows={4}
              maxLength={500}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
              placeholder="Tell us about your day…"
            />
          </div>
          {error && <p className="sm:col-span-2 text-destructive text-sm">{error}</p>}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium hover-gold-lift"
            >
              Send Inquiry via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  name, label, type = "text", placeholder, required,
}: { name: string; label: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm text-charcoal mb-2">{label}{required && <span className="text-gold"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={120}
        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition"
      />
    </div>
  );
}
