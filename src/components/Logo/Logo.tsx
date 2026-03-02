import React from "react";

// NOTE: Image assets from Figma MCP — valid for 7 days from generation.
// In production, replace with permanent CDN or local SVG assets.
const LOGO_BLACK_FULL =
  "https://www.figma.com/api/mcp/asset/555847c8-c7fd-4c93-8c63-1455ab9d2cb1";
const LOGO_BLACK_MARK =
  "https://www.figma.com/api/mcp/asset/f9e3d4c3-40dd-4d7d-a1b3-b5ee5467ca11";
const LOGO_WHITE_MARK =
  "https://www.figma.com/api/mcp/asset/c33a1283-1b4a-42c5-b7a5-e9df89586c6f";
const WORLD_IMAGE =
  "https://www.figma.com/api/mcp/asset/44d2c065-63e5-4933-b839-012eb5dfcea5";

type LogoProps = {
  name?: "logo" | "logo generali" | "world image";
  color?: "black" | "white";
  className?: string;
};

export function Logo({ name = "logo", color = "black", className }: LogoProps) {
  if (name === "world image") {
    return (
      <div
        className={["relative inline-block", className]
          .filter(Boolean)
          .join(" ")}
        style={{ width: 96, height: 96 }}
      >
        <img
          src={WORLD_IMAGE}
          alt="World image"
          className="absolute block max-w-none size-full"
        />
      </div>
    );
  }

  if (name === "logo generali") {
    return (
      <div
        className={["relative inline-block overflow-hidden", className]
          .filter(Boolean)
          .join(" ")}
        style={{ width: 160, height: 48 }}
      >
        <img
          src={LOGO_BLACK_FULL}
          alt="Generali logo"
          className="absolute block max-w-none size-full"
        />
      </div>
    );
  }

  // name === "logo" (mark only)
  return (
    <div
      className={["relative inline-block", className].filter(Boolean).join(" ")}
      style={{ width: 48, height: 24 }}
    >
      <img
        src={color === "white" ? LOGO_WHITE_MARK : LOGO_BLACK_MARK}
        alt="Generali"
        className="absolute block max-w-none size-full"
      />
    </div>
  );
}
