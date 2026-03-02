import figma from "@figma/code-connect/react";
import { CircleButton } from "./CircleButton";

figma.connect(
  CircleButton,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-849",
  {
    props: {
      family: figma.enum("family", {
        black: "black",
        white: "white",
      }),
      direction: figma.enum("Direction", {
        Left: "Left",
        Right: "Right",
      }),
      status: figma.enum("status", {
        enabled: "enabled",
        hover: "hover",
        pressed: "pressed",
        disabled: "disabled",
      }),
    },
    example: ({ family, direction, status }) => (
      <CircleButton family={family} direction={direction} status={status} />
    ),
  }
);
