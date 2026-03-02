import figma from "@figma/code-connect/react";
import { SimpleCard } from "./SimpleCard";

figma.connect(
  SimpleCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-4645",
  {
    props: {
      size: figma.enum("size", { M: "M", S: "S", XS: "XS" }),
    },
    example: ({ size }) => <SimpleCard size={size} />,
  }
);
