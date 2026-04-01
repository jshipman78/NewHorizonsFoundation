"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { ORG } from "@/lib/nhf-constants";

const organizationTypes = [
  { value: "", label: "Select organization type" },
  { value: "school", label: "School / School District" },
  { value: "healthcare", label: "Healthcare Organization" },
  { value: "nonprofit", label: "Nonprofit / Community Organization" },
  { value: "corporate", label: "Corporation / Business" },
  { value: "government", label: "Government Agency" },
  { value: "other", label: "Other" },
];

const serviceInterests = [
  { value: "workshops", label: "Workshops & Trainings" },
  { value: "program-development", label: "Program Development" },
  { value: "consultation", label: "Consultation & Strategy" },
  { value: "institutional-partnership", label: "Institutional Partnership" },
  { value: "other", label: "Other / Not Sure" },
];

const timelineOptions = [
  { value: "", label: "Select timeline" },
  { value: "immediate", label: "Immediate (within 30 days)" },
  { value: "1-3-months", label: "1 - 3 months" },
  { value: "3-6-months", label: "3 - 6 months" },
  { value: "6-plus", label: "6+ months / Planning phase" },
];

const budgetRanges = [
  { value: "", label: "Select estimated budget" },
  { value: "under-1500", label: "Under $1,500" },
  { value: "1500-5000", label: "$1,500 - $5,000" },
  { value: "5000-10000", label: "$5,000 - $10,000" },
  { value: "10000-25000", label: "$10,000 - $25,000" },
  { value: "25000-plus", label: "$25,000+" },
];

const decisionOptions = [
  { value: "", label: "Select one" },
  { value: "yes", label: "Yes, I am the decision-maker" },
  { value: "part-of-team", label: "Part of a decision-making team" },
  { value: "no", label: "No, I am researching for someone else" },
];

export function ProposalForm() {
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    titleRole: "",
    email: "",
    phone: "",
    organizationType: "",
    serviceInterests: [] as string[],
    projectDetails: "",
    targetPopulation: "",
    timeline: "",
    budget: "",
    decisionAuthority: "",
    consultationPreference: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      serviceInterests: prev.serviceInterests.includes(value)
        ? prev.serviceInterests.filter((v) => v !== value)
        : [...prev.serviceInterests, value],
    }));
  };

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
          serviceInterests: formData.serviceInterests.join(", "),
          _subject: `NHF Proposal Request: ${formData.orgName || formData.contactName} — ${formData.budget}`,
          _cc: "Naili@TheNewHorizonsFoundation.org",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          orgName: "",
          contactName: "",
          titleRole: "",
          email: "",
          phone: "",
          organizationType: "",
          serviceInterests: [],
          projectDetails: "",
          targetPopulation: "",
          timeline: "",
          budget: "",
          decisionAuthority: "",
          consultationPreference: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          Proposal Request Received
        </h3>
        <p className="text-text-muted">
          Thank you for your interest in working with {ORG.displayName}. Our team will
          review your request and respond within 24-48 business hours.
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <fieldset>
        <legend className="text-lg font-semibold text-text-dark mb-4">
          Contact Information
        </legend>
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="svc-orgName" className="block text-sm font-medium text-text-dark mb-2">
                Organization Name <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="svc-orgName"
                name="orgName"
                required
                value={formData.orgName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Organization name"
              />
            </div>
            <div>
              <label htmlFor="svc-contactName" className="block text-sm font-medium text-text-dark mb-2">
                Contact Name <span aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                id="svc-contactName"
                name="contactName"
                required
                value={formData.contactName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Full name"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="svc-titleRole" className="block text-sm font-medium text-text-dark mb-2">
                Title / Role
              </label>
              <input
                type="text"
                id="svc-titleRole"
                name="titleRole"
                value={formData.titleRole}
                onChange={handleChange}
                className={inputClasses}
                placeholder="e.g. Program Director"
              />
            </div>
            <div>
              <label htmlFor="svc-email" className="block text-sm font-medium text-text-dark mb-2">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="svc-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                placeholder="you@organization.com"
              />
            </div>
            <div>
              <label htmlFor="svc-phone" className="block text-sm font-medium text-text-dark mb-2">
                Phone <span className="text-text-muted font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="svc-phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="(xxx) xxx-xxxx"
              />
            </div>
          </div>
        </div>
      </fieldset>

      {/* Organization Type */}
      <fieldset>
        <legend className="text-lg font-semibold text-text-dark mb-4">
          Organization Details
        </legend>
        <div>
          <label htmlFor="svc-organizationType" className="block text-sm font-medium text-text-dark mb-2">
            Organization Type <span aria-hidden="true">*</span>
          </label>
          <select
            id="svc-organizationType"
            name="organizationType"
            required
            value={formData.organizationType}
            onChange={handleChange}
            className={`${inputClasses} bg-white`}
          >
            {organizationTypes.map((type) => (
              <option key={type.value} value={type.value} disabled={type.value === ""}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      {/* Service Interest */}
      <fieldset>
        <legend className="text-lg font-semibold text-text-dark mb-4">
          Service Interest
        </legend>
        <p className="text-sm text-text-muted mb-3">Select all that apply:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {serviceInterests.map((service) => (
            <label
              key={service.value}
              className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                formData.serviceInterests.includes(service.value)
                  ? "border-horizons-green bg-horizons-green-50"
                  : "border-border bg-white hover:border-foundation-blue-300"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.serviceInterests.includes(service.value)}
                onChange={() => handleCheckbox(service.value)}
                className="w-4 h-4 rounded border-border text-horizons-green focus:ring-horizons-green"
              />
              <span className="text-sm font-medium text-text-dark">{service.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Project Details */}
      <fieldset>
        <legend className="text-lg font-semibold text-text-dark mb-4">
          Project Details
        </legend>
        <div className="space-y-5">
          <div>
            <label htmlFor="svc-projectDetails" className="block text-sm font-medium text-text-dark mb-2">
              What are you trying to accomplish? <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="svc-projectDetails"
              name="projectDetails"
              required
              rows={4}
              value={formData.projectDetails}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              placeholder="Describe your goals, challenges, or the problem you're looking to address..."
            />
          </div>
          <div>
            <label htmlFor="svc-targetPopulation" className="block text-sm font-medium text-text-dark mb-2">
              Target Population
            </label>
            <input
              type="text"
              id="svc-targetPopulation"
              name="targetPopulation"
              value={formData.targetPopulation}
              onChange={handleChange}
              className={inputClasses}
              placeholder="e.g. K-8 students, parents, clinical staff, community members"
            />
          </div>
        </div>
      </fieldset>

      {/* Timeline & Budget */}
      <fieldset>
        <legend className="text-lg font-semibold text-text-dark mb-4">
          Timeline &amp; Budget
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="svc-timeline" className="block text-sm font-medium text-text-dark mb-2">
              Estimated Timeline <span aria-hidden="true">*</span>
            </label>
            <select
              id="svc-timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className={`${inputClasses} bg-white`}
            >
              {timelineOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="svc-budget" className="block text-sm font-medium text-text-dark mb-2">
              Estimated Budget <span aria-hidden="true">*</span>
            </label>
            <select
              id="svc-budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClasses} bg-white`}
            >
              {budgetRanges.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Decision Authority & Call Preference */}
      <fieldset>
        <legend className="text-lg font-semibold text-text-dark mb-4">
          Final Details
        </legend>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="svc-decisionAuthority" className="block text-sm font-medium text-text-dark mb-2">
              Are you the decision-maker for this project?
            </label>
            <select
              id="svc-decisionAuthority"
              name="decisionAuthority"
              value={formData.decisionAuthority}
              onChange={handleChange}
              className={`${inputClasses} bg-white`}
            >
              {decisionOptions.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="svc-consultationPreference" className="block text-sm font-medium text-text-dark mb-2">
              Preferred consultation format
            </label>
            <select
              id="svc-consultationPreference"
              name="consultationPreference"
              value={formData.consultationPreference}
              onChange={handleChange}
              className={`${inputClasses} bg-white`}
            >
              <option value="">No preference</option>
              <option value="phone">Phone call</option>
              <option value="video">Video call (Zoom)</option>
              <option value="in-person">In-person meeting</option>
              <option value="email">Email only</option>
            </select>
          </div>
        </div>
      </fieldset>

      {status === "error" && (
        <div
          className="bg-error/10 border border-error rounded-lg p-4 text-error text-sm"
          role="alert"
        >
          Something went wrong. Please try again or contact us directly at{" "}
          {ORG.email}.
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Submitting..." : "Request Proposal"}
      </Button>

      <p className="text-xs text-text-muted text-center">
        Your information is confidential and will only be used to prepare your proposal.
      </p>
    </form>
  );
}
