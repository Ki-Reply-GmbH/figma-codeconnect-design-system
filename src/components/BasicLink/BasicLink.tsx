import type { ReactNode } from "react";

type Family = "black" | "blue" | "white";
type LinkType = "default" | "inline" | "text+left icon" | "text+right icon";

export interface BasicLinkProps {
  family?: Family;
  /** default = plain text, inline = underlined, text+left icon = ← text, text+right icon = text → */
  type?: LinkType;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

function ArrowRightIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 10H16M16 10L11 5M16 10L11 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16 10H4M4 10L9 5M4 10L9 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hover/active background per family
const familyClasses: Record<Family, string> = {
  black: [
    "text-neutral-black",
    "hover:bg-neutral-gray-3",
    "active:bg-neutral-black active:text-neutral-white",
  ].join(" "),
  blue: [
    "text-link-blue",
    "hover:bg-link-blue hover:text-neutral-white",
    "active:bg-neutral-black active:text-neutral-white",
  ].join(" "),
  white: [
    "text-neutral-white",
    "hover:text-link-blue",
    "active:text-neutral-black",
  ].join(" "),
};

export function BasicLink({
  family = "black",
  type = "default",
  href,
  onClick,
  children,
  className = "",
}: BasicLinkProps) {
  const hasIcon = type === "text+left icon" || type === "text+right icon";

  const classes = [
    "inline-flex items-center text-body font-sans font-regular",
    "rounded-xs px-1 py-0.5 transition-colors cursor-pointer",
    familyClasses[family],
    type === "inline" && "underline",
    hasIcon && "gap-2",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {type === "text+left icon" && <ArrowLeftIcon />}
      <span>{children}</span>
      {type === "text+right icon" && <ArrowRightIcon />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
