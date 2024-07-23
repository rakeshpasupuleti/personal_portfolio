import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/about';

import Contact from './pages/contact';
import Education from './pages/education';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Projects from './pages/projects';
function App() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-screen text-white flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect undefined routes to home */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
