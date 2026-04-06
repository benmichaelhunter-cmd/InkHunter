import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { ARTIST_INSTAGRAM } from "@/lib/constants";

const placeholderImages = [
  "/images/projects/harris-park/harris-park_main-mural-scaled.jpg",
  "/images/projects/shallow-iridescence/shallow-iridescence_detail1.jpg",
  "/images/projects/manly-vibes/manly-vibes_PatrickHunter_20.jpg",
  "/images/projects/shallow-iridescence/shallow-iridescence_performers.jpeg",
  "/images/projects/big-picture-fest/big-picture-fest_INK-HUNTER1.jpg",
  "/images/projects/big-picture-fest/big-picture-fest_INK-HUNTER2.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading
          title="Follow the Journey"
          subtitle="Behind the scenes, process shots, and community moments from the studio and the street."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {placeholderImages.map((src, i) => (
            <AnimateOnScroll key={i} delay={i * 80} animation="scale">
              <a
                href={ARTIST_INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square rounded-xl overflow-hidden group block"
              >
                <Image
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ocean-950/0 group-hover:bg-ocean-950/40 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={ARTIST_INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ocean-600 font-semibold hover:text-ocean-700 transition-colors"
          >
            @inkhunterartist
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
