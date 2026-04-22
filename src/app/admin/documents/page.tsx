"use client";

import { useState } from "react";
import {
  generateDonationReceipt,
  generateNonCashReceipt,
  generateRecurringReceipt,
} from "@/lib/pdf/donation-receipt";
import { generateFoundingCertificate } from "@/lib/pdf/founding-certificate";

type Tab = "donation" | "non-cash" | "recurring" | "certificate";

const tabs: { id: Tab; label: string }[] = [
  { id: "donation", label: "Donation Receipt" },
  { id: "non-cash", label: "Non-Cash Receipt" },
  { id: "recurring", label: "Recurring Receipt" },
  { id: "certificate", label: "Founding Certificate" },
];

function FormField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A5336] focus:border-transparent text-sm"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1A5336] focus:border-transparent text-sm"
        />
      )}
    </div>
  );
}

function DonationReceiptForm() {
  const [donorName, setDonorName] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [amount, setAmount] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleGenerate = () => {
    const doc = generateDonationReceipt({
      donorName,
      donorAddress,
      donationDate,
      amount,
      receiptNumber,
      paymentMethod: paymentMethod || undefined,
    });
    doc.save(`NHF-Receipt-${receiptNumber || "draft"}.pdf`);
  };

  return (
    <div className="space-y-4">
      <FormField label="Donor Name" id="donor-name" value={donorName} onChange={setDonorName} placeholder="John Smith" />
      <FormField label="Donor Address" id="donor-address" value={donorAddress} onChange={setDonorAddress} placeholder="123 Main St, City, State ZIP" multiline />
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Donation Date" id="donation-date" value={donationDate} onChange={setDonationDate} placeholder="April 22, 2026" />
        <FormField label="Receipt Number" id="receipt-number" value={receiptNumber} onChange={setReceiptNumber} placeholder="NHF-2026-001" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Amount (without $)" id="amount" value={amount} onChange={setAmount} placeholder="5,000.00" />
        <FormField label="Payment Method (optional)" id="payment-method" value={paymentMethod} onChange={setPaymentMethod} placeholder="Check, Credit Card, Wire" />
      </div>
      <button onClick={handleGenerate} className="w-full bg-[#1A5336] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#215C41] transition-colors">
        Generate Donation Receipt PDF
      </button>
    </div>
  );
}

function NonCashReceiptForm() {
  const [donorName, setDonorName] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [donationDate, setDonationDate] = useState("");
  const [description, setDescription] = useState("");
  const [estimatedValue, setEstimatedValue] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");

  const handleGenerate = () => {
    const doc = generateNonCashReceipt({
      donorName,
      donorAddress,
      donationDate,
      description,
      estimatedValue,
      receiptNumber,
    });
    doc.save(`NHF-NonCash-Receipt-${receiptNumber || "draft"}.pdf`);
  };

  return (
    <div className="space-y-4">
      <FormField label="Donor Name" id="nc-donor-name" value={donorName} onChange={setDonorName} placeholder="John Smith" />
      <FormField label="Donor Address" id="nc-donor-address" value={donorAddress} onChange={setDonorAddress} placeholder="123 Main St, City, State ZIP" multiline />
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Donation Date" id="nc-donation-date" value={donationDate} onChange={setDonationDate} placeholder="April 22, 2026" />
        <FormField label="Receipt Number" id="nc-receipt-number" value={receiptNumber} onChange={setReceiptNumber} placeholder="NHF-NC-2026-001" />
      </div>
      <FormField label="Description of Property" id="nc-description" value={description} onChange={setDescription} placeholder="Describe the donated property..." multiline />
      <FormField label="Donor's Estimated Value (without $)" id="nc-value" value={estimatedValue} onChange={setEstimatedValue} placeholder="1,000.00" />
      <button onClick={handleGenerate} className="w-full bg-[#1A5336] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#215C41] transition-colors">
        Generate Non-Cash Receipt PDF
      </button>
    </div>
  );
}

function RecurringReceiptForm() {
  const [donorName, setDonorName] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [periodStart, setPeriodStart] = useState("");
  const [periodEnd, setPeriodEnd] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [numberOfGifts, setNumberOfGifts] = useState("");
  const [receiptNumber, setReceiptNumber] = useState("");

  const handleGenerate = () => {
    const doc = generateRecurringReceipt({
      donorName,
      donorAddress,
      periodStart,
      periodEnd,
      totalAmount,
      numberOfGifts,
      receiptNumber,
    });
    doc.save(`NHF-Recurring-Receipt-${receiptNumber || "draft"}.pdf`);
  };

  return (
    <div className="space-y-4">
      <FormField label="Donor Name" id="rec-donor-name" value={donorName} onChange={setDonorName} placeholder="John Smith" />
      <FormField label="Donor Address" id="rec-donor-address" value={donorAddress} onChange={setDonorAddress} placeholder="123 Main St, City, State ZIP" multiline />
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Period Start" id="rec-period-start" value={periodStart} onChange={setPeriodStart} placeholder="January 1, 2026" />
        <FormField label="Period End" id="rec-period-end" value={periodEnd} onChange={setPeriodEnd} placeholder="December 31, 2026" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Total Amount (without $)" id="rec-total" value={totalAmount} onChange={setTotalAmount} placeholder="6,000.00" />
        <FormField label="Number of Gifts" id="rec-gifts" value={numberOfGifts} onChange={setNumberOfGifts} placeholder="12" />
      </div>
      <FormField label="Receipt Number" id="rec-receipt-number" value={receiptNumber} onChange={setReceiptNumber} placeholder="NHF-REC-2026-001" />
      <button onClick={handleGenerate} className="w-full bg-[#1A5336] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#215C41] transition-colors">
        Generate Recurring Receipt PDF
      </button>
    </div>
  );
}

function FoundingCertificateForm() {
  const [fullName, setFullName] = useState("");
  const [date, setDate] = useState("");
  const [certificateId, setCertificateId] = useState("NHF-FM-");

  const handleGenerate = () => {
    const doc = generateFoundingCertificate({
      fullName,
      date,
      certificateId,
    });
    doc.save(`NHF-Founding-Certificate-${certificateId}.pdf`);
  };

  return (
    <div className="space-y-4">
      <FormField label="Full Name (as it will appear on certificate)" id="cert-name" value={fullName} onChange={setFullName} placeholder="Dr. Jane Smith" />
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Date of Issuance" id="cert-date" value={date} onChange={setDate} placeholder="April 22, 2026" />
        <FormField label="Certificate ID" id="cert-id" value={certificateId} onChange={setCertificateId} placeholder="NHF-FM-0001" />
      </div>
      <p className="text-xs text-gray-500">
        Certificate IDs run from NHF-FM-0001 through NHF-FM-0100 for the Founding 100 program.
      </p>
      <button onClick={handleGenerate} className="w-full bg-[#E8A730] text-[#1A202C] font-semibold py-3 px-6 rounded-lg hover:bg-[#C68910] transition-colors">
        Generate Founding Certificate PDF
      </button>
    </div>
  );
}

export default function AdminDocumentsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("donation");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1A5336] text-white py-6">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-2xl font-bold">NHF Document Generator</h1>
          <p className="text-sm text-green-200 mt-1">Internal tool — not linked on public site</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#1A5336] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {tabs.find((t) => t.id === activeTab)?.label}
          </h2>

          {activeTab === "donation" && <DonationReceiptForm />}
          {activeTab === "non-cash" && <NonCashReceiptForm />}
          {activeTab === "recurring" && <RecurringReceiptForm />}
          {activeTab === "certificate" && <FoundingCertificateForm />}
        </div>

        {/* Help text */}
        <p className="text-xs text-gray-400 text-center mt-6">
          PDFs are generated entirely in the browser. No data is sent to any server.
        </p>
      </div>
    </div>
  );
}
