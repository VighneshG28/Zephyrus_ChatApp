import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Login from './Pages/Login'
import ProfilePage from './Pages/ProfilePage'

const App = () => {
  return (
  <div class="bg-gradient-to-bl from-[#232526] to-[#414345]">
        <Routes>
          <Route path='/' element={<Homepage/>}/>;
          <Route path='/login' element={<Login/>}/>;
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
  </div>
  )
}

export default App
