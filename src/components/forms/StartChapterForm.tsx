"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function StartChapterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    program: "",
    graduationYear: "",
    role: "student",
    facultyAdvisor: "",
    facultyAdvisorEmail: "",
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
          _subject: `NHF Chapter Application: ${formData.university}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          university: "",
          program: "",
          graduationYear: "",
          role: "student",
          facultyAdvisor: "",
          facultyAdvisorEmail: "",
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
          Application Submitted
        </h3>
        <p className="text-text-muted">
          Thank you for your interest in starting an NHF Chapter. Our team will
          review your application and respond within 5 business days.
        </p>
        <Button
          variant="outline"
          className="mt-4"
          onClick={() => setStatus("idle")}
        >
          Submit Another Application
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
            Your Name <span aria-hidden="true">*</span>
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
            htmlFor="sc-role"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Your Role <span aria-hidden="true">*</span>
          </label>
          <select
            id="sc-role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty Member</option>
            <option value="staff">University Staff</option>
          </select>
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
            placeholder="you@university.edu"
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

      <div>
        <label
          htmlFor="sc-university"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          University <span aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="sc-university"
          name="university"
          required
          value={formData.university}
          onChange={handleChange}
          className={inputClasses}
          placeholder="University name"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="sc-program"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Program / Department
          </label>
          <input
            type="text"
            id="sc-program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. Clinical Mental Health Counseling"
          />
        </div>
        <div>
          <label
            htmlFor="sc-graduationYear"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Expected Graduation Year
          </label>
          <input
            type="text"
            id="sc-graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={handleChange}
            className={inputClasses}
            placeholder="e.g. 2027"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="sc-facultyAdvisor"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Faculty Advisor Name
          </label>
          <input
            type="text"
            id="sc-facultyAdvisor"
            name="facultyAdvisor"
            value={formData.facultyAdvisor}
            onChange={handleChange}
            className={inputClasses}
            placeholder="If identified"
          />
        </div>
        <div>
          <label
            htmlFor="sc-facultyAdvisorEmail"
            className="block text-sm font-medium text-text-dark mb-2"
          >
            Faculty Advisor Email
          </label>
          <input
            type="email"
            id="sc-facultyAdvisorEmail"
            name="facultyAdvisorEmail"
            value={formData.facultyAdvisorEmail}
            onChange={handleChange}
            className={inputClasses}
            placeholder="advisor@university.edu"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="sc-message"
          className="block text-sm font-medium text-text-dark mb-2"
        >
          Why do you want to start a chapter?
        </label>
        <textarea
          id="sc-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your interest, your campus community, and what you hope to accomplish..."
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
        {status === "submitting"
          ? "Submitting..."
          : "Submit Chapter Application"}
      </Button>
    </form>
  );
}

export default StartChapterForm;
