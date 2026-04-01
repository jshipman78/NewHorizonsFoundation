import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card, CardTitle, CardContent } from "@/components/ui/Card";
import { ORG } from "@/lib/nhf-constants";
import { ProposalForm } from "./ProposalForm";

export const metadata: Metadata = {
  title: "Mental Health Programs, Training & Consulting | New Horizons Foundation",
  description:
    "Custom-designed mental health programs, professional training, and strategic consulting for schools, healthcare systems, nonprofits, and community organizations. Prevention-focused, research-backed, and built to scale.",
};

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    title: "Education & Training",
    iconPath:
      "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342",
    description:
      "Workshops, professional development, and evidence-based training programs designed for educators, clinicians, and community leaders.",
  },
  {
    title: "Program Development",
    iconPath:
      "M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z",
    description:
      "Custom-designed prevention curricula, youth development programs, and community mental health initiatives built from the ground up.",
  },
  {
    title: "Strategy & Consultation",
    iconPath:
      "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
    description:
      "Strategic planning, needs assessments, clinical and educational consulting for organizations seeking to build or scale mental health infrastructure.",
  },
];

const pricingBlocks = [
  {
    title: "Workshops & Trainings",
    tiers: [
      { label: "Half-Day / Standard Workshop", range: "$1,500 - $5,000" },
      { label: "Full-Day / Multi-Session Training", range: "$5,000 - $10,000" },
    ],
    note: "Includes facilitator fees, materials, and post-session resources.",
  },
  {
    title: "Program Development",
    tiers: [
      { label: "Individual Module Design", range: "$2,500 - $7,500" },
      { label: "Full Program / Curriculum Design", range: "$10,000 - $50,000" },
    ],
    note: "Scope-dependent. Includes needs assessment, design, pilot, and evaluation.",
  },
  {
    title: "Consultation & Strategy",
    tiers: [
      { label: "Program Design Consulting", range: "$125 - $225 / hr" },
      { label: "Clinical / Educational Consulting", range: "$125 - $275 / hr" },
    ],
    note: "Retainer and project-based engagements available.",
  },
  {
    title: "Institutional Partnerships",
    tiers: [
      { label: "Custom Scope — Multi-Service Engagements", range: "$5,000 - $25,000+" },
    ],
    note: "Tailored partnerships for school districts, healthcare systems, and nonprofits.",
  },
];

const differentiators = [
  {
    title: "Licensed Clinical Expertise",
    description:
      "Our programs are developed and led by licensed clinicians with doctoral-level training in counseling, education, and human development.",
  },
  {
    title: "Prevention-First Model",
    description:
      "We prioritize upstream intervention — building resilience and awareness before crisis occurs, not after.",
  },
  {
    title: "Scalable & Customizable",
    description:
      "Every engagement is tailored to your population, goals, and infrastructure. No one-size-fits-all solutions.",
  },
  {
    title: "Research-Backed, Field-Tested",
    description:
      "Our curricula integrate evidence-based frameworks with real-world implementation experience across schools, clinics, and community organizations.",
  },
  {
    title: "Integrated Ecosystem",
    description:
      "Through our partnership with New Horizons Center for Healing and American Psychotherapy Institute, we connect prevention to clinical practice and professional education.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We begin with a discovery call to understand your goals, population, challenges, and timeline. No obligation.",
  },
  {
    step: "02",
    title: "Custom Design",
    description:
      "Our team develops a tailored proposal with scope, deliverables, pricing, and projected outcomes aligned to your needs.",
  },
  {
    step: "03",
    title: "Implementation",
    description:
      "We execute, evaluate, and refine — providing ongoing support, measurement, and reporting throughout the engagement.",
  },
];

const partnerTypes = [
  "School Districts & Education Systems",
  "Healthcare Organizations & Hospitals",
  "Nonprofits & Community Organizations",
  "Corporate Wellness Programs",
  "Government Agencies & Public Health Departments",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Mental Health Through Education, Prevention, and Scalable Systems
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Custom-designed programs, expert training, and strategic consulting for organizations
                ready to build lasting mental health infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#proposal-form" variant="accent" size="lg">
                  Request a Partnership Proposal
                </Button>
                <Button href="#proposal-form" variant="outline-light" size="lg">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <div className="bg-horizons-green-900 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-white/80 font-medium tracking-wide text-sm uppercase">
              Trusted by educators, clinicians, and community leaders
            </p>
          </div>
        </div>

        {/* 3-Pillar Section */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>A New Model for Mental Health Impact</SectionTitle>
            <SectionDescription>
              We work at the intersection of education, prevention, and systems-level change —
              delivering programs and consulting services that create sustainable community impact.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <Card key={pillar.title} hover={false} variant="featured">
                <div className="text-horizons-green mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={pillar.iconPath} />
                  </svg>
                </div>
                <CardTitle>{pillar.title}</CardTitle>
                <CardContent className="mt-3">
                  <p className="text-text-muted">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Services & Investment */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Services &amp; Investment</SectionTitle>
            <SectionDescription>
              Transparent pricing designed for institutional partners. Every engagement is scoped
              to your goals, population, and budget.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingBlocks.map((block) => (
              <div
                key={block.title}
                className="bg-white rounded-xl border border-border p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-text-dark mb-6">{block.title}</h3>
                <div className="space-y-4">
                  {block.tiers.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-4 border-b border-border last:border-b-0 last:pb-0"
                    >
                      <span className="text-text-body font-medium">{tier.label}</span>
                      <span className="text-horizons-green font-bold text-lg whitespace-nowrap">
                        {tier.range}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-text-muted mt-6">{block.note}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* What Sets Us Apart */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>What Sets Us Apart</SectionTitle>
          </SectionHeader>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {differentiators.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-horizons-green-50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-text-dark mb-1">{item.title}</h3>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* 3-Step Process */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>How We Work</SectionTitle>
            <SectionDescription>
              A straightforward engagement process designed to respect your time and deliver results.
            </SectionDescription>
          </SectionHeader>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-horizons-green text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">{step.title}</h3>
                <p className="text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Who We Partner With */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Who We Partner With</SectionTitle>
            <SectionDescription>
              We serve organizations committed to building proactive, prevention-focused mental
              health systems for the communities they serve.
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {partnerTypes.map((partner) => (
              <div
                key={partner}
                className="bg-bg-light rounded-xl p-6 text-center border border-border hover:border-horizons-green-300 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-horizons-green-50 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-horizons-green" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium text-text-dark">{partner}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Focused on Measurable Outcomes */}
        <Section background="dark">
          <SectionHeader>
            <SectionTitle as="h2" className="text-white">
              Focused on Measurable Outcomes
            </SectionTitle>
            <SectionDescription className="text-white/80">
              Every engagement is designed with clear objectives, measurable deliverables, and
              transparent reporting. We measure what matters — behavioral change, community
              reach, and long-term resilience.
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { stat: "Pre/Post", label: "Assessment Protocols" },
              { stat: "Custom", label: "KPI Frameworks" },
              { stat: "Ongoing", label: "Progress Reporting" },
              { stat: "Data-Driven", label: "Program Refinement" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl font-bold text-hope-gold mb-1">{item.stat}</p>
                <p className="text-white/80 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Lead Intake / Proposal Request Form */}
        <Section background="light" id="proposal-form">
          <SectionHeader>
            <SectionTitle>Start the Conversation</SectionTitle>
            <SectionDescription>
              Tell us about your organization and goals. We will respond within 24-48 hours
              with next steps or a tailored proposal.
            </SectionDescription>
          </SectionHeader>

          <div className="max-w-3xl mx-auto">
            <ProposalForm />
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="gradient">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Something That Lasts?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with {ORG.displayName} to create prevention-focused programs and systems
              that strengthen your community from the inside out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#proposal-form" variant="accent" size="lg">
                Request a Partnership Proposal
              </Button>
              <Button href="/programs" variant="outline-light" size="lg">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
