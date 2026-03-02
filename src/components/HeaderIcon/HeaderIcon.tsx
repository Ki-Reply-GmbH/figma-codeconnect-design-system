import React from "react";

type HeaderIconType =
  | "earth"
  | "menu"
  | "notification"
  | "notification unseen"
  | "profile"
  | "search bar";

type HeaderIconProps = {
  type?: HeaderIconType;
  color?: "black" | "white";
  className?: string;
};

const COLOR_HEX: Record<string, string> = {
  black: "#000000",
  white: "#ffffff",
};

export function HeaderIcon({
  type = "search bar",
  color = "black",
  className,
}: HeaderIconProps) {
  const c = COLOR_HEX[color] ?? "#000000";

  return (
    <div
      className={[
        "inline-flex items-center justify-center flex-shrink-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: 24, height: 24 }}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {type === "search bar" && (
          <>
            <circle cx="10" cy="10" r="6.5" stroke={c} strokeWidth="1.4" />
            <path
              d="M15 15L20.5 20.5"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "notification" && (
          <>
            <path
              d="M12 3C8.69 3 6 5.69 6 9V14L4 16V17H20V16L18 14V9C18 5.69 15.31 3 12 3Z"
              stroke={c}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18"
              stroke={c}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "notification unseen" && (
          <>
            <path
              d="M12 3C8.69 3 6 5.69 6 9V14L4 16V17H20V16L18 14V9C18 5.69 15.31 3 12 3Z"
              stroke={c}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18"
              stroke={c}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="18" cy="6" r="3" fill="#c21817" />
          </>
        )}
        {type === "menu" && (
          <>
            <line
              x1="3"
              y1="6"
              x2="21"
              y2="6"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="12"
              x2="21"
              y2="12"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <line
              x1="3"
              y1="18"
              x2="21"
              y2="18"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "profile" && (
          <>
            <circle cx="12" cy="8" r="4" stroke={c} strokeWidth="1.2" />
            <path
              d="M4 20C4 16.69 7.58 14 12 14C16.42 14 20 16.69 20 20"
              stroke={c}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "earth" && (
          <>
            <circle cx="12" cy="12" r="8.5" stroke={c} strokeWidth="1.2" />
            <path
              d="M3.5 12H20.5M12 3.5C12 3.5 9 7 9 12C9 17 12 20.5 12 20.5M12 3.5C12 3.5 15 7 15 12C15 17 12 20.5 12 20.5"
              stroke={c}
              strokeWidth="1.2"
            />
          </>
        )}
      </svg>
    </div>
  );
}
