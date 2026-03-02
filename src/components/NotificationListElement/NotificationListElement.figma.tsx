import figma from "@figma/code-connect/react";
import { NotificationListElement } from "./NotificationListElement";

figma.connect(
  NotificationListElement,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1255",
  {
    props: {
      status: figma.enum("status", { seen: "seen", unseen: "unseen" }),
    },
    example: ({ status }) => (
      <NotificationListElement
        status={status}
        title="Notification title"
        description="One line description for notification"
      />
    ),
  }
);
