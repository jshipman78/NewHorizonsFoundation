import { Metadata } from "next";
import Image from "next/image";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { EcosystemBadge } from "@/components/ui/EcosystemBadge";
import { JsonLd, createPersonSchema, createBreadcrumbSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Leadership & Vision | New Horizons Foundation",
  description:
    "Meet the experienced clinicians, educators, and community leaders driving a new model of mental health through prevention, education, and early intervention.",
  openGraph: {
    title: "Leadership & Vision | New Horizons Foundation",
    description:
      "Meet the experienced clinicians, educators, and community leaders driving a new model of mental health.",
  },
  alternates: {
    canonical: "/leadership",
  },
};

const breadcrumbs = createBreadcrumbSchema([
  { name: "Home", url: "https://newhorizonsfoundation.org" },
  { name: "Leadership & Vision", url: "https://newhorizonsfoundation.org/leadership" },
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

const boardOfTrustees: LeaderProps[] = [
  {
    name: "Dr. Dean Aslinia, Ph.D., MBA, LPC-S, NCC",
    title: "President of the Board",
    bio: "Serves as President of the Board of Trustees, providing strategic oversight and ensuring alignment with the Foundation's mission and long-term vision.",
  },
  {
    name: "Mrs. Farah Abbassi, M.S.",
    title: "Treasurer",
    bio: "Brings a strong background in organizational management and financial oversight, supporting the Foundation's commitment to fiscal responsibility, transparency, and long-term sustainability. A former mathematics professor and the widow of Dr. Amir Abbassi, she continues to honor and advance his vision and enduring commitment to mental health, education, and community impact.",
  },
  {
    name: "Dr. Nima Khosravani, M.D.",
    title: "Secretary",
    bio: "A physician who provides medical insight and strategic guidance to support the integration of healthcare perspectives within the Foundation's initiatives, ensuring programming aligns with broader health system considerations and interdisciplinary collaboration.",
  },
  {
    name: "Dr. Vafa Mirshams, DDS",
    title: "Trustee",
    bio: "Brings professional leadership and community engagement experience, contributing to strategic planning and organizational oversight. As a practicing dentist, she supports the Foundation's commitment to community-centered impact and sustainable growth.",
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
    name: "Mrs. Naili Woelper-Thompson",
    title: "Director of Strategic Engagement & Revenue Development",
    bio: "Builds funding pipelines, coordinates sponsorship engagement, and structures the systems necessary for the Foundation's long-term growth and operational scalability.",
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
  {
    name: "Dr. Ayda Melika, Ph.D.",
    title: "Director of Media, Storytelling & Mental Health Advocacy",
    bio: "Leads the development of media-driven mental health storytelling and advocacy initiatives, leveraging film, digital content, and narrative platforms to reduce stigma, amplify community voices, and expand public engagement with prevention-based mental health education. Founder and director of the Urban Media Institute, with a Ph.D. from UC Berkeley.",
  },
  {
    name: "Officer Lorenzo (Enzo) Ortiz, M.S.",
    title: "Director of Crisis Negotiation & Law Enforcement Training",
    bio: "Leads the Foundation's connection to law enforcement agencies, developing and delivering crisis negotiation and mental health-informed training that equips first responders with the skills to manage high-risk situations, support community safety, and improve outcomes through empathy, de-escalation, and trauma-informed response. Author of Bringing Hope: One Police Officer's Journey with Empathy on the Path to Service.",
  },
  {
    name: "Mrs. Lacey Ranck",
    title: "Director of First Responder & Veteran Programs",
    bio: "Leads the development and implementation of prevention-focused mental health programs for first responders, veterans, and their families. Oversees program design, community partnerships, and student engagement pipelines to support early intervention and long-term resilience. Previously served with the Maricopa County Sheriff's Office.",
  },
  {
    name: "Miss Erika Aguilar",
    title: "Director of Family & Community Engagement (Spanish Outreach)",
    bio: "Leads culturally responsive family and community engagement efforts, expanding access to mental health education and support within Spanish-speaking communities through relationship-driven outreach, parent networks, and youth leadership development. Founding Leader of the NHF Latina Family Network.",
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
    name: "Dr. Solomon Tention, Ph.D.",
    title: "Director of Leadership & Community Impact",
    bio: "Leads leadership development and culturally grounded programming that advances equity, civic engagement, and community empowerment. Extensive experience in institutional advancement, academic affairs, and student development across diverse community college systems.",
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
    title: "Program Lead — Youth and Men's Group Programming, Grief, Aging & Life Transitions",
    bio: "Leads programming focused on grief, bereavement, aging, and major life transitions, as well as youth and men's group programming. Creates spaces for connection, reflection, and skill-building. (Designate)",
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
  const dean = executiveLeadership[0];

  return (
    <>
      <JsonLd data={[breadcrumbs, ...leadershipSchemas]} />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <PageHero
          title="Leadership Driving a New Model of Mental Health"
          description="Experienced clinicians, educators, and community leaders building a prevention-first approach to mental health access and community well-being."
          variant="centered"
        />

        {/* Executive Director — Dean featured with vision */}
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-xl border-2 border-hope-gold/30">
                  <Image
                    src="/dean-aslinia.jpg"
                    alt="Dr. S. Dean Aslinia"
                    width={224}
                    height={224}
                    className="w-full h-full object-cover scale-[1.6] object-[center_28%]"
                    priority
                  />
                </div>
              </div>
              {/* Bio + Vision */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-sm font-semibold text-hope-gold uppercase tracking-wider mb-2">
                  Executive Director
                </p>
                <h2 className="text-3xl font-bold text-text-dark mb-4">
                  {dean.name}
                </h2>
                <p className="text-text-muted leading-relaxed mb-6">
                  {dean.bio}
                </p>
                <div className="border-l-4 border-hope-gold pl-5">
                  <p className="text-text-muted leading-relaxed italic">
                    NHF was built on the belief that mental health systems must
                    evolve beyond crisis response — creating pathways for
                    education, awareness, and intervention before problems
                    escalate. This model reflects a commitment to long-term
                    community health, not short-term symptom management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Ecosystem + Team Roster */}
        <Section background="light">
          {/* Integrated Ecosystem */}
          <SectionHeader>
            <SectionTitle>An Integrated Approach to Mental Health</SectionTitle>
            <SectionDescription>
              New Horizons Foundation operates within a coordinated ecosystem of
              organizations — each with a distinct role — united by a shared
              commitment to advancing mental health access, education, and
              community well-being.
            </SectionDescription>
          </SectionHeader>
          <div className="mb-16">
            <EcosystemBadge />
          </div>

          {/* Team Roster */}
          <LeadershipSection
            title="Executive Leadership"
            leaders={executiveLeadership}
            featured={true}
          />

          <LeadershipSection
            title="Board of Trustees"
            leaders={boardOfTrustees}
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
            <SectionTitle className="text-white">
              Partner With Us
            </SectionTitle>
            <SectionDescription className="text-white/90">
              Join a growing network of organizations and leaders committed to
              building a prevention-first model of mental health.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/partnerships" variant="accent" size="lg">
              Request a Partnership Proposal
            </Button>
            <Button href="/programs" variant="outline-light" size="lg">
              Learn About Our Programs
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
