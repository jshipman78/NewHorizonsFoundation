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
  title: "Founders Circle | New Horizons Foundation",
  description:
    "Join the New Horizons Foundation Founders Circle. Early supporters helping establish ethical mental health leadership and long-term community impact.",
};

const foundingLevels = [
  {
    name: "Founding Member",
    price: "$5,000",
    description:
      "For individuals, families, and professionals who want to stand early and visibly behind the mission.",
    includes: [
      "Recognition as a Founding Member",
      "Name listed on the Founders Circle Recognition page",
      "Founding Member certificate",
      "Milestone and impact updates",
      "Early alignment with the foundation\u2019s growth",
    ],
    cta: "Become a Founding Member",
    href: "/invest",
  },
  {
    name: "Founding Partner",
    price: "$10,000\u2013$25,000",
    description:
      "For mission-aligned leaders, firms, and organizations seeking stronger visibility and deeper alignment with the foundation\u2019s long-term work.",
    includes: [
      "Everything in Founding Member, plus:",
      "Elevated recognition on the website",
      "Public recognition in selected launch and milestone communications",
      "Priority invitations to events and partnership opportunities",
      "Stronger public alignment with a values-driven mental health initiative",
    ],
    anchor:
      "Most early leadership supporters are aligning at this level to establish stronger visibility and long-term positioning.",
    highlighted: true,
    cta: "Become a Founding Partner",
    href: "/invest",
  },
  {
    name: "Founding Patron",
    price: "$25,000+",
    description:
      "For those who want to make a significant founding investment and help shape the long-term trajectory of New Horizons Foundation.",
    includes: [
      "Everything in Founding Partner, plus:",
      "Prominent recognition across key foundation materials",
      "Priority leadership access and stewardship",
      "Strategic alignment opportunities where appropriate",
      "Potential advisory or leadership-level visibility based on fit",
      "Customized recognition based on contribution and scope of support",
    ],
    note: "Founding Patron commitments are individually structured based on alignment, vision, and long-term impact.",
    cta: "Inquire About Founding Patron Recognition",
    href: "/contact",
  },
];

const whyNow = [
  "To help build\u2014not just support\u2014a new model of mental health",
  "To align with a values-driven, ethics-first system",
  "To be publicly recognized as early leaders",
  "To attach their name to something designed to scale",
];

export default function FoundersCirclePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Founders Circle
              </h1>
              <p className="text-xl text-white/90">
                A community of early supporters helping establish New Horizons
                Foundation with ethical leadership, long-term vision, and
                meaningful public impact.
              </p>
            </div>
          </div>
        </section>

        {/* Why the Founders Circle Matters */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Why the Founders Circle Matters
            </h2>
            <p className="text-lg text-text-body leading-relaxed">
              New Horizons Foundation was created to expand mental health access,
              strengthen communities, and develop future leaders through
              education, collaboration, and service. The Founders Circle brings
              together the individuals, families, firms, and organizations
              choosing to stand behind that mission at an early and meaningful
              stage. Founding support is not simply a transaction. It is a
              statement of belief in a more ethical, prevention-focused future
              for mental health.
            </p>
          </div>
        </Section>

        {/* Founding Levels */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Founding Levels</SectionTitle>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {foundingLevels.map((level) => (
              <div
                key={level.name}
                id={level.name === "Founding Patron" ? "patron-inquiry" : undefined}
                className={`relative bg-white rounded-xl p-8 transition-all ${
                  level.highlighted
                    ? "border-2 border-hope-gold shadow-xl ring-4 ring-hope-gold/10 md:scale-105 z-10"
                    : "border border-border shadow-sm"
                }`}
              >
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {level.name}
                </h3>
                <p className="text-2xl font-bold text-horizons-green mb-2">
                  {level.price}
                </p>
                <p className="text-text-muted mb-6">{level.description}</p>
                <ul className="space-y-3 mb-6">
                  {level.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
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
                      <span className="text-text-body text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                {level.anchor && (
                  <p className="text-sm text-foundation-blue font-medium mb-6 italic">
                    {level.anchor}
                  </p>
                )}
                {level.note && (
                  <p className="text-sm text-text-muted mb-6 italic">
                    {level.note}
                  </p>
                )}
                <Button
                  href={level.href}
                  variant={level.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {level.cta}
                </Button>
              </div>
            ))}
          </div>
        </Section>

        {/* Why Early Supporters Are Stepping In Now */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-8 text-center">
              Why Early Supporters Are Stepping In Now
            </h2>
            <ul className="space-y-4">
              {whyNow.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-horizons-green flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  <span className="text-lg text-text-body">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Closing CTA */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Build What Matters Early
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Some people support an organization once it is established. Others
              help establish it. If you believe mental health should be more
              proactive, more ethical, and more deeply connected to community
              well-being, we invite you to join the Founders Circle.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/invest" variant="accent" size="lg">
              Join the Founders Circle
            </Button>
            <Button
              href="/founders-circle-recognition"
              variant="outline-light"
              size="lg"
            >
              View Founders Circle Recognition
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
