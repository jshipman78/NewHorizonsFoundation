import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "New Horizons Foundation privacy policy - how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-horizons-green text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="text-white/80 mt-2">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Introduction</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  New Horizons Foundation (&quot;NHF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is
                  committed to protecting your privacy. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you visit our
                  website or interact with our services.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Information We Collect</h2>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1A202C", marginBottom: "0.75rem", marginTop: "1.5rem" }}>Information You Provide</h3>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>We may collect information you voluntarily provide, including:</p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Donation and payment information</li>
                  <li>Communications you send to us</li>
                  <li>Information submitted through forms on our website</li>
                  <li>Newsletter subscription preferences</li>
                </ul>

                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#1A202C", marginBottom: "0.75rem", marginTop: "1.5rem" }}>Automatically Collected Information</h3>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  When you visit our website, we may automatically collect certain
                  information, including:
                </p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>IP address (anonymized where possible)</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>How We Use Your Information</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>We use the information we collect to:</p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>Process donations and provide tax receipts</li>
                  <li>Respond to inquiries and communicate with you</li>
                  <li>Send newsletters and updates (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and unauthorized access</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Information Sharing</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  We do not sell, trade, or rent your personal information to third parties.
                  We may share information with:
                </p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>Service providers who assist in our operations (payment processors, email services)</li>
                  <li>Legal authorities when required by law</li>
                  <li>Professional advisors (accountants, legal counsel)</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Data Security</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  We implement appropriate technical and organizational measures to protect
                  your personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no method of transmission over the
                  Internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Your Rights</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>You have the right to:</p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Cookies</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  Our website may use cookies and similar technologies to enhance your
                  experience. You can control cookie settings through your browser
                  preferences.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Third-Party Links</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  Our website may contain links to third-party websites. We are not
                  responsible for the privacy practices of these external sites.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Children&apos;s Privacy</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  Our website is not intended for children under 13. We do not knowingly
                  collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Changes to This Policy</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  We may update this Privacy Policy from time to time. We will notify you of
                  any changes by posting the new policy on this page and updating the
                  &quot;Last updated&quot; date.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Contact Us</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p style={{ color: "#2D3748" }}>
                  <strong style={{ color: "#1A202C" }}>New Horizons Foundation</strong>
                  <br />
                  Email: info@newhorizonsfoundation.org
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
