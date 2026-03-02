import figma from "@figma/code-connect/react";
import { RequestCard } from "./RequestCard";

figma.connect(
  RequestCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-5457",
  {
    props: {
      status: figma.enum("status", {
        default: "default",
        new: "new",
      }),
    },
    example: ({ status }) => <RequestCard status={status} />,
  }
);
