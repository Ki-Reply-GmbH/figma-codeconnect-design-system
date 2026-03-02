type Dimension = "M-S" | "XS";

export interface PaginatorProps {
  dimension?: Dimension;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M10 4L6 8L10 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M6 4L10 8L6 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Paginator({
  dimension = "M-S",
  currentPage = 1,
  totalPages = 3,
  onPageChange,
  className = "",
}: PaginatorProps) {
  const isXs = dimension === "XS";

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className={[
        "inline-flex items-center gap-0",
        isXs ? "h-[40px]" : "h-[48px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Chevron left */}
      <button
        type="button"
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        className={[
          "flex items-center justify-center text-neutral-black",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          isXs ? "w-8 h-8 text-body" : "w-4 h-4 text-caption",
        ].join(" ")}
        aria-label="Previous page"
      >
        {isXs ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M20 8L12 16L20 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <ChevronLeftIcon />
        )}
      </button>

      {/* Page numbers */}
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            className={[
              "relative flex items-center justify-center font-sans font-regular text-neutral-black",
              "transition-colors",
              isXs ? "w-[32px] h-[32px] text-[18px] tracking-[0.5px]" : "w-4 h-4 text-caption tracking-[0.2px]",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-current={isActive ? "page" : undefined}
          >
            <span className={isActive ? "underline" : ""}>{page}</span>
            {isActive && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-primary-red-1" />
            )}
          </button>
        );
      })}

      {/* Chevron right */}
      <button
        type="button"
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        className={[
          "flex items-center justify-center text-neutral-black",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          isXs ? "w-8 h-8 text-body" : "w-4 h-4 text-caption",
        ].join(" ")}
        aria-label="Next page"
      >
        {isXs ? (
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path d="M12 8L20 16L12 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <ChevronRightIcon />
        )}
      </button>
    </div>
  );
}
