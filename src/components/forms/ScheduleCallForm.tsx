"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const timePreferences = [
  { value: "morning", label: "Morning (9am – 12pm)" },
  { value: "afternoon", label: "Afternoon (12pm – 4pm)" },
  { value: "evening", label: "Evening (4pm – 6pm)" },
  { value: "flexible", label: "Flexible" },
];

export function ScheduleCallForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    topic: "",
    preferredTime: "flexible",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
          _subject: `NHF Call Request: ${formData.name} — ${formData.topic || "General"}`,
          _cc: "Naili@TheNewHorizonsFoundation.org",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          topic: "",
          preferredTime: "flexible",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border border-border hover:border-foundation-blue-300 focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors";

  if (status === "success") {
    return (
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
          Request Received!
        </h3>
        <p className="text-text-muted">
          Thank you for your interest. We&apos;ll reach out within 24–48 hours
          to schedule your call.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="sc-name"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="sc-name"
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
            htmlFor="sc-organization"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Organization
          </label>
          <input
            type="text"
            id="sc-organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Organization name (optional)"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="sc-email"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="sc-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="sc-phone"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="sc-phone"
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
            htmlFor="sc-topic"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Topic of Interest
          </label>
          <select
            id="sc-topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            <option value="">Select a topic</option>
            <option value="programs">Programs & Services</option>
            <option value="sponsorship">Sponsorship & Partnerships</option>
            <option value="founding-100">Founding 100 Membership</option>
            <option value="funding">Institutional Funding</option>
            <option value="consulting">Consulting & Training</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="sc-preferredTime"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Preferred Call Time
          </label>
          <select
            id="sc-preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            {timePreferences.map((tp) => (
              <option key={tp.value} value={tp.value}>
                {tp.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="sc-message"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Additional Notes
        </label>
        <textarea
          id="sc-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Anything we should know before the call?"
        />
      </div>

      {status === "error" && (
        <div
          className="bg-error/10 border border-error rounded-lg p-4 text-error text-sm"
          role="alert"
        >
          Something went wrong. Please try again or contact us directly at
          DrDean@TheNewHorizonsFoundation.org.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting..." : "Request a Call"}
      </Button>
    </form>
  );
}

export default ScheduleCallForm;
