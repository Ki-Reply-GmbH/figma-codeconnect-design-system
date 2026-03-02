import type { ReactNode } from "react";

interface TagProps {
  size?: "S" | "XS";
  children: ReactNode;
  className?: string;
}

export function Tag({ size = "S", children, className }: TagProps) {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        bg-primary-red-3 text-neutral-white
        px-2 pt-1 pb-0.5 rounded-full leading-none
        ${size === "XS" ? "text-tag-xs" : "text-tag"}
        ${className ?? ""}
      `}
    >
      {children}
    </span>
  );
}
