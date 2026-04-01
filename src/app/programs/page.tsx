import { Metadata } from "next";
import Image from "next/image";

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
import { EcosystemBadge } from "@/components/ui/EcosystemBadge";
import { ORG } from "@/lib/nhf-constants";

export const metadata: Metadata = {
  title: "Programs | New Horizons Foundation",
  description:
    "Explore prevention-focused mental health programs designed for youth, families, schools, and communities through New Horizons Foundation.",
};

const strongMindsOutcomes = [
  "Increased emotional literacy",
  "Improved coping and regulation skills",
  "Stronger peer and family interactions",
  "Early identification of mental health needs",
];

const strongMindsFocusAreas = [
  "Emotional awareness",
  "Self-regulation",
  "Communication skills",
  "Coping strategies",
  "Confidence and resilience",
];

const parentEducationExamples = [
  { title: "Parent education nights", icon: "users" },
  { title: "Mental health awareness workshops", icon: "lightbulb" },
  { title: "Family communication sessions", icon: "chat" },
  { title: "Community seminars", icon: "globe" },
];

const schoolInitiativeExamples = [
  { title: "Student emotional skills groups", icon: "users" },
  { title: "Classroom workshops", icon: "book" },
  { title: "Educator training", icon: "academic" },
  { title: "School-wide prevention initiatives", icon: "shield" },
];

const professionalTrainingExamples = [
  "Staff development and wellness programs",
  "Leadership training for mental health initiatives",
  "Mental health seminars for professionals and educators",
  "Community training and outreach workshops",
];

const deliveryFormats = [
  {
    title: "In-Person",
    description:
      "On-site programming at schools, community centers, and partner facilities.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Virtual",
    description:
      "Live, facilitator-led sessions accessible from anywhere.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Hybrid",
    description:
      "Blended formats combining in-person and virtual for maximum flexibility.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: "Multi-Week Programs",
    description:
      "Structured multi-week cycles or single-event workshops tailored to your timeline.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
];

function DualCTA({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  secondaryExternal,
}: {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  secondaryExternal?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Button href={primaryHref} variant="primary" size="md">
        {primaryText}
      </Button>
      {secondaryExternal ? (
        <a
          href={secondaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-hope-gold-700 text-hope-gold-800 hover:bg-hope-gold hover:text-text-dark hover:-translate-y-0.5 focus:ring-hope-gold px-6 py-3 text-base"
        >
          {secondaryText}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      ) : (
        <Button href={secondaryHref} variant="outline" size="md">
          {secondaryText}
        </Button>
      )}
    </div>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-16 bg-hope-gold/40" />
      <div className="w-2 h-2 rounded-full bg-hope-gold mx-3" />
      <div className="h-px w-16 bg-hope-gold/40" />
    </div>
  );
}

function CheckIcon({ className = "w-5 h-5 text-horizons-green" }: { className?: string }) {
  return (
    <svg className={`flex-shrink-0 ${className}`} fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-white">
          {/* Subtle gold accent shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-hope-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-horizons-green/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text Content */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hope-gold/10 text-hope-gold-700 text-sm font-semibold mb-6 border border-hope-gold/20">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                  Prevention-Focused Programs
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-text-dark leading-[1.1] mb-6">
                  Programs That Build{" "}
                  <span className="text-horizons-green">Stronger Minds</span>{" "}
                  and Healthier Communities
                </h1>

                <p className="text-lg text-text-body mb-10 leading-relaxed">
                  Our programs are designed to equip individuals, families, and
                  organizations with practical tools for emotional development,
                  mental health awareness, and early intervention.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="/contact" variant="accent" size="lg">
                    Request Program Information
                  </Button>
                  <Button href="/contact" variant="outline" size="lg">
                    Request a Partnership Proposal
                  </Button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-hope-gold/20 via-transparent to-horizons-green/10 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-hope-gold/10">
                  <Image
                    src="/images/programs/community-collage.png"
                    alt="Youth, families, and communities coming together through New Horizons Foundation programs"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gold accent line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-hope-gold to-transparent" />
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PROGRAM SNAPSHOT STRIP
        ═══════════════════════════════════════════════════════════ */}
        <div className="bg-bg-light border-b border-border py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: "🎓", label: "Youth Programs", color: "text-horizons-green" },
                { icon: "👨‍👩‍👧", label: "Parent Support", color: "text-foundation-blue" },
                { icon: "🏫", label: "School Partnerships", color: "text-hope-gold-700" },
                { icon: "🌎", label: "Community Initiatives", color: "text-horizons-green" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center border border-border">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <span className={`font-semibold text-sm ${item.color}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1: FROM PREVENTION TO REAL-WORLD IMPACT
        ═══════════════════════════════════════════════════════════ */}
        <Section background="white">
          <div className="max-w-3xl mx-auto text-center">
            <GoldDivider />
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-6 mb-6">
              From Prevention to Real-World Impact
            </h2>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              New Horizons Foundation develops and supports structured mental
              health programs focused on prevention, education, and early
              intervention.
            </p>
            <p className="text-text-body leading-relaxed">
              Our programs are designed to be practical, scalable, and adaptable
              across schools, communities, and partner organizations&mdash;ensuring
              that mental health support is accessible before challenges escalate
              into crisis.
            </p>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2: STRONG MINDS PROGRAM (FLAGSHIP)
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 bg-white relative">
          {/* Subtle background texture */}
          <div className="absolute inset-0 bg-gradient-to-b from-hope-gold-50/50 via-white to-white pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hope-gold text-text-dark text-sm font-bold uppercase tracking-wider mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                Flagship Program
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-dark">
                Strong Minds Program&trade;
              </h2>
              <p className="text-xl text-foundation-blue font-semibold mt-3">
                Emotional Skills Development for Youth
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-hope-gold/20 overflow-hidden">
              <div className="p-8 md:p-12">
                <p className="text-lg text-text-body max-w-3xl mx-auto text-center leading-relaxed mb-12">
                  The Strong Minds Program&trade; is a structured, skills-based
                  program designed to help children and adolescents develop emotional
                  awareness, regulation, and resilience.
                </p>

                <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                  {/* Program Details */}
                  <div>
                    <h3 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                        </svg>
                      </div>
                      Program Details
                    </h3>

                    <div className="space-y-4">
                      {[
                        { label: "Age Groups", value: "Elementary and Middle School" },
                        { label: "Format", value: "Small group sessions" },
                        { label: "Duration", value: "8-week program cycles" },
                      ].map((detail) => (
                        <div key={detail.label} className="flex items-start gap-3 p-3 rounded-lg bg-bg-light">
                          <div className="w-1.5 h-1.5 rounded-full bg-hope-gold mt-2.5 flex-shrink-0" />
                          <div>
                            <span className="font-semibold text-text-dark">{detail.label}:</span>{" "}
                            <span className="text-text-body">{detail.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h4 className="font-semibold text-text-dark mt-8 mb-4">Focus Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {strongMindsFocusAreas.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1.5 rounded-full bg-horizons-green/10 text-horizons-green text-sm font-medium border border-horizons-green/20"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-xl font-bold text-text-dark mb-6 flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-hope-gold/10 text-hope-gold-700 flex items-center justify-center">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                      </div>
                      Measured Outcomes
                    </h3>

                    <div className="space-y-4">
                      {strongMindsOutcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-horizons-green-50 to-transparent border border-horizons-green/10"
                        >
                          <div className="w-6 h-6 rounded-full bg-horizons-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckIcon className="w-3.5 h-3.5 text-white" />
                          </div>
                          <span className="text-text-body font-medium">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Strong Minds CTAs */}
                <div className="border-t border-border mt-10 pt-8">
                  <DualCTA
                    primaryText="Bring Strong Minds to Your School or Organization"
                    primaryHref="/contact"
                    secondaryText="Interested in participation options? Visit NHCH"
                    secondaryHref={ORG.nhchUrl}
                    secondaryExternal
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3: PARENT AND COMMUNITY EDUCATION
        ═══════════════════════════════════════════════════════════ */}
        <Section background="white">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/programs/team-gathering.jpg"
                  alt="Community gathering at New Horizons"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <GoldDivider />
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-4 mb-4">
                Parent and Community Education
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                New Horizons Foundation offers parent-focused and community-based
                programming designed to equip caregivers and community members with
                practical tools to support mental health and emotional development.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {parentEducationExamples.map((example) => (
                  <div
                    key={example.title}
                    className="flex items-center gap-3 bg-bg-light rounded-xl p-4 border border-border hover:border-hope-gold/30 hover:shadow-sm transition-all duration-200"
                  >
                    <CheckIcon />
                    <span className="text-text-body font-medium text-sm">{example.title}</span>
                  </div>
                ))}
              </div>

              <DualCTA
                primaryText="Schedule a Parent or Community Program"
                primaryHref="/contact"
                secondaryText="Looking for services or enrollment? Visit NHCH"
                secondaryHref={ORG.nhchUrl}
                secondaryExternal
              />
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4: SCHOOL-BASED INITIATIVES
        ═══════════════════════════════════════════════════════════ */}
        <Section background="light">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="lg:col-span-3">
              <GoldDivider />
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-4 mb-4">
                School-Based Initiatives
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                We partner with schools and districts to implement structured
                mental health programming aligned with educational environments and
                student needs.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {schoolInitiativeExamples.map((example) => (
                  <div
                    key={example.title}
                    className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border hover:border-foundation-blue/30 hover:shadow-sm transition-all duration-200"
                  >
                    <CheckIcon className="w-5 h-5 text-foundation-blue" />
                    <span className="text-text-body font-medium text-sm">{example.title}</span>
                  </div>
                ))}
              </div>

              <DualCTA
                primaryText="Partner With Us for School Programming"
                primaryHref="/contact"
                secondaryText="Learn about program access through NHCH"
                secondaryHref={ORG.nhchUrl}
                secondaryExternal
              />
            </div>

            {/* Image */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/programs/ribbon-cutting.jpg"
                  alt="New Horizons community partnership event"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5: PROFESSIONAL TRAINING AND EDUCATION
        ═══════════════════════════════════════════════════════════ */}
        <Section background="white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <GoldDivider />
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-4 mb-4">
                Professional Training and Education
              </h2>
              <p className="text-lg text-text-body leading-relaxed">
                We provide training and educational experiences for professionals,
                organizations, and community leaders seeking to strengthen their
                understanding of mental health and prevention strategies.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {professionalTrainingExamples.map((example) => (
                <div
                  key={example}
                  className="flex items-start gap-3 bg-bg-light rounded-xl p-4"
                >
                  <CheckIcon />
                  <span className="text-text-body text-sm">{example}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg max-w-lg mx-auto mb-8">
              <Image
                src="/images/programs/partnership.jpg"
                alt="New Horizons leadership presenting at a professional training event"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="text-center">
              <Button href="/contact" variant="primary" size="lg">
                Request Training Information
              </Button>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6: CUSTOM PROGRAM DEVELOPMENT
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-horizons-green-50 via-white to-hope-gold-50" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <GoldDivider />
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-4 mb-4">
                Custom Program Development
              </h2>
              <p className="text-lg text-text-body leading-relaxed mb-8">
                New Horizons Foundation develops customized programs aligned with
                the needs, goals, and structure of partner organizations.
              </p>
              <Button href="/contact" variant="accent" size="lg">
                Request a Custom Program Proposal
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 7: PROGRAM ACCESS AND DELIVERY (ENTITY BRIDGE)
        ═══════════════════════════════════════════════════════════ */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <GoldDivider />
              <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-4 mb-4">
                Program Access and Delivery
              </h2>
              <p className="text-lg text-text-body leading-relaxed">
                New Horizons Foundation develops, supports, and expands
                prevention-focused mental health programming for schools, families,
                and communities.
              </p>
            </div>

            <p className="text-text-body text-center leading-relaxed mb-10">
              Depending on the nature of the program, implementation may occur
              through affiliated delivery partners, including{" "}
              <span className="font-semibold text-text-dark">{ORG.nhchName}</span>.
            </p>

            {/* Two-column entity bridge */}
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <Card variant="featured" hover={false} className="p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-horizons-green/10 text-horizons-green flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">
                  {ORG.displayName}
                </h3>
                <p className="text-text-muted text-sm mb-6">
                  For organizations seeking sponsorship, school partnerships, or
                  program development.
                </p>
                <Button href="/contact" variant="primary" size="md">
                  Request a Partnership Proposal
                </Button>
              </Card>

              <Card variant="default" hover={false} className="p-8 text-center border-hope-gold/30">
                <div className="w-14 h-14 rounded-full bg-hope-gold/10 text-hope-gold-700 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">
                  {ORG.nhchName}
                </h3>
                <p className="text-text-muted text-sm mb-6">
                  For families or individuals seeking participation opportunities
                  or service-related information.
                </p>
                <a
                  href={ORG.nhchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-hope-gold-700 text-hope-gold-800 hover:bg-hope-gold hover:text-text-dark hover:-translate-y-0.5 focus:ring-hope-gold px-6 py-3 text-base"
                >
                  Visit NHCH
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </Card>
            </div>
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 8: FLEXIBLE AND SCALABLE DELIVERY
        ═══════════════════════════════════════════════════════════ */}
        <Section background="light">
          <SectionHeader>
            <GoldDivider />
            <SectionTitle className="mt-4">Flexible and Scalable Delivery</SectionTitle>
            <SectionDescription>
              Programs can be delivered in multiple formats to meet
              organizational needs.
            </SectionDescription>
          </SectionHeader>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryFormats.map((format) => (
              <div
                key={format.title}
                className="text-center p-8 bg-white rounded-2xl border border-border hover:border-hope-gold/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-horizons-green/10 text-horizons-green flex items-center justify-center mx-auto mb-5 group-hover:bg-hope-gold/10 group-hover:text-hope-gold-700 transition-colors duration-300">
                  {format.icon}
                </div>
                <h3 className="font-bold text-text-dark mb-2">
                  {format.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">{format.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 9: FINAL CTA
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-horizons-green via-horizons-green-700 to-foundation-blue" />
          {/* Decorative accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-hope-gold/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Bring These Programs to Your Community
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are a school, organization, or community leader, New
              Horizons Foundation can help you implement meaningful,
              prevention-focused mental health programming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="accent" size="lg">
                Request Program Information
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Request a Partnership Proposal
              </Button>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            ECOSYSTEM BADGE
        ═══════════════════════════════════════════════════════════ */}
        <Section background="white">
          <EcosystemBadge />
        </Section>

        {/* ═══════════════════════════════════════════════════════════
            TRUST FOOTER STRIP
        ═══════════════════════════════════════════════════════════ */}
        <TrustFooterStrip />
      </main>
      <Footer />
    </>
  );
}
