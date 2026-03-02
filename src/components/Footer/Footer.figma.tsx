import figma from "@figma/code-connect/react";
import { Footer } from "./Footer";

figma.connect(
  Footer,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=225-9678",
  {
    props: {
      size: figma.enum("Size", { M: "M", S: "S", XS: "XS" }),
    },
    example: ({ size }) => <Footer size={size} />,
  }
);
