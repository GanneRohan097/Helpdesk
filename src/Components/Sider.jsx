import React from 'react'
import {
  MdOutlineDashboard,
  MdOutlineConfirmationNumber,
  MdOutlineChat,
  MdOutlineViewKanban,
} from "react-icons/md";
import { FiInbox } from "react-icons/fi";
const Sider = () => {
  return (
    <div className='ml-4 mt-4'>
        <MdOutlineChat className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineChat>
        <MdOutlineConfirmationNumber className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineConfirmationNumber>
        <MdOutlineDashboard className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineDashboard>
        <MdOutlineViewKanban className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineViewKanban>
        <MdOutlineChat className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineChat>
        <MdOutlineConfirmationNumber className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineConfirmationNumber>
        <MdOutlineDashboard className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineDashboard>
        <MdOutlineViewKanban className='text-[#037dfe] text-4xl mb-2 hover:border-l-4 hover:border-l-yellow-400'></MdOutlineViewKanban>
    </div>
  )
}

export default Sider