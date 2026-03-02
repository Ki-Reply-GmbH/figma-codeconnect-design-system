import figma from "@figma/code-connect/react";
import { SpotIllustration } from "./SpotIllustration";

figma.connect(
  SpotIllustration,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-3915",
  {
    props: {
      spec: figma.enum("spec", {
        "Account Managment": "Account Managment",
        Building: "Building",
        Chat_with_PM: "Chat_with_PM",
        Documents_sharing: "Documents_sharing",
        "Profile&Notifications": "Profile&Notifications",
        Speaker: "Speaker",
        "community post": "community post",
        "general announcement": "general announcement",
        general_exploration: "general_ exploration",
        "map locations": "map locations",
        "new requests": "new requests",
        spec14: "spec14",
        tickets: "tickets",
        "urgent announcement": "urgent announcement",
      }),
    },
    example: ({ spec }) => <SpotIllustration spec={spec} />,
  }
);
