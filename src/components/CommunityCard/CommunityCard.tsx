type CardType =
  | "general announcement"
  | "urgent announcement"
  | "community post"
  | "tenant announcement";

type Size = "M" | "S" | "XS";

export interface CommunityCardProps {
  type?: CardType;
  size?: Size;
  illustrationSrc?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

const TYPE_DEFAULTS: Record<CardType, { title: string; description: string }> = {
  "general announcement": {
    title: "General announcement",
    description:
      "To inform Office Managers and allow them to redirect the communication to Occupiers",
  },
  "urgent announcement": {
    title: "Urgent announcement",
    description:
      "For urgent communications that require immediate attention from all users",
  },
  "community post": {
    title: "Community post",
    description: "Share updates and news with your community",
  },
  "tenant announcement": {
    title: "Tenant announcement",
    description: "Send direct messages to specific tenants in your buildings",
  },
};

export function CommunityCard({
  type = "general announcement",
  size = "M",
  illustrationSrc,
  title,
  description,
  onClick,
  className = "",
}: CommunityCardProps) {
  const defaults = TYPE_DEFAULTS[type];
  const cardTitle = title ?? defaults.title;
  const cardDescription = description ?? defaults.description;

  const isBig = size === "M";
  const cardWidth = isBig ? "w-[290px]" : size === "S" ? "w-[210px]" : "w-[343px]";
  const cardHeight = isBig ? "h-[213px]" : size === "S" ? "h-[181px]" : "h-[210px]";
  const illustrationSize = isBig ? "w-[54px] h-[54px]" : "w-[48px] h-[48px]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative flex flex-col items-center justify-center bg-neutral-white rounded-xs",
        "transition-shadow hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]",
        "text-center p-4 gap-3",
        cardWidth,
        cardHeight,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Illustration */}
      <div
        className={[
          "overflow-hidden flex items-center justify-center",
          illustrationSize,
        ].join(" ")}
      >
        {illustrationSrc ? (
          <img src={illustrationSrc} alt="" className="w-full h-full object-contain" />
        ) : (
          /* Placeholder for illustration */
          <div className="w-full h-full rounded-full bg-neutral-gray-4" />
        )}
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-1">
        <p className="text-h4 font-sans font-regular text-neutral-black leading-6 tracking-[0.2px]">
          {cardTitle}
        </p>
        <p className="text-caption font-sans font-regular text-[#787e80] tracking-[0.2px]">
          {cardDescription}
        </p>
      </div>
    </button>
  );
}
