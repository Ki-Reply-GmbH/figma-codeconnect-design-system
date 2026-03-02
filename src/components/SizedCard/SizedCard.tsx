import React from "react";

type SizedCardProps = {
  size?: "M" | "S" | "XS";
  dimension?: "big" | "small";
  status?: "enabled" | "hover";
  label?: string;
  className?: string;
};

export function SizedCard({
  size = "M",
  dimension = "big",
  status = "enabled",
  label = "Add locations to your favourites list",
  className,
}: SizedCardProps) {
  const isSmall = dimension === "small";
  const isHover = status === "hover";

  const iconSize = size === "S" ? "size-8" : "size-10";
  const iconBg = "bg-[#f09273]";

  if (isSmall) {
    return (
      <div
        className={[
          "relative bg-white flex items-center gap-4 px-4 py-3",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <p className="flex-1 text-body-m tracking-[0.3px] text-black">
          {label}
        </p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M2 8H14M8 2L14 8L8 14"
            stroke="#4CAF50"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={[
        "relative bg-white flex items-center gap-4 p-5",
        isHover ? "shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "relative flex items-center justify-center rounded-full shrink-0",
          iconSize,
          iconBg,
        ].join(" ")}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4V16M4 10H16"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p
        className={[
          "font-normal text-black leading-snug",
          size === "XS"
            ? "text-body-xs tracking-[0.5px] w-[196px]"
            : size === "S"
            ? "text-body-m tracking-[0.3px] w-[138px]"
            : "text-[16px] tracking-[0.2px] w-[198px]",
        ].join(" ")}
      >
        {label}
      </p>
    </div>
  );
}
