import figma from "@figma/code-connect/react";
import { BasicLink } from "./BasicLink";

figma.connect(
  BasicLink,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-927",
  {
    props: {
      family: figma.enum("family", {
        black: "black",
        blue: "blue",
        white: "white",
      }),
      type: figma.enum("type", {
        default: "default",
        inline: "inline",
        "text+left icon": "text+left icon",
        "text+right icon": "text+right icon",
      }),
    },
    example: ({ family, type }) => (
      <BasicLink family={family} type={type}>
        Link
      </BasicLink>
    ),
  }
);
