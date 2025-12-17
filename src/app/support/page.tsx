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
  title: "Support Our Mission | Donate",
  description:
    "Support New Horizons Foundation through individual donations, Founders Circle participation, sponsorships, or strategic partnerships. All contributions are stewarded responsibly.",
};

const givingLevels = [
  {
    name: "Supporting Founder",
    amount: "$2,500 – $4,999",
    description: "Foundation-level support",
    features: [
      "Recognition as Supporting Founder",
      "Quarterly impact updates",
      "Invitation to annual gathering",
    ],
  },
  {
    name: "Founding Partner",
    amount: "$5,000 – $9,999",
    description: "Partnership-level commitment",
    features: [
      "Recognition as Founding Partner",
      "Quarterly impact updates",
      "Priority invitation to events",
      "Direct access to leadership",
    ],
    highlighted: true,
  },
  {
    name: "Charter Founder",
    amount: "$10,000+",
    description: "Charter-level founding support",
    features: [
      "Recognition as Charter Founder",
      "Monthly impact updates",
      "VIP event access",
      "Direct access to Executive Director",
      "Named recognition opportunities",
    ],
  },
];

const waysToGive = [
  {
    title: "Individual Donations",
    description:
      "One-time or recurring gifts of any amount help sustain our programs and expand our reach.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Founders Circle",
    description:
      "Join our founding supporters with a significant commitment that helps establish NHF's foundation.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Sponsorships & Underwriting",
    description:
      "Partner with NHF on specific programs or initiatives with naming and recognition opportunities.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Strategic Partnerships",
    description:
      "Organizational partnerships aligned with our mission for long-term collaborative impact.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Support the Mission
              </h1>
              <p className="text-xl text-white/90">
                Your partnership enables NHF to expand mental health access,
                develop future leaders, and strengthen communities. Every
                contribution is stewarded responsibly and transparently.
              </p>
            </div>
          </div>
        </section>

        {/* Ways to Give */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Ways to Give</SectionTitle>
            <SectionDescription>
              There are many ways to support New Horizons Foundation&apos;s
              mission.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToGive.map((way) => (
              <Card key={way.title} hover className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-horizons-green/10 flex items-center justify-center text-horizons-green">
                  {way.icon}
                </div>
                <CardTitle className="mb-2">{way.title}</CardTitle>
                <CardDescription>{way.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Section>

        {/* Founders Circle */}
        <Section background="light" id="founders-circle">
          <SectionHeader>
            <SectionTitle>Founders Circle</SectionTitle>
            <SectionDescription>
              The Founders Circle is a group of early supporters committed to
              helping establish NHF with integrity and sustainability. Churches,
              families, businesses, and organizations are welcome to participate.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-6">
            {givingLevels.map((level) => (
              <div
                key={level.name}
                className={`bg-white rounded-xl p-8 ${
                  level.highlighted
                    ? "border-2 border-hope-gold shadow-lg ring-2 ring-hope-gold/20"
                    : "border border-border"
                }`}
              >
                {level.highlighted && (
                  <div className="bg-hope-gold text-text-dark text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {level.name}
                </h3>
                <p className="text-2xl font-bold text-horizons-green mb-2">
                  {level.amount}
                </p>
                <p className="text-text-muted mb-6">{level.description}</p>
                <ul className="space-y-3 mb-8">
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
                  className="w-full"
                >
                  Join as {level.name}
                </Button>
              </div>
            ))}
          </div>
        </Section>

        {/* Impact Section */}
        <Section background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">
                Your Impact
              </h2>
              <p className="text-lg text-text-body mb-6">
                Every contribution to New Horizons Foundation directly supports
                our mission to advance mental health access, support those who
                serve our communities, and develop future leaders.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hope-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-hope-gold font-bold text-xl">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">
                      Expand Mental Health Access
                    </p>
                    <p className="text-text-muted text-sm">
                      Supporting community programs and services
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hope-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-hope-gold font-bold text-xl">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">
                      Support Those Who Serve
                    </p>
                    <p className="text-text-muted text-sm">
                      Programs for veterans and first responders
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-hope-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-hope-gold font-bold text-xl">3</span>
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark">
                      Develop Future Leaders
                    </p>
                    <p className="text-text-muted text-sm">
                      Youth leadership and education programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bg-light rounded-2xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Our Commitment to You
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-horizons-green flex-shrink-0"
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
                  <div>
                    <p className="font-medium text-text-dark">Responsible Stewardship</p>
                    <p className="text-text-muted text-sm">
                      Every dollar managed with care and accountability
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-horizons-green flex-shrink-0"
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
                  <div>
                    <p className="font-medium text-text-dark">Transparency</p>
                    <p className="text-text-muted text-sm">
                      Clear reporting on how funds are used
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-horizons-green flex-shrink-0"
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
                  <div>
                    <p className="font-medium text-text-dark">Tax Deductibility</p>
                    <p className="text-text-muted text-sm">
                      Contributions are tax-deductible to the extent permitted
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-text-muted text-xs">
                  New Horizons Foundation is a 501(c)(3) nonprofit organization.
                  Contributions are tax-deductible to the extent permitted by law.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Ready to Make a Difference?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Contact us to discuss how you can support the mission of New
              Horizons Foundation.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us to Give
            </Button>
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-horizons-green"
            >
              Learn About Our Programs
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
