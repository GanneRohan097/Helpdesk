import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import TicketFilters from "./TicketFilters";

export default function TicketList({ toggleViews }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="relative bg-gray-100 border-r overflow-y-auto">

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

        {/* Filter Button */}
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
        />
      </div>

      {/* Ticket Filters Popover */}
      {showFilters && <TicketFilters onClose={() => setShowFilters(false)} />}

      {/* Tickets */}
      <div className="p-3 space-y-2">
        <Ticket active />
        <Ticket />
        <Ticket />
        <Ticket />
      </div>
    </div>
  );
}
function Ticket({ active }) {
  return (
    <div
      className={`bg-white p-3 rounded border-l-4 ${
        active ? "border-blue-600" : "border-transparent"
      }`}
    >
      <h4 className="text-sm font-medium">
        Laudantium neque veritatis
      </h4>
      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
        To Do
      </span>
    </div>
  );
}

