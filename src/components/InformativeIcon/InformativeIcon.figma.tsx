import figma from "@figma/code-connect/react";
import { InformativeIcon } from "./InformativeIcon";

figma.connect(
  InformativeIcon,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2409",
  {
    props: {
      type: figma.enum("type", {
        discount: "discount",
        "feedback 1": "feedback 1",
        "feedback 2": "feedback 2",
        "feedback 3": "feedback 3",
        "feedback 4": "feedback 4",
        "feedback 5": "feedback 5",
        "food&drink": "food&drink",
        stair: "stair",
        "opening hour": "opening hour",
        "things to do": "things to do",
        shopping: "shopping",
        services: "services",
        tooltip: "tooltip",
        calendar: "calendar",
      }),
      size: figma.enum("size", {
        "15": "15",
        "16": "16",
        "20": "20",
        "24": "24",
        "32": "32",
      }),
      color: figma.enum("color", {
        black: "black",
        gray: "gray",
        orange: "orange",
        "half-half": "half-half",
        pressed: "pressed",
        "pressed/enabled": "pressed/enabled",
        white: "white",
      }),
    },
    example: ({ type, size, color }) => (
      <InformativeIcon type={type} size={size} color={color} />
    ),
  }
);
