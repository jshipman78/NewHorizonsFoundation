"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function StudentInterestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    program: "",
    year: "undergraduate",
    interest: "",
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
          _subject: `NHF Student Interest: ${formData.university} - ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          university: "",
          program: "",
          year: "undergraduate",
          interest: "",
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
          Interest Submitted
        </h3>
        <p className="text-text-muted">
          Thank you for your interest in joining an NHF Chapter. We&apos;ll
          connect you with a chapter near you or let you know when one launches
          at your university.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="si-name"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Your Name <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="si-name"
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
            htmlFor="si-email"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="si-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="you@university.edu"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="si-university"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            University <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="si-university"
            name="university"
            required
            value={formData.university}
            onChange={handleChange}
            className={inputClasses}
            placeholder="University name"
          />
        </div>
        <div>
          <label
            htmlFor="si-program"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Program / Major
          </label>
          <input
            type="text"
            id="si-program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. Psychology, Counseling"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="si-year"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Academic Level
          </label>
          <select
            id="si-year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            <option value="undergraduate">Undergraduate</option>
            <option value="graduate">Graduate Student</option>
            <option value="doctoral">Doctoral Student</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="si-interest"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Area of Interest
          </label>
          <select
            id="si-interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            <option value="">Select...</option>
            <option value="clinical">Clinical Mental Health</option>
            <option value="counseling">Counseling</option>
            <option value="psychology">Psychology</option>
            <option value="social-work">Social Work</option>
            <option value="behavioral-health">Behavioral Health</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="si-message"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Anything else you&apos;d like us to know?
        </label>
        <textarea
          id="si-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Career goals, specific interests, questions..."
        />
      </div>

      {status === "error" && (
        <div
          className="bg-error/10 border border-error rounded-lg p-4 text-error text-sm"
          role="alert"
        >
          Something went wrong. Please try again or contact us directly at
          info@thenewhorizonsfoundation.org.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting..." : "Join a Chapter"}
      </Button>
    </form>
  );
}

export default StudentInterestForm;
