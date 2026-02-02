import { useState, useRef, useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import TicketFilters from "./TicketFilters";

export default function TicketList({
  tickets,
  selectedTicket,
  onSelectTicket,
  toggleViews,
}) {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState("");
  const filterRef = useRef(null);

  // 🔹 Close filters on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilters(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔹 Search filtering
  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative bg-gray-100 border-r overflow-y-auto h-full">

      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleViews}
            className="text-lg font-semibold"
          >
            ☰
          </button>
          <p className="font-semibold">My Tickets</p>
        </div>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="p-2 rounded hover:bg-gray-100"
        >
          <SlidersHorizontal size={16} />
        </button>
      </div>

      {/* Search */}
      <div className="p-3 bg-gray-100">
        <input
          className="w-full p-2 rounded border"
          placeholder="Search tickets"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters Popover */}
      {showFilters && (
        <div ref={filterRef}>
          <TicketFilters onClose={() => setShowFilters(false)} />
        </div>
      )}

      {/* Ticket List */}
      <div className="p-3 space-y-2">
        {filteredTickets.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">
            No tickets found for this view
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              active={selectedTicket?.id === ticket.id}
              onClick={() => onSelectTicket(ticket)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/* ================= Ticket Card ================= */

function Ticket({ ticket, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-3 rounded cursor-pointer border-l-4 transition ${
        active ? "border-blue-600 bg-blue-50" : "border-transparent"
      }`}
    >
      <h4 className="text-sm font-medium">
        {ticket.title}
      </h4>

      <span
        className={`text-xs px-2 py-1 rounded inline-block mt-1 ${
          ticket.status === "Done"
            ? "bg-green-100 text-green-600"
            : ticket.status === "In Progress"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        {ticket.status}
      </span>
    </div>
  );
}
