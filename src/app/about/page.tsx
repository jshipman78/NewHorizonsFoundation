import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About NHF | Mission, Ethics & Values",
  description:
    "Learn about New Horizons Foundation's mission to expand ethical mental health services, support community resilience, and develop future leaders through compassion, stewardship, and service.",
};

const ethicalPrinciples = [
  {
    title: "Compassion in Action",
    description:
      "Meeting the needs of individuals and communities with empathy, presence, and practical support.",
  },
  {
    title: "Faithful Stewardship",
    description:
      "Responsible management of resources, relationships, and the trust placed in us by donors, partners, and those we serve.",
  },
  {
    title: "Integrity in Leadership",
    description:
      "Leading with honesty, transparency, and ethical decision-making at every level of the organization.",
  },
  {
    title: "Responsibility to Others",
    description:
      "Prioritizing the well-being of those we serve and the communities we partner with above organizational self-interest.",
  },
  {
    title: "Hope for Restoration and Growth",
    description:
      "Believing in the capacity for healing, change, and positive transformation for individuals, families, and communities.",
  },
];

const coreValues = [
  {
    value: "Compassion",
    description: "Empathetic engagement with those we serve",
  },
  {
    value: "Stewardship",
    description: "Responsible management of resources and trust",
  },
  {
    value: "Service",
    description: "Commitment to community well-being",
  },
  {
    value: "Accountability",
    description: "Transparency and measurable outcomes",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Mission, Ethics & Values
              </h1>
              <p className="text-xl text-white/90">
                New Horizons Foundation operates from an aspirational ethical
                framework that guides all programs, partnerships, and governance
                decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <Section background="white">
          <SectionHeader>
            <p className="text-foundation-blue font-semibold uppercase tracking-wide mb-2">
              Our Mission
            </p>
            <SectionTitle as="h2">Why We Exist</SectionTitle>
          </SectionHeader>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl text-text-dark font-medium text-center leading-relaxed border-l-4 border-hope-gold pl-6 md:pl-8 py-4">
              To expand access to ethical mental health services, support those
              who serve our communities, foster cultural and relational
              resilience, and develop future leaders through education,
              collaboration, and service.
            </blockquote>
          </div>
        </Section>

        {/* Aspirational Ethics Section */}
        <Section background="light">
          <SectionHeader>
            <p className="text-foundation-blue font-semibold uppercase tracking-wide mb-2">
              Aspirational Ethics
            </p>
            <SectionTitle as="h2">Our Guiding Principles</SectionTitle>
            <SectionDescription>
              These five principles form the ethical foundation that guides
              every decision we make and every program we deliver.
            </SectionDescription>
          </SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ethicalPrinciples.map((principle, index) => (
              <Card key={principle.title} hover={false} className="relative">
                <div className="absolute -top-4 -left-2 w-10 h-10 bg-hope-gold rounded-full flex items-center justify-center text-text-dark font-bold">
                  {index + 1}
                </div>
                <div className="pt-4">
                  <CardTitle className="mb-3">{principle.title}</CardTitle>
                  <CardDescription className="text-base">
                    {principle.description}
                  </CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Core Values Section */}
        <Section background="white">
          <SectionHeader>
            <p className="text-foundation-blue font-semibold uppercase tracking-wide mb-2">
              Core Values
            </p>
            <SectionTitle as="h2">What We Stand For</SectionTitle>
          </SectionHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((item) => (
              <div
                key={item.value}
                className="text-center p-6 rounded-xl bg-bg-light"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-horizons-green/10 flex items-center justify-center">
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
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {item.value}
                </h3>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Join Us in Our Mission
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Whether you&apos;re a clinician, educator, community leader, or
              someone passionate about mental health, there&apos;s a place for
              you at New Horizons Foundation.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/leadership" variant="accent" size="lg">
              Meet Our Leadership
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-horizons-green"
            >
              Get in Touch
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
