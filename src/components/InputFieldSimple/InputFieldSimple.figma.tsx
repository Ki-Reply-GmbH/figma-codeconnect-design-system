import figma from "@figma/code-connect/react";
import { InputFieldSimple } from "./InputFieldSimple";

figma.connect(
  InputFieldSimple,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6481",
  {
    props: {
      variant: figma.enum("Property 2", {
        enabled: "enabled",
        "enabled white": "enabled white",
      }),
    },
    example: ({ variant }) => <InputFieldSimple variant={variant} />,
  }
);
