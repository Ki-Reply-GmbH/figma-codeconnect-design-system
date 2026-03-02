import type { ReactNode } from "react";

export interface XSNavigationLinkProps {
  selected?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function XSNavigationLink({
  selected = false,
  href,
  onClick,
  children,
  className = "",
}: XSNavigationLinkProps) {
  const classes = [
    "inline-block font-sans font-regular text-h2 whitespace-nowrap",
    "transition-colors",
    "text-neutral-black hover:text-primary-gray active:text-primary-gray",
    selected && "underline",
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
