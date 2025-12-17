import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";

const divisions = [
  {
    title: "Mental Health — Delivery & Services",
    description:
      "Increasing access to ethical, evidence-based mental health care and education for individuals, families, and communities.",
    href: "/programs/mental-health",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Veterans & First Responders",
    description:
      "Supporting the mental health and well-being of those who serve: veterans, law enforcement, firefighters, EMTs, and their families.",
    href: "/programs/veterans-first-responders",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Cultural Enrichment & Community Healing",
    description:
      "Strengthening mental health outcomes by honoring culture, identity, and shared meaning through community engagement.",
    href: "/programs/cultural-enrichment",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    title: "Youth Leadership & Education",
    description:
      "Developing the next generation of leaders grounded in character, responsibility, and service.",
    href: "/programs/youth-leadership",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
];

const trustIndicators = [
  "National nonprofit organization",
  "Licensed clinical leadership",
  "Evidence-based programming",
  "Community partnerships",
  "Ethical stewardship",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-horizons-green via-growth-green to-foundation-blue text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                New Horizons Foundation
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Advancing Mental Health Access, Education, and Community
                Resilience
              </p>
              <p className="text-lg text-white/80 mb-8 max-w-2xl">
                New Horizons Foundation (NHF) is a national nonprofit
                organization dedicated to advancing mental health access,
                education, cultural enrichment, and leadership development. We
                exist to serve individuals, families, and communities through
                ethical practice, collaborative partnerships, and values-driven
                leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/support" variant="accent" size="lg">
                  Support Our Mission
                </Button>
                <Button
                  href="/programs"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-horizons-green"
                >
                  Explore Our Programs
                </Button>
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        </section>

        {/* Mission Preview Section */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Our Mission</SectionTitle>
            <SectionDescription className="text-xl">
              To expand access to ethical mental health services, support those
              who serve our communities, foster cultural and relational
              resilience, and develop future leaders through education,
              collaboration, and service.
            </SectionDescription>
          </SectionHeader>
          <div className="text-center">
            <Button href="/about" variant="secondary">
              Learn More About Our Values
            </Button>
          </div>
        </Section>

        {/* Four Pillars Section */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Our Four Pillars of Service</SectionTitle>
            <SectionDescription>
              NHF operates through four interconnected divisions, each focused
              on a critical aspect of community well-being.
            </SectionDescription>
          </SectionHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {divisions.map((division) => (
              <Card key={division.title} href={division.href} className="group">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 rounded-lg bg-horizons-green/10 text-horizons-green group-hover:bg-horizons-green group-hover:text-white transition-colors">
                    {division.icon}
                  </div>
                  <div>
                    <CardTitle className="group-hover:text-horizons-green transition-colors">
                      {division.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardDescription className="text-base">
                  {division.description}
                </CardDescription>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button href="/programs" variant="primary">
              Explore All Programs
            </Button>
          </div>
        </Section>

        {/* Trust/Credibility Section */}
        <Section background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                Guided by Values, Driven by Service
              </h2>
              <p className="text-lg text-text-body mb-8">
                Guided by principles of compassion, stewardship, service, and
                accountability, NHF works alongside clinicians, educators,
                community leaders, faith-based partners, and public-service
                professionals to address the growing mental health needs facing
                our nation.
              </p>
              <Button href="/leadership" variant="outline">
                Meet Our Leadership
              </Button>
            </div>
            <div className="bg-bg-light rounded-2xl p-8">
              <h3 className="font-semibold text-lg text-text-dark mb-6">
                Trust Indicators
              </h3>
              <ul className="space-y-4">
                {trustIndicators.map((indicator) => (
                  <li key={indicator} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-horizons-green flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <span className="text-text-body">{indicator}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Partners Preview Section */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Collaborative Partnerships</SectionTitle>
            <SectionDescription>
              We collaborate with mental health professionals, educational
              institutions, faith-based organizations, law enforcement, veteran
              agencies, and community partners united by shared values and
              commitment to community well-being.
            </SectionDescription>
          </SectionHeader>
          <div className="text-center">
            <Button href="/partners" variant="secondary">
              View Our Partners
            </Button>
          </div>
        </Section>

        {/* Support CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Support the Mission
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Your partnership enables NHF to expand mental health access,
              develop future leaders, and strengthen communities. Join our
              Founders Circle or explore sponsorship opportunities.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/support" variant="accent" size="lg">
              Ways to Give
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-horizons-green"
            >
              Contact Us
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
