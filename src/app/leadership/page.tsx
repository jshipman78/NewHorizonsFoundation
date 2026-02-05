import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { JsonLd, createPersonSchema, createBreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Our Leadership Team | Clinicians, Educators & Experts",
  description:
    "Meet the experienced clinicians, educators, and community leaders guiding New Horizons Foundation's mission in mental health access and community well-being.",
  openGraph: {
    title: "Leadership Team | New Horizons Foundation",
    description:
      "Meet our experienced clinicians, educators, and community leaders guiding NHF's mission.",
  },
  alternates: {
    canonical: "/leadership",
  },
};

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "https://newhorizonsfoundation.org" },
  { name: "Leadership", url: "https://newhorizonsfoundation.org/leadership" },
]);

interface LeaderProps {
  name: string;
  title: string;
  bio: string;
  featured?: boolean;
}

const executiveLeadership: LeaderProps[] = [
  {
    name: "Dr. S. Dean Aslinia",
    title: "Executive Director",
    bio: "Provides overall executive leadership and strategic direction for New Horizons Foundation. Licensed clinician, educator, and nonprofit executive with extensive experience in clinical mental health, higher education, program development, and community partnerships. Emphasizes ethical stewardship, systems-based solutions, and long-term sustainability.",
    featured: true,
  },
];

const directorsLeadership: LeaderProps[] = [
  {
    name: "Ms. Gina Afshar",
    title: "Director of National Operations (Foundation)",
    bio: "Provides national operational coordination, cross-state collaboration, and program execution support for NHF initiatives.",
  },
  {
    name: "Mr. Joe Shipman",
    title: "Director of Strategic Communications, Brand Architecture & Media Partnerships (Designate)",
    bio: "Leads strategic vision for NHF's public voice, brand integrity, digital posture, and media relationships. Focuses on credibility, donor and grant readiness, and alignment of communications with mission and values.",
  },
  {
    name: "Dr. LaVelle Hendricks",
    title: "Director of Community Partnerships & Civic Engagement (Designate)",
    bio: "Leads civic, faith-based, and community partnerships. Brings extensive experience in civil rights leadership, public engagement, and community advocacy.",
  },
  {
    name: "Dr. Tannaz Moein",
    title: "Director of Clinical Operations and Youth Leadership Programs",
    bio: "Oversees the Foundation's mental health clinical and supervision operations, while also leading youth leadership and education initiatives. Integrates emotional intelligence, mentorship, ethical practice, and service-oriented leadership across clinical and community-based programming.",
  },
  {
    name: "Dr. Catherine Hallam",
    title: "Director of Autism & Neurodevelopmental Programs (Arizona)",
    bio: "Leads autism and neurodevelopmental initiatives through community-based and educational programming.",
  },
];

const programLeadership: LeaderProps[] = [
  {
    name: "Mrs. Erin Perry",
    title: "Senior Director of Operations & Administrative Services",
    bio: "Provides operational leadership, administrative oversight, and systems coordination supporting NHF programs and partnerships.",
  },
  {
    name: "Ms. Melissa Borden",
    title: "Director of Program Development & Grants",
    bio: "Leads program design, grant development, and funding strategy for NHF initiatives.",
  },
  {
    name: "Dr. Solomon Tention",
    title: "Director of African-American Leadership & Community Impact",
    bio: "Provides leadership development, civic engagement strategy, and culturally grounded programming advancing equity and community empowerment.",
  },
  {
    name: "Dr. Armando Peelman",
    title: "Director of Substance Use & Couples Programming (Arizona)",
    bio: "Leads substance-use and couples-focused clinical education and community programming. (Designate)",
  },
  {
    name: "Mrs. Wendy Pierce",
    title: "Director of Eating Disorder Programs",
    bio: "Leads education, prevention, and recovery-oriented initiatives addressing eating disorders and body image. (Designate)",
  },
  {
    name: "Mrs. Shanna Wilder",
    title: "Director of Sexual Health & Education Programs",
    bio: "Leads sex education and relational health initiatives grounded in evidence-based and ethical practice. (Designate)",
  },
  {
    name: "Mr. Jesse Sigel",
    title: "Program Lead — Grief, Aging & Life Transitions",
    bio: "Leads program development and education related to grief, bereavement, aging, and life transitions. (Designate)",
  },
  {
    name: "Dr. Ryan Smith",
    title: "Program Contributor — Clinical and School Counseling Education & Skills-Based Programming",
    bio: "Contributes to clinical education initiatives and professional training content.",
  },
  {
    name: "Miss Ariana Meshinchi",
    title: "EMT Fellow — College Station",
    bio: "Supports emergency response, informed education, community outreach, and training initiatives through a public-health and first-responder lens.",
  },
];

const advisoryLeadership: LeaderProps[] = [
  {
    name: "Dr. Babak Abbassi, M.D. (General Surgeon)",
    title: "Director of Medical Operations (Advisory)",
    bio: "Provides medical oversight and strategic guidance related to integrated care models, interdisciplinary collaboration, and alignment between medical and mental health services across Foundation initiatives.",
  },
  {
    name: "Dr. Bahar Abbassi, M.D. (Plastic Surgeon)",
    title: "Director of Integrative Medical Wellness & Aesthetic Strategy",
    bio: "Provides strategic program guidance on integrative wellness initiatives, public education, and medical–wellness collaboration aligned with the Foundation's community health and outreach goals.",
  },
  {
    name: "Mr. Dave Kessel, CPA",
    title: "Director of Financial, Tax & Compliance Oversight",
    bio: "Provides financial leadership, accounting guidance, tax compliance, and regulatory alignment to ensure transparency and responsible stewardship. (Designate)",
  },
  {
    name: "Dr. Alan Francis",
    title: "Director of Research & Instructional Design",
    bio: "Leads research integration, instructional design, curriculum development, and evidence-based educational programming.",
  },
];

const legacyRecognition: LeaderProps[] = [
  {
    name: "Dr. Amir Abbasi (In Memoriam)",
    title: "Founder of New Horizons Center for Healing — Foundational Influence & Legacy Honoree",
    bio: "Recognized for his enduring influence on generations of clinicians, educators, and leaders whose values and commitment to service inform the mission of New Horizons Foundation.",
  },
];

// Generate Person schemas for key leadership (executive and directors)
const leadershipSchemas = [
  ...executiveLeadership.map(leader => createPersonSchema({
    name: leader.name,
    jobTitle: leader.title,
    description: leader.bio,
  })),
  ...directorsLeadership.map(leader => createPersonSchema({
    name: leader.name,
    jobTitle: leader.title,
    description: leader.bio,
  })),
];

function LeaderCard({ leader, featured = false }: { leader: LeaderProps; featured?: boolean }) {
  return (
    <div
      className={`bg-white rounded-xl p-6 ${
        featured ? "border-2 border-horizons-green shadow-lg" : "border border-border"
      }`}
    >
      <div className="flex items-start gap-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
            featured ? "bg-horizons-green text-white" : "bg-bg-light text-horizons-green"
          }`}
        >
          <svg
            className="w-8 h-8"
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
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-text-dark text-lg">{leader.name}</h3>
          <p className="text-foundation-blue text-sm font-medium mb-3">
            {leader.title}
          </p>
          <p className="text-text-muted text-sm leading-relaxed">{leader.bio}</p>
        </div>
      </div>
    </div>
  );
}

function LeadershipSection({
  title,
  leaders,
  featured = false,
}: {
  title: string;
  leaders: LeaderProps[];
  featured?: boolean;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-text-dark mb-6 pb-2 border-b border-border">
        {title}
      </h2>
      <div className={`grid gap-6 ${featured ? "" : "md:grid-cols-2"}`}>
        {leaders.map((leader) => (
          <LeaderCard key={leader.name} leader={leader} featured={featured} />
        ))}
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <JsonLd data={[breadcrumbs, ...leadershipSchemas]} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Leadership, Directors & Advisors
              </h1>
              <p className="text-xl text-white/90">
                Meet the experienced clinicians, educators, and community leaders
                guiding New Horizons Foundation&apos;s mission to advance mental
                health access and community well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Sections */}
        <Section background="light">
          <LeadershipSection
            title="Executive Leadership"
            leaders={executiveLeadership}
            featured={true}
          />

          <LeadershipSection
            title="Directors & Senior Leadership"
            leaders={directorsLeadership}
          />

          <LeadershipSection
            title="Program Leadership, Advisors & Contributors"
            leaders={programLeadership}
          />

          <LeadershipSection
            title="Medical, Clinical & Financial Oversight"
            leaders={advisoryLeadership}
          />

          <LeadershipSection
            title="Legacy & Honorary Recognition"
            leaders={legacyRecognition}
          />
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">Join Our Team</SectionTitle>
            <SectionDescription className="text-white/90">
              We&apos;re always looking for passionate individuals who share our
              commitment to advancing mental health access and community
              well-being.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us
            </Button>
            <Button
              href="/partners"
              variant="outline-light"
              size="lg"
            >
              Partnership Opportunities
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
