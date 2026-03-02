type Variant =
  | "default"
  | "activated"
  | "+ icon"
  | "notification default"
  | "new notification";

export interface MobileMenuItemProps {
  variant?: Variant;
  title?: string;
  notificationDetails?: string;
  /** Icon src for "+ icon" variant */
  iconSrc?: string;
  className?: string;
}

function ProfileIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="black" strokeWidth="1.2" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="black" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MobileMenuItem({
  variant = "default",
  title = "Title",
  notificationDetails = "Additional details",
  className = "",
}: MobileMenuItemProps) {
  const isActivated = variant === "activated";
  const isNotification =
    variant === "notification default" || variant === "new notification";
  const isNewNotification = variant === "new notification";
  const isIcon = variant === "+ icon";

  return (
    <div
      className={[
        "relative bg-neutral-white rounded-xs",
        isNotification ? "h-[71px]" : "h-[48px]",
        "w-[375px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Activated red bar */}
      {isActivated && (
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary-red-1 rounded-l-xs" />
      )}

      {/* New notification red bar */}
      {isNewNotification && (
        <div className="absolute left-0 top-0 h-[72px] w-1.5 bg-primary-red-1 rounded-l-xs" />
      )}

      {/* Icon (+ icon variant) */}
      {isIcon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <ProfileIcon />
        </div>
      )}

      {/* Notification content */}
      {isNotification ? (
        <div className={["absolute left-4", isNewNotification ? "top-4" : "top-4"].join(" ")}>
          <p
            className={[
              "text-h4-xs font-sans font-regular text-neutral-black tracking-[0.5px] whitespace-nowrap",
              isNewNotification ? "font-medium" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </p>
          <p className="text-body font-sans font-regular text-neutral-gray-2 mt-1 tracking-[0.2px] whitespace-nowrap">
            {notificationDetails}
          </p>
        </div>
      ) : (
        /* Regular title */
        <div
          className={[
            "absolute top-1/2 -translate-y-1/2",
            isIcon ? "left-12" : "left-4",
          ].join(" ")}
        >
          <p
            className={[
              "text-h4-xs font-sans font-regular text-neutral-black tracking-[0.5px]",
              isActivated ? "underline" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {title}
          </p>
        </div>
      )}

      {/* Notification divider */}
      {isNotification && (
        <div className="absolute left-4 right-4 bottom-0 h-px bg-neutral-gray-3" />
      )}
    </div>
  );
}
