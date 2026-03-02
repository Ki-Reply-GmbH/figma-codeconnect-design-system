import figma from "@figma/code-connect/react";
import { SizedCard } from "./SizedCard";

figma.connect(
  SizedCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-4771",
  {
    props: {
      dimension: figma.enum("dimension", {
        big: "big",
        small: "small",
      }),
      size: figma.enum("size", {
        M: "M",
        S: "S",
        XS: "XS",
      }),
      status: figma.enum("status", {
        enabled: "enabled",
        hover: "hover",
      }),
    },
    example: ({ dimension, size, status }) => (
      <SizedCard dimension={dimension} size={size} status={status} />
    ),
  }
);
