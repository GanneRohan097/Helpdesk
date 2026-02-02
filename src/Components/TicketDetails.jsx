import { useState } from "react";
import {
  Mail,
  Eye,
  MoreHorizontal,
  Send,
  Paperclip,
} from "lucide-react";

export default function TicketDetails() {
  const [activeTab, setActiveTab] = useState("public");
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "public",
      author: "Allie Harmon",
      email: "danny@capacity.com",
      time: "Feb 9, 2022 10:31 AM",
      text:
        "Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem recusandae. Maxime beatae nostrum ut.",
    },
    {
      id: 2,
      type: "public",
      author: "Allie Harmon",
      email: "danny@capacity.com",
      time: "Feb 9, 2022 10:31 AM",
      text:
        "Dolorem similique et aliquid illum dolor. Vel quo magnam.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        type: activeTab,
        author: "You",
        email: "you@email.com",
        time: new Date().toLocaleString(),
        text: message,
      },
    ]);

    setMessage("");
  };

  const filteredMessages = messages.filter(
    (m) => m.type === activeTab
  );

  return (
    <div className="h-full bg-gray-50 overflow-y-auto">

      {/* ===== Header ===== */}
      <div className="bg-white border-b p-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold">
              Laudantium neque veritatis
            </h2>
            <p className="text-xs text-gray-500">
              OPS-102 (100669518) · Created 11/14/22 12:32 PST
            </p>
          </div>

          <div className="flex items-center gap-3 text-gray-500">
            <Mail size={18} />
            <Eye size={18} />
            <MoreHorizontal size={18} />
            <div className="flex -space-x-2">
              <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/32?1" />
              <img className="w-6 h-6 rounded-full border" src="https://i.pravatar.cc/32?2" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Tabs ===== */}
      <div className="bg-white px-4 border-b flex gap-6 text-sm">
        <button
          onClick={() => setActiveTab("public")}
          className={`py-3 font-medium ${
            activeTab === "public"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
        >
          Public Reply
        </button>

        <button
          onClick={() => setActiveTab("private")}
          className={`py-3 font-medium ${
            activeTab === "private"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-500"
          }`}
        >
          Private Comment
        </button>
      </div>

      {/* ===== Reply Box ===== */}
      <div className="bg-white m-4 rounded-lg border">
        <div className="px-4 py-2 border-b text-sm flex items-center gap-2">
          <span className="text-gray-500">To:</span>
          <span className="bg-gray-100 px-2 py-1 rounded flex items-center gap-1">
            Allison Westervelt &lt;awestervelt@email.com&gt;
            <span className="text-gray-400 cursor-pointer">×</span>
          </span>
        </div>

        <textarea
          className="w-full p-4 text-sm outline-none resize-none"
          rows="5"
          placeholder={
            activeTab === "public"
              ? "Add a public reply..."
              : "Add a private note..."
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex items-center justify-between px-4 py-2 border-t text-gray-500">
          <div className="flex gap-4 text-sm">
            <button className="font-bold">B</button>
            <button className="italic">i</button>
            <button className="underline">U</button>
            <Paperclip size={16} />
          </div>

          <div className="flex items-center gap-3 text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              Add to KB
            </label>
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded"
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Messages (Side Page Content) ===== */}
      <div className="space-y-4 px-4 pb-6">
        {filteredMessages.length === 0 ? (
          <div className="text-center text-gray-400">
            No {activeTab} messages yet
          </div>
        ) : (
          filteredMessages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white p-4 rounded-lg border"
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-medium text-sm">
                    {msg.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {msg.email}
                  </p>
                </div>
                <p className="text-xs text-gray-400">
                  {msg.time}
                </p>
              </div>

              <p className="text-sm text-gray-700 mt-3">
                {msg.text}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
