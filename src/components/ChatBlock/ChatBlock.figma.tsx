import figma from "@figma/code-connect/react";
import { ChatBlock } from "./ChatBlock";

figma.connect(
  ChatBlock,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1526",
  {
    props: {
      property2: figma.enum("Property 2", {
        "new request": "new request",
        "in progress": "in progress",
      }),
    },
    example: ({ property2 }) => <ChatBlock property2={property2} />,
  }
);
