import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import { Landing } from './Landing/Landing'
import { Register } from './Register/Register'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
