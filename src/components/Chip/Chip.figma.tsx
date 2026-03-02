import figma from "@figma/code-connect/react";
import { Chip } from "./Chip";

figma.connect(
  Chip,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6491",
  {
    props: {
      status: figma.enum("status", {
        enabled: "enabled",
        selected: "selected",
        disabled: "disabled",
      }),
    },
    example: ({ status }) => <Chip status={status}>Label</Chip>,
  }
);
