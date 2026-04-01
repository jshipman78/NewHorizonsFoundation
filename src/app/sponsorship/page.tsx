import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { TrustFooterStrip } from "@/components/ui/TrustFooterStrip";
import { ORG } from "@/lib/nhf-constants";

export const metadata: Metadata = {
  title: "Sponsorship & Giving | New Horizons Foundation",
  description:
    "Invest in mental health through partnership tiers, corporate sponsorships, or individual contributions. All gifts to New Horizons Foundation are tax-deductible. EIN: 41-3658405.",
};

const impactAreas = [
  {
    title: "Youth Prevention Programs",
    description:
      "Fund evidence-informed mental health education for children and adolescents before crisis develops.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: "Family & Community Education",
    description:
      "Support workshops and resources that equip parents, caregivers, and community members with mental health literacy.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: "School-Based Initiatives",
    description:
      "Bring structured mental health programming into schools through partnerships with districts and educators.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
  },
  {
    title: "Professional Training & Research",
    description:
      "Advance the field through training programs for clinicians, educators, and community leaders.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
];

const partnershipTiers = [
  {
    name: "Community Partner",
    amount: "$5,000",
    description: "Foundation-level support that advances prevention programs in local communities.",
    features: [
      "Recognition as a Community Partner",
      "Quarterly impact updates and reporting",
      "Invitation to annual community gathering",
      "Alignment with a specific program area",
    ],
    highlighted: false,
  },
  {
    name: "Impact Partner",
    amount: "$10,000",
    description: "Strategic partnership that directly funds program expansion and community outreach.",
    features: [
      "Recognition as an Impact Partner",
      "Priority event access and invitations",
      "Bi-monthly impact reports with measurable outcomes",
      "Direct access to NHF leadership",
      "Alignment with a specific program or initiative",
      "Co-branded recognition opportunities",
    ],
    highlighted: true,
  },
  {
    name: "Premier Community Partner",
    amount: "$25,000+",
    description: "Visionary commitment that shapes the future of community-based mental health.",
    features: [
      "Premier recognition across NHF platforms",
      "Monthly executive briefings with leadership",
      "Named program or initiative sponsorship",
      "VIP access to all NHF events",
      "Custom impact reporting and outcomes tracking",
      "Strategic advisory input on program direction",
      "Featured in NHF annual report",
    ],
    highlighted: true,
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title="Invest in Mental Health. Strengthen Communities."
          description="Your partnership with New Horizons Foundation fuels prevention-focused programs that reach youth, families, and communities before crisis develops. Every contribution is a strategic investment in lasting change."
          variant="centered"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button href="/invest" variant="accent" size="lg">
              Become a Community Partner
            </Button>
            <Button href="/invest" variant="outline-light" size="lg">
              Make a Contribution
            </Button>
          </div>
        </PageHero>

        {/* More Than a Donation */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>More Than a Donation — A Strategic Investment</SectionTitle>
            <SectionDescription>
              When you partner with {ORG.displayName}, you are not simply making a
              charitable contribution. You are investing in a proven model of prevention,
              education, and community resilience. Your support funds programs designed by
              licensed clinicians and educators — reaching the people and communities that
              need it most, before crisis develops.
            </SectionDescription>
          </SectionHeader>
        </Section>

        {/* Impact Areas */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Where Your Support Creates Impact</SectionTitle>
            <SectionDescription>
              Every dollar invested through {ORG.displayName} supports one or more of
              these critical focus areas.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area) => (
              <Card key={area.title} hover className="text-center flex flex-col">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-horizons-green/10 flex items-center justify-center text-horizons-green">
                  {area.icon}
                </div>
                <CardTitle className="mb-2 text-lg">{area.title}</CardTitle>
                <CardDescription className="flex-1">{area.description}</CardDescription>
              </Card>
            ))}
          </div>
        </Section>

        {/* Partnership Tiers */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Partnership Levels</SectionTitle>
            <SectionDescription>
              Choose a partnership level that aligns with your vision. All levels can be
              directed toward a specific program or community initiative.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {partnershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-xl p-8 transition-all ${
                  tier.highlighted
                    ? "border-2 border-hope-gold shadow-xl ring-4 ring-hope-gold/10 md:scale-105 z-10"
                    : "border border-border shadow-sm"
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-hope-gold text-text-dark text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    {tier.name === "Impact Partner" ? "Most Popular" : "Visionary"}
                  </div>
                )}
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {tier.name}
                </h3>
                <p className="text-2xl font-bold text-horizons-green mb-2">
                  {tier.amount}
                </p>
                <p className="text-text-muted mb-6">{tier.description}</p>
                <ul className="space-y-3 mb-8">
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
                  className="w-full"
                >
                  {tier.name === "Premier Community Partner"
                    ? "Become a Premier Partner"
                    : `Join as ${tier.name}`}
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-text-muted text-sm mt-8">
            All partnership levels can be aligned with a specific program, initiative, or
            community. Contact us to customize your involvement.
          </p>
        </Section>

        {/* Corporate & Organizational Partnerships */}
        <Section background="light">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">
                Corporate &amp; Organizational Partnerships
              </h2>
              <p className="text-lg text-text-body mb-4">
                Businesses, healthcare systems, school districts, and civic organizations
                can partner with {ORG.displayName} to bring prevention-focused programming
                to their communities.
              </p>
              <p className="text-text-body mb-6">
                Corporate partnerships offer structured visibility, co-branding
                opportunities, and measurable community impact — all while fulfilling your
                organization&apos;s social responsibility goals.
              </p>
              <Button href="/corporate-partners" variant="primary">
                Explore Corporate Partnerships
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-semibold text-text-dark mb-4">
                Why Organizations Partner With Us
              </h3>
              <ul className="space-y-4">
                {[
                  "Prevention-first approach with measurable outcomes",
                  "Alignment with ESG and community health objectives",
                  "Programs designed by licensed clinicians and educators",
                  "Flexible engagement from sponsorship to program delivery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-horizons-green flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="text-text-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Individual Contributions */}
        <Section background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-bg-light rounded-2xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Every Gift Makes a Difference
              </h3>
              <div className="space-y-4">
                {[
                  { amount: "$50", impact: "Provides mental health education materials for one student" },
                  { amount: "$250", impact: "Sponsors a parent education workshop session" },
                  { amount: "$1,000", impact: "Funds a full youth group cohort program" },
                  { amount: "$5,000", impact: "Sponsors a complete community initiative" },
                ].map((item) => (
                  <div key={item.amount} className="flex items-start gap-4">
                    <div className="w-16 h-10 rounded-lg bg-hope-gold/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-hope-gold font-bold text-sm">{item.amount}</span>
                    </div>
                    <p className="text-text-body text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-text-muted text-xs">
                  {ORG.displayName} is a 501(c)(3) nonprofit organization.
                  Contributions are tax-deductible to the extent permitted by law.
                  EIN: {ORG.ein}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">
                Individual Contributions
              </h2>
              <p className="text-lg text-text-body mb-4">
                Individual donors are the backbone of {ORG.displayName}&apos;s work.
                Whether you give once or make a recurring contribution, your generosity
                directly supports programs that reach the people who need them most.
              </p>
              <p className="text-text-body mb-6">
                All contributions are tax-deductible and managed with full transparency.
                You will receive an IRS-compliant receipt and regular updates on the
                impact of your giving.
              </p>
              <Button href="/invest" variant="accent" size="lg">
                Make a Contribution
              </Button>
            </div>
          </div>
        </Section>

        {/* Accountability & Stewardship */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Accountability &amp; Stewardship</SectionTitle>
            <SectionDescription>
              We believe trust is earned through transparency. Every dollar entrusted to
              {" "}{ORG.displayName} is managed with integrity and directed toward
              measurable community impact.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Transparent Reporting",
                description:
                  "Partners receive regular impact reports showing exactly how funds are allocated and the outcomes they produce.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                ),
              },
              {
                title: "Responsible Governance",
                description:
                  "An independent board of directors oversees all organizational decisions, ensuring accountability at every level.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "IRS Compliance",
                description:
                  "As a 501(c)(3) public charity, all contributions are tax-deductible. Donors receive IRS-compliant receipts for every gift.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-horizons-green/10 flex items-center justify-center text-horizons-green">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Partner With Purpose. Invest in Prevention.
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Whether through a strategic partnership or an individual contribution, your
              support strengthens families, empowers youth, and builds healthier
              communities.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/invest" variant="accent" size="lg">
              Become a Community Partner
            </Button>
            <Button href="/invest" variant="outline-light" size="lg">
              Make a Contribution
            </Button>
          </div>
        </Section>

        <TrustFooterStrip />
      </main>
      <Footer />
    </>
  );
}
