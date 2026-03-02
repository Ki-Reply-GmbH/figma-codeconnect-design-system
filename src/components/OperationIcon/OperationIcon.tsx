import React from "react";

type OperationType =
  | "attachment"
  | "checkbox selected"
  | "checkbox unselected"
  | "edit"
  | "eraser"
  | "send"
  | "share"
  | "view"
  | "searchbar"
  | "expand"
  | "upload"
  | "hide"
  | "options";

type OperationIconProps = {
  type?: OperationType;
  size?: "16" | "20" | "32";
  color?: "black" | "grey" | "white";
  className?: string;
};

const COLOR_HEX: Record<string, string> = {
  black: "#000000",
  grey: "#6f7072",
  white: "#ffffff",
};

export function OperationIcon({
  type = "searchbar",
  size = "20",
  color = "black",
  className,
}: OperationIconProps) {
  const px = parseInt(size);
  const c = COLOR_HEX[color] ?? "#000000";

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
        {type === "searchbar" && (
          <>
            <circle cx="8.5" cy="8.5" r="5.5" stroke={c} strokeWidth="1.4" />
            <path
              d="M12.5 12.5L17 17"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "attachment" && (
          <path
            d="M16.5 9.5L9.5 16.5C8.12 17.88 5.88 17.88 4.5 16.5C3.12 15.12 3.12 12.88 4.5 11.5L11.5 4.5C12.33 3.67 13.67 3.67 14.5 4.5C15.33 5.33 15.33 6.67 14.5 7.5L7.5 14.5C7.09 14.91 6.41 14.91 6 14.5C5.59 14.09 5.59 13.41 6 13L12 7"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "send" && (
          <path
            d="M3 3L17 10L3 17V12L12 10L3 8V3Z"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "edit" && (
          <path
            d="M12.5 3.5L16.5 7.5L7 17H3V13L12.5 3.5ZM10.5 5.5L14.5 9.5"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "expand" && (
          <path
            d="M3 7V3H7M13 3H17V7M17 13V17H13M7 17H3V13"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "share" && (
          <>
            <circle cx="15" cy="4" r="2" stroke={c} strokeWidth="1.2" />
            <circle cx="15" cy="16" r="2" stroke={c} strokeWidth="1.2" />
            <circle cx="5" cy="10" r="2" stroke={c} strokeWidth="1.2" />
            <path d="M7 9L13 5.5" stroke={c} strokeWidth="1.2" />
            <path d="M7 11L13 14.5" stroke={c} strokeWidth="1.2" />
          </>
        )}
        {type === "view" && (
          <>
            <path
              d="M2 10C2 10 5.5 4 10 4C14.5 4 18 10 18 10C18 10 14.5 16 10 16C5.5 16 2 10 2 10Z"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="10" r="2.5" stroke={c} strokeWidth="1.4" />
          </>
        )}
        {type === "hide" && (
          <>
            <path
              d="M2 10C2 10 5.5 4 10 4C14.5 4 18 10 18 10C18 10 14.5 16 10 16C5.5 16 2 10 2 10Z"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="10" cy="10" r="2.5" stroke={c} strokeWidth="1.4" />
            <line
              x1="3"
              y1="3"
              x2="17"
              y2="17"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "checkbox selected" && (
          <>
            <rect x="2" y="2" width="16" height="16" rx="2" fill={c} />
            <path
              d="M5.5 10L8.5 13L14.5 7.5"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {type === "checkbox unselected" && (
          <rect
            x="2.5"
            y="2.5"
            width="15"
            height="15"
            rx="1.5"
            stroke={c}
            strokeWidth="1"
          />
        )}
        {type === "options" && (
          <>
            <circle cx="4.5" cy="10" r="1.5" fill={c} />
            <circle cx="10" cy="10" r="1.5" fill={c} />
            <circle cx="15.5" cy="10" r="1.5" fill={c} />
          </>
        )}
        {type === "upload" && (
          <>
            <path
              d="M10 3V14"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M6 7L10 3L14 7"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 17H17"
              stroke={c}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "eraser" && (
          <path
            d="M3 17H17M6 14.5L5 13.5C4.09 12.59 4.09 11.11 5 10.2L11.7 3.5C12.61 2.59 14.09 2.59 15 3.5L17.5 6C18.41 6.91 18.41 8.39 17.5 9.3L10 16.8C9.09 17.71 7.61 17.71 6.7 16.8L6 16.1"
            stroke={c}
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}
