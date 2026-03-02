import figma from "@figma/code-connect/react";
import { QuickActionFAB } from "./QuickActionFAB";

figma.connect(
  QuickActionFAB,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-865",
  {
    props: {
      family: figma.enum("family", {
        black: "black",
        white: "white",
      }),
      open: figma.enum("status", {
        open: true,
        closed: false,
      }),
    },
    example: ({ family, open }) => (
      <QuickActionFAB family={family} open={open} />
    ),
  }
);
