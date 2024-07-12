import Navbar from './components/Navbar';
import {  BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
function App() {
  return (
    <div className="bg-gray-800 min-h-screen min-w-screen text-white flex flex-col">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
