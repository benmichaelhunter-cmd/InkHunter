"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS, ARTIST_EMAIL, ARTIST_INSTAGRAM } from "@/lib/constants";
import { Mail } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          "fixed inset-0 bg-ocean-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={clsx(
          "fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden z-50",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <nav className="flex-1 space-y-1">
            {NAV_LINKS.map((link) => {
              if (link.children) {
                return (
                  <div key={link.label} className="space-y-1">
                    <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className={clsx(
                          "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                          pathname === child.href
                            ? "bg-ocean-50 text-ocean-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-ocean-600"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={clsx(
                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-ocean-50 text-ocean-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-ocean-600"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA + Social */}
          <div className="space-y-4 pt-6 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full text-center px-6 py-3 bg-ocean-600 text-white font-semibold rounded-full hover:bg-ocean-700 transition-colors"
            >
              Commission a Project
            </Link>
            <div className="flex items-center justify-center gap-4">
              <a
                href={`mailto:${ARTIST_EMAIL}`}
                className="p-2.5 rounded-full text-gray-500 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={ARTIST_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-gray-500 hover:text-ocean-600 hover:bg-ocean-50 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
