import figma from "@figma/code-connect/react";
import { RequestOverview } from "./RequestOverview";

figma.connect(
  RequestOverview,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1291",
  {
    props: {
      specific: figma.enum("specific", {
        enabled: "enabled",
        empty: "empty",
        "followed requests": "followed requests",
        "closed requests": "closed requests",
        "opened by me requests": "opened by me requests",
      }),
    },
    example: ({ specific }) => <RequestOverview specific={specific} />,
  }
);
