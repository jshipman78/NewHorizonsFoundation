import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageHero } from "@/components/ui/PageHero";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ORG } from "@/lib/nhf-constants";

export const metadata: Metadata = {
  title: "Documents & Resources | New Horizons Foundation",
  description:
    "To support our community partners, sponsors, and grant funders, we have made key organizational documents readily available for download. Compliance, sponsorship, and grant materials from New Horizons Foundation.",
};

interface SanityDocument {
  _id: string;
  title: string;
  description: string;
  category: string;
  fileUrl: string | null;
  externalUrl: string | null;
  format: string | null;
  sortOrder: number;
  comingSoon: boolean;
}

async function getDocuments(): Promise<SanityDocument[]> {
  // Sanity CMS not yet configured — return empty until connected
  return [];
}

function DocumentCard({ doc }: { doc: SanityDocument }) {
  const href = doc.fileUrl || doc.externalUrl;

  return (
    <Card hover={!doc.comingSoon} className={doc.comingSoon ? "opacity-75" : ""}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-foundation-blue/10 text-foundation-blue flex items-center justify-center flex-shrink-0 text-2xl">
          📄
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="font-semibold text-text-dark">{doc.title}</h3>
            {doc.comingSoon && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-hope-gold/20 text-hope-gold-700">
                Coming Soon
              </span>
            )}
            {doc.format && !doc.comingSoon && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-bg-light text-text-muted uppercase">
                {doc.format}
              </span>
            )}
          </div>
          <p className="text-text-muted text-sm mb-3">{doc.description}</p>
          {href && !doc.comingSoon ? (
            <a
              href={href}
              download
              className="inline-flex items-center gap-2 text-foundation-blue hover:text-foundation-blue-700 font-medium text-sm transition-colors"
            >
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
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download
            </a>
          ) : doc.comingSoon ? (
            <span className="text-text-muted text-sm italic">
              Available soon
            </span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}

export default async function DownloadsPage() {
  const documents = await getDocuments();

  const coreDocuments = documents.filter((d) => d.category === "core");
  const sponsorshipDocuments = documents.filter((d) => d.category === "sponsorship");
  const grantPacketDocuments = documents.filter((d) => d.category === "grant-packet");

  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          breadcrumb="Resources"
          title="Trusted. Transparent. Ready to Partner."
          description="To support our community partners, sponsors, and grant funders, we have made key organizational documents readily available for download. These materials are designed to streamline due diligence, accelerate partnership decisions, and demonstrate our commitment to transparency and accountability."
          variant="centered"
        />

        {/* Core Organizational Documents */}
        {coreDocuments.length > 0 && (
          <Section background="white">
            <SectionHeader>
              <SectionTitle>Core Organizational Documents</SectionTitle>
              <SectionDescription>
                Compliance &amp; Verification Documents
              </SectionDescription>
            </SectionHeader>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coreDocuments.map((doc) => (
                <DocumentCard key={doc._id} doc={doc} />
              ))}
            </div>
          </Section>
        )}

        {/* Sponsorship & Partnership Materials */}
        {sponsorshipDocuments.length > 0 && (
          <Section background="light">
            <SectionHeader>
              <SectionTitle>Sponsorship &amp; Partnership Materials</SectionTitle>
              <SectionDescription>
                Resources for Corporate Partners, Healthcare Systems, and Community Sponsors
              </SectionDescription>
            </SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sponsorshipDocuments.map((doc) => (
                <DocumentCard key={doc._id} doc={doc} />
              ))}
            </div>
          </Section>
        )}

        {/* Grant & Institutional Packet */}
        {grantPacketDocuments.length > 0 && (
          <Section background="white">
            <SectionHeader>
              <SectionTitle>Grant &amp; Institutional Packet</SectionTitle>
              <SectionDescription>
                Complete Download for Grant Applications and Institutional Review
              </SectionDescription>
            </SectionHeader>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {grantPacketDocuments.map((doc) => (
                <DocumentCard key={doc._id} doc={doc} />
              ))}
            </div>
          </Section>
        )}

        {/* No documents fallback */}
        {documents.length === 0 && (
          <Section background="white">
            <SectionHeader>
              <SectionTitle>Documents</SectionTitle>
              <SectionDescription>
                Our document library is being updated. Please check back soon or
                contact us directly for any materials you need.
              </SectionDescription>
            </SectionHeader>
          </Section>
        )}

        {/* Need Something Else? */}
        <Section background="gradient">
          <SectionHeader>
            <SectionTitle className="text-white">
              Need Something Else?
            </SectionTitle>
            <SectionDescription className="text-white/90">
              If you require additional documentation, customized materials, or
              partnership-specific information:
            </SectionDescription>
          </SectionHeader>
          <div className="text-center mb-8">
            <a
              href={`mailto:${ORG.email}?subject=Document%20Request`}
              className="text-white underline hover:text-hope-gold transition-colors font-medium"
            >
              {ORG.email}
            </a>
          </div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white">Ready to Partner With Us?</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/partnerships" variant="accent" size="lg">
              Request Partnership →
            </Button>
            <Button href="/invest" variant="outline-light" size="lg">
              Donate Now →
            </Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
