import {
  Mail,
  Eye,
  MoreHorizontal,
  Send,
  Paperclip,
} from "lucide-react";

export default function TicketDetails() {
  return (
    <div className="h-full bg-gray-50 overflow-y-auto">

    
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

    
      <div className="bg-white px-4 border-b flex gap-6 text-sm">
        <button className="border-b-2 border-blue-600 py-3 text-blue-600 font-medium">
          Public Reply
        </button>
        <button className="py-3 text-gray-500">
          Private Comment
        </button>
      </div>

      
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
          placeholder="Add a reply..."
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
            <button className="bg-blue-600 text-white p-2 rounded">
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>


      <div className="space-y-4 px-4 pb-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <img
                src="https://i.pravatar.cc/40"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">
                  Allie Harmon
                </p>
                <p className="text-xs text-gray-500">
                  To Danny Amacher &lt;danny@capacity.com&gt;
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Feb 9, 2022 10:31 AM
            </p>
          </div>

          <p className="text-sm text-gray-700 mt-3">
            Ex beatae aliquid mollitia. Enim doloremque molestiae voluptatem
            recusandae. Maxime beatae nostrum ut.
          </p>
          <div className="flex gap-2 mt-3">
            <div className="border px-2 py-1 rounded text-xs">
              Screen_shot.png<br />16 Jun 2022, 1:30 PM
            </div>
            <div className="border px-2 py-1 rounded text-xs">
              Screen_shot.png<br />16 Jun 2022, 1:30 PM
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <img
                src="https://i.pravatar.cc/41"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium text-sm">
                  Allie Harmon
                </p>
                <p className="text-xs text-gray-500">
                  To Danny Amacher &lt;danny@capacity.com&gt;
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400">
              Feb 9, 2022 10:31 AM
            </p>
          </div>

          <p className="text-sm text-gray-700 mt-3">
            Dolorem similique et aliquid illum dolor. Vel quo magnam.
          </p>
        </div>
      </div>
    </div>
  );
}
