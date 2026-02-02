import { useState } from "react";
import Header from "./Components/Header";
import Sider from "./Components/Sider";
import TicketViews from "./Components/TicketViews";
import TicketList from "./Components/TicketList";
import TicketDetails from "./Components/TicketDetails";
import TicketMeta from "./Components/TicketMeta";

const ticketsData = [
  {
    id: 1,
    title: "Laudantium neque veritatis",
    status: "To Do",
    priority: "Medium",
    due: false,
    description: "Ex beatae aliquid mollitia.",
  },
  {
    id: 2,
    title: "Molestiae saepe illum",
    status: "Done",
    priority: "High",
    due: true,
    description: "Dolorem similique et aliquid illum.",
  },
  {
    id: 3,
    title: "Autem quia omnis",
    status: "In Progress",
    priority: "High",
    due: false,
    description: "Voluptatem recusandae est.",
  },
];

export default function App() {
  const [showViews, setShowViews] = useState(true);
  const [tickets] = useState(ticketsData);
  const [activeView, setActiveView] = useState("my");
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);

  const filteredTickets = tickets.filter((t) => {
    if (activeView === "pastDue") return t.due;
    if (activeView === "highPriority") return t.priority === "High";
    return true;
  });

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <div
        className={`flex-1 grid ${
          showViews
            ? "grid-cols-[72px_260px_320px_1fr_340px]"
            : "grid-cols-[72px_320px_1fr_340px]"
        }`}
      >
        <Sider />

        {showViews && (
          <TicketViews
            tickets={tickets}
            activeView={activeView}
            setActiveView={setActiveView}
          />
        )}

        <TicketList
          tickets={filteredTickets}
          selectedTicket={selectedTicket}
          onSelectTicket={setSelectedTicket}
          toggleViews={() => setShowViews(!showViews)}
        />

        <TicketDetails ticket={selectedTicket} />
        <TicketMeta ticket={selectedTicket} />
      </div>
    </div>
  );
}
