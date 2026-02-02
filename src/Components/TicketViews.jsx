export default function TicketViews(props) {
  // 🔒 HARD SAFETY (this guarantees no crash)
  const tickets = Array.isArray(props.tickets) ? props.tickets : [];
  const activeView = props.activeView || "my";
  const setActiveView = props.setActiveView || (() => {});

  const countMy = tickets.length;
  const countPastDue = tickets.filter((t) => t?.due).length;
  const countHigh = tickets.filter((t) => t?.priority === "High").length;

  return (
    <div className="h-full bg-gray-100 border-r p-3">
      <p className="text-xs font-semibold text-gray-500 mb-2">
        TICKET VIEWS
      </p>

      <ViewItem
        label="My Tickets"
        count={countMy}
        active={activeView === "my"}
        onClick={() => setActiveView("my")}
      />

      <ViewItem
        label="Past Due"
        count={countPastDue}
        active={activeView === "pastDue"}
        onClick={() => setActiveView("pastDue")}
      />

      <ViewItem
        label="High Priority"
        count={countHigh}
        active={activeView === "highPriority"}
        onClick={() => setActiveView("highPriority")}
      />
    </div>
  );
}

function ViewItem({ label, count, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center p-2 rounded cursor-pointer mb-2 ${
        active
          ? "bg-blue-600 text-white"
          : "hover:bg-gray-200"
      }`}
    >
      <span>{label}</span>
      <span className="text-sm">{count}</span>
    </div>
  );
}
