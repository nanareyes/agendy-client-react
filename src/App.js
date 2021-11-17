import React from 'react';
import { Routes, Route } from "react-router-dom";
import{ Home } from './Home/Home';
import { Landing } from './Landing/Landing';
import { Register } from './Register/Register';
import { Profile } from './Profile/Profile';
import {ResetPassword} from './Password/ResetPassword.jsx'
import {ForgotPassword} from './Password/ForgotPassword.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forgotpassword" element={<ForgotPassword/>} />
        <Route path="resetpassword" element={<ResetPassword/>} />
      </Routes>
    </div>
  )
}

export {App};
