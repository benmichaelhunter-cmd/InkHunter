import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import {
  SITE_NAME,
  ARTIST_EMAIL,
  ARTIST_INSTAGRAM,
  ARTIST_NAME,
  FOOTER_LINKS,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <Container className="py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready to transform your space?
          </h2>
          <p className="text-ocean-200 text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk about how art can connect your community to place,
            nature, and each other.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ocean-950 font-semibold rounded-full hover:bg-ocean-50 transition-colors text-lg"
          >
            Commission a Project
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </Container>
      </div>

      {/* Main Footer */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold">
              {SITE_NAME}
            </Link>
            <p className="mt-3 text-ocean-300 text-sm leading-relaxed">
              Environmental and community-based public art by {ARTIST_NAME}.
              Transforming spaces. Connecting people.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={`mailto:${ARTIST_EMAIL}`}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={ARTIST_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean-300 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ocean-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean-300 mb-4">
              About
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ocean-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ocean-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${ARTIST_EMAIL}`}
                  className="text-sm text-ocean-200 hover:text-white transition-colors"
                >
                  {ARTIST_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-sm text-ocean-200">
                  Sydney, Northern Beaches
                </span>
              </li>
              <li className="pt-2">
                <a
                  href="/capability-statement"
                  className="inline-flex items-center gap-1 text-sm text-ochre-400 hover:text-ochre-300 transition-colors"
                >
                  Download Capability Statement
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ocean-400">
          <p>&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>
            Environmental & community-based public art
          </p>
        </div>
      </Container>
    </footer>
  );
}
