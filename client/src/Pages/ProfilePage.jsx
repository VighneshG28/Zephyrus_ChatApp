import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiFinnTheHumanDuotone } from 'react-icons/pi';

const ProfilePage = () => {
  const [selectImg, setSelectImg] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-6 rounded-xl text-white shadow-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold text-center">Profile Details</h1>

          <label
            htmlFor="avatar"
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <input
              onChange={(e) => setSelectImg(e.target.files[0])}
              type="file"
              id="avatar"
              accept="image/*"
              hidden
            />
            {selectImg ? (
              <img
                src={URL.createObjectURL(selectImg)}
                alt="Selected"
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#141F39] flex items-center justify-center text-white text-4xl">
                <PiFinnTheHumanDuotone />
              </div>
            )}
            <span className="text-sm text-blue-300 hover:underline">
              Upload Profile Picture
            </span>
          </label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Username"
            className="px-4 py-2 rounded-lg bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            placeholder="Tell us about yourself..."
            className="px-4 py-2 rounded-lg bg-white/10 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition-colors py-2 rounded-lg font-semibold"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
