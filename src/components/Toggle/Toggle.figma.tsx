import figma from "@figma/code-connect/react";
import { Toggle } from "./Toggle";

figma.connect(
  Toggle,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-885",
  {
    props: {
      size: figma.enum("Property 1", { Big: "Big", Small: "Small" }),
      disabled: figma.enum("Property 2", { disabled: true, enabled: false }),
    },
    example: ({ size, disabled }) => (
      <Toggle size={size} disabled={disabled} />
    ),
  }
);
