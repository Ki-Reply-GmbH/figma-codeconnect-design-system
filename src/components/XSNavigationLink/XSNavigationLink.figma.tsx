import figma from "@figma/code-connect/react";
import { XSNavigationLink } from "./XSNavigationLink";

figma.connect(
  XSNavigationLink,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-985",
  {
    props: {
      selected: figma.enum("status", { selected: true }),
    },
    example: ({ selected }) => (
      <XSNavigationLink selected={selected}>Nav Item</XSNavigationLink>
    ),
  }
);
