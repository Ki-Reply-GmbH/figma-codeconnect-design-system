import figma from "@figma/code-connect/react";
import { TenantCard } from "./TenantCard";

figma.connect(
  TenantCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-5007",
  {
    props: {
      type: figma.enum("type", {
        "added place": "added place",
        "other tenants added": "other tenants added",
      }),
      content: figma.enum("content", {
        agreement: "agreement",
        "no agreement": "no agreement",
      }),
      size: figma.enum("size", {
        M: "M",
        "M simplified": "M simplified",
        S: "S",
        "S simplified": "S simplified",
        XS: "XS",
        "XS simplified": "XS simplified",
      }),
      status: figma.enum("status", {
        default: "default",
        hover: "hover",
        pressed: "pressed",
      }),
    },
    example: ({ type, content, size, status }) => (
      <TenantCard type={type} content={content} size={size} status={status} />
    ),
  }
);
