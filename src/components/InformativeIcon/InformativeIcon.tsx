import React from "react";

type InformativeType =
  | "discount"
  | "feedback 1"
  | "feedback 2"
  | "feedback 3"
  | "feedback 4"
  | "feedback 5"
  | "food&drink"
  | "stair"
  | "opening hour"
  | "things to do"
  | "shopping"
  | "services"
  | "tooltip"
  | "calendar";

type InformativeIconProps = {
  type?: InformativeType;
  size?: "15" | "16" | "20" | "24" | "32";
  color?: "black" | "gray" | "orange" | "half-half" | "pressed" | "pressed/enabled";
  className?: string;
};

const FACE_COLORS: Record<string, string> = {
  black: "#000000",
  gray: "#6f7072",
  orange: "#e9573d",
};

export function InformativeIcon({
  type = "feedback 1",
  size = "32",
  color = "black",
  className,
}: InformativeIconProps) {
  const px = parseInt(size);
  const isPressed = color === "pressed" || color === "pressed/enabled";
  const faceStroke = isPressed ? "#ffffff" : (FACE_COLORS[color] ?? "#000000");
  const faceFill = isPressed ? "#404040" : "none";

  // Feedback icons (smiley faces at various expressions)
  const feedbackMap: Record<string, React.ReactNode> = {
    "feedback 1": (
      // Very unhappy: curved-down mouth, sad eyes, furrowed brow lines
      <svg width={px} height={px} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={faceStroke} strokeWidth={isPressed ? 0 : 1.4} fill={faceFill} />
        {isPressed && <circle cx="16" cy="16" r="12" fill="#404040" />}
        <path d="M10.5 20.5C10.5 20.5 12.5 17.5 16 17.5C19.5 17.5 21.5 20.5 21.5 20.5" stroke={isPressed ? "#ffffff" : faceStroke} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="13" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
        <circle cx="20" cy="13" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
        <path d="M10 11L12.5 12.5M22 11L19.5 12.5" stroke={isPressed ? "#ffffff" : faceStroke} strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    "feedback 2": (
      // Unhappy: curved-down mouth, simple sad eyes
      <svg width={px} height={px} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={faceStroke} strokeWidth={isPressed ? 0 : 1.4} fill={faceFill} />
        {isPressed && <circle cx="16" cy="16" r="12" fill="#404040" />}
        <path d="M11 20C11 20 13 17.5 16 17.5C19 17.5 21 20 21 20" stroke={isPressed ? "#ffffff" : faceStroke} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="13.5" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
        <circle cx="20" cy="13.5" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
      </svg>
    ),
    "feedback 3": (
      // Neutral: straight mouth, neutral eyes
      <svg width={px} height={px} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={faceStroke} strokeWidth={isPressed ? 0 : 1.4} fill={faceFill} />
        {isPressed && <circle cx="16" cy="16" r="12" fill="#404040" />}
        <path d="M11 19.5H21" stroke={isPressed ? "#ffffff" : faceStroke} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="13.5" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
        <circle cx="20" cy="13.5" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
      </svg>
    ),
    "feedback 4": (
      // Slightly happy: gentle smile, happy eyes
      <svg width={px} height={px} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={faceStroke} strokeWidth={isPressed ? 0 : 1.4} fill={faceFill} />
        {isPressed && <circle cx="16" cy="16" r="12" fill="#404040" />}
        <path d="M11 18C11 18 13 20.5 16 20.5C19 20.5 21 18 21 18" stroke={isPressed ? "#ffffff" : faceStroke} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="13.5" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
        <circle cx="20" cy="13.5" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
      </svg>
    ),
    "feedback 5": (
      // Very happy: big open smile, happy eyes
      <svg width={px} height={px} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke={faceStroke} strokeWidth={isPressed ? 0 : 1.4} fill={faceFill} />
        {isPressed && <circle cx="16" cy="16" r="12" fill="#404040" />}
        <path d="M10.5 17C10.5 17 12 21.5 16 21.5C20 21.5 21.5 17 21.5 17" stroke={isPressed ? "#ffffff" : faceStroke} strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="12" cy="13" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
        <circle cx="20" cy="13" r="1.2" fill={isPressed ? "#ffffff" : faceStroke} />
      </svg>
    ),
  };

  if (type in feedbackMap) {
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
        {feedbackMap[type]}
      </div>
    );
  }

  // Utility/category icons
  const iconColor = FACE_COLORS[color] ?? "#000000";

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
        {type === "tooltip" && (
          <>
            <circle cx="10" cy="10" r="8" stroke={iconColor} strokeWidth="1.4" />
            <circle cx="10" cy="7.5" r="0.8" fill={iconColor} />
            <path
              d="M10 10V14"
              stroke={iconColor}
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </>
        )}
        {type === "calendar" && (
          <>
            <rect x="2" y="4" width="16" height="14" rx="1.5" stroke={iconColor} strokeWidth="1.2" />
            <path d="M2 8H18" stroke={iconColor} strokeWidth="1.2" />
            <path d="M6 2V5M14 2V5" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <rect x="5" y="10.5" width="2" height="2" rx="0.5" fill={iconColor} />
            <rect x="9" y="10.5" width="2" height="2" rx="0.5" fill={iconColor} />
            <rect x="13" y="10.5" width="2" height="2" rx="0.5" fill={iconColor} />
            <rect x="5" y="14" width="2" height="2" rx="0.5" fill={iconColor} />
            <rect x="9" y="14" width="2" height="2" rx="0.5" fill={iconColor} />
          </>
        )}
        {type === "discount" && (
          <>
            <rect x="2" y="2" width="16" height="16" rx="8" fill={iconColor} />
            <circle cx="7.5" cy="7.5" r="1" fill="white" />
            <circle cx="12.5" cy="12.5" r="1" fill="white" />
            <path d="M6 14L14 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </>
        )}
        {type === "stair" && (
          <path
            d="M3 17V14H7V11H11V8H15V5H18"
            stroke={
              color === "half-half"
                ? "#e9573d"
                : color === "orange"
                ? "#e9573d"
                : iconColor
            }
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        {type === "opening hour" && (
          <>
            <circle cx="10" cy="10" r="8" stroke={iconColor} strokeWidth="1.2" />
            <path d="M10 5.5V10L13 12.5" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {type === "services" && (
          <path
            d="M15.6 4.4L13.8 6.2L11.6 4L13.4 2.2C12.5 1.7 11.3 1.8 10.5 2.6C9.7 3.4 9.5 4.6 10 5.6L4 11.6C3 11.1 1.8 11.3 1 12.1C0.2 12.9 0.1 14.1 0.6 15L2.4 13.2L4.6 15.4L2.8 17.2C3.7 17.7 4.9 17.6 5.7 16.8C6.5 16 6.7 14.8 6.2 13.8L12.2 7.8C13.2 8.3 14.4 8.1 15.2 7.3C16 6.5 16.1 5.3 15.6 4.4Z"
            stroke={iconColor}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(2, 1) scale(0.8)"
          />
        )}
        {type === "shopping" && (
          <>
            <path d="M6 2L4 6H16L14 2" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="2" y="6" width="16" height="12" rx="1" stroke={iconColor} strokeWidth="1.2" />
            <path d="M7.5 10C7.5 11.66 8.84 13 10.5 13C12.16 13 13.5 11.66 13.5 10" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
          </>
        )}
        {type === "things to do" && (
          <>
            <circle cx="10" cy="5" r="2.5" stroke={iconColor} strokeWidth="1.2" />
            <path d="M6 10C6 7.79 7.79 6 10 6" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M10 6C12.21 6 14 7.79 14 10V18" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M10 10V18" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M6 10V15L8 18" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
        {type === "food&drink" && (
          <>
            <path d="M5 2V8C5 9.66 6.34 11 8 11V18" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M3 2V5.5M5 2V5.5M7 2V5.5" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 2C14 2 16 4 16 7C16 9.21 14.67 11 13 11V18" stroke={iconColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </>
        )}
      </svg>
    </div>
  );
}
