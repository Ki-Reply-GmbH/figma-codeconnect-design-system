import { useState } from "react";
import type { ReactNode } from "react";

type Specific = "basic" | "with divider";

export interface AccordionMProps {
  size?: "M";
  specific?: Specific;
  /** Accordion header label */
  label?: string;
  /** Expanded content */
  children?: ReactNode;
  /** Controlled open state */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
}

function ChevronUpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 10L8 6L12 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AccordionM({
  specific = "basic",
  label = "Text input",
  children,
  open: controlledOpen,
  defaultOpen = false,
  onToggle,
  className = "",
}: AccordionMProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;

  function handleToggle() {
    const next = !isOpen;
    setInternalOpen(next);
    onToggle?.(next);
  }

  const hasDivider = specific === "with divider";
  const hasOpenShadow = isOpen;

  return (
    <div
      className={[
        "relative bg-neutral-white rounded-xs",
        hasOpenShadow ? "shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)]" : "",
        hasDivider ? "border-b border-neutral-gray-3" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-[24px] text-body font-sans font-regular text-neutral-black"
        aria-expanded={isOpen}
      >
        <span className="tracking-[0.3px]">{label}</span>
        <span className="flex-none">
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>

      {/* Expanded content */}
      {isOpen && children && (
        <div className="px-4 pb-4">{children}</div>
      )}
    </div>
  );
}
