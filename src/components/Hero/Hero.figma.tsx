import figma from "@figma/code-connect/react";
import { Hero } from "./Hero";

figma.connect(
  Hero,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1834",
  {
    props: {
      size: figma.enum("size", { M: "M", S: "S", XS: "XS" }),
      level: figma.enum("level", {
        "first level": "first level",
        "second level": "second level",
      }),
      type: figma.enum("type", {
        "first time access": "first time access",
        searchbar: "searchbar",
        "B&D": "B&D",
        "S&R": "S&R",
        "service detail": "service detail",
        community: "community",
        "hidden page": "hidden page",
      }),
    },
    example: ({ type, level }) => <Hero type={type} level={level} />,
  }
);
