import type { ReactNode } from "react";

type HeaderType = "white" | "transparent";
type HeaderExtra =
  | "-"
  | "OM"
  | "PM"
  | "PM+"
  | "PM_profile"
  | "accounts searchbar"
  | "subheader";

export interface NavItem {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
}

export interface HeaderProps {
  /** white = solid white bg, transparent = semi-transparent (for use over images) */
  type?: HeaderType;
  /** Determines the right-side controls */
  extra?: HeaderExtra;
  navItems?: NavItem[];
  /** Primary CTA items rendered as text buttons (PM/PM+ modes show multiple CTAs) */
  ctaItems?: string[];
  onLogout?: () => void;
  /** "Log out" button label */
  logoutLabel?: string;
  /** Searchbar for accounts searchbar extra */
  searchPlaceholder?: string;
  /** Optional logo src */
  logoSrc?: string;
  className?: string;
}

function GeneraliLogo({ src, isTransparent }: { src?: string; isTransparent: boolean }) {
  if (src) {
    return <img src={src} alt="Generali" className="h-[48px] w-[72px] object-contain" />;
  }
  return (
    <span
      className={[
        "font-sans font-bold text-body",
        isTransparent ? "text-neutral-white" : "text-primary-red-1",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      GENERALI
    </span>
  );
}

function WorldIcon({ isTransparent }: { isTransparent: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Local contacts"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={isTransparent ? "white" : "black"}
        strokeWidth="1.2"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="4"
        ry="9"
        stroke={isTransparent ? "white" : "black"}
        strokeWidth="1.2"
      />
      <path
        d="M3 12H21M4.5 7H19.5M4.5 17H19.5"
        stroke={isTransparent ? "white" : "black"}
        strokeWidth="1.2"
      />
    </svg>
  );
}

function BellIcon({ isTransparent }: { isTransparent: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Notifications"
    >
      <path
        d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"
        stroke={isTransparent ? "white" : "black"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileIcon({ isTransparent }: { isTransparent: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Profile"
    >
      <circle
        cx="12"
        cy="8"
        r="4"
        stroke={isTransparent ? "white" : "black"}
        strokeWidth="1.2"
      />
      <path
        d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
        stroke={isTransparent ? "white" : "black"}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function Header({
  type = "white",
  extra = "OM",
  navItems = [],
  ctaItems = [],
  onLogout,
  logoutLabel = "Log out",
  searchPlaceholder = "|Search Members",
  logoSrc,
  className = "",
}: HeaderProps) {
  const isTransparent = type === "transparent";

  const bgClass = isTransparent ? "bg-white/10" : "bg-neutral-white";

  // Whether to show a second row (accounts searchbar extra adds a second row)
  const hasTwoRows = extra === "accounts searchbar";

  return (
    <header
      className={[
        "relative w-full",
        bgClass,
        hasTwoRows ? "h-auto" : "h-[72px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Main row */}
      <div className="flex items-center h-[72px] px-12 gap-6">
        {/* Logo */}
        <GeneraliLogo src={logoSrc} isTransparent={isTransparent} />

        {/* Nav items */}
        {navItems.length > 0 && (
          <nav className="flex items-center gap-0 mx-auto">
            {navItems.map((item) => (
              <NavButton
                key={item.label}
                item={item}
                isTransparent={isTransparent}
              />
            ))}
          </nav>
        )}

        {/* Right-side controls */}
        <div className="ml-auto flex items-center gap-2">
          {/* Globe icon (OM, PM, PM_profile, accounts searchbar) */}
          {["OM", "PM", "PM_profile", "accounts searchbar"].includes(extra) && (
            <button type="button" className="p-0.5" aria-label="Local contacts">
              <WorldIcon isTransparent={isTransparent} />
            </button>
          )}

          {/* Bell icon (OM, PM, PM_profile, accounts searchbar) */}
          {["OM", "PM", "PM_profile", "accounts searchbar"].includes(extra) && (
            <button type="button" className="p-0.5" aria-label="Notifications">
              <BellIcon isTransparent={isTransparent} />
            </button>
          )}

          {/* Profile icon (PM_profile, accounts searchbar) */}
          {["PM_profile", "accounts searchbar"].includes(extra) && (
            <button type="button" className="p-0.5" aria-label="Profile">
              <ProfileIcon isTransparent={isTransparent} />
            </button>
          )}

          {/* CTA text buttons (PM, PM+, PM_profile) */}
          {ctaItems.map((label) => (
            <button
              key={label}
              type="button"
              className={[
                "px-6 py-2.25 rounded-sm text-button-m font-sans font-regular whitespace-nowrap",
                isTransparent
                  ? "text-neutral-white"
                  : "text-neutral-black",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {label}
            </button>
          ))}

          {/* Log out button (OM, PM modes) */}
          {["OM", "PM"].includes(extra) && onLogout && (
            <button
              type="button"
              onClick={onLogout}
              className={[
                "px-3 py-1.5 rounded-sm text-button-m font-sans font-regular border whitespace-nowrap",
                isTransparent
                  ? "border-neutral-white text-neutral-white"
                  : "border-neutral-black text-neutral-black",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {logoutLabel}
            </button>
          )}
        </div>
      </div>

      {/* Second row: accounts searchbar */}
      {hasTwoRows && (
        <div className="flex items-center px-12 py-4 gap-4 border-t border-neutral-gray-3">
          <div className="relative flex-1 max-w-[605px] h-8 bg-neutral-white rounded-full shadow-card overflow-hidden flex items-center">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="flex-1 h-full pl-4 pr-10 text-body font-sans font-regular bg-transparent outline-none text-neutral-gray-2 placeholder-neutral-gray-2"
            />
            <button
              type="button"
              className="absolute right-0 top-0 h-8 w-8 flex items-center justify-center rounded-full bg-neutral-white shadow-card"
              aria-label="Search"
            >
              <SearchIcon />
            </button>
          </div>
          <button
            type="button"
            className="px-6 py-2.25 rounded-sm bg-primary-red-1 text-neutral-white text-button-m font-sans font-regular whitespace-nowrap"
          >
            Add Members
          </button>
        </div>
      )}
    </header>
  );
}

function NavButton({
  item,
  isTransparent,
}: {
  item: NavItem;
  isTransparent: boolean;
}) {
  const classes = [
    "px-6 py-2.25 text-button-m font-sans font-regular transition-colors whitespace-nowrap",
    isTransparent
      ? "text-neutral-white hover:text-neutral-gray-3"
      : "text-neutral-black hover:text-primary-gray",
    item.active && "underline",
  ]
    .filter(Boolean)
    .join(" ");

  if (item.href) {
    return (
      <a href={item.href} className={classes}>
        {item.label}
      </a>
    );
  }
  return (
    <button type="button" onClick={item.onClick} className={classes}>
      {item.label}
    </button>
  );
}
