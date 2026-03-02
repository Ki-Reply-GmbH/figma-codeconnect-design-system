import figma from "@figma/code-connect/react";
import { MapCard } from "./MapCard";

figma.connect(
  MapCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-5396",
  {
    props: {
      size: figma.enum("size", {
        M: "M",
        S: "S",
        XS: "XS",
      }),
      type: figma.enum("type", {
        Dashboard: "Dashboard",
        "google map V1": "google map V1",
        "google map V2": "google map V2",
      }),
    },
    example: ({ size, type }) => <MapCard size={size} type={type} />,
  }
);
