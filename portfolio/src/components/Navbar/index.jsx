import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 text-white bg-gray-700">
      <div className="title text-xl font-bold ml-4">
        <h1 className="cursor-default">Rakesh Pasupuleti</h1>
      </div>

      <nav className="navlist mt-4 md:mt-0 mr-4">
        <ul className="flex space-x-4 gap-5">
          <li className=" hover:text-blue-500  cursor-pointer">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-blue-500  cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-blue-500  cursor-pointer">
            <Link to="/education">Education</Link>
          </li>

          <li className="hover:text-blue-500  cursor-pointer">
            <Link to="/experience">Experience</Link>
          </li>

          <li className="hover:text-blue-500  cursor-pointer">
            <Link to="/skills">Skills</Link>
          </li>
          
          <li className="hover:text-blue-500  cursor-pointer">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:text-blue-500  cursor-pointer">
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
    
  );
}
