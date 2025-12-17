import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui/Section";

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
            <h1 className="text-4xl font-bold">Terms of Service</h1>
            <p className="text-white/80 mt-2">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </section>

        <Section background="white" containerSize="narrow">
          <div className="prose prose-lg max-w-none">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the New Horizons Foundation (&quot;NHF&quot;) website, you
              agree to be bound by these Terms of Service. If you do not agree to these
              terms, please do not use our website.
            </p>

            <h2>Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that:</p>
            <ul>
              <li>Does not infringe on the rights of others</li>
              <li>Does not restrict or inhibit anyone else&apos;s use of the website</li>
              <li>Does not violate any applicable laws or regulations</li>
              <li>Does not transmit harmful or malicious content</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and
              software, is the property of New Horizons Foundation or its content
              suppliers and is protected by copyright and other intellectual property
              laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, or create derivative works from
              any content without our express written permission.
            </p>

            <h2>Donations</h2>
            <p>
              New Horizons Foundation is a 501(c)(3) nonprofit organization. Donations
              made through our website are tax-deductible to the extent permitted by
              law. By making a donation, you agree that:
            </p>
            <ul>
              <li>You are authorized to use the payment method provided</li>
              <li>All information you provide is accurate and complete</li>
              <li>You understand that donations are generally non-refundable</li>
            </ul>

            <h2>Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided &quot;as is&quot; without warranties of
              any kind, either express or implied. NHF does not warrant that the website
              will be uninterrupted, error-free, or free of viruses or other harmful
              components.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, New Horizons Foundation shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the website.
            </p>

            <h2>Information Disclaimer</h2>
            <p>
              The information provided on this website is for general informational
              purposes only. It is not intended to be a substitute for professional
              medical, legal, or financial advice. Always seek the advice of qualified
              professionals with any questions you may have.
            </p>

            <h2>External Links</h2>
            <p>
              Our website may contain links to external websites. NHF is not responsible
              for the content or practices of these third-party sites.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes
              will be effective immediately upon posting to the website. Your continued
              use of the website after changes are posted constitutes your acceptance of
              the modified terms.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance
              with the laws of the United States, without regard to conflict of law
              principles.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>New Horizons Foundation</strong>
              <br />
              Email: info@newhorizonsfoundation.org
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
