import React from 'react'
import profile_maki from '../assets/profile_maki.jpg'
import { TbInfoHexagon } from "react-icons/tb";
import { MdArrowBackIosNew } from "react-icons/md";
import { PiFinnTheHumanFill } from "react-icons/pi";

const ChatContainer = ({selectedUsers, setSelectedUsers}) => {
  return selectedUsers ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={profile_maki} alt="profile-picture" className='w-8 rounded-full'/>
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Maki Tomoda
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <MdArrowBackIosNew onClick={()=>setSelectedUsers(null)} className='md:hidden max-w-7 text-white cursor-pointer'/>
        <TbInfoHexagon className='max-md:hidden size-6 text-white cursor-pointer' />
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <PiFinnTheHumanFill className='text-white size-55'/>
      <p className='text-lg font-medium text-white'>Connect with anyone, anytime, anywhere...</p>
    </div>
  )
}

export default ChatContainer
