import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { JsonLd, culturalEnrichmentServiceSchema, createBreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Cultural Enrichment & Community Healing Programs",
  description:
    "Strengthening mental health outcomes through culturally responsive programs, community dialogue, stigma reduction, and intergenerational healing initiatives.",
  openGraph: {
    title: "Cultural Enrichment & Community Healing | New Horizons Foundation",
    description:
      "Culturally responsive mental health programs that honor culture, identity, and shared meaning.",
  },
  alternates: {
    canonical: "/programs/cultural-enrichment",
  },
};

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "https://newhorizonsfoundation.org" },
  { name: "Programs", url: "https://newhorizonsfoundation.org/programs" },
  { name: "Cultural Enrichment", url: "https://newhorizonsfoundation.org/programs/cultural-enrichment" },
]);

const focusAreas = [
  {
    title: "Culturally Informed Education",
    description:
      "Developing educational content that respects and incorporates diverse cultural perspectives on mental health and wellness.",
  },
  {
    title: "Community Dialogue Programs",
    description:
      "Creating safe spaces for communities to discuss mental health, share experiences, and build understanding across differences.",
  },
  {
    title: "Intergenerational Programming",
    description:
      "Bridging generations through programs that honor traditional wisdom while addressing contemporary mental health needs.",
  },
  {
    title: "Stigma Reduction Initiatives",
    description:
      "Working to reduce mental health stigma within communities through education, storytelling, and community engagement.",
  },
  {
    title: "Belonging & Connection",
    description:
      "Fostering a sense of belonging and community connection as foundational elements of mental wellness.",
  },
  {
    title: "Diverse Community Engagement",
    description:
      "Partnering with diverse communities to develop culturally appropriate mental health resources and support.",
  },
];

export default function CulturalEnrichmentPage() {
  return (
    <>
      <JsonLd data={[culturalEnrichmentServiceSchema, breadcrumbs]} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hope-gold to-horizons-green text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4">Our Programs</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Cultural Enrichment & Community Healing
              </h1>
              <p className="text-xl text-white/90">
                Strengthening mental health outcomes by honoring culture,
                identity, and shared meaning through community engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Our Purpose
            </h2>
            <p className="text-lg text-text-body mb-8">
              The Cultural Enrichment & Community Healing Division exists to
              strengthen mental health outcomes by honoring culture, identity,
              and shared meaning. We believe that effective mental health
              support must be grounded in cultural understanding and community
              connection.
            </p>
            <div className="bg-bg-light rounded-xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Scope of Work
              </h3>
              <p className="text-text-body">
                This division integrates culturally informed education, community
                dialogue, and intergenerational programming into mental health
                outreach. Programs aim to reduce stigma and foster belonging
                through respectful engagement with diverse communities.
              </p>
            </div>
          </div>
        </Section>

        {/* Approach Section */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Our Approach</SectionTitle>
            <SectionDescription>
              We believe that culture is a powerful resource for healing and
              that community connection is essential to mental wellness.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-hope-gold/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-hope-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark mb-2">
                Cultural Humility
              </h3>
              <p className="text-text-muted text-sm">
                Approaching every community with respect, openness, and a
                commitment to learning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-horizons-green/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-horizons-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark mb-2">
                Community-Centered
              </h3>
              <p className="text-text-muted text-sm">
                Working alongside communities rather than imposing solutions
                from the outside.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-foundation-blue/20 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-foundation-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark mb-2">
                Healing-Focused
              </h3>
              <p className="text-text-muted text-sm">
                Creating pathways to healing that honor both traditional wisdom
                and contemporary practice.
              </p>
            </div>
          </div>
        </Section>

        {/* Focus Areas */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Key Focus Areas</SectionTitle>
            <SectionDescription>
              Our programs address these essential elements of culturally
              responsive mental health support.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-bg-light rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-hope-gold/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-hope-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {area.title}
                </h3>
                <p className="text-text-muted text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Leadership */}
        <Section background="light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Leadership Oversight
            </h2>
            <p className="text-lg text-text-body mb-8">
              Our Cultural Enrichment & Community Healing Division is guided by
              experts in culturally responsive mental health and community-based
              healing approaches. Our leadership brings diverse perspectives and
              deep experience in cross-cultural engagement.
            </p>
            <Button href="/leadership" variant="outline">
              Meet Our Leadership Team
            </Button>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Partner With Us
            </SectionTitle>
            <SectionDescription className="text-white/90">
              We welcome partnerships with community organizations, cultural
              groups, and mental health professionals committed to culturally
              responsive care.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us
            </Button>
            <Button
              href="/programs"
              variant="outline-light"
              size="lg"
            >
              View All Programs
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
