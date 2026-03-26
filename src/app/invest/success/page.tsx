import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Thank You for Your Gift",
  description: "Your donation to New Horizons Foundation has been received.",
};

export default function DonationSuccessPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Section background="white">
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-success"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Thank You for Your Generosity
            </h1>
            <p className="text-lg text-text-body mb-4">
              Your contribution to New Horizons Foundation has been received and
              is making an immediate impact on families and communities across
              North Texas.
            </p>
            <div className="bg-bg-light rounded-xl p-6 mb-8 text-left">
              <h3 className="font-semibold text-text-dark mb-3">
                What Happens Next
              </h3>
              <ul className="space-y-2 text-text-body text-sm">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-horizons-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  You will receive an email confirmation from Stripe with your
                  payment details.
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-horizons-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  A tax-deductible donation receipt will be sent to your email
                  for your records (EIN: 41-3658405).
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-horizons-green flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Your gift goes directly to early-intervention mental health
                  programs for youth and families.
                </li>
              </ul>
            </div>
            <p className="text-text-muted text-sm mb-8">
              New Horizons Mental Health Foundation Inc. is a 501(c)(3) public
              charity. Contributions are tax-deductible to the extent permitted
              by law.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/" variant="primary">
                Return Home
              </Button>
              <Button href="/programs" variant="outline">
                Explore Our Programs
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
