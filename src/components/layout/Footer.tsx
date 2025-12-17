import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

const footerNavigation = {
  about: [
    { name: "Mission & Values", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Partners", href: "/partners" },
  ],
  programs: [
    { name: "Mental Health Services", href: "/programs/mental-health" },
    { name: "Veterans & First Responders", href: "/programs/veterans-first-responders" },
    { name: "Cultural Enrichment", href: "/programs/cultural-enrichment" },
    { name: "Youth Leadership", href: "/programs/youth-leadership" },
  ],
  support: [
    { name: "Donate", href: "/support" },
    { name: "Founders Circle", href: "/support/founders-circle" },
    { name: "Sponsorships", href: "/support/sponsorships" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-text-dark text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Logo size="md" theme="dark" />
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-4">
              Advancing mental health access, education, cultural enrichment,
              and leadership development through ethical practice and
              values-driven leadership.
            </p>
            <p className="text-gray-500 text-xs">
              New Horizons Foundation is a 501(c)(3) nonprofit organization.
              <br />
              Contributions are tax-deductible to the extent permitted by law.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-hope-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-2">
              {footerNavigation.programs.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-hope-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-hope-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-white mb-4 mt-6">Legal</h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-hope-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} New Horizons Foundation. All
              rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-hope-gold transition-colors text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
