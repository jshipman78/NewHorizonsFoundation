"use client";

import { useState } from "react";

const STRIPE_ENABLED = !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

const presetAmounts = [25, 50, 100, 250, 500, 1000];

const givingTypes = [
  {
    id: "one-time",
    label: "One-Time Gift",
    description: "Make a single tax-deductible donation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    id: "monthly",
    label: "Monthly Giving",
    description: "Sustain prevention programs year-round",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
  },
  {
    id: "corporate",
    label: "Corporate Sponsorship",
    description: "Structured giving with recognition benefits",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
];

export function DonationPortal() {
  const [selectedType, setSelectedType] = useState("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const displayAmount = customAmount
    ? parseFloat(customAmount)
    : selectedAmount;

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setError(null);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
    setError(null);
  };

  const handleDonate = async () => {
    if (!displayAmount || displayAmount < 1) {
      setError("Please select or enter an amount of at least $1.00.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: displayAmount,
          type: selectedType,
          frequency: selectedType === "monthly" ? "monthly" : "one-time",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to start checkout. Please try again."
      );
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border overflow-hidden">
      {/* Giving Type Selector */}
      <div className="grid grid-cols-3 border-b border-border">
        {givingTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => {
              setSelectedType(type.id);
              setError(null);
            }}
            className={`p-4 md:p-6 text-center transition-all ${
              selectedType === type.id
                ? "bg-horizons-green/5 border-b-2 border-horizons-green"
                : "hover:bg-bg-light border-b-2 border-transparent"
            }`}
          >
            <div
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full mx-auto mb-2 flex items-center justify-center ${
                selectedType === type.id
                  ? "bg-horizons-green/10 text-horizons-green"
                  : "bg-bg-light text-text-muted"
              }`}
            >
              {type.icon}
            </div>
            <p
              className={`font-semibold text-xs md:text-sm ${
                selectedType === type.id
                  ? "text-horizons-green"
                  : "text-text-dark"
              }`}
            >
              {type.label}
            </p>
            <p className="text-text-muted text-xs mt-1 hidden md:block">
              {type.description}
            </p>
          </button>
        ))}
      </div>

      {/* Amount Section */}
      <div className="p-6 md:p-8">
        <h3 className="font-semibold text-text-dark mb-4">
          {selectedType === "monthly"
            ? "Select Monthly Amount"
            : selectedType === "corporate"
              ? "Sponsorship Amount"
              : "Select Donation Amount"}
        </h3>

        {/* Preset Amounts */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-4">
          {presetAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleAmountSelect(amount)}
              className={`py-3 px-2 rounded-lg font-semibold text-sm transition-all ${
                selectedAmount === amount && !customAmount
                  ? "bg-horizons-green text-white shadow-md"
                  : "bg-bg-light text-text-dark hover:bg-horizons-green/10 hover:text-horizons-green border border-border"
              }`}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted font-semibold text-lg">
            $
          </span>
          <input
            type="number"
            min="1"
            placeholder="Custom amount"
            value={customAmount}
            onChange={handleCustomAmountChange}
            className="w-full pl-8 pr-4 py-3 rounded-lg border border-border hover:border-foundation-blue-300 focus:border-foundation-blue focus:ring-2 focus:ring-foundation-blue/20 outline-none transition-colors text-lg"
          />
        </div>

        {/* Frequency note for monthly */}
        {selectedType === "monthly" && (
          <div className="bg-foundation-blue/5 rounded-lg p-4 mb-6 flex items-start gap-3">
            <svg
              className="w-5 h-5 text-foundation-blue flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-sm text-foundation-blue">
              You&apos;ll be charged ${displayAmount?.toLocaleString() || "0"}/month.
              Cancel anytime. Your recurring gift provides sustained support for
              prevention programs year-round.
            </p>
          </div>
        )}

        {/* Corporate note */}
        {selectedType === "corporate" && (
          <div className="bg-hope-gold/10 rounded-lg p-4 mb-6 flex items-start gap-3">
            <svg
              className="w-5 h-5 text-hope-gold flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-sm text-text-body">
              Corporate sponsors receive recognition benefits based on giving
              tier.{" "}
              <a
                href="/corporate-partners#sponsorship-tiers"
                className="text-foundation-blue hover:underline font-medium"
              >
                View sponsorship tiers
              </a>
              .
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-error/10 border border-error rounded-lg p-4 mb-4 text-error text-sm" role="alert">
            {error}
          </div>
        )}

        {/* Donate Button */}
        {STRIPE_ENABLED ? (
          <button
            onClick={handleDonate}
            disabled={isLoading || !displayAmount || displayAmount < 1}
            className="w-full bg-horizons-green text-white py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-horizons-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-md"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Redirecting to secure checkout...
              </span>
            ) : selectedType === "monthly" ? (
              `Give $${displayAmount?.toLocaleString() || "0"}/month`
            ) : (
              `Give $${displayAmount?.toLocaleString() || "0"}`
            )}
          </button>
        ) : (
          <div className="space-y-3">
            <div className="w-full bg-gray-100 text-text-muted py-4 rounded-lg font-semibold text-lg text-center border-2 border-dashed border-gray-300 cursor-not-allowed">
              <svg className="w-5 h-5 inline-block mr-2 -mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              Secure Online Payment Coming Soon
            </div>
            <p className="text-text-muted text-sm text-center">
              Our secure payment portal is being finalized. In the meantime,
              please use check or ACH transfer below, or{" "}
              <a
                href="/contact"
                className="text-foundation-blue hover:underline"
              >
                contact us
              </a>{" "}
              to arrange your contribution.
            </p>
          </div>
        )}

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border">
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            501(c)(3) Verified
          </div>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            Secure & Encrypted
          </div>
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <svg className="w-4 h-4 text-success" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tax Receipt Provided
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationPortal;
