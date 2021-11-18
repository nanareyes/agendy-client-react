<<<<<<< HEAD
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Home/Home'
import { Landing } from './Landing/Landing'
// import { Register } from './Register/Register'
import { Profile } from './Profile/Profile'
import { Appointment } from './Appointment/Appointment'
=======
import React from 'react';
import { Routes, Route } from "react-router-dom";
import{ Home } from './Home/Home';
import { Landing } from './Landing/Landing';
import { Register } from './Register/Register';
import { Profile } from './Profile/Profile';
import {ResetPassword} from './Password/ResetPassword.jsx'
import {ForgotPassword} from './Password/ForgotPassword.jsx'
>>>>>>> 7c85a8a1b3b9a3be0d45af1b4920ac4c6414f84b

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Landing />} />
        <Route path="profile" element={<Profile />} />
<<<<<<< HEAD
        <Route path="appointment" element={<Appointment />} />
=======
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="resetpassword" element={<ResetPassword/>} />
>>>>>>> 7c85a8a1b3b9a3be0d45af1b4920ac4c6414f84b
      </Routes>
    </div>
  )
}

export {App};
