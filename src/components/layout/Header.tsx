"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHomepage = pathname === "/";

  return (
    <>
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : isHomepage
            ? "bg-transparent"
            : "bg-white/95 backdrop-blur-md"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <Image
              src="/images/LOGO_InkHunter.png"
              alt="InkHunter"
              width={180}
              height={50}
              className={clsx(
                "h-10 lg:h-12 w-auto transition-all duration-300",
                scrolled || !isHomepage || mobileOpen
                  ? ""
                  : "invert brightness-200 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                link.children?.some((c) => pathname === c.href);

              if (link.children) {
                return (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className={clsx(
                        "relative px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200",
                        scrolled || !isHomepage
                          ? isActive
                            ? "text-ocean-600"
                            : "text-gray-700 hover:text-ocean-600"
                          : isActive
                            ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                            : "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                      )}
                    >
                      {link.label}
                      <span className={clsx(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-ocean-500 transition-transform duration-300 origin-center",
                        isActive ? "w-6 scale-x-100" : "w-6 scale-x-0 group-hover:scale-x-100"
                      )} />
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[180px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={clsx(
                              "block px-4 py-2.5 text-sm transition-colors",
                              pathname === child.href
                                ? "text-ocean-600 bg-ocean-50"
                                : "text-gray-700 hover:text-ocean-600 hover:bg-gray-50"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative px-4 py-2 text-sm lg:text-base font-medium transition-colors duration-200 group",
                    scrolled || !isHomepage
                      ? isActive
                        ? "text-ocean-600"
                        : "text-gray-700 hover:text-ocean-600"
                      : isActive
                        ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                        : "text-white/90 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  )}
                >
                  {link.label}
                  <span className={clsx(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-ocean-500 transition-transform duration-300 origin-center",
                    isActive ? "w-6 scale-x-100" : "w-6 scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              );
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-full bg-ocean-600 text-white hover:bg-ocean-700 transition-colors duration-200 shadow-lg shadow-ocean-600/25"
            >
              Commission a Project
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clsx(
              "lg:hidden p-2 rounded-lg transition-colors",
              scrolled || !isHomepage || mobileOpen
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={clsx(
                  "w-full h-0.5 rounded-full transition-all duration-300 origin-center",
                  scrolled || !isHomepage || mobileOpen ? "bg-gray-700" : "bg-white",
                  mobileOpen && "rotate-45 translate-y-[9px]"
                )}
              />
              <span
                className={clsx(
                  "w-full h-0.5 rounded-full transition-all duration-300",
                  scrolled || !isHomepage || mobileOpen ? "bg-gray-700" : "bg-white",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "w-full h-0.5 rounded-full transition-all duration-300 origin-center",
                  scrolled || !isHomepage || mobileOpen ? "bg-gray-700" : "bg-white",
                  mobileOpen && "-rotate-45 -translate-y-[9px]"
                )}
              />
            </div>
          </button>
        </div>
      </nav>

    </header>

    <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
