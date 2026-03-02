import React, { useState } from "react";

type CalendarDayProps = {
  property1?: "Default" | "Selected";
  month?: string;
  year?: number;
  selectedDay?: number | null;
  markedDays?: number[];
  onSelectDay?: (day: number) => void;
  className?: string;
};

const WEEK_DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// May 2021 starts on Saturday (day 6 in Mon-based, i.e. offset 5)
const DEFAULT_OFFSET = 5; // days before 1st
const DEFAULT_DAYS = 31;

export function CalendarDay({
  property1 = "Default",
  month = "May 2021",
  selectedDay = property1 === "Selected" ? 6 : null,
  markedDays = [13, 15, 25, 30],
  onSelectDay,
  className,
}: CalendarDayProps) {
  const [internalSelected, setInternalSelected] = useState<number | null>(selectedDay);

  const handleSelect = (day: number) => {
    setInternalSelected(day);
    onSelectDay?.(day);
  };

  const totalCells = DEFAULT_OFFSET + DEFAULT_DAYS;
  const rows: (number | null)[][] = [];
  let cells: (number | null)[] = Array(DEFAULT_OFFSET).fill(null);

  for (let d = 1; d <= DEFAULT_DAYS; d++) {
    cells.push(d);
    if (cells.length === 7) {
      rows.push(cells);
      cells = [];
    }
  }
  if (cells.length > 0) {
    while (cells.length < 7) cells.push(null);
    rows.push(cells);
  }

  return (
    <div
      className={[
        "flex flex-col items-center w-80 select-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Month navigation */}
      <div className="relative flex items-center justify-center w-full mb-4">
        <button className="absolute left-0 size-8 flex items-center justify-center">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path
              d="M7 1L1 7L7 13"
              stroke="#c21817"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <span className="text-[18px] tracking-[0.5px] text-primary-red-1">{month}</span>
        <button className="absolute right-0 size-8 flex items-center justify-center">
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
            <path
              d="M1 1L7 7L1 13"
              stroke="#c21817"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-4 w-full mb-4">
        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            className="flex items-center justify-center text-[12px] tracking-[0.2px] text-primary-gray"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="flex flex-col gap-4 w-full">
        {rows.map((row, ri) => (
          <div key={ri} className="grid grid-cols-7 gap-4 w-full">
            {row.map((day, ci) => {
              if (!day) return <div key={ci} className="size-8" />;

              const isSelected = day === internalSelected;
              const isMarked = markedDays.includes(day);

              return (
                <button
                  key={ci}
                  onClick={() => handleSelect(day)}
                  className={[
                    "relative flex items-center justify-center size-8 rounded-full",
                    isSelected
                      ? "bg-primary-red-1"
                      : "hover:bg-neutral-gray-4",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "text-[18px] tracking-[0.5px]",
                      isSelected ? "text-white" : "text-black",
                    ].join(" ")}
                  >
                    {day}
                  </span>
                  {isMarked && !isSelected && (
                    <div className="absolute bottom-0 left-[18.75%] right-[15.63%] h-0.5 bg-primary-red-1" />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
