import figma from "@figma/code-connect/react";
import { Stepper } from "./Stepper";

figma.connect(
  Stepper,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1359",
  {
    props: {
      status: figma.enum("Property 2", {
        blank: "blank",
        open: "open",
        approved: "approved",
        progress: "progress",
        hold: "hold",
        closed: "closed",
        refused: "refused",
        denied: "denied",
      }),
    },
    example: ({ status }) => <Stepper status={status} />,
  }
);
