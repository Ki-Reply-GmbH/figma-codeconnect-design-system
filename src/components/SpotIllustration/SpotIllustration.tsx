import React from "react";

// NOTE: Image assets from Figma MCP — valid for 7 days from generation.
// In production, replace with permanent CDN or local SVG assets.
const ASSETS = {
  "general announcement":
    "https://www.figma.com/api/mcp/asset/59c7411d-de5f-4ce8-9e90-d8e4347077a5",
  "general_ exploration":
    "https://www.figma.com/api/mcp/asset/3c26054c-6dd2-4452-9bd4-45ef21a78d3c",
  "map locations":
    "https://www.figma.com/api/mcp/asset/f52af6f6-3ec0-40ab-8a97-1ef66407b5e6",
  tickets:
    "https://www.figma.com/api/mcp/asset/c6e2e8cb-6831-44bc-a45c-46e88f94d15d",
  "Documents_sharing":
    "https://www.figma.com/api/mcp/asset/7eb841ec-dfac-482d-a9cf-30d271d3a14d",
  "Chat_with_PM":
    "https://www.figma.com/api/mcp/asset/5c198086-4ee3-4271-99ad-23aa4ae06bc0",
  "Account Managment":
    "https://www.figma.com/api/mcp/asset/5c198086-4ee3-4271-99ad-23aa4ae06bc0",
  "Profile&Notifications":
    "https://www.figma.com/api/mcp/asset/9e8dcf78-cd89-4986-8f4e-22a2a0c24197",
  "urgent announcement":
    "https://www.figma.com/api/mcp/asset/9e190130-7963-441f-8a0a-08b9c9487775",
  "community post":
    "https://www.figma.com/api/mcp/asset/807ed856-b44b-4165-9b11-edcb82cff1bf",
};

type SpotSpec =
  | "community post"
  | "general announcement"
  | "urgent announcement"
  | "general_ exploration"
  | "map locations"
  | "tickets"
  | "Profile&Notifications"
  | "Account Managment"
  | "Documents_sharing"
  | "Chat_with_PM"
  | "new requests"
  | "spec14"
  | "Speaker"
  | "Building";

type SpotIllustrationProps = {
  spec?: SpotSpec;
  className?: string;
};

export function SpotIllustration({
  spec = "general announcement",
  className,
}: SpotIllustrationProps) {
  const src = ASSETS[spec as keyof typeof ASSETS];

  return (
    <div
      className={["relative inline-block size-[54px]", className]
        .filter(Boolean)
        .join(" ")}
    >
      {src ? (
        <img
          src={src}
          alt={spec}
          className="absolute block max-w-none size-full object-contain"
        />
      ) : (
        // Geometric variants (spec14, Building, Speaker, new requests)
        // rendered as simple placeholder shapes
        <div className="size-full bg-neutral-gray-4 rounded flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="#6f7072" strokeWidth="1.2" />
          </svg>
        </div>
      )}
    </div>
  );
}
