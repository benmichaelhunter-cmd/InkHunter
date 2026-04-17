import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
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
      {eyebrow && (
        <div
          className={clsx(
            "flex items-center gap-3 mb-4",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-ocean-300" />
          <span className="text-ocean-600 text-xs font-bold uppercase tracking-[0.2em]">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-ocean-300" />
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-950 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg md:text-xl text-gray-600 leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
