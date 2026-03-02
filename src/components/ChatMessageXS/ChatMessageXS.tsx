import React from "react";

type ChatMessageXSProps = {
  property2?: "enable" | "tenant msg" | "GRE msg";
  placeholder?: string;
  className?: string;
};

export function ChatMessageXS({
  property2 = "enable",
  placeholder = "Type a message",
  className,
}: ChatMessageXSProps) {
  if (property2 === "enable") {
    return (
      <div
        className={[
          "relative h-12 bg-white rounded-sm shadow-[0px_2px_6px_4px_rgba(0,0,0,0.04)] flex items-center",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className="absolute left-2 text-body-xs tracking-[0.5px] text-black">
          {placeholder}
        </span>
        {/* attachment icon */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 size-4 flex items-center justify-center">
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none">
            <path
              d="M8.5 6L8.5 9.5C8.5 11.433 6.933 13 5 13C3.067 13 1.5 11.433 1.5 9.5L1.5 3C1.5 1.895 2.395 1 3.5 1C4.605 1 5.5 1.895 5.5 3L5.5 9.5C5.5 10.052 5.052 10.5 4.5 10.5C3.948 10.5 3.5 10.052 3.5 9.5L3.5 5"
              stroke="black"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* send icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 size-4 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1L11 6L1 11V7L8 6L1 5V1Z"
              stroke="black"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (property2 === "tenant msg") {
    return (
      <div
        className={[
          "relative h-[33px] w-[146px] rounded-bl-[100px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[2px] bg-[#f09273] flex items-center justify-center",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <span className="text-body-xs tracking-[0.5px] text-white text-center px-3">
          {placeholder}
        </span>
      </div>
    );
  }

  // GRE msg — gray bubble, mirrored corner radius
  return (
    <div
      className={[
        "relative h-[33px] w-[146px] rounded-bl-[100px] rounded-br-[100px] rounded-tl-[2px] rounded-tr-[100px] bg-[#dedede] flex items-center justify-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="text-body-xs tracking-[0.5px] text-black text-center px-3">
        {placeholder}
      </span>
    </div>
  );
}
