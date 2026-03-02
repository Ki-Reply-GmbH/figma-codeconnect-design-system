import figma from "@figma/code-connect/react";
import { CTAButton } from "./CTAButton";

figma.connect(
  CTAButton,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-674",
  {
    props: {
      size: figma.enum("Size", { S: "S", XS: "XS" }),
      variant: figma.enum("Type", {
        Primary: "Primary",
        Secondary: "Secondary",
        Tertiary: "Tertiary",
      }),
      family: figma.enum("Family", {
        Red: "Red",
        Black: "Black",
        White: "White",
      }),
      content: figma.enum("Content", {
        Onlytext: "Onlytext",
        Onlyicon: "Onlyicon",
        "Text+icon": "Text+icon",
      }),
      disabled: figma.enum("Status", { Disabled: true }),
    },
    example: ({ size, variant, family, content, disabled }) => (
      <CTAButton
        size={size}
        variant={variant}
        family={family}
        content={content}
        disabled={disabled}
      >
        CTA
      </CTAButton>
    ),
  }
);
