import figma from "@figma/code-connect/react";
import { StatusBar } from "./StatusBar";

figma.connect(
  StatusBar,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1335",
  {
    props: {
      dimension: figma.enum("dimension", {
        big: "big",
        small: "small",
      }),
      specific: figma.enum("specific", {
        new: "new",
        "in progress": "in progress",
        closed: "closed",
      }),
    },
    example: ({ dimension, specific }) => (
      <StatusBar dimension={dimension} specific={specific} />
    ),
  }
);
