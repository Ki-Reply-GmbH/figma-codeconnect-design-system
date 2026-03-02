import type { ReactNode } from "react";

type Size = "S" | "XS";
type Variant = "Primary" | "Secondary" | "Tertiary";
type Family = "Red" | "Black" | "White";
type Content = "Onlytext" | "Onlyicon" | "Text+icon";

export interface CTAButtonProps {
  /** S = small (12px), XS = standard (14px) — Figma naming convention */
  size?: Size;
  /** Primary = filled, Secondary = outlined, Tertiary = ghost */
  variant?: Variant;
  /** Red, Black, or White colour palette */
  family?: Family;
  content?: Content;
  disabled?: boolean;
  children?: ReactNode;
  /** Icon element used for Onlyicon and Text+icon variants */
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

// Padding + font per size × content combination
const sizeClasses: Record<Size, Record<Content, string>> = {
  S: {
    Onlytext: "px-6 py-2.25 text-button-m",
    Onlyicon: "p-2",
    "Text+icon": "px-2 py-1.5 gap-4 text-button-m",
  },
  XS: {
    Onlytext: "px-6 py-3.75 text-button-xs",
    Onlyicon: "p-3.5",
    "Text+icon": "p-3.5 gap-6 text-button-xs",
  },
};

// Background, border, and text colour per variant × family (with interactive states)
const colorClasses: Record<Variant, Record<Family, string>> = {
  Primary: {
    Red: [
      "bg-primary-red-1 text-neutral-white",
      "hover:bg-primary-red-3",
      "active:bg-primary-red-2",
      "disabled:bg-neutral-gray-3",
    ].join(" "),
    Black: [
      "bg-neutral-black text-neutral-white",
      "hover:bg-primary-red-3",
      "active:bg-primary-red-2",
      "disabled:bg-neutral-gray-3",
    ].join(" "),
    White: [
      "bg-neutral-white text-neutral-black",
      "hover:bg-neutral-gray-3",
      "active:bg-neutral-white",
      "disabled:bg-neutral-gray-4 disabled:text-primary-gray",
    ].join(" "),
  },
  Secondary: {
    Red: [
      "border border-primary-red-1 text-primary-red-1",
      "hover:bg-secondary-red-3 hover:text-neutral-white hover:border-transparent",
      "active:bg-secondary-red-2 active:text-neutral-white active:border-transparent",
      "disabled:border-transparent disabled:bg-neutral-gray-3 disabled:text-primary-gray",
    ].join(" "),
    Black: [
      "border border-neutral-gray-3 text-neutral-black",
      "hover:bg-neutral-gray-3 hover:text-neutral-white hover:border-transparent",
      "active:bg-neutral-gray-3 active:text-neutral-white active:border-transparent",
      "disabled:border-transparent disabled:bg-neutral-gray-3 disabled:text-primary-gray",
    ].join(" "),
    White: [
      "border border-neutral-white text-neutral-white",
      "hover:bg-neutral-white hover:text-neutral-black hover:border-transparent",
      "active:bg-neutral-white active:text-neutral-black active:border-transparent",
      "disabled:border-transparent disabled:bg-neutral-gray-4 disabled:text-primary-gray",
    ].join(" "),
  },
  Tertiary: {
    Red: [
      "text-primary-red-1",
      "hover:bg-neutral-gray-3 hover:text-neutral-black",
      "active:bg-transparent active:text-primary-red-1 active:underline",
      "disabled:bg-neutral-gray-3 disabled:text-primary-gray",
    ].join(" "),
    Black: [
      "text-neutral-black",
      "hover:bg-neutral-gray-3",
      "active:bg-transparent active:underline",
      "disabled:bg-neutral-gray-3 disabled:text-primary-gray",
    ].join(" "),
    White: [
      "text-neutral-white",
      "hover:bg-neutral-white hover:text-neutral-black",
      "active:bg-transparent active:text-neutral-white active:underline",
      "disabled:bg-neutral-gray-4 disabled:text-primary-gray",
    ].join(" "),
  },
};

export function CTAButton({
  size = "XS",
  variant = "Primary",
  family = "Red",
  content = "Onlytext",
  disabled = false,
  children,
  icon,
  onClick,
  className = "",
}: CTAButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center rounded-sm font-sans font-regular",
        "transition-colors",
        "disabled:cursor-not-allowed disabled:pointer-events-none",
        sizeClasses[size][content],
        colorClasses[variant][family],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {content === "Onlyicon" ? (
        icon
      ) : content === "Text+icon" ? (
        <>
          <span>{children}</span>
          {icon}
        </>
      ) : (
        children
      )}
    </button>
  );
}
