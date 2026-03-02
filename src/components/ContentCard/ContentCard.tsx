type ContentType = "only text" | "text+image";
type Size = "M" | "S" | "XS";

export interface ContentCardProps {
  content?: ContentType;
  size?: Size;
  author?: string;
  date?: string;
  title?: string;
  excerpt?: string;
  imageSrc?: string;
  readMoreLabel?: string;
  onReadMore?: () => void;
  className?: string;
}

export function ContentCard({
  content = "only text",
  size = "M",
  author = "Author Name",
  date = "DD/MM/YY",
  title = "Article title",
  excerpt = "Short excerpt of the article content goes here.",
  imageSrc,
  readMoreLabel = "Read more",
  onReadMore,
  className = "",
}: ContentCardProps) {
  const isXs = size === "XS";
  const hasImage = content === "text+image";

  if (isXs) {
    return (
      <div
        className={[
          "bg-neutral-white rounded-xs overflow-hidden",
          "transition-shadow hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Image top (XS with image) */}
        {hasImage && imageSrc && (
          <div className="h-[160px] bg-neutral-gray-3 overflow-hidden">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="p-4">
          {/* Author + date */}
          <div className="flex items-center gap-2">
            <span className="text-caption font-sans font-regular text-neutral-black tracking-[0.2px]">
              {author}
            </span>
            <span className="text-caption font-sans font-regular text-neutral-gray-2 tracking-[0.2px]">
              {date}
            </span>
          </div>
          {/* Title */}
          <p className="text-[18px] font-sans font-regular text-neutral-black mt-1 tracking-[0.5px]">
            {title}
          </p>
          {/* Excerpt */}
          <p className="text-caption font-sans font-regular text-[#787e80] mt-2 tracking-[0.2px]">
            {excerpt}
          </p>
          {/* Read more */}
          <button
            type="button"
            onClick={onReadMore}
            className="mt-2 text-caption font-sans font-regular text-link-blue underline tracking-[0.2px]"
          >
            {readMoreLabel}
          </button>
        </div>
      </div>
    );
  }

  // M / S: horizontal layout with optional image on right
  return (
    <div
      className={[
        "flex bg-neutral-white rounded-xs overflow-hidden",
        "transition-shadow hover:shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Text side */}
      <div className="flex-1 p-4">
        {/* Author + date */}
        <div className="flex items-center gap-2">
          <span className="text-caption font-sans font-regular text-neutral-black tracking-[0.2px]">
            {author}
          </span>
          <span className="text-caption font-sans font-regular text-neutral-gray-2 tracking-[0.2px]">
            {date}
          </span>
        </div>
        {/* Title */}
        <p className="text-h4 font-sans font-regular text-neutral-black mt-1 leading-6 tracking-[0.2px]">
          {title}
        </p>
        {/* Excerpt */}
        <p className="text-caption font-sans font-regular text-[#787e80] mt-2 tracking-[0.2px]">
          {excerpt}
        </p>
        {/* Read more */}
        <button
          type="button"
          onClick={onReadMore}
          className="mt-2 text-caption font-sans font-regular text-link-blue underline tracking-[0.2px]"
        >
          {readMoreLabel}
        </button>
      </div>

      {/* Image right (M/S with image) */}
      {hasImage && (
        <div
          className={[
            "flex-none bg-neutral-gray-3 overflow-hidden",
            size === "M" ? "w-[160px]" : "w-[120px]",
          ].join(" ")}
        >
          {imageSrc && (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      )}
    </div>
  );
}
