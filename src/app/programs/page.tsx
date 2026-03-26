import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Our Programs | Mental Health, Veterans, Youth & Community",
  description:
    "Explore NHF's four divisions: Mental Health Services, Veterans & First Responders Support, Cultural Enrichment & Community Healing, and Youth Leadership & Education programs.",
};

const divisions = [
  {
    title: "Mental Health — Delivery & Services",
    description:
      "To increase access to ethical, evidence-based mental health care and education.",
    scope:
      "This division supports community mental health services, clinical education, prevention-based programming, and professional development. Programs emphasize ethical practice, cultural humility, and integration with existing community resources.",
    focusAreas: [
      "Community mental health services",
      "Clinical education and training",
      "Prevention-based programming",
      "Professional development",
      "Ethical practice standards",
      "Cultural humility in care",
    ],
    href: "/programs/mental-health",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Veterans & First Responders",
    description:
      "To support the mental health and well-being of veterans, law enforcement, firefighters, EMTs, and their families.",
    scope:
      "Programs focus on education, prevention, resilience, family support, and collaboration between mental health professionals and public-safety agencies. Special attention is given to occupational stress, trauma exposure, and moral injury.",
    focusAreas: [
      "Education and awareness",
      "Prevention and resilience programs",
      "Family support services",
      "Public-safety agency collaboration",
      "Occupational stress support",
      "Trauma and moral injury resources",
    ],
    href: "/programs/veterans-first-responders",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Cultural Enrichment & Community Healing",
    description:
      "To strengthen mental health outcomes by honoring culture, identity, and shared meaning.",
    scope:
      "This division integrates culturally informed education, community dialogue, and intergenerational programming into mental health outreach. Programs aim to reduce stigma and foster belonging through respectful engagement with diverse communities.",
    focusAreas: [
      "Culturally informed education",
      "Community dialogue programs",
      "Intergenerational programming",
      "Stigma reduction initiatives",
      "Belonging and community connection",
      "Diverse community engagement",
    ],
    href: "/programs/cultural-enrichment",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Youth Leadership & Education",
    description:
      "To develop the next generation of leaders grounded in character, responsibility, and service.",
    scope:
      "Programs focus on emotional intelligence, leadership development, mentorship, service-based learning, and family involvement. Youth leadership initiatives are designed to cultivate purpose, resilience, and ethical decision-making.",
    focusAreas: [
      "Emotional intelligence development",
      "Leadership skills training",
      "Mentorship programs",
      "Service-based learning",
      "Family involvement initiatives",
      "Character and ethics education",
    ],
    href: "/programs/youth-leadership",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Programs
              </h1>
              <p className="text-xl text-white/90">
                NHF operates through four interconnected divisions, each focused
                on a critical aspect of community well-being. Together, they
                form a comprehensive approach to mental health access,
                education, and leadership development.
              </p>
            </div>
          </div>
        </section>

        {/* Divisions Grid */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Our Four Pillars of Service</SectionTitle>
            <SectionDescription>
              Each division addresses a unique dimension of community mental
              health and well-being, while sharing common values of compassion,
              ethical practice, and evidence-based programming.
            </SectionDescription>
          </SectionHeader>

          <div className="space-y-12">
            {divisions.map((division) => (
              <Card
                key={division.title}
                hover={false}
                className="p-8 bg-white border border-border"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="p-4 rounded-xl bg-horizons-green/10 text-horizons-green w-fit mb-4">
                      {division.icon}
                    </div>
                    <CardTitle as="h2" className="text-2xl mb-3">
                      {division.title}
                    </CardTitle>
                    <p className="text-foundation-blue font-medium mb-4">
                      {division.description}
                    </p>
                    <Button href={division.href} variant="primary" size="sm">
                      Learn More
                    </Button>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-semibold text-text-dark mb-3">
                      Scope of Work
                    </h3>
                    <p className="text-text-body mb-6">{division.scope}</p>
                    <h3 className="font-semibold text-text-dark mb-3">
                      Key Focus Areas
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {division.focusAreas.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <svg
                            className="w-5 h-5 text-horizons-green flex-shrink-0"
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
                          <span className="text-text-body">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Cross-cutting Themes */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Cross-Cutting Themes</SectionTitle>
            <SectionDescription>
              These principles guide all NHF programs across every division.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Evidence-Based", desc: "Programs grounded in research and best practices" },
              { title: "Culturally Humble", desc: "Respectful engagement with diverse communities" },
              { title: "Trauma-Informed", desc: "Sensitive to the impact of trauma on individuals" },
              { title: "Collaborative", desc: "Partnering with communities and organizations" },
            ].map((theme) => (
              <div
                key={theme.title}
                className="text-center p-6 bg-white rounded-xl"
              >
                <h3 className="font-semibold text-text-dark mb-2">
                  {theme.title}
                </h3>
                <p className="text-text-muted text-sm">{theme.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">Get Involved</SectionTitle>
            <SectionDescription className="text-white/90">
              Whether you&apos;re seeking services, looking to partner, or want
              to support our work, we&apos;d love to connect with you.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us
            </Button>
            <Button
              href="/support"
              variant="outline-light"
              size="lg"
            >
              Support Our Mission
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
