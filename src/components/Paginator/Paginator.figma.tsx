import figma from "@figma/code-connect/react";
import { Paginator } from "./Paginator";

figma.connect(
  Paginator,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6663",
  {
    props: {
      dimension: figma.enum("Dimension", { "M-S": "M-S", XS: "XS" }),
    },
    example: ({ dimension }) => (
      <Paginator dimension={dimension} totalPages={3} currentPage={1} />
    ),
  }
);
