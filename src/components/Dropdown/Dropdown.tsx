import { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";

export interface DropdownProps {
  options?: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

function ChevronDownIcon({ color = "black" }: { color?: "black" | "gray" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke={color === "gray" ? "#6f7072" : "#000000"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = "CTA",
  className = "",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const displayValue = value ?? placeholder;
  const isSelected = !!value;

  return (
    <div ref={ref} className={["relative inline-block", className].filter(Boolean).join(" ")}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className={[
          "inline-flex items-center justify-between gap-2 px-2 py-1.5 rounded-xs",
          "text-caption font-sans font-regular transition-colors",
          "border border-neutral-gray-3",
          isSelected || isOpen
            ? "bg-neutral-gray-4 text-neutral-black"
            : "bg-neutral-white text-neutral-black hover:bg-neutral-gray-4 hover:text-primary-gray",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className="whitespace-nowrap">{displayValue}</span>
        <ChevronDownIcon color={isOpen ? "black" : "black"} />
      </button>

      {/* Dropdown list */}
      {isOpen && options.length > 0 && (
        <div className="absolute z-10 left-0 top-full mt-0.5 min-w-full bg-neutral-white border border-neutral-gray-3 rounded-xs shadow-card">
          <div className="border-b border-neutral-gray-3 mx-2" />
          <ul className="py-1">
            {options.map((option) => (
              <li key={option}>
                <button
                  type="button"
                  onClick={() => {
                    onChange?.(option);
                    setIsOpen(false);
                  }}
                  className="w-full text-left px-2 py-1.5 text-caption font-sans font-regular text-neutral-black hover:bg-neutral-gray-4 whitespace-nowrap"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
