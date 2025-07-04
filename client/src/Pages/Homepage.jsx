import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import ChatContainer from '../Components/ChatContainer'
import RightSidebar from '../Components/RightSidebar'

const Homepage = () => {

  const [selectedUsers, setSelectedUsers] = useState(false);

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] bg-contain'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUsers? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
        <Sidebar selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
        <ChatContainer selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
        <RightSidebar selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
      </div>
    </div>
  )
}

export default Homepage
