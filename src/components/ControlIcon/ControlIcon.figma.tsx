import figma from "@figma/code-connect/react";
import { ControlIcon } from "./ControlIcon";

figma.connect(
  ControlIcon,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2548",
  {
    props: {
      type: figma.enum("type", {
        add: "add",
        "arrow left": "arrow left",
        "arrow right": "arrow right",
        "chevron down": "chevron down",
        "chevron left": "chevron left",
        "chevron right": "chevron right",
        "chevron up": "chevron up",
        close: "close",
        "first page": "first page",
        "last page": "last page",
        "paginator selected": "paginator selected",
        "paginator unselected": "paginator unselected",
        validate: "validate",
        "zoom in": "zoom in",
        "zoom out": "zoom out",
      }),
      size: figma.enum("size", {
        "16": "16",
        "20": "20",
        "32": "32",
      }),
      color: figma.enum("color", {
        black: "black",
        blue: "blue",
        gray: "gray",
        green: "green",
        grey: "grey",
        "light grey": "light grey",
        "red 1": "red 1",
        "red 3": "red 3",
        white: "white",
      }),
      digits: figma.enum("Digits", {
        Single: "Single",
        Double: "Double",
      }),
    },
    example: ({ type, size, color, digits }) => (
      <ControlIcon type={type} size={size} color={color} digits={digits} />
    ),
  }
);
