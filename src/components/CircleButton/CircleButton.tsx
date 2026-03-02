import React from "react";

type CircleButtonProps = {
  family?: "black" | "white";
  direction?: "Left" | "Right";
  status?: "enabled" | "hover" | "pressed" | "disabled";
  className?: string;
};

export function CircleButton({
  family = "black",
  direction = "Left",
  status = "enabled",
  className,
}: CircleButtonProps) {
  const base =
    "relative flex items-center justify-center size-8 rounded-full shadow-[0px_2px_6px_0px_rgba(0,0,0,0.02)]";
  const bgClass =
    family === "black"
      ? "bg-black"
      : status === "hover"
      ? "bg-gray-100"
      : status === "disabled"
      ? "bg-gray-50 opacity-40"
      : "bg-white";

  return (
    <button
      className={[base, bgClass, className].filter(Boolean).join(" ")}
      disabled={status === "disabled"}
    >
      {family === "black" ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          {direction === "Left" ? (
            <path
              d="M10 12L6 8L10 4"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M6 4L10 8L6 12"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="6.5" cy="6.5" r="4" stroke="black" strokeWidth="1.1" />
          <path
            d="M9.5 9.5L13 13"
            stroke="black"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
