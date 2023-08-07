import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Memories from './pages/Memories';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';
import MeetTheTeam from './pages/MeetTheTeam';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meettheteam" element={<MeetTheTeam />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
