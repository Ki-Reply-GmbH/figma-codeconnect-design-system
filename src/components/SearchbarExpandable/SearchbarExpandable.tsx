import { useState, useRef, useEffect } from "react";

type Size = "M" | "XS";

export interface SearchbarExpandableProps {
  size?: Size;
  placeholder?: string;
  className?: string;
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M10 10L13.5 13.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SearchbarExpandable({
  size = "M",
  placeholder = "|Search for something",
  className = "",
}: SearchbarExpandableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const isXs = size === "XS";
  const showExpanded = isOpen || value.length > 0;

  if (!showExpanded) {
    // Closed state: just the circular search button
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={[
          "flex items-center justify-center rounded-full bg-neutral-white shadow-card",
          isXs
            ? "w-12 h-12 border border-neutral-gray-3"
            : "w-8 h-8",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="Open search"
      >
        <SearchIcon />
      </button>
    );
  }

  // Expanded state
  return (
    <div
      className={[
        "relative flex items-center bg-neutral-white rounded-full overflow-hidden",
        isXs
          ? "h-12 w-[343px] border border-neutral-gray-3"
          : "h-8 w-[605px] shadow-card",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => {
          if (!value) setIsOpen(false);
        }}
        className={[
          "flex-1 bg-transparent outline-none font-sans font-regular",
          isXs ? "pl-6 text-body-xs" : "pl-4 text-body",
          "text-neutral-black placeholder-neutral-gray-2",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <button
        type="button"
        className={[
          "flex-none flex items-center justify-center rounded-full bg-neutral-white shadow-card",
          isXs ? "w-12 h-12 border border-neutral-gray-3 -mr-px -my-px" : "w-8 h-8",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-label="Search"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
