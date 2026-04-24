"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";

interface SearchablePage {
  title: string;
  href: string;
  description: string;
  keywords: string[];
}

const pages: SearchablePage[] = [
  { title: "Home", href: "/", description: "New Horizons Foundation homepage — advancing mental health access, education, and community resilience", keywords: ["home", "main", "welcome"] },
  { title: "Programs", href: "/programs", description: "Our programs in mental health, youth leadership, veterans support, and cultural enrichment", keywords: ["programs", "initiatives", "services"] },
  { title: "Mental Health Programs", href: "/programs/mental-health", description: "Evidence-based mental health access and early intervention programs", keywords: ["mental health", "therapy", "counseling", "intervention", "wellness"] },
  { title: "Youth Leadership", href: "/programs/youth-leadership", description: "Developing future leaders through mentorship and ethical leadership programs", keywords: ["youth", "leadership", "mentorship", "students", "young", "education"] },
  { title: "Veterans & First Responders", href: "/programs/veterans-first-responders", description: "Dedicated mental health support for veterans and first responders", keywords: ["veterans", "first responders", "military", "firefighters", "police", "PTSD", "trauma"] },
  { title: "Cultural Enrichment", href: "/programs/cultural-enrichment", description: "Cultural programs fostering community connection and enrichment", keywords: ["culture", "arts", "community", "enrichment", "diversity"] },
  { title: "Services", href: "/services", description: "Professional services including consulting, training, and community support", keywords: ["services", "consulting", "training", "professional"] },
  { title: "Get Involved — Sponsorship & Giving", href: "/sponsorship", description: "Individual and organizational giving tiers to support our mission", keywords: ["donate", "give", "sponsor", "support", "contribute", "gift"] },
  { title: "Corporate Sponsorship", href: "/corporate-sponsorship", description: "Structured B2B sponsorship opportunities with recognition benefits", keywords: ["corporate", "business", "sponsor", "B2B", "company", "partnership"] },
  { title: "Founders Circle", href: "/founders-circle", description: "Join our founding supporters with significant giving commitments", keywords: ["founders", "founding", "circle", "major gift", "leadership giving"] },
  { title: "Founders Circle Recognition", href: "/founders-circle-recognition", description: "Recognition and benefits for Founders Circle members", keywords: ["recognition", "benefits", "founders", "members"] },
  { title: "Founding 100", href: "/founding-100", description: "Be one of the first 100 founding supporters of New Horizons Foundation", keywords: ["founding 100", "charter", "first supporters"] },
  { title: "Institutional Funding", href: "/institutional-funding", description: "Grants, institutional partnerships, and compliance documentation", keywords: ["grants", "institutional", "funding", "compliance", "foundation"] },
  { title: "Why Donate", href: "/why-donate", description: "See the impact of your contribution to mental health programs", keywords: ["why", "donate", "impact", "difference", "contribution"] },
  { title: "Donate", href: "/invest", description: "Make a tax-deductible donation to New Horizons Foundation", keywords: ["donate", "invest", "give", "payment", "contribution", "tax-deductible"] },
  { title: "Leadership", href: "/leadership", description: "Meet our leadership team and board of directors", keywords: ["leadership", "team", "board", "directors", "staff", "executives", "Dean Aslinia"] },
  { title: "Transparency", href: "/transparency", description: "Our commitment to transparency, accountability, and ethical governance", keywords: ["transparency", "accountability", "ethics", "governance", "financials", "990"] },
  { title: "Corporate Partners", href: "/corporate-partners", description: "Our corporate partners and business relationships", keywords: ["corporate", "partners", "business", "relationships"] },
  { title: "Partnerships", href: "/partnerships", description: "Partnership opportunities with New Horizons Foundation", keywords: ["partnerships", "collaborate", "alliance", "joint"] },
  { title: "Partners", href: "/partners", description: "Our valued partner organizations", keywords: ["partners", "organizations", "collaborators"] },
  { title: "Support", href: "/support", description: "Ways to support New Horizons Foundation's mission", keywords: ["support", "help", "assist", "contribute"] },
  { title: "Downloads", href: "/downloads", description: "Downloadable resources, reports, and materials", keywords: ["downloads", "resources", "documents", "PDF", "reports", "materials"] },
  { title: "Contact", href: "/contact", description: "Get in touch with New Horizons Foundation", keywords: ["contact", "email", "phone", "reach", "message", "inquiry"] },
  { title: "About", href: "/about", description: "About New Horizons Foundation — our mission, vision, and values", keywords: ["about", "mission", "vision", "values", "history", "who we are"] },
  { title: "Privacy Policy", href: "/privacy", description: "Our privacy policy and data handling practices", keywords: ["privacy", "policy", "data", "cookies"] },
  { title: "Terms of Use", href: "/terms", description: "Terms of use for the New Horizons Foundation website", keywords: ["terms", "conditions", "legal", "use"] },
];

function searchPages(query: string): SearchablePage[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return pages
    .map((page) => {
      let score = 0;
      const titleLower = page.title.toLowerCase();
      const descLower = page.description.toLowerCase();

      if (titleLower === q) score += 100;
      else if (titleLower.startsWith(q)) score += 80;
      else if (titleLower.includes(q)) score += 60;

      if (descLower.includes(q)) score += 30;

      for (const keyword of page.keywords) {
        if (keyword.includes(q) || q.includes(keyword)) {
          score += 40;
          break;
        }
      }

      return { page, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ page }) => page);
}

export function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const results = useMemo(() => searchPages(query), [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      // Small delay to allow modal to render
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  function navigateTo(href: string) {
    onClose();
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      navigateTo(results[selectedIndex].href);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[10vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg mx-4 bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <svg
            className="w-5 h-5 text-text-muted flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search pages..."
            className="w-full bg-transparent text-text-dark placeholder:text-text-muted outline-none text-base"
            aria-label="Search site"
          />
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-bg-light border border-border rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-[50vh] overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-8 text-center text-text-muted text-sm">
              No pages found for &ldquo;{query}&rdquo;
            </div>
          )}
          {results.map((page, i) => (
            <button
              key={page.href}
              onClick={() => navigateTo(page.href)}
              onMouseEnter={() => setSelectedIndex(i)}
              className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                i === selectedIndex
                  ? "bg-horizons-green-50"
                  : "hover:bg-bg-light"
              }`}
            >
              <svg
                className="w-4 h-4 text-text-muted mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <div className="min-w-0">
                <div className="font-medium text-text-dark text-sm">
                  {page.title}
                </div>
                <div className="text-xs text-text-muted mt-0.5 line-clamp-1">
                  {page.description}
                </div>
              </div>
            </button>
          ))}
          {!query && (
            <div className="px-4 py-8 text-center text-text-muted text-sm">
              Start typing to search across all pages
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
