import { useState } from "react";
import {
  MdOutlineDashboard,
  MdOutlineConfirmationNumber,
  MdOutlineChat,
  MdOutlineViewKanban,
} from "react-icons/md";

const menuItems = [
  { id: "chat", icon: MdOutlineChat, label: "Chat" },
  { id: "tickets", icon: MdOutlineConfirmationNumber, label: "Tickets" },
  { id: "dashboard", icon: MdOutlineDashboard, label: "Dashboard" },
  { id: "kanban", icon: MdOutlineViewKanban, label: "Kanban" },
];

const Sider = ({ onSelect }) => {
  const [active, setActive] = useState("chat");

  const handleClick = (id) => {
    setActive(id);
    onSelect && onSelect(id); // optional hook for future screens
  };

  return (
    <div className="ml-4 mt-4 flex flex-col gap-2">
      {menuItems.map(({ id, icon: Icon, label }) => (
        <div
          key={id}
          onClick={() => handleClick(id)}
          title={label}
          className={`cursor-pointer flex items-center justify-center w-12 h-12 rounded transition
            ${
              active === id
                ? "border-l-4 border-l-yellow-400"
                : " "
            }
          `}
        >
          <Icon className="text-[#037dfe] text-3xl" />
        </div>
      ))}
    </div>
  );
};

export default Sider;
