import React from "react";
import { ChatMessageXS } from "../ChatMessageXS/ChatMessageXS";
import { ChatProfile } from "../ChatProfile/ChatProfile";

type ChatMessage = {
  text: string;
  sender: "GRE" | "tenant";
};

type ChatBlockProps = {
  property2?: "new request" | "in progress";
  openedByText?: string;
  assignedToText?: string;
  messages?: ChatMessage[];
  className?: string;
};

export function ChatBlock({
  property2 = "new request",
  openedByText = 'Name Surname opened the request "Request name" the DD/MM/YY',
  assignedToText = "The request has been assigned to Name Surname",
  messages = [],
  className,
}: ChatBlockProps) {
  if (property2 === "new request") {
    return (
      <div
        className={[
          "relative w-full bg-white",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <p className="text-body-xs tracking-[0.5px] text-primary-gray mb-3">
          {openedByText}
        </p>
        <ChatMessageXS property2="enable" />
      </div>
    );
  }

  return (
    <div
      className={[
        "relative w-full bg-white flex flex-col gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <p className="text-body-xs tracking-[0.5px] text-primary-gray">
        {openedByText}
      </p>
      <p className="text-body-xs tracking-[0.5px] text-primary-gray">
        {assignedToText}
      </p>

      {/* Chat messages */}
      <div className="flex flex-col gap-3">
        {messages.length > 0 ? (
          messages.map((msg, i) => (
            <div
              key={i}
              className={[
                "flex items-end gap-2",
                msg.sender === "tenant" ? "flex-row-reverse" : "flex-row",
              ].join(" ")}
            >
              {msg.sender === "GRE" && <ChatProfile chatProfile="TE" />}
              <ChatMessageXS
                property2={msg.sender === "tenant" ? "tenant msg" : "GRE msg"}
                placeholder={msg.text}
              />
              {msg.sender === "tenant" && <ChatProfile chatProfile="Image" />}
            </div>
          ))
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-end gap-2">
              <ChatProfile chatProfile="TE" />
              <ChatMessageXS property2="GRE msg" placeholder="Hello! Thanks for your request" />
            </div>
            <div className="flex items-end gap-2 pl-10">
              <ChatMessageXS property2="GRE msg" placeholder="I'll fix the issue" />
            </div>
            <div className="flex items-end gap-2 flex-row-reverse">
              <ChatProfile chatProfile="Image" />
              <ChatMessageXS property2="tenant msg" placeholder="Thank you!" />
            </div>
          </div>
        )}
      </div>

      <ChatMessageXS property2="enable" />
    </div>
  );
}
