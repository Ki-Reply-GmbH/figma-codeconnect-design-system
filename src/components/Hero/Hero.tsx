type Level = "first level" | "second level";
type HeroType =
  | "first time access"
  | "searchbar"
  | "B&D"
  | "S&R"
  | "service detail"
  | "community"
  | "hidden page";

export interface HeroProps {
  size?: "M";
  level?: Level;
  type?: HeroType;
  /** Title text (e.g. "Welcome") */
  title?: string;
  /** Subtitle text (e.g. "to GREta") */
  subtitle?: string;
  /** Background color (defaults to salmon) */
  bgColor?: string;
  /** Illustration image src */
  illustrationSrc?: string;
  /** Logo src */
  logoSrc?: string;
  /** CTA button label */
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function Hero({
  type = "first time access",
  title = "Welcome",
  subtitle = "to GREta",
  bgColor = "#f09273",
  illustrationSrc,
  ctaLabel = "Explore the app",
  onCtaClick,
  className = "",
}: HeroProps) {
  return (
    <div
      className={[
        "relative w-full h-[256px] overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundColor: bgColor }}
    >
      {/* Welcome text */}
      <div className="absolute left-[127px] top-1/2 -translate-y-1/2">
        <p className="text-h2 font-sans font-regular text-neutral-white leading-tight mb-1">
          {title}
        </p>
        {subtitle && (
          <p className="text-h2 font-sans font-regular text-neutral-white leading-tight">
            {subtitle}
          </p>
        )}

        {/* CTA button */}
        {ctaLabel && (
          <button
            type="button"
            onClick={onCtaClick}
            className="mt-6 px-6 py-2.25 border border-neutral-white rounded-xs text-button-m font-sans font-regular text-neutral-white whitespace-nowrap"
          >
            {ctaLabel}
          </button>
        )}
      </div>

      {/* Illustration right */}
      {illustrationSrc && (
        <div className="absolute right-[72px] bottom-0 top-[35%]">
          <img
            src={illustrationSrc}
            alt=""
            className="h-full w-auto object-contain"
          />
        </div>
      )}
    </div>
  );
}
