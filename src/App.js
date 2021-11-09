import React from 'react';
import { Routes, Route } from "react-router-dom";
import{Home} from './Home/Home';
import { Landing } from './Landing/Landing';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
