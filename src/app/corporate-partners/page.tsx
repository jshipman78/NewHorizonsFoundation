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
  title: "Corporate Partners | Sponsorship Opportunities",
  description:
    "Partner with New Horizons Foundation to strengthen families and communities in North Texas through early-intervention mental health programs. Sponsorship tiers, impact metrics, and recognition benefits.",
};

const impactMetrics = [
  {
    stat: "5,000+",
    label: "Families Reached",
    description: "Projected Year 1 reach across North Texas communities",
  },
  {
    stat: "10-15",
    label: "Structured Workshops",
    description: "Evidence-based prevention and education programs",
  },
  {
    stat: "$10K",
    label: "Year 1 Program Budget",
    description: "100% allocated to direct program execution",
  },
  {
    stat: "0%",
    label: "Lobbying / Political Activity",
    description: "Funds go exclusively to community impact",
  },
];

const sponsorshipTiers = [
  {
    name: "Community Ally",
    amount: "$1,000 – $2,499",
    description:
      "Entry-level partnership supporting foundational outreach and family prevention workshops.",
    features: [
      "Logo on NHF website sponsor page",
      "Social media recognition",
      "Quarterly impact newsletter",
      "Certificate of community partnership",
    ],
  },
  {
    name: "Prevention Champion",
    amount: "$2,500 – $4,999",
    description:
      "Mid-level sponsorship directly funding workshop facilitation and curriculum development.",
    features: [
      "All Community Ally benefits",
      "Logo on printed program materials",
      "Recognition at community events",
      "Annual impact report with your branding",
      "Invitation to sponsor appreciation event",
    ],
    highlighted: true,
  },
  {
    name: "Founding Institutional Partner",
    amount: "$5,000+",
    description:
      "Premier partnership with naming opportunities, strategic input, and maximum visibility.",
    features: [
      "All Prevention Champion benefits",
      "Named recognition on programs",
      "Co-branded impact reporting",
      "Direct access to Executive Director",
      "Input on community initiative priorities",
      "VIP event access and speaking opportunities",
    ],
  },
];

const recognitionBenefits = [
  {
    title: "Brand Visibility",
    description:
      "Logo placement on program materials, website, event signage, and community communications.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "CSR Alignment",
    description:
      "Demonstrate your commitment to workforce stability, family resilience, and community well-being.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Tax Benefits",
    description:
      "IRS-compliant donation receipts for all tax-deductible contributions. EIN: 41-3658405.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Impact Reporting",
    description:
      "Regular updates with measurable outcomes showing how your sponsorship is strengthening communities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Networking",
    description:
      "Connect with other mission-aligned corporations, hospital systems, and community leaders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Event Recognition",
    description:
      "Invitations to exclusive sponsor appreciation events and community program launches.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function CorporatePartnersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                Corporate Sponsorship
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Strengthening Families.
                <br />
                Strengthening Communities.
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Partner with New Horizons Foundation to invest in early-intervention
                mental health programs that prevent crisis, stabilize families, and
                build workforce resilience across North Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#sponsorship-tiers" variant="accent" size="lg">
                  View Sponsorship Tiers
                </Button>
                <Button href="/invest" variant="outline-light" size="lg">
                  Become a Community Partner
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Early Intervention Matters */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">
              Why Early Intervention Matters in North Texas
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <p className="text-lg text-text-body mb-4">
                  Families across North Texas face mounting mental health challenges
                  that, left unaddressed, escalate into emergency room visits, child
                  welfare involvement, and workforce instability.
                </p>
                <p className="text-text-body mb-4">
                  New Horizons Foundation&apos;s 2026 Youth &amp; Family
                  Early-Intervention Initiative delivers structured workshops,
                  prevention education, and community engagement before crisis
                  begins — reducing downstream costs for hospitals, employers, and
                  public systems.
                </p>
                <p className="text-text-body">
                  Your sponsorship isn&apos;t charity — it&apos;s a strategic
                  investment in community stability, workforce productivity, and
                  fiscal prevention.
                </p>
              </div>
              <div className="bg-bg-light rounded-2xl p-8">
                <h3 className="font-semibold text-text-dark mb-4">
                  The Cost of Inaction
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">Emergency interventions cost 10x more</p>
                      <p className="text-text-muted text-sm">than prevention-based programs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">Untreated mental health issues</p>
                      <p className="text-text-muted text-sm">drive absenteeism, turnover, and productivity loss</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-error" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-text-dark">Youth without early support</p>
                      <p className="text-text-muted text-sm">face higher rates of school failure and system involvement</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Impact Metrics */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Sponsorship Impact Metrics</SectionTitle>
            <SectionDescription>
              Your investment delivers measurable outcomes in family resilience,
              mental health literacy, and community prevention.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric) => (
              <div
                key={metric.label}
                className="bg-white rounded-xl p-6 text-center border border-border"
              >
                <div className="text-4xl font-bold text-horizons-green mb-2">
                  {metric.stat}
                </div>
                <h3 className="font-semibold text-text-dark mb-1">
                  {metric.label}
                </h3>
                <p className="text-text-muted text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Sponsorship Tiers */}
        <Section background="white" id="sponsorship-tiers">
          <SectionHeader>
            <SectionTitle>Sponsorship Tiers</SectionTitle>
            <SectionDescription>
              Choose a partnership level that reflects your organization&apos;s
              commitment to community resilience.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white rounded-xl p-8 flex flex-col ${
                  tier.highlighted
                    ? "border-2 border-hope-gold shadow-xl ring-4 ring-hope-gold/10 relative"
                    : "border border-border"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hope-gold text-text-dark text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-horizons-green mb-2">
                  {tier.amount}
                </p>
                <p className="text-text-muted text-sm mb-6">
                  {tier.description}
                </p>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-horizons-green flex-shrink-0 mt-0.5"
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
                      <span className="text-text-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/invest"
                  variant={tier.highlighted ? "primary" : "outline"}
                  className="w-full mt-6"
                >
                  Become a Partner
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="/documents/NHF-Sponsorship-Tiers.docx"
              download
              className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Full Sponsorship Tiers Document
            </a>
          </div>
        </Section>

        {/* Recognition Benefits */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Visibility &amp; Recognition Benefits</SectionTitle>
            <SectionDescription>
              Your partnership delivers lasting visibility and meaningful
              community impact.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitionBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-muted text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Become a Community Partner
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Join corporate sponsors, hospital systems, and community leaders
              investing in prevention-based mental health programs across North
              Texas.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/invest" variant="accent" size="lg">
              Invest in Prevention
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Schedule a Conversation
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
