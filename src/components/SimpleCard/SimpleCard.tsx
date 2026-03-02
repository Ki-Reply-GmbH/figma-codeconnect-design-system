type Size = "M" | "S" | "XS";

export interface SimpleCardProps {
  /** Building card sizes */
  size?: Size;
  /** Building image src */
  imageSrc?: string;
  buildingName?: string;
  buildingAddress?: string;
  managedBy?: string;
  buildingCode?: string;
  /** Small label above the meta text (uppercase, 8px) */
  metaLabel?: string;
  metaValue?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function SimpleCard({
  size = "M",
  imageSrc,
  buildingName = "Building name",
  buildingAddress,
  managedBy = "Managed by Name Surname",
  buildingCode = "Building code",
  metaLabel = "TEXT HERE",
  metaValue = "Text here",
  ctaLabel = "See more",
  onCtaClick,
  className = "",
}: SimpleCardProps) {
  const isXs = size === "XS";

  if (isXs) {
    return (
      <div
        className={[
          "relative bg-neutral-white rounded-xs shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)] overflow-hidden",
          "w-[343px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Image top */}
        <div className="h-[127px] bg-neutral-gray-3 overflow-hidden">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={buildingName}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-4 pb-6">
          <p className="text-[18px] font-sans font-regular text-neutral-black tracking-[0.5px]">
            {buildingAddress ?? buildingName}
          </p>
          <p className="text-h4-xs font-sans font-regular text-neutral-gray-2 mt-1 tracking-[0.5px]">
            {buildingCode}
          </p>
          {metaLabel && (
            <p className="text-caption font-sans font-regular text-neutral-gray-2 uppercase mt-4 tracking-[0.2px]">
              {metaLabel}
            </p>
          )}
          {metaValue && (
            <p className="text-caption font-sans font-regular text-neutral-black tracking-[0.2px]">
              {metaValue}
            </p>
          )}
        </div>
      </div>
    );
  }

  // M / S: horizontal layout
  const imgWidth = size === "M" ? "w-[290px]" : "w-[210px]";
  const imgHeight = "h-[78px]";

  return (
    <div
      className={[
        "relative flex items-center bg-neutral-white rounded-xs",
        "transition-shadow hover:shadow-[0px_2px_6px_0px_rgba(0,0,0,0.02)]",
        imgWidth,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Image left */}
      <div
        className={["flex-none bg-neutral-gray-3 overflow-hidden rounded-l-xs", imgHeight, "w-[100px]"].join(" ")}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt={buildingName}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Text center */}
      <div className="flex-1 px-4">
        <p className="text-h4 font-sans font-regular text-neutral-black leading-6 tracking-[0.2px] whitespace-nowrap">
          {buildingName}
        </p>
        <p className="text-body font-sans font-regular text-[#787e80] tracking-[0.5px] whitespace-nowrap">
          {managedBy}
        </p>
      </div>

      {/* Meta + CTA */}
      <div className="flex-none flex items-center gap-4 pr-4">
        <div className="text-right">
          <p className="text-[8px] font-sans font-regular text-neutral-gray-2 uppercase tracking-[0.2px]">
            {metaLabel}
          </p>
          <p className="text-caption font-sans font-regular text-neutral-black tracking-[0.2px]">
            {metaValue}
          </p>
        </div>
        <button
          type="button"
          onClick={onCtaClick}
          className="px-6 py-2.25 border border-neutral-gray-3 rounded-xs text-button-m font-sans font-regular text-neutral-black whitespace-nowrap"
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
