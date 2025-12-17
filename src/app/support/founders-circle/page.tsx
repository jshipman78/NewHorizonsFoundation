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
  title: "Founders Circle | Join Our Founding Supporters",
  description:
    "Join the Founders Circle - a group of early supporters committed to helping establish New Horizons Foundation with integrity and sustainability.",
};

const givingLevels = [
  {
    name: "Supporting Founder",
    amount: "$2,500 – $4,999",
    description: "Foundation-level support for those beginning their giving journey with NHF.",
    features: [
      "Recognition as Supporting Founder on website",
      "Quarterly impact newsletter",
      "Invitation to annual Founders gathering",
      "Certificate of appreciation",
    ],
    color: "horizons-green",
  },
  {
    name: "Founding Partner",
    amount: "$5,000 – $9,999",
    description: "Partnership-level commitment for those ready to make a significant impact.",
    features: [
      "All Supporting Founder benefits",
      "Recognition in annual report",
      "Priority invitation to NHF events",
      "Direct updates from Executive Director",
      "Input on program priorities",
    ],
    highlighted: true,
    color: "hope-gold",
  },
  {
    name: "Charter Founder",
    amount: "$10,000+",
    description: "Charter-level founding support for visionary leaders in our mission.",
    features: [
      "All Founding Partner benefits",
      "Prominent recognition across platforms",
      "Monthly briefings with leadership",
      "Named recognition opportunities",
      "Advisory role in strategic planning",
      "Legacy recognition in perpetuity",
    ],
    color: "foundation-blue",
  },
];

const impactAreas = [
  {
    title: "Infrastructure Development",
    description: "Building the operational foundation for sustainable growth and impact.",
    percentage: "30%",
  },
  {
    title: "Program Launch",
    description: "Launching initial programs across our four divisions.",
    percentage: "40%",
  },
  {
    title: "Leadership Activation",
    description: "Engaging and equipping our leadership team for mission delivery.",
    percentage: "20%",
  },
  {
    title: "Community Outreach",
    description: "Building awareness and partnerships in target communities.",
    percentage: "10%",
  },
];

export default function FoundersCirclePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-white/80 font-medium mb-4">Support Us</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Founders Circle
              </h1>
              <p className="text-xl text-white/90">
                Join a select group of early supporters committed to helping
                establish New Horizons Foundation with integrity, sustainability,
                and lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Be Part of Something Foundational
            </h2>
            <p className="text-lg text-text-body mb-6">
              The Founders Circle represents a unique opportunity to shape the
              future of mental health access in America. As a founding supporter,
              your contribution does more than fund programs—it establishes the
              very foundation upon which NHF will serve communities for
              generations to come.
            </p>
            <p className="text-text-muted">
              Churches, families, businesses, and organizations are all welcome
              to participate in the Founders Circle.
            </p>
          </div>
        </Section>

        {/* Giving Levels */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Founders Circle Giving Levels</SectionTitle>
            <SectionDescription>
              Choose the level that reflects your commitment to our mission.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            {givingLevels.map((level) => (
              <div
                key={level.name}
                className={`bg-white rounded-xl p-8 flex flex-col ${
                  level.highlighted
                    ? "border-2 border-hope-gold shadow-xl ring-4 ring-hope-gold/10 relative"
                    : "border border-border"
                }`}
              >
                {level.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hope-gold text-text-dark text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`w-12 h-12 rounded-lg bg-${level.color}/10 flex items-center justify-center mb-4`}>
                  <svg
                    className={`w-6 h-6 text-${level.color}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {level.name}
                </h3>
                <p className="text-2xl font-bold text-horizons-green mb-2">
                  {level.amount}
                </p>
                <p className="text-text-muted text-sm mb-6">{level.description}</p>
                <ul className="space-y-3 flex-1">
                  {level.features.map((feature) => (
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
                  href="/contact"
                  variant={level.highlighted ? "primary" : "outline"}
                  className="w-full mt-6"
                >
                  Become a {level.name.split(" ")[0]}
                </Button>
              </div>
            ))}
          </div>
        </Section>

        {/* Impact Allocation */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Where Your Gift Goes</SectionTitle>
            <SectionDescription>
              Founders Circle contributions support infrastructure, leadership
              activation, and early program development.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area) => (
              <div key={area.title} className="bg-bg-light rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-horizons-green mb-2">
                  {area.percentage}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {area.title}
                </h3>
                <p className="text-text-muted text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Ready to Join the Founders Circle?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Contact us to discuss your participation and how your support can
              make the greatest impact.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us to Join
            </Button>
            <Button
              href="/support"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-horizons-green"
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
