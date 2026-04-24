"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { SearchModal } from "@/components/ui/SearchModal";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    dropdownKey: "about",
  },
  {
    name: "Our Work",
    href: "/programs",
    dropdownKey: "work",
  },
  {
    name: "Support Us",
    href: "/sponsorship",
    dropdownKey: "support",
  },
  { name: "Contact", href: "/contact" },
];

type NavLink = {
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
  category?: string;
};

const aboutLinks: NavLink[] = [
  {
    name: "Mission & Values",
    href: "/about",
    description: "Our vision for mental health transformation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Leadership Team",
    href: "/leadership",
    description: "Meet our board and executive team",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    name: "Transparency",
    href: "/transparency",
    description: "Financials, governance, and accountability",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Documents & Downloads",
    href: "/downloads",
    description: "501(c)(3) letter, W-9, and compliance docs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const workLinks: NavLink[] = [
  {
    name: "All Programs",
    href: "/programs",
    description: "Mental health, veterans, youth, and cultural programs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    name: "Services & Consulting",
    href: "/services",
    description: "Professional training and organizational consulting",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    name: "University Chapters",
    href: "/chapters",
    description: "Student-led mental health leadership on campus",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "Corporate Partnerships",
    href: "/partnerships",
    description: "Align your organization with mental health leadership",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

const supportLinks: NavLink[] = [
  {
    name: "Make a Gift",
    href: "/invest",
    description: "One-time or monthly donations",
    category: "Individual Giving",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "Sponsorship Tiers",
    href: "/sponsorship",
    description: "Recognition and benefits for annual giving",
    category: "Individual Giving",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    name: "Founders Circle",
    href: "/founders-circle",
    description: "Join our founding supporters with legacy commitments",
    category: "Major Giving",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    name: "Corporate Sponsorships",
    href: "/corporate-sponsorship",
    description: "Structured partnerships with recognition benefits",
    category: "Institutional Support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: "Grants & Foundations",
    href: "/institutional-funding",
    description: "Institutional partnerships and compliance docs",
    category: "Institutional Support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    name: "Why Your Gift Matters",
    href: "/why-donate",
    description: "See the impact of your contribution",
    category: "Learn More",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

// Group support links by category for sectioned dropdown
const supportCategories = [
  { label: "Individual Giving", links: supportLinks.filter((l) => l.category === "Individual Giving") },
  { label: "Major Giving", links: supportLinks.filter((l) => l.category === "Major Giving") },
  { label: "Institutional Support", links: supportLinks.filter((l) => l.category === "Institutional Support") },
  { label: "Learn More", links: supportLinks.filter((l) => l.category === "Learn More") },
];

const dropdownConfigs: Record<
  string,
  { links: NavLink[]; viewAllHref: string; viewAllLabel: string; sectioned?: boolean }
> = {
  about: {
    links: aboutLinks,
    viewAllHref: "/about",
    viewAllLabel: "About New Horizons Foundation",
  },
  work: {
    links: workLinks,
    viewAllHref: "/programs",
    viewAllLabel: "Explore All Programs",
  },
  support: {
    links: supportLinks,
    viewAllHref: "/sponsorship",
    viewAllLabel: "All Ways to Give",
    sectioned: true,
  },
};

// Paths that indicate "About" is active
const aboutPaths = ["/about", "/leadership", "/transparency", "/downloads"];
// Paths that indicate "Our Work" is active
const workPaths = ["/programs", "/services", "/chapters", "/partnerships"];
// Paths that indicate "Support Us" is active
const supportPaths = [
  "/sponsorship",
  "/corporate-sponsorship",
  "/founders-circle",
  "/founders-circle-recognition",
  "/institutional-funding",
  "/why-donate",
  "/invest",
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isDropdownActive = (key: string) => {
    const pathSets: Record<string, string[]> = {
      about: aboutPaths,
      work: workPaths,
      support: supportPaths,
    };
    const paths = pathSets[key];
    if (!paths) return false;
    return paths.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  };

  useEffect(() => {
    function handleSearchShortcut(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    document.addEventListener("keydown", handleSearchShortcut);
    return () => document.removeEventListener("keydown", handleSearchShortcut);
  }, []);

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
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => {
              const hasDropdown = !!item.dropdownKey;
              const isOpen = openDropdown === item.dropdownKey;
              const active = hasDropdown
                ? isDropdownActive(item.dropdownKey!)
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
                          className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 ${
                            config.sectioned ? "w-[520px]" : "w-[480px]"
                          } bg-white rounded-xl shadow-xl border border-border transition-all duration-200 ${
                            isOpen
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          }`}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <div className="p-4">
                            {config.sectioned ? (
                              /* Sectioned dropdown for Support Us */
                              <div className="space-y-4">
                                {supportCategories.map((category) => (
                                  <div key={category.label}>
                                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 px-3">
                                      {category.label}
                                    </h4>
                                    <div className="grid grid-cols-1 gap-1">
                                      {category.links.map((link) => (
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
                                  </div>
                                ))}
                              </div>
                            ) : (
                              /* Standard dropdown for About / Our Work */
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
                            )}
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

          {/* Search + Donate */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-text-muted hover:text-horizons-green transition-colors rounded-lg hover:bg-bg-light"
              aria-label="Search site"
              title="Search (⌘K)"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
            <Link
              href="/invest"
              className="bg-horizons-green text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-horizons-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-text-muted hover:text-horizons-green transition-colors"
              aria-label="Search site"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
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
                const active = hasDropdown
                  ? isDropdownActive(item.dropdownKey!)
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
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
