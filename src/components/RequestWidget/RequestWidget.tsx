type Property3 = "enabled" | "enabled empy" | "hover";

export interface RequestWidgetProps {
  property1?: "M";
  property2?: "request";
  property3?: Property3;
  /** Total request count */
  totalRequests?: number;
  /** Count of new requests */
  newRequests?: number;
  /** Count of in-progress requests */
  inProgressRequests?: number;
  /** Count of closed requests */
  closedRequests?: number;
  title?: string;
  className?: string;
}

function InfoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-label="More information"
    >
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M16 14V21M16 11V11.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface DonutSegment {
  percent: number;
  color: string;
}

function DonutChart({
  segments,
  total,
  isEmpty,
}: {
  segments: DonutSegment[];
  total: number;
  isEmpty: boolean;
}) {
  const size = 140;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const cx = size / 2;
  const cy = size / 2;

  let offset = 0;
  const paths = segments.map((seg, i) => {
    const dash = (seg.percent / 100) * circumference;
    const gap = circumference - dash;
    const rotation = (offset / 100) * 360 - 90;
    offset += seg.percent;
    return (
      <circle
        key={i}
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={seg.color}
        strokeWidth="16"
        strokeDasharray={`${dash} ${gap}`}
        strokeDashoffset={0}
        transform={`rotate(${rotation} ${cx} ${cy})`}
      />
    );
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background ring */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke={isEmpty ? "#e0e0e0" : "#d0d0d0"}
        strokeWidth="16"
      />
      {!isEmpty && paths}
      {/* Center text */}
      <text
        x={cx}
        y={cy - 6}
        textAnchor="middle"
        fontSize="28"
        fontFamily="Helvetica Neue, sans-serif"
        fill="black"
        letterSpacing="0.875"
      >
        {total}
      </text>
      <text
        x={cx}
        y={cy + 14}
        textAnchor="middle"
        fontSize="12"
        fontFamily="Helvetica Neue, sans-serif"
        fill="#6f7072"
        letterSpacing="0.5"
      >
        Total requests
      </text>
    </svg>
  );
}

export function RequestWidget({
  property3 = "enabled empy",
  totalRequests = 0,
  newRequests = 0,
  inProgressRequests = 0,
  closedRequests = 0,
  title = "Status overview",
  className = "",
}: RequestWidgetProps) {
  const isEmpty = property3 === "enabled empy";
  const hasData = !isEmpty;

  const total = hasData ? totalRequests || newRequests + inProgressRequests + closedRequests : 0;
  const sum = newRequests + inProgressRequests + closedRequests;

  const segments: DonutSegment[] = sum > 0
    ? [
        { percent: (newRequests / sum) * 100, color: "#c21817" },
        { percent: (inProgressRequests / sum) * 100, color: "#e9573d" },
        { percent: (closedRequests / sum) * 100, color: "#b0b2b3" },
      ]
    : [];

  return (
    <div
      className={[
        "relative bg-neutral-white rounded-xs p-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-h4 font-sans font-regular text-neutral-black leading-6 tracking-[0.2px]">
          {title}
        </p>
        <button
          type="button"
          className="text-neutral-black"
          aria-label="More information"
        >
          <InfoIcon />
        </button>
      </div>

      {/* Donut chart */}
      <div className="flex justify-center my-2">
        <DonutChart
          segments={segments}
          total={isEmpty ? 0 : total}
          isEmpty={isEmpty}
        />
      </div>

      {/* Legend or empty state */}
      {isEmpty ? (
        <p className="text-body font-sans font-regular text-[#8e1230] text-center tracking-[0.3px] whitespace-pre-wrap">
          {"It seems you have not \nsent any request this month"}
        </p>
      ) : (
        <div className="flex flex-col gap-1 mt-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs flex-none bg-primary-red-1" />
            <p className="text-body font-sans font-regular text-primary-red-1 tracking-[0.3px]">
              New requests
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs flex-none bg-primary-red-4" />
            <p className="text-body font-sans font-regular text-primary-red-4 tracking-[0.3px]">
              Requests in progress
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-xs flex-none bg-neutral-gray-2" />
            <p className="text-body font-sans font-regular text-neutral-gray-2 tracking-[0.3px]">
              Closed requests
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
