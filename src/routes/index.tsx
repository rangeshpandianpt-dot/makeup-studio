import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const title = "Mirror Magic Makeup Studio — Bridal Makeup Artist in Tamil Nadu";
const description =
  "Lakme-certified bridal makeup artist in Theni & Chennai. HD, Airbrush, Glass Skin makeup, hair styling & saree draping across Tamil Nadu.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Mirror Magic Makeup Studio",
          description,
          areaServed: "Tamil Nadu",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2nd Floor, Srinivasa Complex, Periyakulam Main Rd, opp. Convent School, NRT Nagar, Unjampatti",
            addressLocality: "Theni",
            addressRegion: "Tamil Nadu",
            postalCode: "625531",
            addressCountry: "IN"
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Stats />
        <Testimonials />
        <InstagramFeed />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
