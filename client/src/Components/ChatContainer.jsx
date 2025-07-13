import React, { useEffect, useRef } from 'react'
import profile_maki from '../assets/profile_maki.jpg'
import { TbInfoHexagon } from "react-icons/tb";
import { MdArrowBackIosNew } from "react-icons/md";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { messagesDummyData } from '../assets/assets';
import { formatMessageTime } from '../lib/utils';
import { IoIosSend } from "react-icons/io";

const ChatContainer = ({ selectedUsers, setSelectedUsers }) => {
  const scrollEnd = useRef();

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return selectedUsers ? (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={profile_maki} alt="profile-picture" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Maki Tomoda
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <MdArrowBackIosNew onClick={() => setSelectedUsers(null)} className='md:hidden max-w-7 text-white cursor-pointer' />
        <TbInfoHexagon className='max-md:hidden size-6 text-white cursor-pointer' />
      </div>

      <div className='flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6'>
        {messagesDummyData.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f5116f10f3cd28382ed02' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt="" className='max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8' />
            ) : (
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${msg.senderId === '680f5116f10f3cd28382ed02' ? 'rounded-br-none' : 'rounded-bl-none'}`}>{msg.text}</p>
            )}
            <div className="text-center text-xs flex flex-col items-center">
              {msg.senderId === '680f5116f10f3cd28382ed02' ? (
                <div className="w-7 h-7 rounded-full bg-[#141F39] flex items-center justify-center text-white">
                  <PiFinnTheHumanFill className="text-base" />
                </div>
              ) : (
                <img
                  src={profile_maki}
                  alt=""
                  className="w-7 h-7 rounded-full object-cover"
                />
              )}
              <p className="text-gray-500">{formatMessageTime(msg.createdAt)}</p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </div>
      {/* bottom area */}
       <div className="mx-4 py-2 border-t border-stone-500 flex items-center gap-2">
        <label htmlFor="imageUpload" className="cursor-pointer text-white bg-[#1f2937] hover:bg-[#2c384a] p-2 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25v11.25M3 16.5l5.25-5.25a1.5 1.5 0 012.25 0L15 16.5m-3-3l3 3m0 0l3-3m-3 3V21"
      />
    </svg>
  </label>
  <input
    type="file"
    id="imageUpload"
    accept="image/*"
    className="hidden"
  />
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 bg-[#141F39] text-white rounded-full px-4 py-2 outline-none placeholder-gray-400 text-sm"
        />
        <button className="bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-full cursor-default">
          <IoIosSend className="text-xl cursor-pointer" />
        </button>
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden'>
      <PiFinnTheHumanFill className='text-white size-55' />
      <p className='text-lg font-medium text-white'>Connect with anyone, anytime, anywhere...</p>
    </div>
  )
}

export default ChatContainer;
