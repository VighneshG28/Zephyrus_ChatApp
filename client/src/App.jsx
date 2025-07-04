import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import ProfilePage from './Pages/ProfilePage';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[url('/src/assets/chatIconbg2.jpeg')] bg-cover bg-center">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
