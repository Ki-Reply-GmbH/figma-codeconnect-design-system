import figma from "@figma/code-connect/react";
import { TabBar } from "./TabBar";

figma.connect(
  TabBar,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=223-6444",
  {
    props: {
      // "buildings active" → "buildings", "tenants active" → "tenants"
      activeTab: figma.enum("Property 3", {
        "buildings active": "buildings",
        "tenants active": "tenants",
      }),
    },
    example: ({ activeTab }) => <TabBar activeTab={activeTab} />,
  }
);
