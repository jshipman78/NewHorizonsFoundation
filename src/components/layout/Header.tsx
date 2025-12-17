"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Leadership", href: "/leadership" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="md" className="hidden sm:flex" />
            <Logo size="sm" variant="icon" className="sm:hidden" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-body hover:text-horizons-green transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/support"
              className="bg-horizons-green text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
            >
              Support Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-text-body hover:text-horizons-green"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-text-body hover:text-horizons-green transition-colors font-medium py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/support"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-horizons-green text-white px-5 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-colors mt-2"
              >
                Support Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
