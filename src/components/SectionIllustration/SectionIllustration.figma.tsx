import figma from "@figma/code-connect/react";
import { SectionIllustration } from "./SectionIllustration";

figma.connect(
  SectionIllustration,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-3081",
  {
    props: {
      section: figma.enum("Section", {
        community: "community",
        dashboard: "dashboard",
        support: "support",
      }),
      size: figma.enum("Size", {
        M: "M",
        S: "S",
      }),
      number: figma.enum("N.", {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
      }),
    },
    example: ({ section, size, number }) => (
      <SectionIllustration section={section} size={size} number={number} />
    ),
  }
);
