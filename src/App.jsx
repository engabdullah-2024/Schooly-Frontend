import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterStudent from './pages/RegisterStudent ';
import Students from './pages/Students ';
import Header from './components/Header'; // ⬅️ Import Header
import About from './pages/About';

function App() {
  return (
    <Router>
      <Header /> {/* ⬅️ Add the Header here */}
      <Routes>
        <Route path="/" element={<RegisterStudent />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
