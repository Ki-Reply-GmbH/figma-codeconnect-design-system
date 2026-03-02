type Specific =
  | "big image"
  | "small image"
  | "big illustration"
  | "big only text"
  | "small only text";

export interface BasicCardProps {
  type?: "basic";
  /** Card layout variant */
  specific?: Specific;
  imageSrc?: string;
  illustrationSrc?: string;
  title?: string;
  description?: string;
  onArrowClick?: () => void;
  className?: string;
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M9 4L13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BasicCard({
  specific = "big image",
  imageSrc,
  illustrationSrc,
  title = "Card title",
  description = "Short description text goes here.",
  onArrowClick,
  className = "",
}: BasicCardProps) {
  const isBigImage = specific === "big image";
  const isSmallImage = specific === "small image";
  const isBigIllustration = specific === "big illustration";
  const isOnlyText = specific === "big only text" || specific === "small only text";
  const isBig = specific === "big image" || specific === "big illustration" || specific === "big only text";

  const hasMedia = !isOnlyText;
  const hasLargeMedia = isBigImage || isBigIllustration;

  return (
    <div
      className={[
        "relative bg-neutral-white rounded-xs overflow-hidden",
        "transition-shadow hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Image / illustration area */}
      {hasMedia && (
        <div
          className={[
            "bg-neutral-gray-3 overflow-hidden",
            hasLargeMedia ? "h-[160px]" : "h-[80px]",
          ].join(" ")}
        >
          {(isBigImage || isSmallImage) && imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
          {isBigIllustration && illustrationSrc && (
            <img
              src={illustrationSrc}
              alt=""
              className="w-full h-full object-contain p-4"
            />
          )}
        </div>
      )}

      {/* Content */}
      <div className={["p-4", isBig ? "pb-10" : "pb-8"].join(" ")}>
        <p className="text-h4 font-sans font-regular text-neutral-black leading-6 tracking-[0.2px]">
          {title}
        </p>
        {description && (
          <p className="text-caption font-sans font-regular text-[#787e80] mt-1 tracking-[0.2px]">
            {description}
          </p>
        )}
      </div>

      {/* Arrow icon bottom-right */}
      <button
        type="button"
        onClick={onArrowClick}
        className="absolute bottom-4 right-4 text-neutral-black"
        aria-label="View more"
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
}
