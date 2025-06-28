import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CallForPapers from './pages/CallForPapers';
import Publication from './pages/Publication';
import Dates from './pages/Dates';
import Committees from './pages/Committees';
import Speakers from './pages/Speakers';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import Venue from './pages/Venue';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App font-sans min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/call-for-papers" element={<CallForPapers />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/venue" element={<Venue />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;