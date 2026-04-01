import Link from "next/link";
import { ORG } from "@/lib/nhf-constants";

export function TrustFooterStrip() {
  return (
    <div className="bg-bg-light border-t border-border py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-text-muted text-sm max-w-3xl mx-auto mb-3">
          Some programs featured through New Horizons Foundation are delivered
          through affiliated implementation partners, including{" "}
          {ORG.nhchName}.
        </p>
        <Link
          href={ORG.nhchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-foundation-blue hover:text-foundation-blue-700 font-medium text-sm transition-colors"
        >
          Visit {ORG.nhchName}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
