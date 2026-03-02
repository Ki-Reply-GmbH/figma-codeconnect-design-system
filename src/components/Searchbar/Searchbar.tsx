type Colour = "white" | "black";

export interface SearchbarProps {
  /** white = semi-transparent (for hero overlays), black = solid gray-3 */
  colour?: Colour;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onClear?: () => void;
  className?: string;
}

function SearchIcon({ colour }: { colour: Colour }) {
  const stroke = colour === "black" ? "#000000" : "#ffffff";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="6" stroke={stroke} strokeWidth="1.2" />
      <path
        d="M15 15L19 19"
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Searchbar({
  colour = "white",
  placeholder = "| Search for category",
  value = "",
  onChange,
  onClear,
  className = "",
}: SearchbarProps) {
  const isBlack = colour === "black";
  const hasValue = value.length > 0;

  return (
    <div
      className={[
        "relative flex items-center rounded-xs",
        isBlack ? "bg-neutral-gray-3" : "bg-white/15",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={[
          "flex-1 h-14 pl-4 pr-12 text-h4 font-sans font-regular",
          "bg-transparent outline-none",
          isBlack
            ? "text-neutral-gray-1 placeholder-neutral-gray-2"
            : "text-neutral-white placeholder-neutral-gray-3",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <button
        type="button"
        onClick={hasValue ? onClear : undefined}
        className="absolute right-4 bottom-4"
        aria-label={hasValue ? "Clear search" : "Search"}
      >
        {hasValue ? (
          <CloseIcon />
        ) : (
          <SearchIcon colour={colour} />
        )}
      </button>
    </div>
  );
}
