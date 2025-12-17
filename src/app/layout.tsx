import type { Metadata } from "next";
import "./globals.css";
import { SkipLink } from "@/components/ui/SkipLink";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://newhorizonsfoundation.org"),
  title: {
    default: "New Horizons Foundation | Mental Health Nonprofit | Veterans, Youth & Community Programs",
    template: "%s | New Horizons Foundation",
  },
  description:
    "New Horizons Foundation is a national nonprofit advancing mental health access, supporting veterans and first responders, and developing future leaders through ethical, evidence-based programs.",
  keywords: [
    "mental health nonprofit",
    "veterans mental health",
    "first responder wellness",
    "youth leadership programs",
    "community mental health",
    "New Horizons Foundation",
  ],
  authors: [{ name: "New Horizons Foundation" }],
  creator: "New Horizons Foundation",
  publisher: "New Horizons Foundation",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "New Horizons Foundation",
    title: "New Horizons Foundation | Mental Health Nonprofit",
    description:
      "Advancing mental health access, education, and community resilience through ethical, values-driven programs.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "New Horizons Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Horizons Foundation",
    description:
      "Advancing mental health access, education, and community resilience.",
    images: ["/logo.png"],
    creator: "@newhorizonsorg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - loaded via link for better compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <SkipLink />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
