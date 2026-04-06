import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "mb-8 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-950 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
