import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { FundingInquiryForm } from "@/components/forms/FundingInquiryForm";

export const metadata: Metadata = {
  title: "Institutional Funding | Grant & Institutional Partnerships",
  description:
    "Partner with New Horizons Foundation through grants, institutional funding, and strategic partnerships. IRS 501(c)(3) compliant, measurable outcomes, and prevention-focused programming.",
};

const outcomes = [
  {
    metric: "5,000+",
    label: "Families Reached",
    detail: "Year 1 projection across North Texas communities",
  },
  {
    metric: "10-15",
    label: "Workshops Delivered",
    detail: "Structured prevention and education programs",
  },
  {
    metric: "100%",
    label: "Direct Program Allocation",
    detail: "No lobbying, no political activity",
  },
  {
    metric: "Quarterly",
    label: "Impact Reporting",
    detail: "Measurable outcomes and data-driven summaries",
  },
];

const complianceDocuments = [
  {
    name: "IRS 501(c)(3) Determination Letter",
    description: "Federal tax-exempt status confirmation under Section 170(b)(1)(A)(vi)",
    href: "/documents/NHF-IRS-501c3-Determination-Letter.pdf",
    type: "PDF",
  },
  {
    name: "W-9 Form",
    description: "Signed Request for Taxpayer Identification Number",
    href: "/documents/NHF-W9.pdf",
    type: "PDF",
  },
  {
    name: "EIN Confirmation",
    description: "IRS Employer Identification Number verification (EIN: 41-3658405)",
    href: "/documents/NHF-EIN-Confirmation.pdf",
    type: "PDF",
  },
  {
    name: "Board of Directors & Key Staff",
    description: "Current roster of Foundation leadership and governance",
    href: "/documents/NHF-Board-Roster.docx",
    type: "DOCX",
  },
  {
    name: "2026 Program Budget Summary",
    description: "One-page budget overview for the Youth & Family Early-Intervention Initiative",
    href: "/documents/NHF-2026-Program-Budget.pdf",
    type: "PDF",
  },
  {
    name: "Donation Instructions",
    description: "ACH, wire transfer, check, and online donation details",
    href: "/documents/NHF-Donation-Instructions.pdf",
    type: "PDF",
  },
];

export default function InstitutionalFundingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                Grants &amp; Institutional Partnerships
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Partnering With Institutions to Prevent Crisis Before It Begins
              </h1>
              <p className="text-xl text-white/90 mb-8">
                New Horizons Foundation partners with grant-making institutions,
                hospital systems, and corporate foundations to deliver
                measurable, prevention-focused mental health outcomes in
                underserved communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#funding-inquiry" variant="accent" size="lg">
                  Submit Funding Inquiry
                </Button>
                <Button href="#compliance-documents" variant="outline-light" size="lg">
                  View Compliance Documents
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Alignment */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">
              Mission Alignment
            </h2>
            <div className="prose-lg text-text-body space-y-4 text-center max-w-3xl mx-auto">
              <p>
                New Horizons Mental Health Foundation Inc. is a federally recognized
                501(c)(3) public charity dedicated to advancing mental health
                access, youth leadership development, and community-based education
                initiatives.
              </p>
              <p>
                Our 2026 Youth &amp; Family Early-Intervention Initiative targets
                the gap between crisis and prevention — delivering structured,
                evidence-informed programming that reduces emergency utilization and
                strengthens family stability.
              </p>
            </div>
          </div>
        </Section>

        {/* Target Population */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Target Population</SectionTitle>
            <SectionDescription>
              Our programs serve vulnerable communities across the
              Dallas&ndash;Fort Worth metroplex with a focus on prevention and
              early intervention.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "At-Risk Youth",
                description: "Young people facing school disengagement, behavioral challenges, and system involvement risk",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
              },
              {
                title: "Families in Need",
                description: "Households navigating mental health challenges, economic stress, and service system barriers",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
              },
              {
                title: "Veterans & First Responders",
                description: "Service members and their families facing transition, trauma, and reintegration challenges",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Underserved Communities",
                description: "Populations with limited access to mental health literacy, referral networks, and prevention resources",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
            ].map((population) => (
              <div
                key={population.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="w-14 h-14 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center mb-4">
                  {population.icon}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {population.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {population.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Measurable Outcomes */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Measurable Outcomes</SectionTitle>
            <SectionDescription>
              Our programs are designed with accountability and data-driven
              impact reporting at every stage.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome) => (
              <div
                key={outcome.label}
                className="bg-bg-light rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-foundation-blue mb-2">
                  {outcome.metric}
                </div>
                <h3 className="font-semibold text-text-dark mb-1">
                  {outcome.label}
                </h3>
                <p className="text-text-muted text-sm">{outcome.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* IRS & Compliance Documents */}
        <Section background="light" id="compliance-documents">
          <SectionHeader>
            <SectionTitle>IRS &amp; Compliance Documents</SectionTitle>
            <SectionDescription>
              All documentation required for institutional due diligence, grant
              applications, and corporate giving portals.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto space-y-4">
            {complianceDocuments.map((doc) => (
              <a
                key={doc.name}
                href={doc.href}
                download
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-border hover:border-foundation-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center flex-shrink-0 group-hover:bg-foundation-blue group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text-dark group-hover:text-foundation-blue transition-colors">
                    {doc.name}
                  </p>
                  <p className="text-text-muted text-sm">{doc.description}</p>
                </div>
                <span className="text-xs font-medium text-text-muted bg-bg-light px-2 py-1 rounded flex-shrink-0">
                  {doc.type}
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* Letter of Support */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-bg-light rounded-2xl p-8 md:p-12 border border-border">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-text-dark mb-4">
                  Letter of Support
                </h2>
                <p className="text-text-body mb-4 max-w-2xl mx-auto">
                  If your organization requires a letter of support, program
                  narrative, or customized documentation for grant applications
                  or internal funding proposals, our team will prepare materials
                  aligned with your requirements.
                </p>
                <p className="text-text-muted text-sm mb-6">
                  Contact us at{" "}
                  <a
                    href="mailto:funding@thenewhorizonsfoundation.org"
                    className="text-foundation-blue hover:underline"
                  >
                    funding@thenewhorizonsfoundation.org
                  </a>{" "}
                  or submit the inquiry form below.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Downloadable Program Overview */}
        <Section background="light">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-text-dark mb-4">
              Downloadable Program Overview
            </h2>
            <p className="text-text-body mb-8 max-w-2xl mx-auto">
              Access our complete program documentation for grant applications,
              board presentations, and internal review.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/documents/NHF-2026-Program-Budget.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-foundation-blue text-foundation-blue px-6 py-3 rounded-lg font-semibold hover:bg-foundation-blue hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Program Budget Summary
              </a>
              <a
                href="/documents/NHF-Sponsorship-Tiers.docx"
                download
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-foundation-blue text-foundation-blue px-6 py-3 rounded-lg font-semibold hover:bg-foundation-blue hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Sponsorship One-Pager
              </a>
            </div>
          </div>
        </Section>

        {/* Funding Inquiry Form */}
        <Section background="white" id="funding-inquiry">
          <div className="max-w-2xl mx-auto">
            <SectionHeader>
              <SectionTitle>Submit Funding Inquiry</SectionTitle>
              <SectionDescription>
                For grant officers, institutional partners, and corporate giving
                managers. Our team will respond within 2 business days.
              </SectionDescription>
            </SectionHeader>
            <FundingInquiryForm />
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Ready to Partner?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Join hospitals, foundations, and institutions investing in
              prevention-based mental health outcomes across North Texas.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#funding-inquiry" variant="accent" size="lg">
              Submit Inquiry
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Our Team
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
