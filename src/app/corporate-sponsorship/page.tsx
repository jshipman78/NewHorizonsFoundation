"use client";

import { useState } from "react";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { TrustFooterStrip } from "@/components/ui/TrustFooterStrip";
import { ORG } from "@/lib/nhf-constants";

export default function CorporateSponsorshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    sponsorshipInterest: "",
    budgetRange: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    const FORMSPREE_ENDPOINT =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
      "https://formspree.io/f/YOUR_FORM_ID";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `NHF Corporate Sponsorship Inquiry: ${formData.organization}`,
          _cc: ORG.emailNaili,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          sponsorshipInterest: "",
          budgetRange: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border hover:border-foundation-blue-300 focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white/80 font-medium mb-4 uppercase tracking-wider text-sm">
                Corporate Sponsorship
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Invest in Prevention.
                <br />
                Lead With Impact.
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Mental health challenges are rising across all age groups—yet
                most interventions occur only after a crisis. The New Horizons
                Foundation partners with forward-thinking organizations to bring
                early intervention, education, and prevention directly into
                schools, families, and communities. Your organization has the
                opportunity to be part of a measurable, community-wide solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="#sponsorship-tiers" variant="accent" size="lg">
                  View Sponsorship Tiers
                </Button>
                <Button href="#partnership-form" variant="outline-light" size="lg">
                  Start a Partnership
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Corporate Sponsorship Matters */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-8 text-center">
              Why Corporate Sponsorship Matters
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: "🤝",
                  title: "Strengthen Community Mental Health",
                  text: "Support programs that bring prevention, education, and early intervention directly into schools, families, and communities.",
                },
                {
                  icon: "🌱",
                  title: "Align Brand With Prevention & Innovation",
                  text: "Position your organization alongside evidence-based mental health education and forward-thinking community initiatives.",
                },
                {
                  icon: "🏆",
                  title: "Demonstrate Leadership",
                  text: "Show your commitment to proactive social impact and corporate responsibility through a meaningful, visible partnership.",
                },
                {
                  icon: "📊",
                  title: "Contribute to Measurable Social Impact",
                  text: "Invest in programs with trackable outcomes that create long-term, sustainable change across communities.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-bg-light rounded-xl p-6 border border-border"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Our Sponsorship Model */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Our Sponsorship Model</SectionTitle>
            <SectionDescription>
              New Horizons Foundation offers tiered sponsorship levels designed
              to align your investment with meaningful, trackable community
              outcomes. Every dollar goes directly toward prevention programming,
              education, and family support.
            </SectionDescription>
          </SectionHeader>
        </Section>

        {/* Sponsorship Tiers */}
        <Section background="white" id="sponsorship-tiers">
          <SectionHeader>
            <SectionTitle>Sponsorship Tiers</SectionTitle>
            <SectionDescription>
              Choose a partnership level that reflects your organization&apos;s
              commitment to community well-being.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Community Sponsor - $5K */}
            <div className="bg-white rounded-xl p-8 flex flex-col border border-border">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">
                Community Sponsor
              </h3>
              <p className="text-2xl font-bold text-horizons-green mb-2">
                $5,000
              </p>
              <p className="text-text-muted text-sm mb-4">
                Supports youth group programming, parent education sessions, and
                community workshops.
              </p>
              <p className="text-xs font-semibold text-text-dark uppercase tracking-wider mb-3">Recognition</p>
              <ul className="space-y-3 flex-1">
                {[
                  "Name listed on website sponsorship page",
                  "Recognition in select community materials",
                  "Social media acknowledgment",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
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
                    <span className="text-text-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#partnership-form"
                variant="outline"
                className="w-full mt-6"
              >
                Get Started
              </Button>
            </div>

            {/* Premier Community Partner - $10K (highlighted) */}
            <div className="bg-white rounded-xl p-8 flex flex-col border-2 border-hope-gold shadow-xl ring-4 ring-hope-gold/10 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-hope-gold text-text-dark text-sm font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                Most Popular
              </div>
              <div className="text-3xl mb-3">🌿</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">
                Premier Community Partner
              </h3>
              <p className="text-2xl font-bold text-horizons-green mb-2">
                $10,000
              </p>
              <p className="text-text-muted text-sm mb-4">
                Supports multi-session youth programs, school-based mental health
                initiatives, and regional outreach.
              </p>
              <p className="text-xs font-semibold text-text-dark uppercase tracking-wider mb-3">Recognition</p>
              <ul className="space-y-3 flex-1">
                {[
                  "All Community Sponsor benefits",
                  "Featured recognition in program materials",
                  "Co-branded community reports",
                  "Invitation to events",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
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
                    <span className="text-text-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#partnership-form"
                variant="primary"
                className="w-full mt-6"
              >
                Become a Partner
              </Button>
            </div>

            {/* Founding Institutional Sponsor - $15K+ */}
            <div className="bg-white rounded-xl p-8 flex flex-col border border-border">
              <div className="text-3xl mb-3">🌳</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">
                Founding Institutional Sponsor
              </h3>
              <p className="text-2xl font-bold text-horizons-green mb-2">
                $15,000+
              </p>
              <p className="text-text-muted text-sm mb-4">
                Supports large-scale community programming, multi-site
                initiatives, and institutional-level partnerships.
              </p>
              <p className="text-xs font-semibold text-text-dark uppercase tracking-wider mb-3">Recognition</p>
              <ul className="space-y-3 flex-1">
                {[
                  "All previous tier benefits",
                  "Custom sponsorship structure",
                  "Strategic collaboration opportunities",
                  "Advisory-level engagement",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
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
                    <span className="text-text-body text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="#partnership-form"
                variant="outline"
                className="w-full mt-6"
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </Section>

        {/* What $10K Does */}
        <Section background="light">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-horizons-green to-foundation-blue rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                What $10,000 Makes Possible
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "🎓",
                    text: "Fund a full 8-week Strong Minds Program cycle for 30+ youth in a local school",
                  },
                  {
                    icon: "👨‍👩‍👧",
                    text: "Deliver 4 parent education workshops reaching 100+ families with prevention tools",
                  },
                  {
                    icon: "🏫",
                    text: "Provide mental health literacy training for an entire school faculty and staff",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-4">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <p className="text-lg text-white/95">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button href="#partnership-form" variant="accent" size="lg">
                  Invest $10K in Your Community
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Custom Sponsorship Opportunities */}
        <Section background="white">
          <SectionHeader>
            <SectionTitle>Custom Sponsorship Opportunities</SectionTitle>
            <SectionDescription>
              Beyond our standard tiers, we work with sponsors to create
              tailored partnerships aligned with your organization&apos;s
              mission and goals.
            </SectionDescription>
          </SectionHeader>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏫",
                title: "School-Based Initiatives",
                text: "Sponsor an entire school-based initiative bringing mental health education and early intervention directly to students and staff.",
              },
              {
                icon: "🎓",
                title: "Youth Program Series",
                text: "Fund a multi-session youth program series delivering prevention-focused curriculum to young people in your community.",
              },
              {
                icon: "🌍",
                title: "Community-Wide Campaigns",
                text: "Support community-wide mental health campaigns that raise awareness, reduce stigma, and expand access to prevention resources.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-light rounded-xl p-6 border border-border"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* What Your Support Makes Possible */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>What Your Support Makes Possible</SectionTitle>
          </SectionHeader>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔍",
                title: "Early Identification",
                text: "Early identification of mental health concerns in youth and families before they escalate to crisis.",
              },
              {
                icon: "📚",
                title: "Education & Prevention",
                text: "Increased access to education and prevention resources across schools and communities.",
              },
              {
                icon: "💬",
                title: "Reduced Stigma",
                text: "Reducing the stigma around mental health through community-wide awareness and open conversation.",
              },
              {
                icon: "👨‍👩‍👧",
                title: "Stronger Families & Communities",
                text: "Stronger families and more resilient communities equipped with the tools to thrive.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 text-center border border-border"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Trust Section */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-text-dark mb-4 text-center">
              Why Organizations Trust Us
            </h2>
            <p className="text-text-muted text-center mb-8 max-w-2xl mx-auto">
              501(c)(3) public charity, led by licensed clinicians and
              experienced educators. Our ecosystem includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-bg-light rounded-xl p-6 border border-border text-center">
                <p className="font-semibold text-text-dark mb-1">
                  New Horizons Center for Healing
                </p>
                <p className="text-text-muted text-sm">Clinical Services</p>
              </div>
              <div className="bg-bg-light rounded-xl p-6 border border-border text-center">
                <p className="font-semibold text-text-dark mb-1">
                  American Psychotherapy Institute
                </p>
                <p className="text-text-muted text-sm">
                  Education &amp; Training
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/transparency" variant="outline">
                View Transparency &amp; Financials {"\u2192"}
              </Button>
              <Button href="/downloads" variant="outline">
                Download Compliance Documents {"\u2192"}
              </Button>
            </div>
          </div>
        </Section>

        {/* Partnership Intake Form */}
        <Section background="light" id="partnership-form">
          <SectionHeader>
            <SectionTitle>Start Your Partnership</SectionTitle>
            <SectionDescription>
              Tell us about your organization and sponsorship interests.
              Our team will respond within 2 business days with a tailored
              partnership proposal.
            </SectionDescription>
          </SectionHeader>
          <div className="max-w-2xl mx-auto">
            {status === "success" ? (
              <div className="bg-success/10 border border-success rounded-lg p-6 text-center">
                <svg
                  className="w-12 h-12 text-success mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-text-dark mb-2">
                  Inquiry Submitted
                </h3>
                <p className="text-text-muted">
                  Thank you for your interest in partnering with{" "}
                  {ORG.displayName}. Our team will review your inquiry and
                  respond within 2 business days.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setStatus("idle")}
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="cs-name"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="cs-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cs-organization"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Organization <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="cs-organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Organization name"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="cs-email"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Email <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="cs-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="you@organization.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="cs-phone"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="cs-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="(xxx) xxx-xxxx"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="cs-sponsorshipInterest"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Sponsorship Interest <span aria-hidden="true">*</span>
                    </label>
                    <select
                      id="cs-sponsorshipInterest"
                      name="sponsorshipInterest"
                      required
                      value={formData.sponsorshipInterest}
                      onChange={handleChange}
                      className={`${inputClasses} bg-white`}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="community-sponsor">
                        Community Sponsor ($5,000)
                      </option>
                      <option value="premier-partner">
                        Premier Community Partner ($10,000)
                      </option>
                      <option value="founding-institutional">
                        Founding Institutional Sponsor ($15,000+)
                      </option>
                      <option value="custom">
                        Custom Sponsorship Opportunity
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="cs-budgetRange"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="cs-budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className={`${inputClasses} bg-white`}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-15k">$10,000 - $15,000</option>
                      <option value="15k+">$15,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="cs-message"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="cs-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your sponsorship goals, timeline, or any questions..."
                  />
                </div>

                {status === "error" && (
                  <div
                    className="bg-error/10 border border-error rounded-lg p-4 text-error text-sm"
                    role="alert"
                  >
                    Something went wrong. Please try again or contact us
                    directly at {ORG.email}.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting"
                    ? "Submitting..."
                    : "Submit Sponsorship Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </Section>

        {/* Final CTA */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Lead With Impact. Partner With Purpose.
            </SectionTitle>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#partnership-form" variant="accent" size="lg">
              Become a Sponsor {"\u2192"}
            </Button>
            <Button href="/downloads" variant="outline-light" size="lg">
              Download Sponsorship Packet {"\u2192"}
            </Button>
          </div>
        </Section>

        <TrustFooterStrip />
      </main>
      <Footer />
    </>
  );
}
