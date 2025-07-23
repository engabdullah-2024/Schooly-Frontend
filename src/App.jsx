import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterStudent from './pages/RegisterStudent ';
import Students from './pages/Students ';
import Header from './components/Header'; // ⬅️ Import Header
import About from './pages/About';
import RegisterTeacher from './pages/RegisterTeacher';
import Teachers from './pages/Teachers';

function App() {
  return (
    <Router>
      <Header /> {/* ⬅️ Add the Header here */}
      <Routes>
        <Route path="/" element={<RegisterStudent />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
        <Route path="/register-teacher" element={<RegisterTeacher />} />
        <Route path="/teachers" element={<Teachers />} />

      </Routes>
    </Router>
  );
}

export default App;
