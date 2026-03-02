import React from "react";

type ChatProfileProps = {
  chatProfile?: "FM" | "TE" | "Image";
  imageSrc?: string;
  className?: string;
};

export function ChatProfile({
  chatProfile = "FM",
  imageSrc,
  className,
}: ChatProfileProps) {
  const base = "relative flex items-center justify-center size-8 rounded-full overflow-hidden shrink-0";

  if (chatProfile === "Image") {
    return (
      <div className={[base, className].filter(Boolean).join(" ")}>
        {imageSrc ? (
          <img src={imageSrc} alt="Profile" className="size-full object-cover" />
        ) : (
          <div className="size-full bg-neutral-gray-3" />
        )}
      </div>
    );
  }

  const isFM = chatProfile === "FM";
  const bgColor = isFM ? "bg-[#dedede]" : "bg-[#dedede]";
  const textColor = isFM ? "text-[#f09273]" : "text-black";

  return (
    <div className={[base, bgColor, className].filter(Boolean).join(" ")}>
      <span className={["text-[12px] tracking-[0.5px] font-normal", textColor].join(" ")}>
        {chatProfile}
      </span>
    </div>
  );
}
