import type { ReactNode } from "react";

type Size = "M" | "S" | "XS";

export interface FooterLink {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface FooterProps {
  /** M = 1024px desktop, S = 768px tablet, XS = 375px mobile */
  size?: Size;
  companyName?: string;
  vatNumber?: string;
  /** Links shown in the footer (Legal notes, Privacy notes, Cookie notes, etc.) */
  links?: FooterLink[];
  /** Local contacts link */
  localContactsLabel?: string;
  onLocalContactsClick?: () => void;
  /** Optional logo src — defaults to a text fallback */
  logoSrc?: string;
  className?: string;
}

function GeneraliLogo({ src, className }: { src?: string; className?: string }) {
  if (src) {
    return <img src={src} alt="Generali" className={className} />;
  }
  return (
    <div
      className={[
        "flex items-center justify-center font-sans font-bold text-primary-red-1",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      GENERALI
    </div>
  );
}

function WorldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 103 48"
      fill="none"
      aria-label="World map"
      className={["text-neutral-gray-3", className].filter(Boolean).join(" ")}
    >
      <ellipse cx="51.5" cy="24" rx="51.5" ry="24" fill="currentColor" opacity="0.4" />
      <text
        x="51.5"
        y="28"
        textAnchor="middle"
        fontSize="9"
        fill="#6f7072"
        fontFamily="sans-serif"
      >
        Local contacts
      </text>
    </svg>
  );
}

export function Footer({
  size = "M",
  companyName = "A GENERALI GROUP COMPANY",
  vatNumber = "VAT number 00312080328",
  links = [],
  localContactsLabel = "Local contacts",
  onLocalContactsClick,
  logoSrc,
  className = "",
}: FooterProps) {
  const isXs = size === "XS";
  const isM = size === "M";

  if (isXs) {
    // XS: single-column, stacked layout
    return (
      <footer
        className={[
          "bg-neutral-white w-full shadow-[0_-2px_6px_6px_rgba(0,0,0,0.02)]",
          "flex flex-col items-center py-8 px-6 gap-6",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <GeneraliLogo src={logoSrc} className="w-12 h-12" />
        <div className="text-h4-xs font-sans font-regular text-neutral-black text-center">
          <p className="mb-0">{companyName}</p>
          <p>{vatNumber}</p>
        </div>
        {/* World / local contacts */}
        <div className="flex flex-col items-center gap-2">
          <WorldIcon className="w-[103px] h-12" />
          {localContactsLabel && (
            <button
              type="button"
              onClick={onLocalContactsClick}
              className="text-caption font-sans text-neutral-black hover:underline"
            >
              {localContactsLabel}
            </button>
          )}
        </div>
        {/* Links */}
        {links.length > 0 && (
          <nav className="flex flex-col items-center gap-8">
            {links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-h4-xs font-sans font-regular text-neutral-black hover:underline active:text-primary-red-1"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={link.onClick}
                  className="text-h4-xs font-sans font-regular text-neutral-black hover:underline active:text-primary-red-1"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>
        )}
      </footer>
    );
  }

  // M & S: horizontal layout
  return (
    <footer
      className={[
        "bg-neutral-white w-full",
        isM && "shadow-[0_-2px_6px_6px_rgba(0,0,0,0.02)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={[
          "flex items-center gap-8 px-12",
          isM ? "h-[126px]" : "h-[100px]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Logo */}
        <GeneraliLogo src={logoSrc} className="w-[72px] h-[48px]" />

        {/* Company info */}
        <div className="text-caption font-sans font-regular text-neutral-black whitespace-nowrap">
          <p className="mb-0">{companyName}</p>
          <p>{vatNumber}</p>
        </div>

        {/* World / local contacts */}
        <div className="flex flex-col items-center gap-1 mx-4">
          <WorldIcon className="w-[103px] h-[48px]" />
          {localContactsLabel && (
            <button
              type="button"
              onClick={onLocalContactsClick}
              className="text-caption font-sans text-neutral-black hover:underline"
            >
              {localContactsLabel}
            </button>
          )}
        </div>

        {/* Nav links */}
        {links.length > 0 && (
          <nav className="ml-auto flex flex-col gap-1.5">
            {links.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-caption font-sans font-regular text-neutral-black hover:underline active:text-primary-red-1 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.label}
                  type="button"
                  onClick={link.onClick}
                  className="text-left text-caption font-sans font-regular text-neutral-black hover:underline active:text-primary-red-1 whitespace-nowrap"
                >
                  {link.label}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </footer>
  );
}
