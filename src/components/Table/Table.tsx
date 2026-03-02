import React from "react";

type TableRow = {
  id: string;
  title: string;
  date: string;
  category: string;
  assignedTo: string;
  status: "IN PROGRESS" | "CLOSED" | "NEW";
  ctaLabel?: string;
};

type TableProps = {
  property1?: "dashboard" | "S&R";
  property2?: "default" | "empty";
  title?: string;
  overviewLabel?: string;
  rows?: TableRow[];
  sortLabel?: string;
  onSeeMore?: () => void;
  className?: string;
};

const STATUS_COLOR: Record<string, string> = {
  "IN PROGRESS": "bg-[#e9573d]",
  CLOSED: "bg-primary-gray",
  NEW: "bg-primary-red-1",
};

const DEFAULT_ROWS: TableRow[] = [
  { id: "ID: 567330", title: "Request title...", date: "DD/MM/YY", category: "Category", assignedTo: "Opened by Name Surname", status: "IN PROGRESS", ctaLabel: "CTA" },
  { id: "ID: 567330", title: "Request title...", date: "DD/MM/YY", category: "Category", assignedTo: "Opened by Name Surname", status: "CLOSED", ctaLabel: "CTA" },
  { id: "ID: 567330", title: "Request title...", date: "DD/MM/YY", category: "Category", assignedTo: "Opened by Name Surname", status: "NEW", ctaLabel: "CTA" },
];

export function Table({
  property1 = "dashboard",
  property2 = "default",
  title = "Your request",
  overviewLabel = "Overview",
  rows = DEFAULT_ROWS,
  sortLabel = "Sort by:",
  onSeeMore,
  className,
}: TableProps) {
  const isEmpty = property2 === "empty";

  return (
    <div
      className={[
        "relative bg-white rounded-sm",
        property1 === "dashboard" ? "w-[610px]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-2">
          <span className="text-[16px] tracking-[0.2px] text-black">{title}</span>
          <span className="text-[9px] tracking-[0.2px] text-primary-gray">{overviewLabel}</span>
        </div>
        {!isEmpty && (
          <div className="flex items-center gap-1">
            <span className="text-[9px] tracking-[0.2px] text-primary-gray">{sortLabel}</span>
            <span className="text-[9px] tracking-[0.2px] text-black">Category</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 7L8 10L11 7" stroke="black" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </div>
        )}
      </div>

      {isEmpty ? (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-12 px-8 text-center gap-3">
          <div className="size-16 bg-neutral-gray-3 rounded-full flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 4C9.373 4 4 9.373 4 16C4 22.627 9.373 28 16 28C22.627 28 28 22.627 28 16C28 9.373 22.627 4 16 4ZM16 24C15.448 24 15 23.552 15 23C15 22.448 15.448 22 16 22C16.552 22 17 22.448 17 23C17 23.552 16.552 24 16 24ZM16 20C15.448 20 15 19.552 15 19V13C15 12.448 15.448 12 16 12C16.552 12 17 12.448 17 13V19C17 19.552 16.552 20 16 20Z"
                fill="#b0b2b3"
              />
            </svg>
          </div>
          <p className="text-[16px] tracking-[0.2px] text-black w-[146px] leading-snug">
            Is there anything we can do for you?
          </p>
          <p className="text-body-m tracking-[0.5px] text-[#787e80] w-[173px]">
            It seems you have not sent any request this month.
          </p>
        </div>
      ) : (
        <>
          {/* Rows */}
          <div className="divide-y divide-neutral-gray-4 px-4">
            {rows.map((row, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <a href="#" className="text-[14px] tracking-[0.5px] text-blue-600 underline hover:no-underline shrink-0">
                  {row.title}
                </a>
                <span className="text-[9px] tracking-[0.2px] text-primary-gray whitespace-nowrap">{row.id}</span>
                <span className="text-[9px] tracking-[0.2px] text-primary-gray whitespace-nowrap">{row.date}</span>
                <span className="text-[9px] tracking-[0.2px] text-primary-gray whitespace-nowrap flex-1">{row.category}</span>
                <span className="text-[9px] tracking-[0.2px] text-primary-gray whitespace-nowrap">{row.assignedTo}</span>
                {row.ctaLabel && (
                  <div
                    className={[
                      "shrink-0 rounded-[100px] px-3 py-0.5",
                      STATUS_COLOR[row.status] || "bg-primary-gray",
                    ].join(" ")}
                  >
                    <span className="text-[9px] font-medium tracking-[0.2px] uppercase text-white whitespace-nowrap">
                      {row.status}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* See More / Pagination */}
          {property1 === "dashboard" ? (
            <div className="flex justify-center py-4">
              <button
                onClick={onSeeMore}
                className="border border-neutral-gray-3 rounded text-[9px] tracking-[0.2px] px-4 py-1.5 text-black hover:bg-neutral-gray-4"
              >
                See More
              </button>
            </div>
          ) : (
            <div className="flex justify-center gap-2 py-4">
              <button className="size-6 flex items-center justify-center">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path d="M5 1L1 5L5 9" stroke="#c21817" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={[
                    "size-6 flex items-center justify-center text-[18px] tracking-[0.5px]",
                    n === 1 ? "text-black border-b-2 border-primary-red-1" : "text-black",
                  ].join(" ")}
                >
                  {n}
                </button>
              ))}
              <button className="size-6 flex items-center justify-center">
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path d="M1 1L5 5L1 9" stroke="#c21817" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
