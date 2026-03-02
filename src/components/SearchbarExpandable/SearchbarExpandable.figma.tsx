import figma from "@figma/code-connect/react";
import { SearchbarExpandable } from "./SearchbarExpandable";

figma.connect(
  SearchbarExpandable,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-1670",
  {
    props: {
      size: figma.enum("size", { M: "M", XS: "XS" }),
    },
    example: ({ size }) => <SearchbarExpandable size={size} />,
  }
);
