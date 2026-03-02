import figma from "@figma/code-connect/react";
import { MobileMenuItem } from "./MobileMenu";

figma.connect(
  MobileMenuItem,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6388",
  {
    props: {
      variant: figma.enum("Property 2", {
        default: "default",
        activated: "activated",
        "+ icon": "+ icon",
        "notification default": "notification default",
        "new notification": "new notification",
      }),
    },
    example: ({ variant }) => <MobileMenuItem variant={variant} />,
  }
);
