import figma from "@figma/code-connect/react";
import { RequestWidget } from "./RequestWidget";

figma.connect(
  RequestWidget,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6541",
  {
    props: {
      // Figma: "enabled empty" → component prop: "enabled empy" (design typo preserved)
      property3: figma.enum("Property 3", {
        enabled: "enabled",
        "enabled empty": "enabled empy",
        hover: "hover",
      }),
    },
    example: ({ property3 }) => <RequestWidget property3={property3} />,
  }
);
