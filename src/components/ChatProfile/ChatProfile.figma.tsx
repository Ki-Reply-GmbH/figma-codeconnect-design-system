import figma from "@figma/code-connect/react";
import { ChatProfile } from "./ChatProfile";

figma.connect(
  ChatProfile,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=225-12552",
  {
    props: {
      chatProfile: figma.enum("Chat profile", {
        FM: "FM",
        TE: "TE",
        Image: "Image",
      }),
    },
    example: ({ chatProfile }) => <ChatProfile chatProfile={chatProfile} />,
  }
);
