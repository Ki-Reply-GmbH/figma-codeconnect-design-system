import React from "react";

type StepperStatus = "blank" | "open" | "approved" | "progress" | "hold" | "closed" | "refused" | "denied";

type StepperProps = {
  status?: StepperStatus;
  className?: string;
};

type Step = {
  number: number;
  label: string;
};

const STEPS: Step[] = [
  { number: 1, label: "OPENED" },
  { number: 2, label: "APPROVED" },
  { number: 3, label: "IN PROGRESS" },
  { number: 4, label: "CLOSED" },
];

function getStepVariant(stepNum: number, status: StepperStatus): "done" | "active" | "inactive" | "rejected" {
  if (status === "blank") return "inactive";

  const progressMap: Record<StepperStatus, number> = {
    blank: 0,
    open: 1,
    approved: 2,
    progress: 3,
    hold: 3,
    closed: 4,
    refused: 4,
    denied: 4,
  };

  const activeStep = progressMap[status];
  const isRejected = status === "refused" || status === "denied";

  if (stepNum < activeStep) return "done";
  if (stepNum === activeStep) {
    if (isRejected && stepNum === 4) return "rejected";
    return "active";
  }
  return "inactive";
}

function getActiveLabel(status: StepperStatus, defaultLabel: string): string {
  if (status === "hold" && defaultLabel === "IN PROGRESS") return "ON HOLD";
  if (status === "refused" && defaultLabel === "CLOSED") return "REFUSED";
  if (status === "denied" && defaultLabel === "CLOSED") return "DENIED";
  return defaultLabel;
}

export function Stepper({ status = "blank", className }: StepperProps) {
  return (
    <div
      className={["relative flex items-start w-full", className]
        .filter(Boolean)
        .join(" ")}
    >
      {STEPS.map((step, idx) => {
        const variant = getStepVariant(step.number, status);
        const label = getActiveLabel(status, step.label);
        const isLast = idx === STEPS.length - 1;

        const dotBg =
          variant === "done"
            ? "bg-black text-white"
            : variant === "active"
            ? "bg-primary-red-1 text-white"
            : variant === "rejected"
            ? "bg-primary-red-1"
            : "border border-secondary-gray text-secondary-gray";

        const lineColor =
          variant === "done" || variant === "active"
            ? "bg-primary-red-1"
            : "bg-neutral-gray-3";

        const labelColor =
          variant === "active"
            ? "text-primary-red-1"
            : variant === "done"
            ? "text-neutral-gray-2"
            : "text-secondary-gray";

        return (
          <div
            key={step.number}
            className={[
              "flex-1 flex flex-col items-start",
              isLast ? "" : "relative",
            ].join(" ")}
          >
            <div className="flex items-center w-full">
              {/* Dot */}
              <div
                className={[
                  "relative z-10 flex items-center justify-center size-[22px] rounded-full shrink-0",
                  dotBg,
                ].join(" ")}
              >
                {variant === "rejected" ? (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                ) : variant === "done" ? (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="text-[8px] font-bold tracking-[0.2px] uppercase">
                    {step.number}
                  </span>
                )}
              </div>
              {/* Connector line */}
              {!isLast && (
                <div className={["flex-1 h-0.5 ml-1", lineColor].join(" ")} />
              )}
            </div>
            {/* Label */}
            <span
              className={[
                "mt-2 text-[10px] font-medium tracking-[0.4px] uppercase",
                labelColor,
              ].join(" ")}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
