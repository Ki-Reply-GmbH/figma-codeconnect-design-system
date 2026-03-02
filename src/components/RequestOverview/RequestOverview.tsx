import React from "react";

type RequestOverviewProps = {
  specific?: "enabled" | "empty" | "closed requests" | "followed requests" | "opened by me requests";
  totalRequests?: number;
  label?: string;
  className?: string;
};

const RADIUS = 70;
const STROKE = 10;
const CENTER = 90;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const angle = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polarToCartesian(cx, cy, r, startDeg);
  const end = polarToCartesian(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

export function RequestOverview({
  specific = "enabled",
  totalRequests = 0,
  label = "Total requests",
  className,
}: RequestOverviewProps) {
  // Define segment configurations based on specific prop
  const segments: { color: string; startDeg: number; endDeg: number }[] = [];

  if (specific === "enabled") {
    segments.push({ color: "#c21817", startDeg: 0, endDeg: 120 });
    segments.push({ color: "#e9573d", startDeg: 120, endDeg: 250 });
    segments.push({ color: "#707070", startDeg: 250, endDeg: 330 });
    segments.push({ color: "#dedede", startDeg: 330, endDeg: 360 });
  } else if (specific === "closed requests") {
    segments.push({ color: "#c21817", startDeg: 0, endDeg: 200 });
    segments.push({ color: "#e9573d", startDeg: 200, endDeg: 290 });
    segments.push({ color: "#707070", startDeg: 290, endDeg: 360 });
  } else if (specific === "followed requests") {
    segments.push({ color: "#c21817", startDeg: 0, endDeg: 100 });
    segments.push({ color: "#e9573d", startDeg: 100, endDeg: 310 });
    segments.push({ color: "#dedede", startDeg: 310, endDeg: 360 });
  } else if (specific === "opened by me requests") {
    segments.push({ color: "#c21817", startDeg: 0, endDeg: 80 });
    segments.push({ color: "#e9573d", startDeg: 80, endDeg: 200 });
    segments.push({ color: "#707070", startDeg: 200, endDeg: 280 });
    segments.push({ color: "#dedede", startDeg: 280, endDeg: 360 });
  } else {
    // empty — gray ring
    segments.push({ color: "#dedede", startDeg: 0, endDeg: 360 });
  }

  return (
    <div
      className={[
        "relative flex items-center justify-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ width: 180, height: 180 }}
    >
      <svg width={180} height={180} viewBox="0 0 180 180">
        {/* background ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth={STROKE}
        />
        {specific === "empty" ? (
          <circle
            cx={CENTER}
            cy={CENTER}
            r={RADIUS}
            fill="none"
            stroke="#dedede"
            strokeWidth={STROKE}
          />
        ) : (
          segments.map((seg, i) => (
            <path
              key={i}
              d={arcPath(CENTER, CENTER, RADIUS, seg.startDeg, seg.endDeg)}
              fill="none"
              stroke={seg.color}
              strokeWidth={STROKE}
              strokeLinecap="round"
            />
          ))
        )}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-h2 tracking-[0.875px] text-black">
          {totalRequests > 0 ? totalRequests : "N."}
        </span>
        <span className="text-[12px] tracking-[0.5px] text-primary-gray text-center mt-1 w-20">
          {label}
        </span>
      </div>
    </div>
  );
}
