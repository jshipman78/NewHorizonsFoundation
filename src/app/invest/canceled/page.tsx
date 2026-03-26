import { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Donation Canceled",
  description: "Your donation was not completed.",
};

export default function DonationCanceledPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Section background="white">
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-20 h-20 rounded-full bg-warning/10 flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-warning"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-text-dark mb-4">
              Donation Not Completed
            </h1>
            <p className="text-lg text-text-body mb-8">
              Your donation was canceled and you have not been charged. If this
              was a mistake or you experienced an issue, please try again or
              contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/invest" variant="primary">
                Try Again
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
