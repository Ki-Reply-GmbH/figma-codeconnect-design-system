import figma from "@figma/code-connect/react";
import { Tag } from "./Tag";

figma.connect(
  Tag,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=225-12697",
  {
    props: {
      size: figma.enum("Property 1", {
        S: "S",
        XS: "XS",
      }),
      label: figma.textContent("CTA"),
    },
    example: ({ size, label }) => <Tag size={size}>{label}</Tag>,
  }
);
