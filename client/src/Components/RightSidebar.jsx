import React from 'react'
import { PiFinnTheHumanFill } from "react-icons/pi";

const RightSidebar = ({ selectedUsers }) => {
  return selectedUsers && (
    <div className="text-white px-6 py-4">
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center gap-2">
        {selectedUsers?.profilePic ? (
          <img
            src={selectedUsers.profilePic}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-violet-600 shadow-md"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-[#141F39] flex items-center justify-center text-white text-4xl border-2 border-violet-600 shadow-md">
            <PiFinnTheHumanFill />
          </div>
        )}

        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <h1 className="text-lg font-semibold">{selectedUsers.fullName}</h1>
        </div>

        <p className="text-sm text-gray-300 px-4">{selectedUsers.bio}</p>
      </div>

      <hr className="border-[#ffffff30] my-6" />

      {/* Media Section */}
      <div className="text-xs px-1">
        <p className="text-gray-400 uppercase tracking-wide font-medium">Media</p>
        <div className="mt-3 max-h-[200px] overflow-y-auto grid grid-cols-2 gap-3 opacity-80">
          {/* {imagesDummyData.map((url, index)=>(
            <div key={index} onClick={()=> window.open(url)} className='cursor-pointer rounded'>
              <img src={url} alt="" className='h-full rounded-md'/>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
