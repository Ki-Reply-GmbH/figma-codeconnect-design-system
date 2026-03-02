import figma from "@figma/code-connect/react";
import { ContentCard } from "./ContentCard";

figma.connect(
  ContentCard,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-4856",
  {
    props: {
      content: figma.enum("content", {
        "only text": "only text",
        "text+image": "text+image",
      }),
      size: figma.enum("size", { M: "M", S: "S", XS: "XS" }),
    },
    example: ({ content, size }) => (
      <ContentCard content={content} size={size} />
    ),
  }
);
