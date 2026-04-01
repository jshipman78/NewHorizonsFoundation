import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Founders Circle Recognition | New Horizons Foundation",
  description:
    "Honoring the early supporters helping establish New Horizons Foundation with integrity, vision, and long-term commitment.",
};

const recognitionSections = [
  { title: "Founding Patrons" },
  { title: "Founding Partners" },
  { title: "Founding Members" },
];

export default function FoundersCircleRecognitionPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Founders Circle Recognition
              </h1>
              <p className="text-xl text-white/90">
                Honoring the early supporters helping establish New Horizons
                Foundation with integrity, vision, and long-term commitment.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-text-body leading-relaxed">
              The Founders Circle recognizes the individuals, families,
              organizations, and businesses who chose to support New Horizons
              Foundation at an early and meaningful stage. We are grateful for
              those helping build a stronger future for mental health, community
              resilience, and ethical leadership.
            </p>
          </div>
        </Section>

        {/* Recognition Sections */}
        <Section background="light">
          <div className="max-w-5xl mx-auto space-y-12">
            {recognitionSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-text-dark mb-6 pb-2 border-b border-border">
                  {section.title}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Placeholder — names/logos will be added as commitments are confirmed */}
                  <div className="col-span-full">
                    <p className="text-text-muted italic text-center py-8">
                      Recognition listings will be updated as founding
                      commitments are confirmed.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section background="gradient">
          <div className="text-center">
            <Button href="/founders-circle" variant="accent" size="lg">
              Join the Founders Circle
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
