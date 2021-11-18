import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { Landing } from './Landing/Landing'
// import { Register } from './Register/Register'
import { Profile } from './Profile/Profile'
import { Appointment } from './Appointment/Appointment'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Landing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  )
}

export default App
