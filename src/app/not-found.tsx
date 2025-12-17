import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-horizons-green/10 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-horizons-green"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-text-muted mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
            been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary" size="lg">
              Go to Homepage
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
          <div className="mt-12 pt-8 border-t border-border max-w-md mx-auto">
            <p className="text-text-muted text-sm mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/programs"
                className="text-foundation-blue hover:underline"
              >
                Our Programs
              </Link>
              <Link
                href="/about"
                className="text-foundation-blue hover:underline"
              >
                About Us
              </Link>
              <Link
                href="/leadership"
                className="text-foundation-blue hover:underline"
              >
                Leadership
              </Link>
              <Link
                href="/support"
                className="text-foundation-blue hover:underline"
              >
                Support Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
