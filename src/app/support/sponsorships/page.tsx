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
  title: "Sponsorships & Underwriting | Partner With NHF",
  description:
    "NHF offers mission-aligned sponsorship opportunities for organizations and individuals who want to make a significant impact through program underwriting and community initiatives.",
};

const sponsorshipOpportunities = [
  {
    title: "Program Underwriting",
    description:
      "Support specific NHF programs with naming or recognition opportunities. Underwriters receive visibility across program materials and communications.",
    examples: [
      "Mental Health Services programs",
      "Veterans & First Responders initiatives",
      "Youth Leadership development",
      "Cultural Enrichment programs",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Educational Series Sponsorship",
    description:
      "Sponsor training, workshops, or educational content that builds capacity in mental health communities.",
    examples: [
      "Professional development workshops",
      "Community education seminars",
      "Online training modules",
      "Conference presentations",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Community Initiative Sponsorship",
    description:
      "Support community-facing programs and outreach that directly impact individuals and families.",
    examples: [
      "Community health fairs",
      "Awareness campaigns",
      "Resource distribution",
      "Support groups",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Youth Leadership Program Support",
    description:
      "Invest in the next generation of leaders through our youth development initiatives.",
    examples: [
      "Mentorship program funding",
      "Leadership camp scholarships",
      "Educational materials",
      "Service project support",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
];

const sponsorBenefits = [
  {
    title: "Brand Visibility",
    description: "Logo placement on program materials, website, and communications",
  },
  {
    title: "Tax Benefits",
    description: "Official donation receipts for tax-deductible contributions",
  },
  {
    title: "Impact Reports",
    description: "Regular updates on how your sponsorship is making a difference",
  },
  {
    title: "Recognition Events",
    description: "Invitations to exclusive sponsor appreciation events",
  },
  {
    title: "Networking",
    description: "Connect with other mission-aligned organizations and leaders",
  },
  {
    title: "CSR Alignment",
    description: "Demonstrate your commitment to mental health and community well-being",
  },
];

export default function SponsorshipsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-white/80 font-medium mb-4">Support Us</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Sponsorships & Underwriting
              </h1>
              <p className="text-xl text-white/90">
                Partner with NHF through mission-aligned sponsorship opportunities
                that create lasting impact while showcasing your organization&apos;s
                commitment to community well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Strategic Partnerships for Greater Impact
            </h2>
            <p className="text-lg text-text-body">
              NHF offers sponsorship opportunities for organizations and
              individuals who want to make a significant, visible impact. Whether
              you&apos;re a corporation seeking meaningful CSR initiatives, a
              foundation aligned with mental health causes, or an individual
              wanting to leave a lasting legacy, we can create a partnership that
              meets your goals while advancing our shared mission.
            </p>
          </div>
        </Section>

        {/* Sponsorship Opportunities */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Sponsorship Opportunities</SectionTitle>
            <SectionDescription>
              Choose from a variety of sponsorship options that align with your
              values and goals.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsorshipOpportunities.map((opportunity) => (
              <div
                key={opportunity.title}
                className="bg-white rounded-xl p-8 border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center mb-4">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-text-body mb-4">{opportunity.description}</p>
                <h4 className="text-sm font-semibold text-text-dark mb-2">
                  Examples:
                </h4>
                <ul className="space-y-1">
                  {opportunity.examples.map((example) => (
                    <li
                      key={example}
                      className="text-text-muted text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-hope-gold" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Sponsor Benefits */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Sponsor Benefits</SectionTitle>
            <SectionDescription>
              Our sponsors receive recognition and engagement opportunities that
              reflect their investment in our mission.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-bg-light rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-hope-gold/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-hope-gold"
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
                <h3 className="font-semibold text-text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Custom Partnerships */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  Custom Partnership Packages
                </h2>
                <p className="text-text-body mb-6">
                  We understand that every organization has unique goals and
                  capabilities. Our team works with sponsors to create custom
                  partnership packages that align with your specific objectives
                  while maximizing impact for the communities we serve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="primary">
                    Discuss Partnership Options
                  </Button>
                  <Button href="/partners" variant="outline">
                    Learn About Partnerships
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Ready to Become a Sponsor?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Contact us to discuss sponsorship opportunities and how your
              organization can partner with NHF.
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
              Other Ways to Give
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
