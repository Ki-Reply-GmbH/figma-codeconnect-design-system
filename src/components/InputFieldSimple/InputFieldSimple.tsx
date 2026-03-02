type Variant = "enabled" | "enabled white";

export interface InputFieldSimpleProps {
  variant?: Variant;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function InputFieldSimple({
  variant = "enabled",
  placeholder = "Cta",
  value,
  onChange,
  className = "",
}: InputFieldSimpleProps) {
  const isWhite = variant === "enabled white";

  return (
    <div
      className={[
        "relative h-12 rounded-xs",
        isWhite ? "bg-[#b2d7ff] border border-neutral-white" : "bg-neutral-white border border-neutral-gray-3",
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
          "absolute inset-0 w-full h-full px-4 text-h4-xs font-sans font-regular",
          "bg-transparent outline-none rounded-xs",
          isWhite
            ? "text-neutral-gray-5 placeholder-neutral-gray-5"
            : "text-neutral-black placeholder-neutral-black",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}
