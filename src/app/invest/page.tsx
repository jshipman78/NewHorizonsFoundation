import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { DonationPortal } from "@/components/forms/DonationPortal";

export const metadata: Metadata = {
  title: "Invest in Prevention | Donate to New Horizons Foundation",
  description:
    "Make a tax-deductible contribution to New Horizons Foundation. One-time or recurring donations, corporate sponsorship, and ACH options available. 501(c)(3) receipts provided automatically.",
};

export default function InvestPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                Secure Giving Portal
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Invest in Prevention.
                <br />
                Protect the Next Generation.
              </h1>
              <p className="text-xl text-white/90">
                Your tax-deductible contribution directly funds early-intervention
                mental health programs for families, youth, and communities across
                North Texas.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Portal */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <DonationPortal />
          </div>
        </Section>

        {/* Alternative Giving Methods */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Other Ways to Give</SectionTitle>
            <SectionDescription>
              We accept contributions through multiple channels to accommodate
              corporate portals, institutional processes, and personal
              preferences.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Check */}
            <div className="bg-bg-light rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark mb-2">By Check</h3>
              <p className="text-text-muted text-sm mb-3">
                Make checks payable to:
              </p>
              <p className="text-text-body text-sm font-medium">
                New Horizons Foundation
              </p>
              <p className="text-text-muted text-sm mt-2">
                4817 Medical Center Dr, Suite 3A
                <br />
                McKinney, TX 75069
              </p>
              <p className="text-text-muted text-xs mt-3 italic">
                Memo: 2026 Early-Intervention Initiative
              </p>
            </div>

            {/* ACH / Wire */}
            <div className="bg-bg-light rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark mb-2">
                ACH / Wire Transfer
              </h3>
              <p className="text-text-muted text-sm mb-3">
                For institutional and corporate transfers:
              </p>
              <div className="space-y-1 text-sm">
                <p className="text-text-body">
                  <span className="text-text-muted">Bank:</span> JP Morgan Chase
                </p>
                <p className="text-text-body">
                  <span className="text-text-muted">Routing:</span> 021000021
                </p>
                <p className="text-text-body">
                  <span className="text-text-muted">Account:</span> 2907530887
                </p>
                <p className="text-text-body">
                  <span className="text-text-muted">Type:</span> Business Checking
                </p>
              </div>
            </div>

            {/* Download Instructions */}
            <div className="bg-bg-light rounded-xl p-6 border border-border">
              <div className="w-12 h-12 rounded-lg bg-hope-gold/10 text-hope-gold flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-dark mb-2">
                Full Instructions
              </h3>
              <p className="text-text-muted text-sm mb-4">
                Download our complete donation instructions page with all giving
                methods and tax information.
              </p>
              <a
                href="/documents/NHF-Donation-Instructions.pdf"
                download
                className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </Section>

        {/* Tax Receipt Info */}
        <Section background="light">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-2">
                    Tax-Deductible Contributions
                  </h3>
                  <p className="text-text-body mb-4">
                    New Horizons Mental Health Foundation Inc. is a federally
                    recognized 501(c)(3) public charity. All contributions are
                    tax-deductible to the extent permitted by law.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-text-muted">Legal Name</p>
                      <p className="font-medium text-text-dark">
                        New Horizons Mental Health Foundation Inc.
                      </p>
                    </div>
                    <div>
                      <p className="text-text-muted">EIN</p>
                      <p className="font-medium text-text-dark">41-3658405</p>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm mt-4">
                    Tax receipts are provided for all online donations. For check
                    and ACH contributions, receipts are sent within 5 business
                    days of processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Every Dollar Protects a Family
            </SectionTitle>
            <SectionDescription className="text-white/90">
              100% of program funds go directly to community-based prevention
              workshops, mental health literacy, and family resilience programs.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/corporate-partners" variant="accent" size="lg">
              Corporate Partnerships
            </Button>
            <Button href="/institutional-funding" variant="outline-light" size="lg">
              Institutional Funding
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
