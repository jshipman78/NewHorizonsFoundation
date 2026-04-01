import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ORG } from "@/lib/nhf-constants";

export const metadata: Metadata = {
  title: "Transparency & Financials | New Horizons Foundation",
  description:
    "New Horizons Foundation is committed to full transparency. View our 501(c)(3) status, fund allocation, financial documents, and governance information.",
};

const fundAllocation = [
  {
    label: "Programs & Community Impact",
    percent: 60,
    color: "bg-horizons-green",
    textColor: "text-white",
    description:
      "Youth mental health education, parent programming, and community initiatives",
  },
  {
    label: "Operations & Infrastructure",
    percent: 25,
    color: "bg-foundation-blue",
    textColor: "text-white",
    description:
      "Program delivery, administrative support, compliance, and technology",
  },
  {
    label: "Growth & Development",
    percent: 15,
    color: "bg-hope-gold",
    textColor: "text-text-dark",
    description:
      "Expansion of services, partnerships, and long-term sustainability efforts",
  },
];

const financialDocs = [
  {
    title: "IRS Determination Letter",
    description: "Official IRS recognition of tax-exempt status",
    href: "/documents/NHF-IRS-501c3-Determination-Letter.pdf",
    available: true,
  },
  {
    title: "W-9 Form",
    description: "Taxpayer identification for institutional partners",
    href: "/documents/NHF-W9.pdf",
    available: true,
  },
  {
    title: "Organizational Overview",
    description: "Mission, programs, and organizational structure",
    href: "/documents/NHF-Organizational-Overview.pdf",
    available: true,
  },
  {
    title: "Grant Compliance Packet",
    description: "Documentation for grant and institutional funding compliance",
    href: "/documents/NHF-Grant-Compliance-Packet.pdf",
    available: true,
  },
];

export default function TransparencyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <PageHero
          title="Accountability. Integrity. Impact."
          description="At the New Horizons Foundation, we are committed to the highest standards of financial transparency, ethical stewardship, and responsible growth. We believe every dollar entrusted to us should create measurable impact—advancing mental health education, early intervention, and prevention in the communities we serve."
          variant="centered"
        />

        {/* Commitment to Transparency */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Our Commitment to Transparency</SectionTitle>
            <SectionDescription>
              As stewards of charitable contributions, we hold ourselves to the
              highest standards of accountability and openness.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-text-body mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Responsible allocation of all funds
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Ethical decision-making
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Clear reporting and documentation
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Long-term sustainability without compromising mission
              </li>
            </ul>
            <p className="text-text-muted">
              Our leadership team includes licensed clinicians, educators, and
              experienced professionals dedicated to both community impact and
              organizational excellence.
            </p>
          </div>
        </Section>

        {/* 501(c)(3) Status */}
        <Section background="light">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-text-dark mb-4">
                    501(c)(3) Tax-Exempt Status
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <p className="text-text-muted text-sm">
                        Tax-Exempt Status
                      </p>
                      <p className="font-semibold text-success">Approved</p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">EIN</p>
                      <p className="font-semibold text-text-dark">
                        XX-XXXXXXX{" "}
                        <span className="text-text-muted text-xs font-normal">
                          (full EIN available upon request for security purposes)
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">Legal Name</p>
                      <p className="font-semibold text-text-dark">
                        {ORG.legalName}
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted text-sm">
                        Donation Status
                      </p>
                      <p className="font-semibold text-text-dark">
                        Tax-Deductible
                      </p>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm mb-4">
                    {ORG.irsStatus} | Classification: Section{" "}
                    {ORG.publicCharitySection}
                  </p>
                  <a
                    href="/documents/NHF-IRS-501c3-Determination-Letter.pdf"
                    download
                    className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium text-sm transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                    Download IRS Determination Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Fund Allocation */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>How Your Contributions Are Allocated</SectionTitle>
            <SectionDescription>
              We are committed to directing the majority of funds toward programs
              and community impact, while maintaining the operational strength
              needed to deliver results.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-3xl mx-auto">
            {/* CSS Bar Chart */}
            <div className="mb-8">
              <div className="flex h-14 rounded-xl overflow-hidden shadow-md">
                {fundAllocation.map((segment) => (
                  <div
                    key={segment.label}
                    className={`${segment.color} ${segment.textColor} flex items-center justify-center font-bold text-sm md:text-base`}
                    style={{ width: `${segment.percent}%` }}
                  >
                    {segment.percent}%
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="grid md:grid-cols-3 gap-6">
              {fundAllocation.map((segment) => (
                <div key={segment.label} className="flex items-start gap-3">
                  <div
                    className={`w-4 h-4 rounded-sm ${segment.color} flex-shrink-0 mt-0.5`}
                  />
                  <div>
                    <p className="font-semibold text-text-dark">
                      {segment.percent}% — {segment.label}
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      {segment.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Program Impact Focus */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Program Impact Focus</SectionTitle>
            <SectionDescription>
              Every program funded through New Horizons Foundation is designed
              with measurable outcomes in mind.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-text-body mb-6">
              {[
                "Early mental health education in schools",
                "Parent education and support programs",
                "Community-based prevention initiatives",
                "Collaborative partnerships with healthcare systems and school districts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-muted">
              Our goal is to shift mental health care from reactive crisis
              intervention to proactive prevention and early intervention.
            </p>
          </div>
        </Section>

        {/* Governance & Oversight */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Governance & Oversight</SectionTitle>
            <SectionDescription>
              Strong governance ensures our mission remains centered on
              prevention, education, and community impact.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-text-body mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Active Board of Directors
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Leadership oversight by experienced clinicians and educators
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Alignment with ethical standards across mental health and
                nonprofit sectors
              </li>
            </ul>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium transition-colors"
            >
              View Board of Directors
              <span aria-hidden="true">{"\u2192"}</span>
            </Link>
          </div>
        </Section>

        {/* Financial Documentation */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Financial Documentation</SectionTitle>
            <SectionDescription>
              Download key organizational documents for your records, due
              diligence, or grant compliance needs.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {financialDocs.map((doc) => (
              <Card key={doc.title} hover={false}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text-dark mb-1">
                      {doc.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-3">
                      {doc.description}
                    </p>
                    {doc.available ? (
                      <a
                        href={doc.href}
                        download
                        className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium text-sm transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                          />
                        </svg>
                        Download PDF
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-text-muted text-sm italic">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium transition-colors"
            >
              Access Full Download Center
              <span aria-hidden="true">{"\u2192"}</span>
            </Link>
          </div>
        </Section>

        {/* Ethical Commitment */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Our Ethical Commitment</SectionTitle>
            <SectionDescription>
              Every decision we make is guided by our commitment to ethical
              stewardship and community trust.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3 text-text-body">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Partnerships are mutually beneficial and mission-aligned
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Donor contributions are protected and used responsibly
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-horizons-green flex-shrink-0 mt-2" />
                Growth never compromises integrity or community trust
              </li>
            </ul>
          </div>
        </Section>

        {/* Contact for Inquiries */}
        <Section background="light">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text-dark mb-4">
              Questions About Our Financials or Governance?
            </h2>
            <p className="text-text-muted mb-6">
              We welcome inquiries from donors, partners, and the public. Reach
              out to us directly for any transparency-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href={`mailto:${ORG.email}`}
                className="text-foundation-blue hover:text-foundation-blue-700 font-medium transition-colors"
              >
                {ORG.email}
              </a>
              <span className="hidden sm:inline text-border">|</span>
              <Link
                href="/"
                className="text-foundation-blue hover:text-foundation-blue-700 font-medium transition-colors"
              >
                {ORG.website.replace("https://www.", "")}
              </Link>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Partner With Confidence. Invest With Purpose.
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Your trust fuels our mission. Join the organizations and
              individuals who are investing in prevention-focused mental health
              with full confidence in where their dollars go.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/corporate-sponsorship" variant="accent" size="lg">
              Become a Sponsor {"\u2192"}
            </Button>
            <Button href="/invest" variant="outline-light" size="lg">
              Donate Now {"\u2192"}
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
