"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Services", href: "/services" },
  {
    name: "Get Involved",
    href: "/sponsorship",
    dropdownKey: "involved",
  },
  { name: "Founders Circle", href: "/founders-circle" },
  { name: "Leadership", href: "/leadership" },
  { name: "Transparency", href: "/transparency" },
];

const involvedLinks = [
  {
    name: "Sponsorship & Giving",
    href: "/sponsorship",
    description: "Individual and organizational giving tiers",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Corporate Sponsorship",
    href: "/corporate-sponsorship",
    description: "Structured B2B sponsorship with recognition benefits",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Founders Circle",
    href: "/founders-circle",
    description: "Join our founding supporters with significant giving commitments",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: "Institutional Funding",
    href: "/institutional-funding",
    description: "Grants, institutional partnerships, and compliance docs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Why Donate",
    href: "/why-donate",
    description: "See the impact of your contribution",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const dropdownConfigs: Record<
  string,
  { links: typeof involvedLinks; viewAllHref: string; viewAllLabel: string }
> = {
  involved: {
    links: involvedLinks,
    viewAllHref: "/sponsorship",
    viewAllLabel: "All Ways to Give",
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isInvolvedActive = () => {
    return (
      pathname === "/sponsorship" ||
      pathname === "/corporate-sponsorship" ||
      pathname === "/founders-circle" ||
      pathname === "/institutional-funding" ||
      pathname === "/why-donate" ||
      pathname === "/invest"
    );
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isOutside = Object.values(dropdownRefs.current).every(
        (ref) => !ref || !ref.contains(event.target as Node)
      );
      if (isOutside) setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }

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
          <div className="hidden lg:flex lg:items-center lg:gap-7">
            {navigation.map((item) => {
              const hasDropdown = !!item.dropdownKey;
              const isOpen = openDropdown === item.dropdownKey;
              const active =
                item.dropdownKey === "involved"
                  ? isInvolvedActive()
                  : isActive(item.href);
              const config = item.dropdownKey
                ? dropdownConfigs[item.dropdownKey]
                : null;

              return (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => {
                    if (item.dropdownKey)
                      dropdownRefs.current[item.dropdownKey] = el;
                  }}
                >
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(isOpen ? null : item.dropdownKey!)
                        }
                        onMouseEnter={() => setOpenDropdown(item.dropdownKey!)}
                        className={`relative font-medium transition-colors py-2 flex items-center gap-1 ${
                          active
                            ? "text-horizons-green"
                            : "text-text-body hover:text-horizons-green"
                        }`}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                      >
                        {item.name}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                        {active && (
                          <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-horizons-green" />
                        )}
                      </button>

                      {config && (
                        <div
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-xl border border-border transition-all duration-200 ${
                            isOpen
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          }`}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {config.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className={`flex items-start gap-4 p-3 rounded-lg transition-colors ${
                                    pathname === link.href
                                      ? "bg-horizons-green-50 text-horizons-green"
                                      : "hover:bg-bg-light"
                                  }`}
                                >
                                  <div
                                    className={`flex-shrink-0 p-2 rounded-lg ${
                                      pathname === link.href
                                        ? "bg-horizons-green-100 text-horizons-green"
                                        : "bg-horizons-green-50 text-horizons-green-600"
                                    }`}
                                  >
                                    {link.icon}
                                  </div>
                                  <div>
                                    <div className="font-semibold text-text-dark">
                                      {link.name}
                                    </div>
                                    <div className="text-sm text-text-muted mt-0.5">
                                      {link.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-border">
                              <Link
                                href={config.viewAllHref}
                                className="flex items-center justify-center gap-2 text-sm font-semibold text-horizons-green hover:text-horizons-green-700 transition-colors"
                              >
                                {config.viewAllLabel}
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
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
              );
            })}
          </div>

          {/* Donate Button */}
          <div className="hidden lg:flex lg:items-center">
            <Link
              href="/invest"
              className="bg-horizons-green text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-horizons-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
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
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const hasDropdown = !!item.dropdownKey;
                const config = item.dropdownKey
                  ? dropdownConfigs[item.dropdownKey]
                  : null;
                const active =
                  item.dropdownKey === "involved"
                    ? isInvolvedActive()
                    : isActive(item.href);

                return (
                  <div key={item.name}>
                    {hasDropdown && config ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileExpanded(
                              mobileExpanded === item.name ? null : item.name
                            )
                          }
                          className={`w-full flex items-center justify-between font-medium py-3 px-3 rounded-lg transition-colors ${
                            active
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
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </button>
                        {mobileExpanded === item.name && (
                          <div className="ml-4 mt-1 mb-2 space-y-1">
                            {config.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                                  pathname === link.href
                                    ? "text-horizons-green bg-horizons-green-50 font-medium"
                                    : "text-text-muted hover:text-horizons-green hover:bg-bg-light"
                                }`}
                              >
                                {link.name}
                              </Link>
                            ))}
                            <Link
                              href={config.viewAllHref}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 px-3 rounded-lg text-sm font-semibold text-horizons-green hover:bg-horizons-green-50 transition-colors"
                            >
                              {config.viewAllLabel} →
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
                );
              })}
              <Link
                href="/invest"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-horizons-green text-white px-5 py-3 rounded-lg font-semibold text-center shadow-md hover:bg-horizons-green-700 hover:shadow-lg transition-all duration-200 mt-2"
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
