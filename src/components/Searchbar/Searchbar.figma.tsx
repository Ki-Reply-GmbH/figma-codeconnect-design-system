import figma from "@figma/code-connect/react";
import { Searchbar } from "./Searchbar";

figma.connect(
  Searchbar,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1645",
  {
    props: {
      colour: figma.enum("Colour", { black: "black", white: "white" }),
    },
    example: ({ colour }) => <Searchbar colour={colour} />,
  }
);
