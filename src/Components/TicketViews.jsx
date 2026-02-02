export default function TicketViews() {
  return (
    <div className="h-full bg-gray-100 border-r p-3">
      <p className="text-xs font-semibold text-gray-500 mb-2">
        TICKET VIEWS
      </p>

      <div className="space-y-2">
        <div className="bg-blue-600 text-white p-2 rounded">
          My Tickets <span className="float-right">9</span>
        </div>
        <div className="p-2">Past Due <span className="float-right">4</span></div>
        <div className="p-2">High Priority <span className="float-right">11</span></div>
      </div>
    </div>
  );
}
