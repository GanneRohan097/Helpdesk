import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#241e66] border-b border-gray-800">
      
      <div className="flex items-center gap-3">
        <button className="bg-blue-600 w-10 h-10 rounded-md flex items-center justify-center">
          <span className="font-bold text-white text-2xl">C</span>
        </button>
        <h1 className="text-white font-semibold text-xl">Helpdesk</h1>
      </div>

      <div className="hidden md:flex items-center bg-[#141414] px-3 py-2 rounded-md w-[320px]">
        <CiSearch className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search capacity..."
          className="ml-3 w-full bg-transparent text-white text-sm outline-none placeholder-gray-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-500 transition">
          Create
        </button>
        <FaRegQuestionCircle className="text-blue-500 text-lg cursor-pointer" />
        <FaGift className="text-blue-500 text-lg cursor-pointer" />
        <CgProfile className="text-white text-3xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
