import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 text-white bg-gray-700">
      <div className="flex items-center w-full md:w-auto">
        <div className="title text-xl font-bold ml-4">
          <h1 className="cursor-default">Rakesh Pasupuleti</h1>
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      <nav className={`navlist mt-4 md:mt-0 ${isOpen ? "block" : "hidden"} md:flex`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 gap-5">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/education" onClick={() => setIsOpen(false)}>Education</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
