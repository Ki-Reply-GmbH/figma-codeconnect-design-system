import type { ReactNode } from "react";

type Size = "M" | "XS";

export interface FooterLinkProps {
  /** M = 9 px caption, XS = 14 px h4-xs */
  size?: Size;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function FooterLink({
  size = "M",
  href,
  onClick,
  children,
  className = "",
}: FooterLinkProps) {
  const classes = [
    "inline-block font-sans font-regular text-neutral-black whitespace-nowrap",
    "transition-colors hover:underline active:text-primary-red-1",
    size === "XS" ? "text-h4-xs" : "text-caption",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
