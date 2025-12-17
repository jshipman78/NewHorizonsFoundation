import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { JsonLd, mentalHealthServiceSchema, createBreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Mental Health Services & Education | Community Programs",
  description:
    "NHF's Mental Health Division provides evidence-based community services, clinical education, prevention programs, and professional development with ethical practice and cultural humility.",
  openGraph: {
    title: "Mental Health Services & Education | New Horizons Foundation",
    description:
      "Access ethical, evidence-based mental health care and education for individuals, families, and communities.",
  },
  alternates: {
    canonical: "/programs/mental-health",
  },
};

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "https://newhorizonsfoundation.org" },
  { name: "Programs", url: "https://newhorizonsfoundation.org/programs" },
  { name: "Mental Health", url: "https://newhorizonsfoundation.org/programs/mental-health" },
]);

const focusAreas = [
  {
    title: "Community Mental Health Services",
    description:
      "Expanding access to quality mental health care in underserved communities through partnerships with local providers and organizations.",
  },
  {
    title: "Clinical Education & Training",
    description:
      "Providing continuing education, supervision, and professional development for mental health clinicians and students.",
  },
  {
    title: "Prevention-Based Programming",
    description:
      "Developing and implementing programs that promote mental wellness and prevent mental health crises before they occur.",
  },
  {
    title: "Professional Development",
    description:
      "Supporting the growth and ethical practice of mental health professionals through training, mentorship, and resources.",
  },
  {
    title: "Ethical Practice Standards",
    description:
      "Promoting high standards of ethical conduct in mental health service delivery and clinical practice.",
  },
  {
    title: "Cultural Humility in Care",
    description:
      "Ensuring services are delivered with cultural sensitivity and respect for diverse backgrounds and experiences.",
  },
];

export default function MentalHealthPage() {
  return (
    <>
      <JsonLd data={[mentalHealthServiceSchema, breadcrumbs]} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-growth-green text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4">Our Programs</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Mental Health — Delivery & Services
              </h1>
              <p className="text-xl text-white/90">
                To increase access to ethical, evidence-based mental health care
                and education for individuals, families, and communities.
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
              The Mental Health Division exists to increase access to ethical,
              evidence-based mental health care and education. We believe that
              quality mental health services should be available to everyone,
              regardless of their background, location, or circumstances.
            </p>
            <div className="bg-bg-light rounded-xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Scope of Work
              </h3>
              <p className="text-text-body">
                This division supports community mental health services, clinical
                education, prevention-based programming, and professional
                development. Programs emphasize ethical practice, cultural
                humility, and integration with existing community resources.
              </p>
            </div>
          </div>
        </Section>

        {/* Focus Areas */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Key Focus Areas</SectionTitle>
            <SectionDescription>
              Our mental health programs address these critical areas of need.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-horizons-green/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-horizons-green"
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
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Leadership Oversight
            </h2>
            <p className="text-lg text-text-body mb-8">
              Our Mental Health Division is led by licensed clinicians and
              educators with extensive experience in clinical mental health
              counseling, supervision, and training. This expertise ensures that
              all programs meet the highest standards of professional practice.
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
              We welcome partnerships with mental health professionals,
              healthcare organizations, and community groups committed to
              expanding access to quality mental health care.
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
