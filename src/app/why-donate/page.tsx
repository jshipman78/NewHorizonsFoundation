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

export const metadata: Metadata = {
  title: "Why Donate | New Horizons Foundation",
  description:
    "Your donation brings prevention, education, and early intervention to schools, families, and communities. See how every dollar creates lasting impact through New Horizons Foundation.",
};

const impactTiers = [
  {
    amount: "$50",
    description: "Provides one student's mental health education materials",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    amount: "$250",
    description: "Sponsors a parent education session on youth mental wellness",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    amount: "$1,000",
    description: "Funds a complete youth group cohort session",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    amount: "$5,000",
    description: "Sponsors a full community prevention initiative",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const trustAnchors = [
  {
    title: "Licensed Clinicians & Educators",
    description:
      "Programs designed by licensed clinicians and CACREP-aligned educators with deep expertise in prevention science.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "15+ Years of Clinical Impact",
    description:
      "Built on over fifteen years of clinical practice and community mental health outcomes through New Horizons Center for Healing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Partnerships",
    description:
      "Active partnerships with schools, healthcare systems, and community organizations across North Texas.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
];

export default function WhyDonatePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                Why Your Support Matters
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Mental Health Should Not
                <br />
                Begin in Crisis.
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Your donation brings prevention, education, and early
                intervention to the schools, families, and communities that need
                it most — before a crisis ever begins.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Framing Block */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>See What Your Gift Makes Possible</SectionTitle>
            <SectionDescription>
              Every contribution directly funds prevention-first programs that
              reach children, parents, and communities across North Texas.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {impactTiers.map((tier) => (
              <div
                key={tier.amount}
                className="group relative bg-white rounded-xl border border-border p-6 text-center hover:shadow-xl hover:border-hope-gold-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-hope-gold/10 text-hope-gold flex items-center justify-center mx-auto mb-4">
                  {tier.icon}
                </div>
                <p className="text-3xl font-bold text-hope-gold mb-3">
                  {tier.amount}
                </p>
                <p className="text-text-body text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Emotional Bridge Section */}
        <Section background="light">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Prevention Is the Most Powerful Investment in Mental Health
            </h2>
            <p className="text-lg text-text-body mb-6">
              Too many families encounter the mental health system only after a
              crisis has already taken hold. By then, the emotional, financial,
              and social costs are staggering — and far too often, irreversible.
            </p>
            <p className="text-lg text-text-body">
              New Horizons Foundation exists to change that equation. We fund
              programs that equip young people with emotional resilience, give
              parents the tools to recognize early warning signs, and build
              school-based systems that catch struggles before they escalate. Your
              donation does not just respond to problems — it prevents them.
            </p>
          </div>
        </Section>

        {/* Trust Anchors */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Built on Trust. Grounded in Expertise.</SectionTitle>
            <SectionDescription>
              Your contribution is backed by clinical expertise, institutional
              credibility, and a proven track record of community impact.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustAnchors.map((anchor) => (
              <div
                key={anchor.title}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-horizons-green/10 text-horizons-green flex items-center justify-center mx-auto mb-5">
                  {anchor.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-3">
                  {anchor.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {anchor.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="gradient">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Donate Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Be Part of Prevention, Not Just Intervention.
            </p>
            <Button href="/invest" variant="accent" size="lg">
              Give Now
            </Button>
            <p className="text-white/70 text-sm mt-6">
              New Horizons Mental Health Foundation Inc. is a 501(c)(3) public
              charity. All contributions are tax-deductible to the extent
              permitted by law. EIN: 41-3658405
            </p>
          </div>
        </Section>
      </main>
      <TrustFooterStrip />
      <Footer />
    </>
  );
}
