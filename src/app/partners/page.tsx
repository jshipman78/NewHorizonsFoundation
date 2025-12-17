import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Partners & Collaborations",
  description:
    "New Horizons Foundation collaborates with mental health professionals, educational institutions, faith-based organizations, law enforcement, veteran agencies, and community partners.",
};

const partnerCategories = [
  {
    title: "Mental Health Clinics & Professionals",
    description:
      "Clinical partners committed to ethical, evidence-based care who share our vision for expanding mental health access.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Educational Institutions",
    description:
      "Universities, school districts, and training programs collaborating on education, research, and professional development.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Faith-Based Organizations",
    description:
      "Churches and religious organizations sharing values of service, compassion, and community care.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "Community & Cultural Organizations",
    description:
      "Groups serving diverse communities and promoting cultural understanding and community connection.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Law Enforcement & First Responder Agencies",
    description:
      "Police departments, fire departments, and EMS agencies committed to supporting those who serve.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Veteran Organizations",
    description:
      "Groups dedicated to veteran well-being, support services, and advocacy.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Mental Health Professional Associations",
    description:
      "Organizations advancing the mental health profession through standards, training, and advocacy.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
];

const partnershipBenefits = [
  "Alignment with a mission-driven organization",
  "Access to professional expertise and resources",
  "Collaborative program development opportunities",
  "Joint funding and grant opportunities",
  "Visibility and recognition for partnership",
  "Network of like-minded organizations",
];

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Partners & Collaborations
              </h1>
              <p className="text-xl text-white/90">
                We collaborate with mental health professionals, educational
                institutions, faith-based organizations, law enforcement, veteran
                agencies, and community partners united by shared values and
                commitment to community well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Philosophy */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-dark mb-6">
              Our Partnership Philosophy
            </h2>
            <p className="text-lg text-text-body mb-8">
              Partnerships are formed around shared values, ethical standards,
              and commitment to community well-being. We seek collaborative
              relationships that enhance our collective capacity to serve. Every
              partnership is built on mutual respect, transparency, and a shared
              vision for positive community impact.
            </p>
          </div>
        </Section>

        {/* Partner Categories */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Who We Partner With</SectionTitle>
            <SectionDescription>
              We collaborate with organizations across multiple sectors to
              maximize our impact.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-lg bg-horizons-green/10 text-horizons-green flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {category.title}
                </h3>
                <p className="text-text-muted text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Partnership Benefits */}
        <Section background="white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-6">
                Benefits of Partnership
              </h2>
              <p className="text-text-body mb-6">
                Partnering with New Horizons Foundation offers numerous
                opportunities to expand your organization&apos;s reach and
                impact while contributing to meaningful community change.
              </p>
              <ul className="space-y-3">
                {partnershipBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-horizons-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
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
                    </div>
                    <span className="text-text-body">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-horizons-green/10 to-foundation-blue/10 rounded-2xl p-8">
              <h3 className="font-semibold text-text-dark mb-4">
                Partnership Opportunities Include:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-hope-gold font-bold">01</span>
                  <div>
                    <p className="font-medium text-text-dark">
                      Program Collaboration
                    </p>
                    <p className="text-text-muted text-sm">
                      Joint development and delivery of programs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-hope-gold font-bold">02</span>
                  <div>
                    <p className="font-medium text-text-dark">
                      Resource Sharing
                    </p>
                    <p className="text-text-muted text-sm">
                      Sharing expertise, materials, and networks
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-hope-gold font-bold">03</span>
                  <div>
                    <p className="font-medium text-text-dark">
                      Joint Funding
                    </p>
                    <p className="text-text-muted text-sm">
                      Collaborative grant applications and fundraising
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-hope-gold font-bold">04</span>
                  <div>
                    <p className="font-medium text-text-dark">
                      Community Events
                    </p>
                    <p className="text-text-muted text-sm">
                      Co-hosted events and community engagement
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Become a Partner
            </SectionTitle>
            <SectionDescription className="text-white/90">
              We&apos;re always looking to connect with organizations that share
              our commitment to community mental health and well-being.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="accent" size="lg">
              Contact Us to Partner
            </Button>
            <Button
              href="/support"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-horizons-green"
            >
              Support Our Mission
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
