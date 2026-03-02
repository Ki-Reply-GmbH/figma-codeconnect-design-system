import figma from "@figma/code-connect/react";
import { Table } from "./Table";

figma.connect(
  Table,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=228-42337",
  {
    props: {
      property1: figma.enum("Property 1", {
        "S&R": "S&R",
        dashboard: "dashboard",
      }),
      property2: figma.enum("Property 2", {
        default: "default",
        empty: "empty",
      }),
    },
    example: ({ property1, property2 }) => (
      <Table property1={property1} property2={property2} />
    ),
  }
);
