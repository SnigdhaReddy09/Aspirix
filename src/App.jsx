import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './LandingPage/page'
import Signup from './Signup/Signup'
import Login from './Login/Login';
import UI from './UI/UI';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path='/UI' element={<UI/>}/>
      </Routes>
    </Router>
  );
};

export default App
