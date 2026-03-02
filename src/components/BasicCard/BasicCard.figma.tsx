import figma from "@figma/code-connect/react";
import { BasicCard } from "./BasicCard";

figma.connect(
  BasicCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-4691",
  {
    props: {
      specific: figma.enum("specific", {
        "big illustration": "big illustration",
        "big image": "big image",
        "big only text": "big only text",
        "small image": "small image",
        "small only text": "small only text",
      }),
    },
    example: ({ specific }) => <BasicCard specific={specific} />,
  }
);
