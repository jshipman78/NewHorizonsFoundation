import { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { StartChapterForm } from "@/components/forms/StartChapterForm";
import { StudentInterestForm } from "@/components/forms/StudentInterestForm";

export const metadata: Metadata = {
  title: "University Chapters | New Horizons Foundation",
  description:
    "Join the NHF University Chapter Initiative — connecting students to real-world clinical experience, professional mentorship, and a national movement transforming mental health from crisis intervention to prevention.",
};

const chapters = [
  {
    name: "Grand Canyon University",
    slug: "gcu",
    location: "Phoenix, AZ",
    status: "Founding Chapter" as const,
  },
];

const pipelineSteps = [
  {
    step: "1",
    title: "Engagement",
    subtitle: "Campus Level",
    description:
      "Student-led organizations with faculty advisors; leadership and peer connection",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    step: "2",
    title: "Education",
    subtitle: "Training Layer",
    description:
      "Workshops, speaker series, evidence-based learning. Integration with the American Psychotherapy Institute for continuing education pathways.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    step: "3",
    title: "Clinical Exposure",
    subtitle: "Applied Learning",
    description:
      "Direct interaction with clinicians, case-based discussions, ethical and professional standards",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    step: "4",
    title: "Career Pathway",
    subtitle: "Transition",
    description:
      "Internship and practicum alignment, networking into clinical settings and partner organizations",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
];

const differentiators = [
  "Direct access to licensed clinicians and real-world clinical insight",
  "Integration with professional training pathways (API)",
  "Exposure to applied clinical environments",
  "Built as a career pipeline, not a social club",
  "Grounded in a prevention-first mental health model",
];

const studentOutcomes = [
  "Early exposure to clinical decision-making and treatment approaches",
  "Professional connections before practicum or internship",
  "Increased readiness for licensure exams (e.g., NCE)",
  "Clearer career direction within behavioral health fields",
  "Leadership experience within a structured professional organization",
];

const audiences = [
  {
    title: "Graduate Students",
    description:
      "Clinical Mental Health Counseling (CACREP-aligned programs)",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: "Undergraduate Students",
    description:
      "Pursuing psychology, counseling, or behavioral health",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
  },
  {
    title: "Career Explorers",
    description:
      "Students exploring clinical or community mental health careers",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Prevention Advocates",
    description:
      "Future professionals committed to prevention-focused systems",
    icon: (
      <svg
        className="w-7 h-7"
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
    ),
  },
];

const starterKitItems = [
  "Constitution templates",
  "Advisor guidelines",
  "Event/programming frameworks",
  "Recruitment tools",
];

export default function ChaptersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                University Chapter Initiative
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Building the Next Generation of Mental Health Leaders
              </h1>
              <p className="text-xl text-white/90 mb-4">
                Connecting students to real-world clinical experience,
                professional mentorship, and a national movement transforming
                mental health from crisis intervention to prevention.
              </p>
              <p className="text-base text-white/70 mb-8 italic">
                A national university chapter system connecting students to
                clinical experience, professional training, and a
                prevention-focused future in mental health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#start-chapter" variant="accent" size="lg">
                  Start a Chapter at Your University
                </Button>
                <Button href="#join-chapter" variant="outline-light" size="lg">
                  Join a Chapter Near You
                </Button>
                <Button href="#partner" variant="outline-light" size="lg">
                  Partner to Support Student Development
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Mission */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">
              From Classroom to Clinical Impact
            </h2>
            <div className="prose-lg text-text-body space-y-4 text-center max-w-3xl mx-auto">
              <p>
                The New Horizons Foundation&apos;s University Chapter Initiative
                bridges the gap between academic training and real-world clinical
                practice.
              </p>
              <p>
                We equip undergraduate and graduate students &mdash; particularly
                those in clinical mental health, counseling, psychology, and
                related fields &mdash; with access to:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
              {[
                "Licensed clinicians and subject-matter experts",
                "Evidence-based training and professional development",
                "Mentorship and networking opportunities",
                "Pathways into practicum, internship, and clinical careers",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-bg-light rounded-lg p-4"
                >
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
                  <span className="text-text-body text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-horizons-green-50 rounded-xl p-6 max-w-3xl mx-auto border border-horizons-green-100">
              <p className="text-text-body text-center">
                At its core, this initiative advances a broader vision:{" "}
                <strong className="text-horizons-green">
                  To move mental health from reactive crisis intervention to
                  proactive prevention
                </strong>{" "}
                &mdash; through education, access, and early engagement.
              </p>
            </div>
          </div>
        </Section>

        {/* Section 3: Pipeline Model */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>A National Student-to-Clinician Pipeline</SectionTitle>
            <SectionDescription>
              University Chapters &rarr; Training &rarr; Clinical Exposure
              &rarr; Workforce Entry &rarr; Community Impact
            </SectionDescription>
          </SectionHeader>

          {/* Pipeline Flow Visual */}
          <div className="hidden md:flex items-center justify-center gap-2 mb-12">
            {["University Chapters", "Training", "Clinical Exposure", "Workforce Entry", "Community Impact"].map(
              (label, i, arr) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="bg-white rounded-lg px-4 py-2 border border-border shadow-sm">
                    <span className="text-sm font-semibold text-horizons-green">
                      {label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <svg
                      className="w-5 h-5 text-hope-gold flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  )}
                </div>
              )
            )}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineSteps.map((step) => (
              <div
                key={step.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-horizons-green text-white flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-text-dark mb-1">
                  {step.title}
                </h3>
                <p className="text-xs text-hope-gold font-medium uppercase tracking-wider mb-2">
                  {step.subtitle}
                </p>
                <p className="text-text-muted text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 4: Why This Is Different */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>More Than a Student Organization</SectionTitle>
          </SectionHeader>
          <div className="max-w-2xl mx-auto space-y-3">
            {differentiators.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-bg-light rounded-lg p-4"
              >
                <div className="w-8 h-8 rounded-full bg-horizons-green/10 text-horizons-green flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <span className="text-text-body font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 5: What Students Gain */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Real Outcomes, Not Just Participation</SectionTitle>
            <SectionDescription>
              Students who participate in NHF Chapters gain tangible career
              advantages.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {studentOutcomes.map((outcome, i) => (
              <div
                key={outcome}
                className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border"
              >
                <div className="w-8 h-8 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-text-body text-sm">{outcome}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 6: Who This Is For */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Who This Is For</SectionTitle>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="bg-bg-light rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center mx-auto mb-4">
                  {audience.icon}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {audience.title}
                </h3>
                <p className="text-text-muted text-sm">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Section 7: What Is a Chapter */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-border">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-dark mb-6">
                  What Is a Chapter?
                </h2>
                <div className="prose-lg text-text-body space-y-4 max-w-3xl mx-auto">
                  <p>
                    A New Horizons Chapter is a university-based,
                    faculty-supported student organization affiliated with the
                    New Horizons Foundation.
                  </p>
                  <p>
                    Each chapter operates independently on campus while aligning
                    with NHF&apos;s national mission and programming model.
                    These chapters serve as a bridge between academic training,
                    clinical practice, and workforce development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 8: Current & Growing Chapters */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Current &amp; Growing Chapters</SectionTitle>
            <SectionDescription>
              Our chapter network is expanding across the country. Join the
              movement.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chapters.map((chapter) => (
                <Link
                  key={chapter.slug}
                  href={`/chapters/${chapter.slug}`}
                  className="bg-bg-light rounded-xl p-6 border border-border hover:border-horizons-green-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center group-hover:bg-horizons-green group-hover:text-white transition-colors">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-hope-gold bg-hope-gold/10 px-2 py-1 rounded-full">
                      {chapter.status}
                    </span>
                  </div>
                  <h3 className="font-semibold text-text-dark group-hover:text-horizons-green transition-colors mb-1">
                    {chapter.name}
                  </h3>
                  <p className="text-text-muted text-sm">{chapter.location}</p>
                </Link>
              ))}

              {/* Coming Soon placeholder */}
              <div className="bg-bg-light rounded-xl p-6 border-2 border-dashed border-border flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-lg bg-border/30 text-text-muted flex items-center justify-center mb-3">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-text-muted text-sm">
                  Your University Here
                </p>
                <p className="text-text-muted text-xs mt-1">
                  Chapters launching nationwide
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 9: Start a Chapter Form */}
        <Section background="light" id="start-chapter">
          <div className="max-w-2xl mx-auto">
            <SectionHeader>
              <SectionTitle>Bring a Chapter to Your University</SectionTitle>
              <SectionDescription>
                Students and faculty can launch an NHF-affiliated chapter to
                create structured opportunities for clinical exposure,
                mentorship, and professional development.
              </SectionDescription>
            </SectionHeader>
            <StartChapterForm />
          </div>
        </Section>

        {/* Section 10: For Universities & Partners */}
        <Section background="white" id="partner">
          <SectionHeader>
            <SectionTitle>Partner in Building the Future Workforce</SectionTitle>
            <SectionDescription>
              NHF Chapters support institutional goals across multiple
              dimensions.
            </SectionDescription>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "CACREP-Aligned Development",
                description: "Student growth aligned with accreditation standards",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                ),
              },
              {
                title: "Practicum Readiness",
                description: "Internship and practicum preparation for students",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                ),
              },
              {
                title: "Workforce Pipeline",
                description: "Building the next generation of clinical professionals",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                title: "Campus Programming",
                description: "Expanded mental health programming for your campus",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-light rounded-xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/contact" variant="primary" size="lg">
              Partner With Us
            </Button>
          </div>
        </Section>

        {/* Section 11: Why This Matters */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-horizons-green to-foundation-blue rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">
                The Future of Mental Health Starts Earlier
              </h2>
              <div className="prose-lg space-y-4 max-w-3xl mx-auto">
                <p className="text-white/90">
                  The current system intervenes too late &mdash; at crisis.
                </p>
                <p className="text-white/90">
                  We are shifting that model by engaging students before they
                  enter the workforce, creating clinicians who are better
                  prepared, more connected, and prevention-focused.
                </p>
                <p className="text-white font-semibold text-xl mt-6">
                  This is how systems change.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 12: Chapter Starter Kit */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Everything You Need to Launch</SectionTitle>
            <SectionDescription>
              NHF provides a complete Chapter Starter Kit to every approved
              chapter.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {starterKitItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-bg-light rounded-lg p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-hope-gold/10 text-hope-gold flex items-center justify-center flex-shrink-0">
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Student Interest Form */}
        <Section background="light" id="join-chapter">
          <div className="max-w-2xl mx-auto">
            <SectionHeader>
              <SectionTitle>Join a Chapter Near You</SectionTitle>
              <SectionDescription>
                Interested in joining an NHF Chapter? Let us know and
                we&apos;ll connect you with an active chapter or notify you
                when one launches at your university.
              </SectionDescription>
            </SectionHeader>
            <StudentInterestForm />
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Ready to Join the Movement?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Whether you&apos;re a student, faculty member, or institutional
              partner &mdash; there&apos;s a role for you in building the
              future of mental health.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#start-chapter" variant="accent" size="lg">
              Start a Chapter
            </Button>
            <Button href="#join-chapter" variant="outline-light" size="lg">
              Join a Chapter
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Our Team
            </Button>
          </div>
        </Section>

        {/* Affiliation Disclaimer */}
        <div className="bg-bg-light border-t border-border py-6">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-text-muted text-xs text-center">
              Each university chapter operates as an independent student
              organization and is affiliated with the New Horizons Foundation
              for educational, professional development, and mission-aligned
              programming purposes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
