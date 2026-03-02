type Size = "M-S" | "XS";
type Specific = "request" | "announcement";
type Extra =
  | "general"
  | "status bar"
  | "DIRECT"
  | "tag"
  | "general_CTA"
  | "direct_CTA"
  | "direct";

export interface HighlightCardProps {
  type?: "highlights";
  size?: Size;
  specific?: Specific;
  extra?: Extra;
  /** Category label (uppercase) */
  category?: string;
  /** Card title (ticket name or announcement title) */
  title?: string;
  /** Author or received date */
  meta?: string;
  /** CTA button label (for general_CTA / direct_CTA extras) */
  ctaLabel?: string;
  /** Tag label shown in the tag pill (for "tag" extra) */
  tagLabel?: string;
  /** Progress percent 0-100 (for "status bar" extra) */
  progressPercent?: number;
  onCtaClick?: () => void;
  className?: string;
}

export function HighlightCard({
  size = "M-S",
  specific = "request",
  extra = "status bar",
  category = "Category",
  title = "Ticket name two lines maximum",
  meta = "Opened by Name Surname",
  ctaLabel = "Forward",
  tagLabel = "CTA",
  progressPercent = 40,
  onCtaClick,
  className = "",
}: HighlightCardProps) {
  const isXs = size === "XS";
  const isAnnouncement = specific === "announcement";
  const isDirect = extra === "direct" || extra === "direct_CTA" || extra === "DIRECT";
  const hasCta = extra === "general_CTA" || extra === "direct_CTA";
  const hasTag = extra === "tag";
  const hasStatusBar = extra === "status bar";

  const categoryColor = isDirect ? "text-primary-red-4" : "text-primary-gray";

  return (
    <div
      className={[
        "relative bg-neutral-white rounded-xs overflow-hidden",
        "transition-shadow hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]",
        isXs ? "p-4 w-full" : "p-4",
        hasStatusBar ? "pb-8" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Category label */}
      <p
        className={[
          "text-[8px] font-sans font-medium tracking-[0.32px] uppercase whitespace-nowrap",
          categoryColor,
        ].join(" ")}
      >
        {category}
      </p>

      {/* Title */}
      <p
        className={[
          "font-sans font-regular text-neutral-black mt-1",
          isXs ? "text-[18px] tracking-[0.5px]" : "text-h4 tracking-[0.2px]",
        ].join(" ")}
      >
        {title}
      </p>

      {/* Meta row */}
      {meta && (
        <p className="text-caption font-sans font-regular text-[#787e80] mt-2">
          {isAnnouncement ? `Received ${meta}` : meta}
        </p>
      )}

      {/* CTA button (announcement with CTA extras) */}
      {hasCta && (
        <button
          type="button"
          onClick={onCtaClick}
          className="mt-3 px-6 py-2.25 border border-neutral-gray-3 rounded-xs text-button-m font-sans font-regular text-neutral-black whitespace-nowrap"
        >
          {ctaLabel}
        </button>
      )}

      {/* Tag pill (request + tag extra) */}
      {hasTag && (
        <div className="absolute bottom-4 right-4">
          <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#8e1230] text-neutral-white text-caption font-sans font-regular">
            {tagLabel}
          </span>
        </div>
      )}

      {/* Status bar (request + status bar extra) */}
      {hasStatusBar && (
        <div className="absolute bottom-0 left-4 right-4 pb-3">
          <p className="text-caption font-sans font-regular text-primary-gray whitespace-nowrap">
            In progress
          </p>
          <div className="relative h-1 bg-neutral-gray-4 rounded-sm mt-1">
            <div
              className="absolute inset-y-0 left-0 rounded-sm bg-gradient-to-r from-primary-red-4 to-neutral-gray-2"
              style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
