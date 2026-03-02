import figma from "@figma/code-connect/react";
import { Header } from "./Header";

figma.connect(
  Header,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1694",
  {
    props: {
      // Figma "black" maps to "transparent" — the component has no black variant
      type: figma.enum("type", {
        white: "white",
        transparent: "transparent",
        black: "transparent",
      }),
      extra: figma.enum("extra", {
        "-": "-",
        OM: "OM",
        PM: "PM",
        "PM+": "PM+",
        PM_profile: "PM_profile",
        "accounts searchbar": "accounts searchbar",
        subheader: "subheader",
      }),
    },
    example: ({ type, extra }) => <Header type={type} extra={extra} />,
  }
);
