import React from "react";

type StatusBarProps = {
  dimension?: "big" | "small";
  specific?: "new" | "in progress" | "closed";
  className?: string;
};

const LABEL_MAP = {
  new: "New",
  "in progress": "In progress",
  closed: "Closed",
};

const GRADIENT_MAP = {
  new: "from-[#8e1230] to-[#e9573d]",
  "in progress": "from-[#e9573d] to-[#707070]",
  closed: "from-[#e9573d] via-[#707070] to-[#707070]",
};

const WIDTH_MAP = {
  new: "w-1/3",
  "in progress": "w-2/3",
  closed: "w-full",
};

export function StatusBar({
  dimension = "small",
  specific = "new",
  className,
}: StatusBarProps) {
  const label = LABEL_MAP[specific];
  const gradient = GRADIENT_MAP[specific];
  const fillWidth = WIDTH_MAP[specific];

  const labelColor =
    specific === "new"
      ? "text-[#752126]"
      : specific === "in progress"
      ? "text-primary-red-4"
      : "text-primary-gray";

  if (dimension === "small") {
    return (
      <div className={["relative", className].filter(Boolean).join(" ")}>
        <span
          className={[
            "block text-[9px] tracking-[0.2px] mb-1",
            labelColor,
          ].join(" ")}
        >
          {label}
        </span>
        <div className="relative h-1 w-full bg-neutral-gray-4 rounded-sm overflow-hidden">
          <div
            className={[
              "absolute inset-y-0 left-0 rounded-sm bg-gradient-to-r",
              gradient,
              fillWidth,
            ].join(" ")}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <div className="relative h-2 w-full bg-neutral-gray-3 rounded-[5px] overflow-hidden">
        <div
          className={[
            "absolute inset-y-0 left-0 rounded-[5px] bg-gradient-to-r",
            gradient,
            fillWidth,
          ].join(" ")}
        />
      </div>
      <span
        className={[
          "block text-[12px] tracking-[0.5px] mt-1",
          labelColor,
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}
