import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ORG } from "@/lib/nhf-constants";

const footerNavigation = {
  about: [
    { name: "Mission & Values", href: "/about" },
    { name: "Leadership & Vision", href: "/leadership" },
    { name: "Transparency", href: "/transparency" },
    { name: "Downloads", href: "/downloads" },
  ],
  programs: [
    { name: "All Programs", href: "/programs" },
    { name: "Services & Consulting", href: "/services" },
  ],
  support: [
    { name: "Donate", href: "/invest" },
    { name: "Sponsorship & Giving", href: "/sponsorship" },
    { name: "Corporate Sponsorship", href: "/corporate-sponsorship" },
    { name: "Founders Circle", href: "/founders-circle" },
    { name: "Institutional Funding", href: "/institutional-funding" },
    { name: "Why Donate", href: "/why-donate" },
  ],
  connect: [
    { name: "Contact", href: "/contact" },
    { name: "Schedule a Call", href: "/contact#schedule" },
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
            <p className="text-gray-400 text-sm max-w-sm mb-3">
              {ORG.legalName}
            </p>
            <p className="text-gray-500 text-xs mb-1">
              EIN: {ORG.ein}
            </p>
            <p className="text-gray-500 text-xs mb-1">
              {ORG.address}
            </p>
            <p className="text-gray-500 text-xs mb-1">
              {ORG.phone}
            </p>
            <a
              href={`mailto:${ORG.email}`}
              className="text-gray-500 hover:text-hope-gold text-xs transition-colors"
            >
              {ORG.email}
            </a>
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

            <h3 className="font-semibold text-white mb-4 mt-6">Programs</h3>
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
          </div>

          {/* Connect + Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2">
              {footerNavigation.connect.map((item) => (
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

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-gray-500 text-xs text-center max-w-3xl mx-auto mb-4">
            {ORG.footerDisclaimer}
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {ORG.displayName}. All rights
              reserved.
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
