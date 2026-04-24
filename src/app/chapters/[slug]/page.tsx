import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";

type ChapterData = {
  name: string;
  shortName: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
  programs: string[];
};

const chapterData: Record<string, ChapterData> = {
  gcu: {
    name: "Grand Canyon University",
    shortName: "GCU",
    location: "Phoenix, AZ",
    status: "Founding Chapter",
    description:
      "The Grand Canyon University Chapter is the founding chapter of the New Horizons Foundation University Chapter Initiative. Located in Phoenix, Arizona, this chapter connects GCU students in counseling, psychology, and behavioral health programs with clinical mentorship, professional development, and a prevention-focused approach to mental health.",
    highlights: [
      "First NHF chapter established nationally",
      "Direct access to licensed clinicians and NHF leadership",
      "Integration with GCU counseling and psychology programs",
      "Faculty-supported student organization",
    ],
    programs: [
      "Clinical Mental Health Counseling",
      "Psychology",
      "Behavioral Health Sciences",
      "Counseling",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(chapterData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = chapterData[slug];
  if (!chapter) {
    return { title: "Chapter Not Found | New Horizons Foundation" };
  }
  return {
    title: `${chapter.name} Chapter | New Horizons Foundation`,
    description: chapter.description,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = chapterData[slug];

  if (!chapter) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Link
                href="/chapters"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
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
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                All Chapters
              </Link>
              <span className="inline-block text-hope-gold bg-hope-gold/10 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {chapter.status}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {chapter.name}
              </h1>
              <p className="text-lg text-white/80">{chapter.location}</p>
            </div>
          </div>
        </section>

        {/* About */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-6 text-center">
              About the {chapter.shortName} Chapter
            </h2>
            <p className="text-text-body text-lg text-center max-w-3xl mx-auto">
              {chapter.description}
            </p>
          </div>
        </Section>

        {/* Highlights */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Chapter Highlights</SectionTitle>
          </SectionHeader>
          <div className="max-w-2xl mx-auto space-y-3">
            {chapter.highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 bg-white rounded-lg p-4 border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-horizons-green/10 text-horizons-green flex items-center justify-center flex-shrink-0">
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
                <span className="text-text-body">{item}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Related Programs */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Related Programs at {chapter.shortName}</SectionTitle>
          </SectionHeader>
          <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
            {chapter.programs.map((program) => (
              <div
                key={program}
                className="flex items-center gap-3 bg-bg-light rounded-lg p-4"
              >
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
                      d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <span className="font-medium text-text-dark">{program}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Interested in the {chapter.shortName} Chapter?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Connect with the chapter or start your own at another university.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/chapters#join-chapter" variant="accent" size="lg">
              Join This Chapter
            </Button>
            <Button
              href="/chapters#start-chapter"
              variant="outline-light"
              size="lg"
            >
              Start a Chapter
            </Button>
            <Button href="/contact" variant="outline-light" size="lg">
              Contact Us
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
