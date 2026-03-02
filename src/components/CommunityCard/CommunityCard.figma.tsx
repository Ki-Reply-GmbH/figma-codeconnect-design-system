import figma from "@figma/code-connect/react";
import { CommunityCard } from "./CommunityCard";

figma.connect(
  CommunityCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-5467",
  {
    props: {
      size: figma.enum("size", { M: "M", S: "S", XS: "XS" }),
      type: figma.enum("type", {
        "community post": "community post",
        "general announcement": "general announcement",
        "tenant announcement": "tenant announcement",
        "urgent announcement": "urgent announcement",
      }),
    },
    example: ({ size, type }) => <CommunityCard size={size} type={type} />,
  }
);
