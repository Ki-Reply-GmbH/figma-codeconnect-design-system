import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { HighlightCard } from "../components/HighlightCard/HighlightCard";
import { CircleButton } from "../components/CircleButton/CircleButton";
import { RequestWidget } from "../components/RequestWidget/RequestWidget";
import { Table } from "../components/Table/Table";
import { CalendarDay } from "../components/CalendarDay/CalendarDay";
import { Footer } from "../components/Footer/Footer";

const HIGHLIGHT_CARDS = [
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
  { category: "Category", title: "Ticket name two lines maximum", meta: "Opened by Name Surname\n16/Feb/2021", tagLabel: "CTA" },
];

const TABLE_ROWS = [
  {
    id: "ID: 567330",
    title: "Request title...",
    date: "DD/MM/YY",
    category: "Category",
    assignedTo: "Opened by Name Surname",
    status: "NEW" as const,
    ctaLabel: "CTA",
  },
  {
    id: "ID: 567331",
    title: "Feature enhancement",
    date: "15/10/23",
    category: "Development",
    assignedTo: "Alice Thompson",
    status: "IN PROGRESS" as const,
    ctaLabel: "IN PROGRESS",
  },
  {
    id: "ID: 567332",
    title: "Bug fix request",
    date: "18/10/23",
    category: "Quality Assurance",
    assignedTo: "John Doe",
    status: "IN PROGRESS" as const,
    ctaLabel: "IN PROGRESS",
  },
  {
    id: "ID: 567333",
    title: "Design feedback",
    date: "17/10/23",
    category: "UI/UX",
    assignedTo: "Emily Davis",
    status: "CLOSED" as const,
    ctaLabel: "CLOSED",
  },
  {
    id: "ID: 567334",
    title: "New feature proposal",
    date: "16/10/23",
    category: "Product Management",
    assignedTo: "Mark Wilson",
    status: "CLOSED" as const,
    ctaLabel: "CLOSED",
  },
];

const CALENDAR_REQUESTS = [
  {
    type: "REQUEST",
    date: "6 May 2021 | 9:00 to 10:00",
    title: "Request title request title request title request title request title request title",
  },
  {
    type: "REQUEST",
    date: "6 May 2021 | 9:00 to 10:00",
    title: "Request title request title request title request title request title request title",
  },
  {
    type: "REQUEST",
    date: "6 May 2021 | 9:00 to 10:00",
    title: "Request title request title request title request title request title request title",
  },
];

function CalendarRequestCard({
  type,
  date,
  title,
}: {
  type: string;
  date: string;
  title: string;
}) {
  return (
    <div className="relative h-[65px] w-full bg-white rounded-xs shadow-card overflow-hidden">
      {/* Left colored strip */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-red-4 rounded-tl-xs rounded-bl-xs" />

      {/* Top-left: type label */}
      <div className="absolute left-[12px] top-[8px]">
        <span className="text-[10px] font-medium tracking-[0.5px] uppercase text-primary-red-4">
          {type}
        </span>
      </div>

      {/* Top-right: date */}
      <div className="absolute right-[12px] top-[8px]">
        <span className="text-caption-xs tracking-tight text-neutral-gray-1">
          {date}
        </span>
      </div>

      {/* Bottom: title as link */}
      <div className="absolute left-[12px] right-[12px] bottom-[8px]">
        <a
          href="#"
          className="text-[10px] text-link-blue underline leading-tight line-clamp-1"
        >
          {title}
        </a>
      </div>
    </div>
  );
}

export function GeneraliDashboard() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] w-full max-w-[1024px] mx-auto flex flex-col">
      {/* Header */}
      <Header
        type="white"
        extra="OM"
        navItems={[
          { label: "Dashboard", active: true },
          { label: "Support and Request" },
        ]}
        onLogout={() => {}}
        logoutLabel="Log out"
      />

      {/* Hero */}
      <Hero
        type="first time access"
        title="Welcome"
        subtitle="to GREta"
        bgColor="#f09273"
        ctaLabel="Explore the app"
      />

      {/* Main content */}
      <div className="px-[47px] flex flex-col gap-9 pt-9 pb-[100px] flex-1">
        {/* Section: Highlights */}
        <section className="flex flex-col gap-4">
          <p className="text-subtitle font-medium tracking-subtitle uppercase text-neutral-black">
            Highlights
          </p>
          <div className="relative overflow-x-hidden">
            <div className="flex gap-[30px]">
              {HIGHLIGHT_CARDS.map((card, i) => (
                <HighlightCard
                  key={i}
                  size="M-S"
                  specific="request"
                  extra="tag"
                  category={card.category}
                  title={card.title}
                  meta={card.meta}
                  tagLabel={card.tagLabel}
                  className="w-[210px] flex-none h-[158px]"
                />
              ))}
            </div>
            {/* Right-arrow scroll indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <CircleButton family="black" direction="Right" status="enabled" />
            </div>
          </div>
        </section>

        {/* Section: Requests Overview */}
        <section className="flex flex-col gap-4">
          <p className="text-subtitle font-medium tracking-subtitle uppercase text-neutral-black">
            Requests overview
          </p>
          <div className="flex items-start gap-[30px]">
            <RequestWidget
              property3="enabled"
              totalRequests={15}
              newRequests={5}
              inProgressRequests={7}
              closedRequests={3}
              className="w-[290px] flex-none h-[352px]"
            />
            <Table
              property1="dashboard"
              property2="default"
              title="Your request"
              overviewLabel="Overview"
              rows={TABLE_ROWS}
              className="flex-1 min-h-[352px]"
            />
          </div>
        </section>

        {/* Section: Calendar */}
        <section className="flex flex-col gap-4">
          <p className="text-subtitle font-medium tracking-subtitle uppercase text-neutral-black">
            Calendar
          </p>
          <div className="bg-white rounded-xs px-3 py-2 shadow-card">
            <div className="flex gap-[38px] items-start py-2">
              {/* Calendar widget */}
              <CalendarDay
                month="May 2021"
                selectedDay={6}
                markedDays={[13, 15, 25, 30]}
                className="flex-none"
              />

              {/* Right panel: date heading + request cards */}
              <div className="flex flex-col gap-5 flex-1 pt-2">
                <p className="text-h4 tracking-tight text-[#c6261a] text-center">
                  Thursday, May 6th
                </p>
                <div className="flex flex-col gap-5">
                  {CALENDAR_REQUESTS.map((req, i) => (
                    <CalendarRequestCard
                      key={i}
                      type={req.type}
                      date={req.date}
                      title={req.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer
        size="M"
        links={[
          { label: "Legal notes", href: "#" },
          { label: "Privacy notes", href: "#" },
          { label: "Cookie notes", href: "#" },
        ]}
      />
    </div>
  );
}
