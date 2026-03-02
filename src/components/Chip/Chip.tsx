import type { ReactNode } from "react";

type Status = "enabled" | "selected" | "disabled";

export interface ChipProps {
  status?: Status;
  /** Icon shown in enabled/disabled states */
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

// Simple checkmark SVG for the selected state
function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chip({
  status = "enabled",
  icon,
  children,
  onClick,
  className = "",
}: ChipProps) {
  return (
    <button
      type="button"
      disabled={status === "disabled"}
      onClick={onClick}
      className={[
        "inline-flex items-center py-1 rounded-full text-caption font-sans font-regular",
        "transition-colors",
        status === "enabled" &&
          "border border-neutral-gray-3 px-2 gap-1 text-neutral-gray-1",
        status === "selected" &&
          "bg-neutral-gray-3 pl-2 pr-2.5 gap-0.5 text-primary-red-4",
        status === "disabled" &&
          "bg-neutral-gray-4 px-2 gap-1 text-neutral-gray-2 cursor-not-allowed",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {status === "selected" ? <CheckIcon /> : icon}
      <span>{children}</span>
    </button>
  );
}
