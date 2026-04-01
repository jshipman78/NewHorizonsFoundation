import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { TrustFooterStrip } from "@/components/ui/TrustFooterStrip";
import {
  ORG,
  FOUNDING_100_COUNT,
  FOUNDING_100_TOTAL,
  FOUNDING_100_AMOUNT,
} from "@/lib/nhf-constants";

export const metadata: Metadata = {
  title: "The Founding 100 | New Horizons Foundation",
  description:
    "Join the Founding 100 — an exclusive group of visionary supporters shaping the future of mental health prevention. Limited to 100 founding members at $5,000 each.",
};

export default function Founding100Page() {
  const progressPercent = (FOUNDING_100_COUNT / FOUNDING_100_TOTAL) * 100;
  const spotsRemaining = FOUNDING_100_TOTAL - FOUNDING_100_COUNT;

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                The Founding 100
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Be Among the First to Shape the Future of Mental Health
              </h1>
              <p className="text-xl text-white/90 mb-10">
                A new model of mental health is emerging — one rooted not in
                crisis, but in prevention, education, and early intervention.
                The Founding 100 is a select group of individuals and
                organizations who will help build this future from the ground
                up.
              </p>

              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white/80 text-sm font-medium">
                    Founding Members Secured
                  </span>
                  <span className="text-white font-bold text-lg">
                    {FOUNDING_100_COUNT} / {FOUNDING_100_TOTAL}
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-hope-gold h-4 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-white/70 text-sm mt-2">
                  {spotsRemaining} positions remaining
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Statement */}
        <Section background="gradient">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
              This is more than a donation. This is a foundational commitment to
              change the trajectory of mental health in our communities.
            </p>
          </div>
        </Section>

        {/* What Is the Founding 100? */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>What Is the Founding 100?</SectionTitle>
            <SectionDescription>
              The Founding 100 is a select group of individuals and
              organizations who believe in a prevention-first approach to mental
              health — and who want to be part of building it from the ground up.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-text-body text-lg">
              Spots are intentionally limited to maintain the integrity,
              recognition, and impact of this group.
            </p>
          </div>
        </Section>

        {/* Founding Contribution */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Founding Contribution</SectionTitle>
          </SectionHeader>
          <div className="max-w-2xl mx-auto">
            <Card variant="featured" hover={false} className="text-center p-8 md:p-10">
              <div className="text-5xl md:text-6xl font-bold text-horizons-green mb-2">
                ${FOUNDING_100_AMOUNT.toLocaleString()}
              </div>
              <p className="text-text-muted text-lg mb-4">
                One-time founding contribution
              </p>
              <div className="w-16 h-0.5 bg-hope-gold mx-auto mb-4" />
              <p className="text-text-body">
                Each contribution is fully tax-deductible and directly supports
                the establishment of prevention-focused mental health
                programming.
              </p>
            </Card>
          </div>
        </Section>

        {/* Identity — Who You Become */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>
              As a Founding Member, You Are...
            </SectionTitle>
          </SectionHeader>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4 text-lg text-text-body">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0" />
                A builder of a new mental health model
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-foundation-blue flex-shrink-0" />
                An early investor in prevention and education
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-hope-gold flex-shrink-0" />
                A leader in community impact
              </li>
            </ul>
          </div>
        </Section>

        {/* Recognition & Benefits */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Recognition & Benefits</SectionTitle>
            <SectionDescription>
              Every Founding 100 member receives meaningful, lasting recognition
              for their leadership and investment.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4 text-lg text-text-body">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2.5" />
                Recognition on the NHF website
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-foundation-blue flex-shrink-0 mt-2.5" />
                Invitation to exclusive gatherings and events
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-hope-gold flex-shrink-0 mt-2.5" />
                Early access to initiatives and expansion
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2.5" />
                Permanent recognition in future installations and materials
              </li>
            </ul>
            <p className="text-text-muted text-sm mt-6 text-center italic">
              Recognition may be listed individually or by organization name,
              based on preference.
            </p>
          </div>
        </Section>

        {/* Why This Matters */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Why This Matters</SectionTitle>
            <SectionDescription>
              Mental health challenges are increasing across every community.
              The current system waits until people are already in crisis before
              offering help.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <p className="text-text-body text-lg text-center mb-6">
              New Horizons Foundation is working to change that by:
            </p>
            <ul className="space-y-4 text-lg text-text-body max-w-2xl mx-auto">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2.5" />
                Bringing mental health education into schools
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-foundation-blue flex-shrink-0 mt-2.5" />
                Providing resources to parents and families
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-hope-gold flex-shrink-0 mt-2.5" />
                Bringing awareness and prevention into communities
              </li>
            </ul>
          </div>
        </Section>

        {/* Scarcity / Urgency */}
        <Section background="light">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-hope-gold font-semibold uppercase tracking-wider text-sm mb-4">
              Limited Availability
            </p>
            <SectionTitle>
              Only {FOUNDING_100_TOTAL} Founding Positions Available
            </SectionTitle>
            <p className="text-text-muted text-lg mt-4 mb-6">
              This is not a recurring campaign. Once all {FOUNDING_100_TOTAL}{" "}
              founding positions are filled, this opportunity closes permanently.
              Every founding member will be recognized as part of the original
              group that made this work possible — a distinction that cannot be
              replicated.
            </p>
            <p className="text-text-body font-medium text-lg">
              {spotsRemaining} of {FOUNDING_100_TOTAL} positions remain.
            </p>
          </div>
        </Section>

        {/* CTA Block */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Join the Founding 100
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Your ${FOUNDING_100_AMOUNT.toLocaleString()} founding contribution
              is fully tax-deductible and directly funds the establishment of
              prevention-focused mental health programming for communities
              nationwide.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/invest" variant="accent" size="lg">
              Become a Founding Member
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Schedule a Call
            </Button>
          </div>
          <p className="text-center text-white/70 text-sm mt-6">
            Questions? Contact us at{" "}
            <a
              href={`mailto:${ORG.email}`}
              className="text-white/90 underline hover:text-white"
            >
              {ORG.email}
            </a>
          </p>
        </Section>

        {/* Trust / Credibility Strip */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle as="h3">
              Built on Trust. Backed by Expertise.
            </SectionTitle>
            <SectionDescription>
              New Horizons Foundation is part of a broader ecosystem dedicated
              to mental health:
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-2xl mx-auto mb-8">
            <ul className="space-y-4 text-lg text-text-body">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2.5" />
                <span>
                  <strong>{ORG.nhchName}</strong> — Clinical Services
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-foundation-blue flex-shrink-0 mt-2.5" />
                <span>
                  <strong>{ORG.apiName}</strong> — Education &amp; Training
                </span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="/transparency"
              className="text-foundation-blue font-medium hover:underline"
            >
              View Transparency &amp; Financials &rarr;
            </a>
            <a
              href="/downloads"
              className="text-foundation-blue font-medium hover:underline"
            >
              Download Compliance Documents &rarr;
            </a>
          </div>
        </Section>

        {/* Trust Footer Strip */}
        <TrustFooterStrip />
      </main>
      <Footer />
    </>
  );
}
