import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { JsonLd, youthLeadershipServiceSchema, createBreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Youth Leadership & Education Programs | Character Development",
  description:
    "Developing the next generation of leaders through emotional intelligence, mentorship, service-based learning, and character education programs grounded in ethical values.",
  openGraph: {
    title: "Youth Leadership & Education | New Horizons Foundation",
    description:
      "Building future leaders through emotional intelligence, mentorship, and character education.",
  },
  alternates: {
    canonical: "/programs/youth-leadership",
  },
};

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "https://newhorizonsfoundation.org" },
  { name: "Programs", url: "https://newhorizonsfoundation.org/programs" },
  { name: "Youth Leadership", url: "https://newhorizonsfoundation.org/programs/youth-leadership" },
]);

const focusAreas = [
  {
    title: "Emotional Intelligence Development",
    description:
      "Helping young people understand and manage their emotions while developing empathy and social awareness.",
  },
  {
    title: "Leadership Skills Training",
    description:
      "Building practical leadership skills including communication, decision-making, and team collaboration.",
  },
  {
    title: "Mentorship Programs",
    description:
      "Connecting youth with caring adult mentors who provide guidance, support, and positive role modeling.",
  },
  {
    title: "Service-Based Learning",
    description:
      "Engaging youth in meaningful service projects that develop civic responsibility and community connection.",
  },
  {
    title: "Family Involvement",
    description:
      "Including families as partners in youth development to reinforce learning and strengthen family bonds.",
  },
  {
    title: "Character & Ethics Education",
    description:
      "Teaching values-based decision making and ethical reasoning as foundations for lifelong leadership.",
  },
];

const outcomes = [
  "Increased self-awareness and emotional regulation",
  "Stronger communication and interpersonal skills",
  "Greater sense of purpose and direction",
  "Improved academic engagement and performance",
  "Enhanced resilience and coping abilities",
  "Commitment to ethical leadership and service",
];

export default function YouthLeadershipPage() {
  return (
    <>
      <JsonLd data={[youthLeadershipServiceSchema, breadcrumbs]} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-growth-green to-leaf-green text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4">Our Programs</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Youth Leadership & Education
              </h1>
              <p className="text-xl text-white/90">
                Developing the next generation of leaders grounded in character,
                responsibility, and service.
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
              The Youth Leadership & Education Division exists to develop the
              next generation of leaders grounded in character, responsibility,
              and service. We believe that investing in young people is
              investing in the future of our communities.
            </p>
            <div className="bg-bg-light rounded-xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Scope of Work
              </h3>
              <p className="text-text-body">
                Programs focus on emotional intelligence, leadership development,
                mentorship, service-based learning, and family involvement. Youth
                leadership initiatives are designed to cultivate purpose,
                resilience, and ethical decision-making.
              </p>
            </div>
          </div>
        </Section>

        {/* Focus Areas */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Key Focus Areas</SectionTitle>
            <SectionDescription>
              Our comprehensive approach addresses multiple dimensions of youth
              development.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 rounded-lg bg-growth-green/10 flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-growth-green"
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

        {/* Outcomes Section */}
        <Section background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">
                Program Outcomes
              </h2>
              <p className="text-text-body mb-6">
                Our youth leadership programs are designed to produce lasting
                positive outcomes that prepare young people for success in all
                areas of life.
              </p>
              <ul className="space-y-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-growth-green flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    <span className="text-text-body">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-growth-green/10 to-leaf-green/10 rounded-2xl p-8">
              <blockquote className="text-xl text-text-dark italic">
                &ldquo;The youth of today are the leaders of tomorrow. Our role
                is to help them develop the character, skills, and values they
                need to lead with integrity.&rdquo;
              </blockquote>
              <p className="mt-4 text-text-muted font-medium">
                — NHF Youth Leadership Philosophy
              </p>
            </div>
          </div>
        </Section>

        {/* Leadership */}
        <Section background="light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Leadership Oversight
            </h2>
            <p className="text-lg text-text-body mb-8">
              Our Youth Leadership & Education Division is guided by educators
              and clinicians with extensive experience in youth development,
              leadership training, and mentorship. Our team brings both
              professional expertise and genuine passion for investing in young
              people.
            </p>
            <Button href="/leadership" variant="outline">
              Meet Our Leadership Team
            </Button>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">Get Involved</SectionTitle>
            <SectionDescription className="text-white/90">
              Whether you&apos;re a school, community organization, or family
              interested in our youth programs, we&apos;d love to connect with
              you.
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
