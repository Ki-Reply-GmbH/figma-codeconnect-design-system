import { useState } from "react";

type Property2 = "request" | "cha";

export interface AccordionXSField {
  label: string;
  value: string;
}

export interface AccordionXSProps {
  property1?: "XS";
  /** request = support request detail, cha = shared attachments */
  property2?: Property2;
  /** Accordion title (request name or "Shared attachments") */
  title?: string;
  /** Category label (uppercase, red-4) */
  category?: string;
  /** Date */
  date?: string;
  /** Request number */
  requestNumber?: string;
  /** Fields: Category, Description, Where it is, Area */
  fields?: AccordionXSField[];
  /** Attachment links */
  attachments?: string[];
  /** Controlled open state */
  open?: boolean;
  defaultOpen?: boolean;
  onToggle?: (open: boolean) => void;
  className?: string;
}

function ChevronUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 13L10 8L15 13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 8L10 13L15 8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AccordionXS({
  property2 = "request",
  title = "Request name",
  category = "Support category",
  date = "DD/MM/YY",
  requestNumber = "313",
  fields = [],
  attachments = ["image01.jpg", "image02.jpg"],
  open: controlledOpen,
  defaultOpen = false,
  onToggle,
  className = "",
}: AccordionXSProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const isCha = property2 === "cha";

  function handleToggle() {
    const next = !isOpen;
    setInternalOpen(next);
    onToggle?.(next);
  }

  const categoryColor = isCha ? "text-primary-gray" : "text-primary-red-4";

  return (
    <div
      className={[
        "relative bg-neutral-white rounded-xs w-[375px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* Header */}
      <div className="flex items-start justify-between px-4 pt-4 pb-4">
        <div className="flex-1">
          <p className={["text-[12px] font-sans font-medium uppercase tracking-[0.2px]", categoryColor].join(" ")}>
            {category}
          </p>
          <p className="text-[18px] font-sans font-regular text-neutral-black mt-1 tracking-[0.5px]">
            {title}
          </p>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex-none text-neutral-black mt-1"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
      </div>

      {/* Expanded content */}
      {isOpen && !isCha && (
        <div className="px-4 pb-4">
          <div className="border-t border-neutral-gray-3 pt-4">
            {/* Date + request number row */}
            <div className="flex gap-16 mb-4">
              <div>
                <p className="text-[12px] font-sans font-medium text-neutral-gray-2 uppercase tracking-[0.2px]">
                  Date
                </p>
                <p className="text-[12px] font-sans font-medium text-neutral-black uppercase tracking-[0.2px] mt-0.5">
                  {date}
                </p>
              </div>
              <div>
                <p className="text-[12px] font-sans font-medium text-neutral-gray-2 uppercase tracking-[0.2px]">
                  Request number
                </p>
                <p className="text-[12px] font-sans font-medium text-neutral-black uppercase tracking-[0.2px] mt-0.5">
                  {requestNumber}
                </p>
              </div>
            </div>

            {/* Dynamic fields */}
            {fields.map((field, i) => (
              <div key={i} className="border-t border-neutral-gray-3 py-4">
                <p className="text-[12px] font-sans font-medium text-neutral-gray-2 uppercase tracking-[0.2px]">
                  {field.label}
                </p>
                <p className="text-body-xs font-sans font-regular text-neutral-black mt-1 leading-[1.3]">
                  {field.value}
                </p>
              </div>
            ))}

            {/* Attachments */}
            {attachments.length > 0 && (
              <div className="border-t border-neutral-gray-3 pt-4">
                <p className="text-[12px] font-sans font-medium text-neutral-gray-2 uppercase tracking-[0.2px]">
                  Attachments
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  {attachments.map((name) => (
                    <a
                      key={name}
                      href="#"
                      className="text-h4-xs font-sans font-regular text-link-blue underline tracking-[0.5px]"
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CHA expanded content */}
      {isOpen && isCha && (
        <div className="px-4 pb-4">
          <div className="border-t border-neutral-gray-3 pt-4">
            {attachments.map((name) => (
              <a
                key={name}
                href="#"
                className="block text-h4-xs font-sans font-regular text-link-blue underline tracking-[0.5px] mb-2"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
