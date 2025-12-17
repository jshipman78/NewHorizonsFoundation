import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "New Horizons Foundation terms of service - terms and conditions for using our website.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-horizons-green text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
            <p className="text-white/80 mt-2">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-10">
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Agreement to Terms</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  By accessing or using the New Horizons Foundation (&quot;NHF&quot;) website, you
                  agree to be bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our website.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Use of Website</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>You agree to use this website only for lawful purposes and in a way that:</p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>Does not infringe on the rights of others</li>
                  <li>Does not restrict or inhibit anyone else&apos;s use of the website</li>
                  <li>Does not violate any applicable laws or regulations</li>
                  <li>Does not transmit harmful or malicious content</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Intellectual Property</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  All content on this website, including text, graphics, logos, images, and
                  software, is the property of New Horizons Foundation or its content
                  suppliers and is protected by copyright and other intellectual property
                  laws.
                </p>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  You may not reproduce, distribute, modify, or create derivative works from
                  any content without our express written permission.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Donations</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  New Horizons Foundation is a 501(c)(3) nonprofit organization. Donations
                  made through our website are tax-deductible to the extent permitted by
                  law. By making a donation, you agree that:
                </p>
                <ul style={{ color: "#2D3748", marginLeft: "1.5rem", listStyleType: "disc" }} className="space-y-2">
                  <li>You are authorized to use the payment method provided</li>
                  <li>All information you provide is accurate and complete</li>
                  <li>You understand that donations are generally non-refundable</li>
                </ul>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Disclaimer of Warranties</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  This website and its content are provided &quot;as is&quot; without warranties of
                  any kind, either express or implied. NHF does not warrant that the website
                  will be uninterrupted, error-free, or free of viruses or other harmful
                  components.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Limitation of Liability</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  To the fullest extent permitted by law, New Horizons Foundation shall not
                  be liable for any indirect, incidental, special, consequential, or
                  punitive damages arising from your use of the website.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Information Disclaimer</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  The information provided on this website is for general informational
                  purposes only. It is not intended to be a substitute for professional
                  medical, legal, or financial advice. Always seek the advice of qualified
                  professionals with any questions you may have.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>External Links</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  Our website may contain links to external websites. NHF is not responsible
                  for the content or practices of these third-party sites.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Modifications to Terms</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  We reserve the right to modify these Terms of Service at any time. Changes
                  will be effective immediately upon posting to the website. Your continued
                  use of the website after changes are posted constitutes your acceptance of
                  the modified terms.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Governing Law</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7 }}>
                  These Terms of Service shall be governed by and construed in accordance
                  with the laws of the United States, without regard to conflict of law
                  principles.
                </p>
              </div>

              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A5336", marginBottom: "1rem" }}>Contact Information</h2>
                <p style={{ color: "#2D3748", lineHeight: 1.7, marginBottom: "0.75rem" }}>
                  If you have questions about these Terms of Service, please contact us at:
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
