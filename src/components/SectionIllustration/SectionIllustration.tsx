import React from "react";

// NOTE: Image assets from Figma MCP — valid for 7 days from generation.
// In production, replace with permanent CDN or local SVG/PNG assets.

type SectionSize = "M" | "S";
type SectionName = "support" | "dashboard" | "community";
type SectionNumber = 0 | 1 | 2 | 3;

type SectionIllustrationProps = {
  size?: SectionSize;
  section?: SectionName;
  number?: SectionNumber;
  className?: string;
};

// Dimensions per size
const DIMS: Record<SectionSize, { width: number; height: number }> = {
  M: { width: 450, height: 164 },
  S: { width: 329, height: 164 },
};

// Image assets mapped by "section-number-size"
const IMG_MAP: Record<string, string> = {
  // Support illustrations
  "support-1-M":
    "https://www.figma.com/api/mcp/asset/36ae431c-7c9e-4b6a-bafa-1883734f866d",
  "support-1-S":
    "https://www.figma.com/api/mcp/asset/fc680fc4-3775-4793-aaba-cec080c677b5",
  "support-2-M":
    "https://www.figma.com/api/mcp/asset/fe1f5b92-0d00-4cc0-aa45-3df544674ef9",
  "support-2-S":
    "https://www.figma.com/api/mcp/asset/c6579e4b-d618-46a2-92fb-b1f3d67f1390",
  "support-3-M":
    "https://www.figma.com/api/mcp/asset/ff1e45c0-f430-4e3d-a146-262317aeca8f",
  "support-3-S":
    "https://www.figma.com/api/mcp/asset/8c7a729a-27ac-45c1-bd18-b4fa37221d19",
  // Dashboard
  "dashboard-0-M":
    "https://www.figma.com/api/mcp/asset/02bb7650-d635-46cd-81a2-022c28a470be",
  "dashboard-0-S":
    "https://www.figma.com/api/mcp/asset/02bb7650-d635-46cd-81a2-022c28a470be",
  // Community
  "community-0-M":
    "https://www.figma.com/api/mcp/asset/c8aa758d-37c2-4697-bb81-afc076d0f5e4",
  "community-0-S":
    "https://www.figma.com/api/mcp/asset/c8aa758d-37c2-4697-bb81-afc076d0f5e4",
};

// Grey background insets differ by section
function hasBgRect(section: SectionName) {
  return section === "support";
}

export function SectionIllustration({
  size = "M",
  section = "support",
  number = 1,
  className,
}: SectionIllustrationProps) {
  const { width, height } = DIMS[size];
  const key = `${section}-${number}-${size}`;
  const imgSrc = IMG_MAP[key];
  const showBg = hasBgRect(section);

  return (
    <div
      className={["relative overflow-hidden", className]
        .filter(Boolean)
        .join(" ")}
      style={{ width, height }}
    >
      {/* Grey background band (support illustrations only) */}
      {showBg && (
        <div
          className="absolute left-0 right-0 bg-[#f0f0f0]"
          style={{
            top: "9.76%",
            bottom: "9.76%",
          }}
        />
      )}

      {/* Illustration image */}
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${section} illustration ${number}`}
          className="absolute block max-w-none size-full object-contain"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-gray-4">
          <span className="text-[9px] text-primary-gray tracking-[0.2px]">
            {section} {number}
          </span>
        </div>
      )}
    </div>
  );
}
