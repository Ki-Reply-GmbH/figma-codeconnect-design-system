import React from "react";

type TenantCardSize = "M" | "S" | "XS" | "M simplified" | "S simplified" | "XS simplified";
type TenantCardType = "added place" | "other tenants added";
type TenantCardContent = "agreement" | "no agreement";
type TenantCardStatus = "default" | "hover" | "pressed";

type TenantCardProps = {
  size?: TenantCardSize;
  type?: TenantCardType;
  content?: TenantCardContent;
  status?: TenantCardStatus;
  placeName?: string;
  address?: string;
  category?: string;
  imageSrc?: string;
  className?: string;
};

export function TenantCard({
  size = "M",
  type = "added place",
  content = "no agreement",
  status = "default",
  placeName = "Place name 2 lines maximum",
  address = "Address line long address",
  category = "Google category",
  imageSrc,
  className,
}: TenantCardProps) {
  const isPressed = status === "pressed";
  const isHover = status === "hover";
  const hasAgreement = content === "agreement";
  const isSimplified = size.includes("simplified");

  // Height map
  const heightMap: Record<TenantCardSize, number> = {
    M: 104,
    S: 93,
    XS: 107,
    "M simplified": 159,
    "S simplified": 149,
    "XS simplified": 163,
  };
  const height = heightMap[size];

  // Image width
  const imgWidthMap: Record<string, string> = {
    M: "w-[210px]",
    S: "w-[150px]",
    XS: "w-[166px]",
    "M simplified": "w-[210px]",
    "S simplified": "w-[117px]",
    "XS simplified": "w-[117px]",
  };
  const imgWidth = imgWidthMap[size] || "w-[166px]";

  const showBorder = isPressed;
  const shadow = isHover ? "shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)]" : "";

  return (
    <div
      className={[
        "relative bg-white rounded-sm overflow-hidden",
        showBorder ? "border-2 border-primary-red-1" : "",
        shadow,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ height }}
    >
      {/* Image section */}
      <div
        className={[
          "absolute left-0 top-0 h-full bg-neutral-gray-3",
          imgWidth,
        ].join(" ")}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={placeName} className="size-full object-cover" />
        ) : (
          <div className="size-full bg-neutral-gray-3" />
        )}
      </div>

      {/* Content */}
      <div
        className={[
          "absolute top-4 right-4 flex flex-col gap-1",
          size.startsWith("M") ? "left-[226px]" : size.startsWith("S") ? "left-[166px]" : "left-[182px]",
        ].join(" ")}
      >
        {/* Tag */}
        {type === "added place" && (
          <span className="text-[8px] font-medium tracking-[0.32px] uppercase text-primary-red-1">
            {category}
          </span>
        )}
        {type === "other tenants added" && (
          <span className="text-[8px] font-medium tracking-[0.32px] uppercase text-primary-red-1">
            {category}
          </span>
        )}

        {/* Place info */}
        <div className="flex flex-col gap-1 mt-2">
          <p
            className={[
              "font-normal leading-tight",
              size === "XS" || size === "XS simplified"
                ? "text-[18px] tracking-[0.5px]"
                : size === "S" || size === "S simplified"
                ? "text-[12px] tracking-[0.3px]"
                : "text-[16px] tracking-[0.2px]",
            ].join(" ")}
          >
            {placeName}
          </p>
          <p className="text-[9px] tracking-[0.2px] text-black">{address}</p>
        </div>
      </div>

      {/* Agreement tag */}
      {hasAgreement && (
        <div className="absolute top-1.5 left-2 flex items-center gap-2">
          <div className="relative">
            <div className="bg-primary-red-1 rounded-[10px] h-4 w-[85px]" />
            <span className="absolute inset-0 flex items-center justify-center text-[6px] font-medium tracking-[0.5px] uppercase text-white">
              Suggested by GRE
            </span>
          </div>
        </div>
      )}

      {/* CTA button for simplified variants */}
      {isSimplified && !hasAgreement && (
        <div
          className={[
            "absolute top-4 border border-neutral-gray-3 rounded flex items-center justify-center",
            size === "XS simplified" ? "size-10 right-4" : "size-8 right-4",
          ].join(" ")}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3V13M3 8H13" stroke="black" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
}
