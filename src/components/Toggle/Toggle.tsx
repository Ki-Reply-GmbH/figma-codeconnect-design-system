type Size = "Big" | "Small";

export interface ToggleProps {
  /** Big = 56×32 px, Small = 32×16 px */
  size?: Size;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Toggle({
  size = "Small",
  checked = false,
  onChange,
  disabled = false,
  className = "",
}: ToggleProps) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      type="button"
      className={[
        "relative flex-none rounded-full bg-neutral-white border-neutral-gray-3",
        "transition-colors focus-visible:outline focus-visible:outline-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        size === "Big" ? "w-14 h-8 border-2" : "w-8 h-4 border",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Coloured track */}
      <span
        className={[
          "absolute rounded-full transition-colors",
          size === "Big" ? "inset-1" : "inset-0.5",
          checked ? "bg-[#f7c7b7]" : "bg-neutral-gray-3",
        ].join(" ")}
      />
      {/* Sliding knob */}
      <span
        className={[
          "absolute bg-neutral-white rounded-full shadow-sm transition-all",
          size === "Big"
            ? checked
              ? "top-1 bottom-1 left-1/2 right-1"
              : "top-1 bottom-1 left-1 right-1/2"
            : checked
              ? "top-0.5 bottom-0.5 left-1/2 right-0.5"
              : "top-0.5 bottom-0.5 left-0.5 right-1/2",
        ].join(" ")}
      />
    </button>
  );
}
