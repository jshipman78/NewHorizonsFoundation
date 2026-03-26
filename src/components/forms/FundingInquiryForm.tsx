"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const organizationTypes = [
  { value: "hospital", label: "Hospital / Health System" },
  { value: "corporate", label: "Corporation / Business" },
  { value: "foundation", label: "Foundation / Trust" },
  { value: "government", label: "Government Agency" },
  { value: "community", label: "Community Organization" },
  { value: "other", label: "Other" },
];

export function FundingInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    organization: "",
    organizationType: "hospital",
    email: "",
    phone: "",
    fundingType: "grant",
    estimatedAmount: "",
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
          _subject: `NHF Funding Inquiry: ${formData.organization} - ${formData.fundingType}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          title: "",
          organization: "",
          organizationType: "hospital",
          email: "",
          phone: "",
          fundingType: "grant",
          estimatedAmount: "",
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
          Inquiry Submitted
        </h3>
        <p className="text-text-muted">
          Thank you for your interest in partnering with New Horizons
          Foundation. Our team will review your inquiry and respond within 2
          business days.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Submit Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fi-name"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Contact Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="fi-name"
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
            htmlFor="fi-title"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Title / Role
          </label>
          <input
            type="text"
            id="fi-title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. Grants Manager"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fi-organization"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Organization <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="fi-organization"
            name="organization"
            required
            value={formData.organization}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Organization name"
          />
        </div>
        <div>
          <label
            htmlFor="fi-organizationType"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Organization Type
          </label>
          <select
            id="fi-organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            {organizationTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fi-email"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="fi-email"
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
            htmlFor="fi-phone"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="fi-phone"
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
            htmlFor="fi-fundingType"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Funding Type
          </label>
          <select
            id="fi-fundingType"
            name="fundingType"
            value={formData.fundingType}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            <option value="grant">Grant</option>
            <option value="sponsorship">Corporate Sponsorship</option>
            <option value="institutional">Institutional Partnership</option>
            <option value="endowment">Endowment / Planned Giving</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="fi-estimatedAmount"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Estimated Amount (if known)
          </label>
          <input
            type="text"
            id="fi-estimatedAmount"
            name="estimatedAmount"
            value={formData.estimatedAmount}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. $5,000"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="fi-message"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Additional Information
        </label>
        <textarea
          id="fi-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your funding priorities, timeline, or any questions..."
        />
      </div>

      {status === "error" && (
        <div
          className="bg-error/10 border border-error rounded-lg p-4 text-error text-sm"
          role="alert"
        >
          Something went wrong. Please try again or contact us directly at
          funding@thenewhorizonsfoundation.org.
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
          : "Submit Funding Inquiry"}
      </Button>
    </form>
  );
}

export default FundingInquiryForm;
