import Link from "next/link";
import { ORG } from "@/lib/nhf-constants";

export function EcosystemBadge() {
  return (
    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <div className="text-center p-6 bg-white rounded-xl border border-border">
        <div className="w-12 h-12 rounded-full bg-horizons-green/10 text-horizons-green flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
        </div>
        <h3 className="font-semibold text-text-dark mb-1">{ORG.displayName}</h3>
        <p className="text-text-muted text-sm">Prevention & Programs</p>
      </div>

      <Link
        href={ORG.nhchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-center p-6 bg-white rounded-xl border border-border hover:border-foundation-blue-300 hover:shadow-md transition-all"
      >
        <div className="w-12 h-12 rounded-full bg-foundation-blue/10 text-foundation-blue flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </div>
        <h3 className="font-semibold text-text-dark mb-1">{ORG.nhchName}</h3>
        <p className="text-text-muted text-sm">Clinical Services</p>
      </Link>

      <div className="text-center p-6 bg-white rounded-xl border border-border">
        <div className="w-12 h-12 rounded-full bg-hope-gold/10 text-hope-gold flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
        </div>
        <h3 className="font-semibold text-text-dark mb-1">{ORG.apiName}</h3>
        <p className="text-text-muted text-sm">Education & Training</p>
      </div>
    </div>
  );
}
