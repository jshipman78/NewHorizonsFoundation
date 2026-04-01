import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { TrustFooterStrip } from "@/components/ui/TrustFooterStrip";
import { ORG } from "@/lib/nhf-constants";

export const metadata: Metadata = {
  title: "Partnerships | New Horizons Foundation",
  description:
    "Partner with New Horizons Foundation to advance mental health education, prevention, and community impact through customized programs, training, and strategic collaboration.",
};

export default function PartnershipsPage() {
  const partnerMailto = `mailto:${ORG.email}?subject=Partnership%20Inquiry%20%E2%80%93%20New%20Horizons%20Foundation`;

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                Partnerships
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Partner With New Horizons Foundation
              </h1>
              <p className="text-xl text-white/90 mb-8">
                We collaborate with schools, healthcare systems, nonprofits, and
                community organizations to build practical, prevention-focused
                mental health solutions with measurable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={partnerMailto} variant="accent" size="lg">
                  Request a Partnership Proposal
                </Button>
                <Button href={partnerMailto} variant="outline-light" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-6">
                Strategic partnerships rooted in education, prevention, and
                long-term community impact
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 - Introduction */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>
              A Partnership Model Built for Real-World Impact
            </SectionTitle>
          </SectionHeader>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-text-body text-lg">
              New Horizons Foundation partners with mission-aligned
              organizations seeking stronger mental health outcomes through
              education, prevention, and scalable programming.
            </p>
            <p className="text-text-body text-lg">
              Our partnership model is designed to help organizations move
              beyond short-term awareness efforts and toward structured,
              sustainable solutions that strengthen individuals, families,
              schools, and communities.
            </p>
            <p className="text-text-body text-lg">
              We work collaboratively to design initiatives that fit the
              realities of your population, goals, budget, and implementation
              capacity.
            </p>
          </div>
        </Section>

        {/* Gold Divider */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-hope-gold rounded-full" />
        </div>

        {/* Section 2 - Who We Serve */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Who We Serve</SectionTitle>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                ),
                title: "Schools and School Districts",
                text: "Programs, workshops, and parent-facing initiatives that strengthen mental health literacy, emotional development, and early intervention.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                ),
                title: "Healthcare Systems and Behavioral Health Organizations",
                text: "Training, consultation, and community-facing initiatives that support prevention, outreach, and education.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
                title: "Nonprofit Organizations",
                text: "Strategic collaboration, co-branded initiatives, and program development aligned with shared mission and community impact goals.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
                title: "Corporate and Workplace Partners",
                text: "Mental health education, wellness programming, and community partnership opportunities that support employees and local communities.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Community and Faith-Based Organizations",
                text: "Culturally responsive education, outreach events, and practical mental health programming for families and communities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Gold Divider */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-hope-gold rounded-full" />
        </div>

        {/* Section 3 - How We Partner */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>How We Partner</SectionTitle>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Program Partnerships",
                description:
                  "We design and deliver custom mental health initiatives tailored to specific populations and settings.",
                examples: [
                  "Youth prevention programming",
                  "Parent education series",
                  "School-based emotional wellness initiatives",
                  "Community mental health literacy events",
                ],
              },
              {
                title: "Training and Education Partnerships",
                description:
                  "We provide expert-led workshops, seminars, and professional development experiences designed for practical application.",
                examples: [
                  "Staff development",
                  "Leadership training",
                  "Mental health awareness and prevention workshops",
                  "Community education events",
                ],
              },
              {
                title: "Strategic and Institutional Partnerships",
                description:
                  "We work with organizations seeking long-term collaboration, systems design, or multi-phase implementation.",
                examples: [
                  "Consultation for program development",
                  "Institutional planning",
                  "Co-branded community impact initiatives",
                  "Scalable partnership models for long-term growth",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-light rounded-xl p-8 border border-border"
              >
                <h3 className="text-xl font-semibold text-text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-text-body mb-4">{item.description}</p>
                <p className="text-sm font-medium text-text-dark mb-2">
                  Examples:
                </p>
                <ul className="space-y-1.5">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-start gap-2 text-text-muted text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-hope-gold flex-shrink-0 mt-0.5"
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
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Gold Divider */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-hope-gold rounded-full" />
        </div>

        {/* Section 4 - What Sets Our Partnerships Apart */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>What Sets Our Partnerships Apart</SectionTitle>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {[
                "Prevention-focused approach that emphasizes early intervention before crisis",
                "Integration of educational, clinical, and community-informed perspectives",
                "Programs designed for practical implementation, not just presentation",
                "Flexible engagement models tailored to organizational realities",
                "Leadership grounded in professional expertise, systems thinking, and measurable outcomes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-hope-gold flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-text-body text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Section 5 - Examples of Partnership Opportunities */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>
              Examples of Partnership Opportunities
            </SectionTitle>
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: "For Schools",
                items: [
                  "Parent education nights",
                  "Emotional skills programming for students",
                  "Educator training on early mental health awareness",
                  "District-aligned prevention initiatives",
                ],
              },
              {
                category: "For Healthcare Systems",
                items: [
                  "Community mental health education events",
                  "Prevention-focused outreach programming",
                  "Collaborative behavioral health awareness initiatives",
                  "Training for community-facing teams",
                ],
              },
              {
                category: "For Nonprofits and Community Organizations",
                items: [
                  "Co-hosted workshops and events",
                  "Culturally responsive community programming",
                  "Strategic initiative design",
                  "Sponsor-supported public education series",
                ],
              },
              {
                category: "For Corporate and Workplace Partners",
                items: [
                  "Mental health wellness workshops",
                  "Employee education events",
                  "Community sponsorship partnerships",
                  "Co-branded prevention campaigns",
                ],
              },
            ].map((group) => (
              <div
                key={group.category}
                className="bg-bg-light rounded-xl p-6 border border-border"
              >
                <h3 className="font-semibold text-text-dark mb-4 text-lg">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-muted text-sm"
                    >
                      <svg
                        className="w-4 h-4 text-horizons-green flex-shrink-0 mt-0.5"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Gold Divider */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-hope-gold rounded-full" />
        </div>

        {/* Section 6 - Engagement Model */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>A Clear and Structured Process</SectionTitle>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "We learn about your organization, audience, goals, and current needs.",
              },
              {
                step: "2",
                title: "Design",
                description:
                  "We develop a customized partnership approach aligned with your priorities and capacity.",
              },
              {
                step: "3",
                title: "Proposal",
                description:
                  "We provide a clear scope of services, timeline, and investment structure.",
              },
              {
                step: "4",
                title: "Delivery",
                description:
                  "We implement programming, training, consultation, or strategic support with professionalism and accountability.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-hope-gold text-text-dark font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text-dark mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7 - Investment Framework */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Investment Framework</SectionTitle>
            <SectionDescription>
              Partnerships are customized based on scope, audience, timeline,
              and level of engagement. Typical partnership structures include
              training, program development, and strategic consultation.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  label: "Workshops and Trainings",
                  range: "$1,500 \u2013 $10,000",
                },
                {
                  label: "Program Development",
                  range: "$2,500 \u2013 $50,000",
                },
                {
                  label: "Consultation and Strategic Planning",
                  range: "$125 \u2013 $275/hour",
                },
                {
                  label: "Institutional Partnerships",
                  range: "Custom scope and proposal",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-bg-light rounded-xl p-6 border border-border text-center"
                >
                  <p className="text-text-muted text-sm font-medium mb-2">
                    {item.label}
                  </p>
                  <p className="text-xl font-bold text-horizons-green">
                    {item.range}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm text-center mt-6">
              Detailed proposals are provided after an initial consultation to
              ensure alignment and clarity.
            </p>
          </div>
        </Section>

        {/* Gold Divider */}
        <div className="flex justify-center">
          <div className="w-24 h-1 bg-hope-gold rounded-full" />
        </div>

        {/* Section 8 - Why Organizations Choose NHF */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>
              Why Organizations Choose New Horizons Foundation
            </SectionTitle>
          </SectionHeader>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-text-body text-lg">
              Organizations partner with New Horizons Foundation because they
              need more than a speaker, more than a one-time event, and more
              than generic messaging. They need a trusted partner that can help
              translate mental health goals into clear, effective,
              mission-aligned action.
            </p>
            <p className="text-text-body text-lg">
              Our work is designed to help partners educate, strengthen, and
              serve their communities through meaningful programming that is
              credible, scalable, and built for real-world impact.
            </p>
          </div>
        </Section>

        {/* Section 9 - Final CTA */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Let&apos;s Build Something Meaningful Together
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Whether your organization is exploring a one-time training, a
              sponsored initiative, or a long-term strategic partnership, New
              Horizons Foundation is prepared to help you build a thoughtful and
              effective path forward.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={partnerMailto} variant="accent" size="lg">
              Request a Partnership Proposal
            </Button>
            <Button href={partnerMailto} variant="outline-light" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </Section>

        {/* Section 10 - Contact Block */}
        <Section background="white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text-dark mb-6">
              Contact Us
            </h2>
            <div className="space-y-2 text-text-body">
              <p className="font-semibold">{ORG.displayName}</p>
              <p>4817 Medical Center Dr #3A, McKinney, TX 75069</p>
              <p>
                <a
                  href={`tel:${ORG.phone.replace(/[^\d+]/g, "")}`}
                  className="text-foundation-blue hover:text-foundation-blue-700 transition-colors"
                >
                  {ORG.phone}
                </a>
              </p>
              <p>
                <a
                  href="https://www.TheNewHorizonsFoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foundation-blue hover:text-foundation-blue-700 transition-colors"
                >
                  www.TheNewHorizonsFoundation.org
                </a>
              </p>
            </div>
          </div>
        </Section>

        <TrustFooterStrip />
      </main>
      <Footer />
    </>
  );
}
