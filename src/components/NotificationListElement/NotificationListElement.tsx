type Status = "seen" | "unseen";

export interface NotificationListElementProps {
  family?: "list element";
  status?: Status;
  title?: string;
  description?: string;
  onArrowClick?: () => void;
  className?: string;
}

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 10H16M12 6L16 10L12 14"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function NotificationListElement({
  status = "unseen",
  title = "Notification title",
  description = "One line description for notification",
  onArrowClick,
  className = "",
}: NotificationListElementProps) {
  const isUnseen = status === "unseen";

  return (
    <div
      className={[
        "flex items-end gap-2.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Unseen indicator bar */}
      <div className="flex-none self-stretch flex items-center">
        <div
          className={[
            "w-1.5 h-full rounded-xs",
            isUnseen ? "bg-primary-red-1" : "bg-transparent",
          ].join(" ")}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 pt-0.5 flex-1">
        <div className="flex items-center gap-0">
          {/* Text */}
          <div className="flex flex-col gap-0.5 flex-1">
            <p className="text-body font-sans font-regular text-neutral-black tracking-[0.3px] w-[184px]">
              {title}
            </p>
            <p className="text-caption font-sans font-regular text-[#b0b2b3] tracking-[0.2px] w-[184px]">
              {description}
            </p>
          </div>

          {/* Arrow */}
          <button
            type="button"
            onClick={onArrowClick}
            className="flex-none text-neutral-black"
            aria-label="View notification"
          >
            <ArrowRightIcon />
          </button>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-gray-3 w-[224px]" />
      </div>
    </div>
  );
}
