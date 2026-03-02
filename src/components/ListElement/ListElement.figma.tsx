import figma from "@figma/code-connect/react";
import { ListElement } from "./ListElement";

figma.connect(
  ListElement,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1559",
  {
    props: {
      size: figma.enum("size", { M: "M", S: "S" }),
      extra: figma.enum("extra", {
        "no divider": "no divider",
        "with divider": "with divider",
      }),
    },
    example: ({ size, extra }) => <ListElement size={size} extra={extra} />,
  }
);
