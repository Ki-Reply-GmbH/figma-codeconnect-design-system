import figma from "@figma/code-connect/react";
import { OperationIcon } from "./OperationIcon";

figma.connect(
  OperationIcon,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-2409",
  {
    props: {
      type: figma.enum("type", {
        attachment: "attachment",
        "checkbox selected": "checkbox selected",
        "checkbox unselected": "checkbox unselected",
        edit: "edit",
        eraser: "eraser",
        send: "send",
        share: "share",
        view: "view",
        searchbar: "searchbar",
        expand: "expand",
        upload: "upload",
        hide: "hide",
        options: "options",
      }),
      size: figma.enum("size", {
        "16": "16",
        "20": "20",
        "32": "32",
      }),
      color: figma.enum("color", {
        black: "black",
        grey: "grey",
        white: "white",
      }),
    },
    example: ({ type, size, color }) => (
      <OperationIcon type={type} size={size} color={color} />
    ),
  }
);
