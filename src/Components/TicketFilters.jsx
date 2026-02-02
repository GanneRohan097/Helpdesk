import { RotateCcw } from "lucide-react";

export default function TicketFilters({ onClose }) {
  return (
    <div className="absolute top-14 left-2  w-80 bg-white border rounded-lg shadow-lg z-50">

      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <p className="font-semibold text-sm">Ticket Filters</p>
        <button className="text-blue-600 text-sm flex items-center gap-1">
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      {/* Filters */}
      <div className="p-4 space-y-3 text-sm">
        <select className="w-full border rounded px-3 py-2">
          <option>Project: All</option>
        </select>

        <select className="w-full border rounded px-3 py-2">
          <option>Type: All</option>
        </select>

        <select className="w-full border rounded px-3 py-2">
          <option>Status: All</option>
        </select>

        <select className="w-full border rounded px-3 py-2">
          <option>Assignee: All</option>
        </select>

        <button className="text-blue-600 text-sm flex items-center gap-1">
          + More
        </button>
      </div>

      {/* Footer */}
      <div className="border-t p-3 flex gap-2">
        <input
          className="flex-1 border rounded px-2 py-1 text-sm"
          placeholder="Name this view..."
        />
        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
          Save new view
        </button>
      </div>
    </div>
  );
}
