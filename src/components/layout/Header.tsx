"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs", hasDropdown: true },
  { name: "Leadership", href: "/leadership" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  {
    name: "Mental Health Access",
    href: "/programs/mental-health",
    description: "Breaking barriers to mental health care through education and community programs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Veterans & First Responders",
    href: "/programs/veterans-first-responders",
    description: "Specialized support for those who served our communities and nation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    name: "Youth Leadership",
    href: "/programs/youth-leadership",
    description: "Developing the next generation of ethical, compassionate leaders",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "Cultural Enrichment",
    href: "/programs/cultural-enrichment",
    description: "Building bridges through cultural understanding and community events",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProgramsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setProgramsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="sm" className="hidden sm:flex" />
            <Logo size="sm" variant="icon" className="sm:hidden" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : undefined}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                      onMouseEnter={() => setProgramsDropdownOpen(true)}
                      className={`relative font-medium transition-colors py-2 flex items-center gap-1 ${
                        isActive(item.href)
                          ? "text-horizons-green"
                          : "text-text-body hover:text-horizons-green"
                      }`}
                      aria-expanded={programsDropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          programsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                      {isActive(item.href) && (
                        <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-horizons-green" />
                      )}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-xl shadow-xl border border-border transition-all duration-200 ${
                        programsDropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseLeave={() => setProgramsDropdownOpen(false)}
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {programLinks.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              className={`flex items-start gap-4 p-3 rounded-lg transition-colors ${
                                pathname === program.href
                                  ? "bg-horizons-green-50 text-horizons-green"
                                  : "hover:bg-bg-light"
                              }`}
                            >
                              <div className={`flex-shrink-0 p-2 rounded-lg ${
                                pathname === program.href
                                  ? "bg-horizons-green-100 text-horizons-green"
                                  : "bg-horizons-green-50 text-horizons-green-600"
                              }`}>
                                {program.icon}
                              </div>
                              <div>
                                <div className="font-semibold text-text-dark">{program.name}</div>
                                <div className="text-sm text-text-muted mt-0.5">{program.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <Link
                            href="/programs"
                            className="flex items-center justify-center gap-2 text-sm font-semibold text-horizons-green hover:text-horizons-green-700 transition-colors"
                          >
                            View All Programs
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative font-medium transition-colors py-2 ${
                      isActive(item.href)
                        ? "text-horizons-green"
                        : "text-text-body hover:text-horizons-green"
                    }`}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-horizons-green" />
                    )}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Donate Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/support"
              className="bg-horizons-green text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-horizons-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
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
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                        className={`w-full flex items-center justify-between font-medium py-3 px-3 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? "text-horizons-green bg-horizons-green-50"
                            : "text-text-body hover:text-horizons-green hover:bg-bg-light"
                        }`}
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileExpanded === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      {mobileExpanded === item.name && (
                        <div className="ml-4 mt-1 mb-2 space-y-1">
                          {programLinks.map((program) => (
                            <Link
                              key={program.href}
                              href={program.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                                pathname === program.href
                                  ? "text-horizons-green bg-horizons-green-50 font-medium"
                                  : "text-text-muted hover:text-horizons-green hover:bg-bg-light"
                              }`}
                            >
                              {program.name}
                            </Link>
                          ))}
                          <Link
                            href="/programs"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 rounded-lg text-sm font-semibold text-horizons-green hover:bg-horizons-green-50 transition-colors"
                          >
                            View All Programs →
                          </Link>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-medium py-3 px-3 rounded-lg transition-colors block ${
                        isActive(item.href)
                          ? "text-horizons-green bg-horizons-green-50"
                          : "text-text-body hover:text-horizons-green hover:bg-bg-light"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/support"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-horizons-green text-white px-5 py-3 rounded-lg font-semibold text-center shadow-md hover:bg-horizons-green-700 hover:shadow-lg transition-all duration-200 mt-2"
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
