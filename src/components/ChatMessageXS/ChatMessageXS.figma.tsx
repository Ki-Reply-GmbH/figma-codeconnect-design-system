import figma from "@figma/code-connect/react";
import { ChatMessageXS } from "./ChatMessageXS";

figma.connect(
  ChatMessageXS,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6513",
  {
    props: {
      property2: figma.enum("Property 2", {
        enable: "enable",
        "tenant msg": "tenant msg",
        "GRE msg": "GRE msg",
      }),
    },
    example: ({ property2 }) => <ChatMessageXS property2={property2} />,
  }
);
