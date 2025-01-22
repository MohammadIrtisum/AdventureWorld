import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destinations from './components/Destinations/Destinations';
import Mountains from './components/Destinations/destinations/Mountains';
import Beaches from './components/Destinations/destinations/Beaches';
import Cities from './components/Destinations/destinations/Cities';
import Places from './components/Places/Places';
import Tours from './components/Tours/Tours';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/places" element={<Places />} />
            <Route path="/destinations/mountains" element={<Mountains />} />
            <Route path="/destinations/beaches" element={<Beaches />} />
            <Route path="/destinations/cities" element={<Cities />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
