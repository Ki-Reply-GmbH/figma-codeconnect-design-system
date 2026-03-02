import figma from "@figma/code-connect/react";
import { AccordionM } from "./AccordionM";

figma.connect(
  AccordionM,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2348",
  {
    props: {
      specific: figma.enum("specific", {
        basic: "basic",
        "with divider": "with divider",
      }),
      open: figma.enum("status", { open: true, closed: false }),
      label: figma.textContent("Text input"),
    },
    example: ({ specific, open, label }) => (
      <AccordionM specific={specific} defaultOpen={open} label={label} />
    ),
  }
);
