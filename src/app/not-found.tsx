import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pt-28 pb-24 flex-1 flex items-center">
      <Container className="text-center">
        <p className="text-ocean-600 font-semibold text-sm uppercase tracking-wider mb-4">
          404 — Page Not Found
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-ocean-950 mb-4">
          This wall is blank
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist — but there are
          plenty of walls that do.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Back to Home</Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Container>
    </div>
  );
}
