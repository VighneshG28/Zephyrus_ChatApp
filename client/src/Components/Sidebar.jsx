import React from 'react'
import { RiWechatFill } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { PiFinnTheHumanDuotone } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { userDummyData } from '../assets/assets';

const Sidebar = ({selectedUsers, setSelectedUsers}) => {
  const navigate = useNavigate();
  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 overflow-y-scroll text-white ${selectedUsers ? 'max-md:hidden' : ''}`}>
      <div className='pb-5'>
        <div className='flex justify-between items-center'>
          <RiWechatFill className='text-white size-10.5' />
          <div className='relative py-2 group'>
            <CgMenuLeft className='cursor-pointer text-white size-8.5'/>
            <div className='absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#1f254f] border border-gray-600 text-blue-100 hidden group-hover:block'>
              <p onClick= {() => navigate('/profile')}className='cursor-pointer text-sm'>Edit Profile</p>
              <hr className='my-2 border-t border-gray-500'/>
              <p className='cursor-pointer text-sm'>Logout</p>
            </div>
          </div>
        </div>
        <div className="bg-[#182645] rounded-full flex items-center gap-3 py-3 px-5 mt-5 shadow-md focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
          <IoSearchSharp className='text-white size-4.5'/>
          <input type="Search" className='bg-transparent border-none outline-none text-white text-sm placeholder-[#c8c8c8] flex-1' placeholder='Search User...' />
        </div>
      </div>
    <div className='flex flex-col'>
      {userDummyData.map((user, index)=>(
        <div onClick={()=>{setSelectedUsers(user)}} key={index} className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm transition-all duration-150 transform active:scale-95 ${selectedUsers?._id === user._id ? 'bg-[#141F39]/50' : ''}`}>
          <div className="w-[35px] aspect-square rounded-full overflow-hidden bg-gray-800 text-white flex items-center justify-center">
            {user?.profilePic ? (
              <img 
                src={user.profilePic} 
                alt="avatar" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <PiFinnTheHumanDuotone className="text-xl" />
            )}
          </div>

          <div className='flex flex-col leading-5'>
            <p>{user.fullName}</p>
            {
              index<1
              ? <span className="text-green-400 text-xs">Online</span>
              : <span className='text-neutral-400 text-xs'>Offline</span>
            }
          </div>
          {index>1 && <p className='absolute toop-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-blue-500/50'>{index}</p>}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Sidebar
