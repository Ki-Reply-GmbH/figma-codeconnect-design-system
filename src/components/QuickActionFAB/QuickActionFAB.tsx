import React from "react";

type QuickActionFABProps = {
  family?: "black" | "white";
  open?: boolean;
  className?: string;
};

export function QuickActionFAB({
  family = "black",
  open = false,
  className,
}: QuickActionFABProps) {
  const isBlack = family === "black";
  const shadow = "shadow-[-2px_0px_8px_0px_rgba(0,0,0,0.2)]";

  if (open) {
    const pillBg = isBlack ? "bg-black" : "bg-white";
    const textColor = isBlack ? "text-white" : "text-black";
    return (
      <div
        className={[
          "flex items-center gap-2 px-6 py-3 rounded-[89px]",
          pillBg,
          shadow,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className={["text-body-xs tracking-[0.5px]", textColor].join(" ")}>
          Search
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle
            cx="8"
            cy="8"
            r="5"
            stroke={isBlack ? "white" : "black"}
            strokeWidth="1.2"
          />
          <path
            d="M12 12L16 16"
            stroke={isBlack ? "white" : "black"}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  const closedBg = isBlack ? "bg-black" : "bg-white";
  return (
    <div
      className={[
        "relative flex items-center justify-center size-12 rounded-full",
        closedBg,
        shadow,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isBlack ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M4 13L10 7L16 13"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="8.5" cy="8.5" r="5" stroke="black" strokeWidth="1.2" />
          <path
            d="M12.5 12.5L16 16"
            stroke="black"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}
