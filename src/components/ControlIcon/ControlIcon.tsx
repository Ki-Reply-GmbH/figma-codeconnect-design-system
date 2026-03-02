import React from "react";

type ControlType =
  | "add"
  | "arrow left"
  | "arrow right"
  | "chevron down"
  | "chevron left"
  | "chevron right"
  | "chevron up"
  | "close"
  | "first page"
  | "last page"
  | "paginator selected"
  | "paginator unselected"
  | "validate"
  | "zoom in"
  | "zoom out";

type ControlIconProps = {
  type?: ControlType;
  size?: "16" | "20" | "32";
  color?: "black" | "blue" | "gray" | "green" | "grey" | "light grey" | "red 1" | "red 3" | "white";
  digits?: "Single" | "Double";
  pageNumber?: number;
  className?: string;
};

const COLOR_HEX: Record<string, string> = {
  black: "#000000",
  white: "#ffffff",
  grey: "#6f7072",
  gray: "#6f7072",
  "light grey": "#b0b2b3",
  "red 1": "#c21817",
  "red 3": "#e9573d",
  blue: "#0057a8",
  green: "#4caf50",
};

export function ControlIcon({
  type = "chevron down",
  size = "20",
  color = "black",
  digits = "Single",
  pageNumber = 1,
  className,
}: ControlIconProps) {
  const px = parseInt(size);
  const c = COLOR_HEX[color] ?? "#000000";

  // Paginator types render as text with optional underline
  if (type === "paginator selected" || type === "paginator unselected") {
    const label = digits === "Double" ? String(pageNumber).padStart(2, "1") : String(pageNumber);
    const fontSize = px >= 32 ? "18px" : "9px";
    return (
      <div
        className={[
          "inline-flex flex-col items-center justify-center flex-shrink-0 relative",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ width: px, height: px }}
      >
        <span style={{ fontSize, color: c, letterSpacing: "0.2px" }}>
          {label}
        </span>
        {type === "paginator selected" && (
          <div
            className="absolute bottom-0"
            style={{
              height: 2,
              width: digits === "Double" ? "70%" : "40%",
              backgroundColor: "#c21817",
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={[
        "inline-flex items-center justify-center flex-shrink-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: px, height: px }}
    >
      <svg
        width={px}
        height={px}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "chevron down" && (
          <path
            d="M5 8L10 13L15 8"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "chevron up" && (
          <path
            d="M5 12L10 7L15 12"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "chevron right" && (
          <path
            d="M8 5L13 10L8 15"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "chevron left" && (
          <path
            d="M12 5L7 10L12 15"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "close" && (
          <path
            d="M5 5L15 15M15 5L5 15"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        )}
        {type === "add" && (
          <path
            d="M10 4V16M4 10H16"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        )}
        {type === "zoom in" && (
          <>
            <circle cx="9" cy="9" r="6" stroke={c} strokeWidth="1.4" />
            <path
              d="M9 6.5V11.5M6.5 9H11.5"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M13.5 13.5L17 17"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "zoom out" && (
          <>
            <circle cx="9" cy="9" r="6" stroke={c} strokeWidth="1.4" />
            <path
              d="M6.5 9H11.5"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M13.5 13.5L17 17"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "validate" && (
          <path
            d="M4 10L8 14L16 6"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "arrow right" && (
          <path
            d="M3 10H17M12 5L17 10L12 15"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "arrow left" && (
          <path
            d="M17 10H3M8 5L3 10L8 15"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "first page" && (
          <path
            d="M4 5V15M8 10L14 5V15L8 10Z"
            stroke={c}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "last page" && (
          <path
            d="M16 5V15M12 10L6 5V15L12 10Z"
            stroke={c}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}
