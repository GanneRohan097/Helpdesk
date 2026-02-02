import { useState } from "react";
import { X } from "lucide-react";

export default function TicketMeta() {
  const [visible, setVisible] = useState(true);
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("Medium");
  const [assignee, setAssignee] = useState("Allie Harmon");
  const [dueDate, setDueDate] = useState("");
  const [tags, setTags] = useState([]);
  const [showTasks, setShowTasks] = useState(false);
  const [showFields, setShowFields] = useState(false);
  const [showLinked, setShowLinked] = useState(false);

  if (!visible) {
    return (
      <div className="h-full border-l bg-gray-50 flex items-center justify-center text-gray-400">
        Ticket details closed
      </div>
    );
  }

  const addTag = () => {
    const tag = prompt("Enter tag");
    if (tag) setTags([...tags, tag]);
  };

  return (
    <div className="h-full bg-white border-l text-sm overflow-y-auto">

      {/* ===== Header ===== */}
      <div className="flex items-center justify-between p-4 border-b">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-1 border rounded bg-blue-500 text-white font-medium"
        >
          <option>To Do</option>
          <option>Work in progress</option>
          <option>Needs review</option>
          <option>Completed</option>
        </select>

        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={18} />
        </button>
      </div>

      {/* ===== Body ===== */}
      <div className="p-4 space-y-4">

        {/* Priority */}
        <div>
          <p className="text-gray-500 mb-1">Priority</p>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={`w-full border rounded px-3 py-2 font-medium ${
              priority === "High"
                ? "text-red-600"
                : priority === "Low"
                ? "text-gray-500"
                : "text-green-600"
            }`}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        {/* Assigned To */}
        <div>
          <div className="flex justify-between mb-1">
            <p className="text-gray-500">Assigned To</p>
            <button
              onClick={() => setAssignee("You")}
              className="text-blue-600 text-xs"
            >
              Assign to me
            </button>
          </div>

          <div className="flex items-center gap-2 border rounded px-3 py-2">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-6 h-6 rounded-full"
            />
            <span>{assignee}</span>
          </div>
        </div>

        {/* Project */}
        <div>
          <p className="text-gray-500 mb-1">Project</p>
          <select className="w-full border rounded px-3 py-2">
            <option>Administrative</option>
            <option>Support</option>
            <option>Internal</option>
          </select>
        </div>

        {/* Ticket Type */}
        <div>
          <p className="text-gray-500 mb-1">Ticket Type</p>
          <select className="w-full border rounded px-3 py-2">
            <option>📋 Task</option>
            <option>🐞 Bug</option>
            <option>💡 Feature</option>
          </select>
        </div>

        {/* Due Date */}
        <div>
          <p className="text-gray-500 mb-1">Due Date</p>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Reporter */}
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

        {/* Tags */}
        <div>
          <p className="text-gray-500 mb-1">Tags</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-200 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={addTag}
            className="text-blue-600 text-sm"
          >
            + Add Tag
          </button>
        </div>
      </div>

      {/* ===== Side Sections ===== */}
      <div className="border-t divide-y text-xs font-medium">
        <div
          onClick={() => setShowTasks(!showTasks)}
          className="p-3 flex justify-between cursor-pointer"
        >
          <span>TASKS</span>
          <span>{showTasks ? "⌄" : "›"}</span>
        </div>
        {showTasks && (
          <div className="p-3 text-gray-500">
            No tasks added
          </div>
        )}

        <div
          onClick={() => setShowFields(!showFields)}
          className="p-3 flex justify-between cursor-pointer"
        >
          <span>COLLECTED FIELDS</span>
          <span>{showFields ? "⌄" : "›"}</span>
        </div>
        {showFields && (
          <div className="p-3 text-gray-500">
            No fields collected
          </div>
        )}

        <div
          onClick={() => setShowLinked(!showLinked)}
          className="p-3 flex justify-between cursor-pointer"
        >
          <span>LINKED TICKETS</span>
          <span className="bg-gray-200 px-2 rounded">
            2
          </span>
        </div>
        {showLinked && (
          <div className="p-3 text-gray-500">
            No linked tickets
          </div>
        )}
      </div>
    </div>
  );
}
