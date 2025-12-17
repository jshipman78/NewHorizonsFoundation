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

const contactCategories = [
  { value: "general", label: "General Inquiry" },
  { value: "partnerships", label: "Partnerships & Sponsorships" },
  { value: "faith", label: "Faith & Church Partnerships" },
  { value: "media", label: "Media Inquiries" },
  { value: "programs", label: "Programs & Services" },
  { value: "volunteer", label: "Volunteer Opportunities" },
];

const contactInfo = [
  {
    title: "General Inquiries",
    email: "info@newhorizonsfoundation.org",
    icon: (
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
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Partnerships & Sponsorships",
    email: "partnerships@newhorizonsfoundation.org",
    icon: (
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
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Faith & Church Partnerships",
    email: "faithpartners@newhorizonsfoundation.org",
    icon: (
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
          d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
        />
      </svg>
    ),
  },
  {
    title: "Media Inquiries",
    email: "media@newhorizonsfoundation.org",
    icon: (
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
          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "general",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission - replace with actual form handler (Formspree, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", category: "general", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-horizons-green to-foundation-blue text-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-white/90">
                We&apos;d love to hear from you. Whether you have questions about our
                programs, want to explore partnership opportunities, or simply
                want to learn more about our work, we&apos;re here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <Section background="white">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Send Us a Message
              </h2>
              <p className="text-text-muted mb-8">
                We respond within 2 business days.
              </p>

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
                    Message Sent!
                  </h3>
                  <p className="text-text-muted">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setStatus("idle")}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors bg-white"
                    >
                      {contactCategories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {status === "error" && (
                    <div className="bg-error/10 border border-error rounded-lg p-4 text-error text-sm">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-text-muted mb-8">
                Reach out directly to the appropriate department for faster
                assistance.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-bg-light"
                  >
                    <div className="p-3 rounded-lg bg-horizons-green/10 text-horizons-green">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-text-dark">
                        {item.title}
                      </h3>
                      <a
                        href={`mailto:${item.email}`}
                        className="text-foundation-blue hover:underline"
                      >
                        {item.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-hope-gold/10 border border-hope-gold/20">
                <h3 className="font-semibold text-text-dark mb-2">
                  Looking to Partner?
                </h3>
                <p className="text-text-muted text-sm mb-4">
                  We welcome partnerships with mental health professionals,
                  educational institutions, faith-based organizations, and
                  community groups.
                </p>
                <Button href="/partners" variant="outline" size="sm">
                  Learn About Partnerships
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="light">
          <SectionHeader>
            <SectionTitle>Ready to Make an Impact?</SectionTitle>
            <SectionDescription>
              Join us in advancing mental health access and community resilience.
            </SectionDescription>
          </SectionHeader>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/support" variant="primary" size="lg">
              Support Our Mission
            </Button>
            <Button href="/programs" variant="outline" size="lg">
              Explore Programs
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
