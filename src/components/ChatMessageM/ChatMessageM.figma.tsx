import figma from "@figma/code-connect/react";
import { ChatMessageM } from "./ChatMessageM";

figma.connect(
  ChatMessageM,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6513",
  {
    props: {
      property2: figma.enum("Property 2", {
        "GRE msg": "GRE msg",
        "TENANT msg": "TENANT msg",
        enable: "enable",
      }),
    },
    example: ({ property2 }) => <ChatMessageM property2={property2} />,
  }
);
