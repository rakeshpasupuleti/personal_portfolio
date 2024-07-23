import Navbar from './components/Navbar';
import {  BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/about';
import Portfolio from './pages/projects';
import Contact from './pages/contact';
import Education from './pages/education';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Projects from './pages/projects';
function App() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-screen text-white flex flex-col">
      <BrowserRouter>
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
