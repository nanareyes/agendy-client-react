import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
// import './App.css';
import {User} from './User/User';
import{Home} from './Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<User />} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
