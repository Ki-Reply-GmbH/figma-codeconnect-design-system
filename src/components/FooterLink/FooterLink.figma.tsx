import figma from "@figma/code-connect/react";
import { FooterLink } from "./FooterLink";

figma.connect(
  FooterLink,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-994",
  {
    props: {
      size: figma.enum("size", { M: "M", XS: "XS" }),
    },
    example: ({ size }) => <FooterLink size={size}>Link</FooterLink>,
  }
);
