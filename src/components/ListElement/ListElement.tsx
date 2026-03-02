type Size = "M" | "S";
type Extra = "no divider" | "with divider";

export interface ListElementProps {
  type?: "request";
  size?: Size;
  extra?: Extra;
  /** Clickable request title link */
  requestTitle?: string;
  onTitleClick?: () => void;
  id?: string;
  date?: string;
  category?: string;
  openedBy?: string;
  /** CTA tag label */
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function ListElement({
  size = "M",
  extra = "with divider",
  requestTitle = "Request title...",
  onTitleClick,
  id = "ID. 567330",
  date = "DD/MM/YY",
  category = "Category",
  openedBy = "Opened by Name Surname",
  ctaLabel = "CTA",
  onCtaClick,
  className = "",
}: ListElementProps) {
  const isM = size === "M";
  const hasDivider = extra === "with divider";

  return (
    <div
      className={[
        "relative bg-neutral-white",
        hasDivider ? "border-b border-neutral-gray-3" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center px-4 py-4 gap-4">
        {/* Left: title + metadata */}
        <div className="flex-1 min-w-0">
          {/* Request title link */}
          <button
            type="button"
            onClick={onTitleClick}
            className="text-caption font-sans font-regular text-link-blue underline tracking-[0.2px] text-left"
          >
            {requestTitle}
          </button>

          {/* Metadata row */}
          <div
            className={[
              "flex items-center gap-8 mt-1 text-caption font-sans font-regular text-primary-gray tracking-[0.2px] whitespace-nowrap overflow-hidden",
            ].join(" ")}
          >
            <span>{id}</span>
            <span>{date}</span>
            <span>{category}</span>
            {isM && <span>{openedBy}</span>}
          </div>
        </div>

        {/* CTA tag pill */}
        <button
          type="button"
          onClick={onCtaClick}
          className="flex-none inline-flex items-center px-2 py-1 rounded-full bg-[#8e1230] text-neutral-white text-caption font-sans font-regular whitespace-nowrap"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
