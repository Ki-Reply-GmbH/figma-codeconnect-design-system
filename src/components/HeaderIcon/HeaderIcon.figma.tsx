import figma from "@figma/code-connect/react";
import { HeaderIcon } from "./HeaderIcon";

figma.connect(
  HeaderIcon,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2409",
  {
    props: {
      type: figma.enum("type", {
        earth: "earth",
        menu: "menu",
        notification: "notification",
        "notification unseen": "notification unseen",
        profile: "profile",
        "search bar": "search bar",
      }),
      color: figma.enum("color", {
        black: "black",
        white: "white",
      }),
    },
    example: ({ type, color }) => <HeaderIcon type={type} color={color} />,
  }
);
