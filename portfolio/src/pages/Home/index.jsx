import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

// Direct URL to the resume file hosted in the public directory
const resumeUrl = "/resume.pdf";

// Function to handle resume download
const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Rakesh_Pasupuleti_Resume.pdf'; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Home() {
  return (
    <div className="flex flex-col items-center h-11/12 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Hey{" "}
        <span className="inline-block items-center">
          <PiHandWavingFill />
        </span>
        , Welcome to the Website
      </h1>
      <h1 className="text-2xl md:text-4xl font-bold mb-5 text-center">
        This is Rakesh Pasupuleti
      </h1>
      <div className="typewriter-container text-xl md:text-3xl lg:text-4xl font-bold mb-4 flex flex-col md:flex-row items-center">
        <span>I am a&nbsp;</span>
        <div className="inline-block">
          <Typewriter
            options={{
              strings: ["Software Developer", "Machine learning Engineer", "Curious Learner"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          onClick={handleDownload}
        >
           Resume
          <span className="inline-block ml-2">
            <MdOutlineFileDownload className="text-xl" />
          </span>
        </button>

        <Link to="/contact" className="inline-block">
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
            Lets Connect !
          </button>
        </Link>
      </div>

      <div className="socialmedia flex flex-row gap-5 items-center justify-center mt-8">
        <a
          href="https://github.com/rakeshpasupuleti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl hover:cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/rakeshpasupuleti"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl hover:cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/rakesh_pasupuleti27/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-3xl hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
}
