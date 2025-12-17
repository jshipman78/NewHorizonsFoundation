import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "New Horizons Foundation",
    title: "New Horizons Foundation | Mental Health Nonprofit",
    description:
      "Advancing mental health access, education, and community resilience through ethical, values-driven programs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Horizons Foundation",
    description:
      "Advancing mental health access, education, and community resilience.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}
