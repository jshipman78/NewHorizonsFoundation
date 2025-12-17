import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Veterans & First Responder Mental Health Programs",
  description:
    "Supporting the mental health of veterans, law enforcement, firefighters, EMTs and their families through education, prevention, resilience programs and trauma-informed care.",
};

const populations = [
  { name: "Veterans", icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" },
  { name: "Law Enforcement", icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" },
  { name: "Firefighters", icon: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" },
  { name: "EMTs & Paramedics", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { name: "Military Families", icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
];

const focusAreas = [
  {
    title: "Education & Awareness",
    description:
      "Providing training and resources to help first responders and veterans understand mental health challenges and available support.",
  },
  {
    title: "Prevention & Resilience",
    description:
      "Building resilience through proactive programs that strengthen coping skills and promote mental wellness before crises occur.",
  },
  {
    title: "Family Support Services",
    description:
      "Supporting the families of veterans and first responders who often carry the secondary effects of occupational stress.",
  },
  {
    title: "Agency Collaboration",
    description:
      "Partnering with public-safety agencies to integrate mental health support into organizational culture and policies.",
  },
  {
    title: "Occupational Stress Support",
    description:
      "Addressing the unique stressors faced by those in high-risk professions through specialized programs and resources.",
  },
  {
    title: "Trauma & Moral Injury",
    description:
      "Providing resources and support for those dealing with trauma exposure and moral injury from their service.",
  },
];

export default function VeteransFirstRespondersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-foundation-blue to-sky-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-white/80 font-medium mb-4">Our Programs</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Veterans & First Responders
              </h1>
              <p className="text-xl text-white/90">
                Supporting the mental health and well-being of those who serve:
                veterans, law enforcement, firefighters, EMTs, and their
                families.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Who We Serve</SectionTitle>
            <SectionDescription>
              Our programs are designed specifically for those who put their
              lives on the line to serve our communities.
            </SectionDescription>
          </SectionHeader>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {populations.map((pop) => (
              <div
                key={pop.name}
                className="text-center p-6 bg-bg-light rounded-xl"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-foundation-blue/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-foundation-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={pop.icon}
                    />
                  </svg>
                </div>
                <p className="font-medium text-text-dark text-sm">{pop.name}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Purpose Section */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Our Purpose
            </h2>
            <p className="text-lg text-text-body mb-8">
              The Veterans & First Responders Division exists to support the
              mental health and well-being of those who serve our communities.
              We recognize the unique challenges faced by veterans, law
              enforcement officers, firefighters, EMTs, and their families.
            </p>
            <div className="bg-white rounded-xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Scope of Work
              </h3>
              <p className="text-text-body">
                Programs focus on education, prevention, resilience, family
                support, and collaboration between mental health professionals
                and public-safety agencies. Special attention is given to
                occupational stress, trauma exposure, and moral injury.
              </p>
            </div>
          </div>
        </Section>

        {/* Focus Areas */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Key Focus Areas</SectionTitle>
            <SectionDescription>
              Our comprehensive approach addresses the unique mental health
              needs of veterans and first responders.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-bg-light rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-foundation-blue/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-foundation-blue"
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
              Our Veterans & First Responders Division is guided by
              professionals experienced in community engagement, crisis
              response, and public-safety collaboration. This includes advisors
              with direct experience in law enforcement and first responder
              wellness.
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
              We work alongside public-safety agencies, veteran organizations,
              and mental health professionals to provide comprehensive support
              for those who serve.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us
            </Button>
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-horizons-green"
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
