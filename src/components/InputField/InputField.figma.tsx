import figma from "@figma/code-connect/react";
import { InputField } from "./InputField";

figma.connect(
  InputField,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6459",
  {
    props: {
      inputType: figma.enum("Type", {
        Inputfield: "Inputfield",
        attachment: "attachment",
      }),
      status: figma.enum("Name", {
        active: "active",
        confirmed: "confirmed",
        enabled: "enabled",
        "enabled white": "enabled white",
        hover: "hover",
        link: "link",
      }),
    },
    example: ({ inputType, status }) => (
      <InputField inputType={inputType} status={status} />
    ),
  }
);
