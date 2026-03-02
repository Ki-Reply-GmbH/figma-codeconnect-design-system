import figma from "@figma/code-connect/react";
import { HighlightCard } from "./HighlightCard";

figma.connect(
  HighlightCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-4553",
  {
    props: {
      size: figma.enum("size", { "M-S": "M-S", XS: "XS" }),
      specific: figma.enum("specific", {
        announcement: "announcement",
        request: "request",
      }),
      extra: figma.enum("extra", {
        DIRECT: "DIRECT",
        direct: "direct",
        direct_CTA: "direct_CTA",
        general: "general",
        general_CTA: "general_CTA",
        "status bar": "status bar",
        tag: "tag",
      }),
    },
    example: ({ size, specific, extra }) => (
      <HighlightCard size={size} specific={specific} extra={extra} />
    ),
  }
);
