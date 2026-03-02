import figma from "@figma/code-connect/react";
import { Dropdown } from "./Dropdown";

figma.connect(
  Dropdown,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6629",
  {
    props: {},
    example: () => <Dropdown options={["Option 1", "Option 2", "Option 3"]} />,
  }
);
