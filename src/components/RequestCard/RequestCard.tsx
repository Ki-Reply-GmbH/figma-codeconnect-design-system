import React from "react";

type RequestCardProps = {
  status?: "default" | "new";
  title?: string;
  subtitle?: string;
  className?: string;
};

export function RequestCard({
  status = "default",
  title = "Request title",
  subtitle = "maximum 2 lines",
  className,
}: RequestCardProps) {
  return (
    <div
      className={[
        "relative h-[70px] w-[341px] bg-white rounded shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)] overflow-hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {status === "new" && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-red-1 rounded-tl rounded-bl" />
      )}
      <div className="absolute inset-y-0 left-5 right-24 flex flex-col justify-center">
        <p className="text-body-xs tracking-[0.5px] text-black leading-snug">{title}</p>
        <p className="text-body-xs tracking-[0.5px] text-black leading-snug">{subtitle}</p>
      </div>
    </div>
  );
}
