export type TabBarTab = {
  label: string;
  value: string;
};

export interface TabBarProps {
  property1?: "XS";
  property2?: "t&b";
  /** Currently active tab value */
  activeTab?: string;
  tabs?: TabBarTab[];
  onTabChange?: (value: string) => void;
  className?: string;
}

const DEFAULT_TABS: TabBarTab[] = [
  { label: "Tenants", value: "tenants" },
  { label: "Buildings", value: "buildings" },
];

export function TabBar({
  activeTab,
  tabs = DEFAULT_TABS,
  onTabChange,
  className = "",
}: TabBarProps) {
  const active = activeTab ?? tabs[0]?.value;

  return (
    <div
      className={[
        "inline-flex items-end gap-4",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onTabChange?.(tab.value)}
            className={[
              "relative pb-1 text-body-xs font-sans font-regular leading-[1.3] whitespace-nowrap",
              "transition-colors",
              isActive ? "text-neutral-black" : "text-primary-gray",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-red-1" />
            )}
          </button>
        );
      })}
    </div>
  );
}
