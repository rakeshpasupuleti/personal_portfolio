import React from "react";
import { PiHandWavingFill } from "react-icons/pi";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const resumeUrl =
  "https://drive.google.com/file/d/12ENqbuyeCHa7T-3A1P4mMpklFPJw2t4C/view?usp=sharing";

// Function to handle resume download
const handleDownload = () => {
  window.open(resumeUrl, "_blank");
};

export default function Home() {
  return (
    <div className="flex flex-col items-center  h-screen " style={{ paddingTop: "8.5rem" }}>
      <h1 className="text-3xl font-bold mb-4">
        Hey{" "}
        <span className="inline-block items-center">
          <PiHandWavingFill />
        </span>{" "}
        , Welcome to the Website
      </h1>
      <h1 className="text-4xl font-bold mb-5">This is Rakesh Pasupuleti</h1>
      <div className="typewriter-container text-4xl font-bold mb-4">
        <Typewriter
          options={{
            strings: ["I am a Software Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="flex flex-row gap-6 justify-center mt-6 ">
        <button
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownload}
        >
          Download Resume{" "}
          <span className="inline-block ml-2">
            <MdOutlineFileDownload className="inline-block text-xl" />
          </span>
        </button>

        <Link to="/contact" className="inline-block">
          <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Contact
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
