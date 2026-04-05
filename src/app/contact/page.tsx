import type { Metadata } from "next";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { ARTIST_EMAIL, ARTIST_LOCATION } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact — Commission a Project",
  description:
    "Ready to transform your space? Get in touch with InkHunter to discuss large-scale murals, community art, and public art commissions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-ocean-950 mb-4 leading-tight">
                Let&apos;s talk about your space
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re a council, developer, or community
                organisation — we&apos;d love to hear about your project and
                explore how art can transform it.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-lg bg-ocean-50 text-ocean-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a
                    href={`mailto:${ARTIST_EMAIL}`}
                    className="hover:text-ocean-600 transition-colors"
                  >
                    {ARTIST_EMAIL}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="w-10 h-10 rounded-lg bg-ocean-50 text-ocean-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{ARTIST_LOCATION}</span>
                </div>
              </div>

              <a
                href="/documents/inkhunter-capability-statement.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 border-2 border-ocean-200 text-ocean-700 font-semibold rounded-full hover:bg-ocean-50 transition-colors text-sm"
              >
                Download Capability Statement
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
