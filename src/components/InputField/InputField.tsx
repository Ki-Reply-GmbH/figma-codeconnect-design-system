import type { ReactNode } from "react";

type InputType = "Inputfield" | "attachment";
type InputStatus = "enabled" | "enabled white" | "hover" | "active" | "confirmed" | "link";

export interface InputFieldProps {
  inputType?: InputType;
  /** Visual status variant. In interactive use, prefer controlled value/onChange instead. */
  status?: InputStatus;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  /** Link label shown below (attachment + link status) */
  linkLabel?: string;
  onLinkClick?: () => void;
  /** Icon slot for attachment type */
  attachmentIcon?: ReactNode;
  className?: string;
}

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="4"
        y1="4"
        x2="12"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="4"
        x2="4"
        y2="12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ValidateIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5L6.5 11.5L12.5 5"
        stroke="#4caf50"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function InputField({
  inputType = "Inputfield",
  status = "enabled",
  placeholder = "CTA",
  value,
  onChange,
  linkLabel,
  onLinkClick,
  className = "",
}: InputFieldProps) {
  const isGrayBg = ["hover", "active", "confirmed", "link"].includes(status);
  const isBlueBg = status === "enabled white";
  const hasIcon = status === "active" || status === "confirmed";
  const isAttachmentLink = inputType === "attachment" && status === "link";

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <div
        className={[
          "relative rounded-xs",
          isGrayBg && "bg-neutral-gray-4",
          isBlueBg && "bg-[#b2d7ff]",
          status === "enabled" && "bg-neutral-white",
          // Border
          status === "enabled" && "border border-neutral-gray-3",
          isBlueBg && "border border-neutral-white",
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
            "block w-full px-2 py-2.25 pr-8 text-caption font-sans font-regular",
            "bg-transparent outline-none",
            isBlueBg
              ? "text-neutral-white placeholder-neutral-white"
              : "text-neutral-black placeholder-neutral-gray-2",
          ]
            .filter(Boolean)
            .join(" ")}
        />
        {/* Close / Validate icon */}
        {(hasIcon || isAttachmentLink) && (
          <span className="absolute right-2 bottom-1.5 text-neutral-black">
            {status === "confirmed" ? <ValidateIcon /> : <CloseIcon />}
          </span>
        )}
      </div>

      {/* Link below (attachment + link status) */}
      {isAttachmentLink && linkLabel && (
        <button
          type="button"
          onClick={onLinkClick}
          className="mt-1 text-caption text-link-blue underline font-sans"
        >
          {linkLabel}
        </button>
      )}
    </div>
  );
}
