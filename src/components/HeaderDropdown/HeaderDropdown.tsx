import React from "react";

type HeaderDropdownItem = {
  label: string;
  onClick?: () => void;
};

type HeaderDropdownProps = {
  items?: HeaderDropdownItem[];
  className?: string;
};

const DEFAULT_ITEMS: HeaderDropdownItem[] = [
  { label: "Profile" },
  { label: "Logout" },
];

export function HeaderDropdown({
  items = DEFAULT_ITEMS,
  className,
}: HeaderDropdownProps) {
  return (
    <div
      className={[
        "relative bg-white w-64 rounded-sm shadow-[0px_2px_6px_6px_rgba(0,0,0,0.02)]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item, i) => (
        <button
          key={i}
          onClick={item.onClick}
          className="block w-full text-left px-4 py-3 text-[16px] leading-6 tracking-[0.2px] text-black hover:bg-neutral-gray-4 transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
