import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CallForPapers from './pages/CallForPapers';
import Speakers from './pages/Speakers';
import Committees from './pages/Committees';
import Dates from './pages/Dates';
import Publication from './pages/Publication';
import Venue from './pages/Venue';
import Registration from './pages/Registration';
import RegistrationForm from './pages/RegistrationForm';
import Contact from './pages/Contact';
import AdminPanel from './pages/AdminPanel';
import PaperSubmission from './pages/PaperSubmission';

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
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registration-form" element={<RegistrationForm />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/paper-submission" element={<PaperSubmission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;