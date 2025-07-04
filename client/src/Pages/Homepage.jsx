import React from 'react'
import Sidebar from '../Components/Sidebar'
import ChatContainer from '../Components/ChatContainer'
import RightSidebar from '../Components/RightSidebar'

const Homepage = () => {



  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] bg-contain'>
      <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2x1 overflow-hidden h-[100%] grid grid-cols-1 relative'>
        <Sidebar/>
        <ChatContainer/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Homepage
