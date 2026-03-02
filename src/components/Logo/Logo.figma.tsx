import figma from "@figma/code-connect/react";
import { Logo } from "./Logo";

figma.connect(
  Logo,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2936",
  {
    props: {
      name: figma.enum("Name", {
        logo: "logo",
        "logo generali": "logo generali",
        "world image": "world image",
      }),
      color: figma.enum("Color", {
        black: "black",
        white: "white",
      }),
    },
    example: ({ name, color }) => <Logo name={name} color={color} />,
  }
);
