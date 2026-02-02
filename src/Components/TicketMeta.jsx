import { X } from "lucide-react";

export default function TicketMeta() {
  return (
    <div className="h-full bg-white border-l text-sm overflow-y-auto">

    
      <div className="flex items-center justify-between p-4 border-b">
        <select className="px-3 py-1 border rounded bg-blue-500 text-white font-medium">
          <option>To Do</option>
          <option>Work in progress</option>
          <option>Needs review</option>
          <option>Completed</option>
        </select>

        <button className="text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
      </div>

     
      <div className="p-4 space-y-4">

       
        <div>
          <p className="text-gray-500 mb-1">Priority</p>
          <select className="w-full border rounded px-3 py-2 text-green-600 font-medium">
            <option>🟢 Medium</option>
          </select>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <p className="text-gray-500">Assigned To</p>
            <button className="text-blue-600 text-xs">Assign to me</button>
          </div>

          <div className="flex items-center gap-2 border rounded px-3 py-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-6 h-6 rounded-full"
            />
            <span>Allie Harmon</span>
          </div>
        </div>

      
        <div>
          <p className="text-gray-500 mb-1">Project</p>
          <select className="w-full border rounded px-3 py-2">
            <option>Administrative</option>
          </select>
        </div>

    
        <div>
          <p className="text-gray-500 mb-1">Ticket Type</p>
          <select className="w-full border rounded px-3 py-2">
            <option>📋 Task</option>
          </select>
        </div>

   
        <div>
          <p className="text-gray-500 mb-1">Due Date</p>
          <input
            type="date"
            className="w-full border rounded px-3 py-2"
          />
        </div>

   
        <div>
          <p className="text-gray-500 mb-1">Reporter</p>
          <div className="flex items-center gap-2 border rounded px-3 py-2">
            <img
              src="https://i.pravatar.cc/41"
              alt="reporter"
              className="w-6 h-6 rounded-full"
            />
            <span>Allie Harmon</span>
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-1">Tags</p>
          <button className="text-blue-600 text-sm">+ Add Tag</button>
        </div>
      </div>

    
      <div className="border-t divide-y text-xs font-medium">
        <div className="p-3 flex justify-between cursor-pointer">
          <span>TASKS</span>
          <span>›</span>
        </div>

        <div className="p-3 flex justify-between cursor-pointer">
          <span>COLLECTED FIELDS</span>
          <span>›</span>
        </div>

        <div className="p-3 flex justify-between cursor-pointer">
          <span>LINKED TICKETS</span>
          <span className="bg-gray-200 px-2 rounded">2</span>
        </div>
      </div>
    </div>
  );
}
