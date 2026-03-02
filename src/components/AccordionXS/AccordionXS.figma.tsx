import figma from "@figma/code-connect/react";
import { AccordionXS } from "./AccordionXS";

figma.connect(
  AccordionXS,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2361",
  {
    props: {
      property2: figma.enum("Property 2", { cha: "cha", request: "request" }),
      // In Figma: "collapsed" = expanded content visible; "non collapsed" = header only
      open: figma.enum("Property 3", { collapsed: true, "non collapsed": false }),
    },
    example: ({ property2, open }) => (
      <AccordionXS property2={property2} defaultOpen={open} />
    ),
  }
);
