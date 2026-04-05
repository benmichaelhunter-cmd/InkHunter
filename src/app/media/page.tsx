import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { getPressItems } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Media & Press",
  description:
    "Media coverage, press features, and news about InkHunter's environmental murals and community public art projects across Australia.",
  path: "/media",
});

export default async function MediaPage() {
  const pressItems = await getPressItems();

  return (
    <div className="pt-28 pb-24">
      <Container>
        <SectionHeading
          title="Media & Press"
          subtitle="Coverage of InkHunter's environmental murals and community public art across Australia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressItems.map((item, i) => (
            <AnimateOnScroll key={item.slug} delay={i * 80}>
              <a
                href={item.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
              >
                {item.coverImage && (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="font-semibold text-ocean-600">
                      {item.publication}
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(item.date).toLocaleDateString("en-AU", {
                        year: "numeric",
                        month: "short",
                      })}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-ocean-950 mb-2 group-hover:text-ocean-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-1 mb-4">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-ocean-600 group-hover:text-ocean-700 transition-colors">
                    Read article
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </div>
  );
}
