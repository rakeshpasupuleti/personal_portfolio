import React from 'react';
import { FaCog, FaRobot, FaProjectDiagram } from 'react-icons/fa';
import { SiHiveBlockchain } from "react-icons/si";

export default function About() {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-800 text-white  h-11/12">
      <h1 className="text-4xl font-bold mb-7 text-center">About Me</h1>
      <div className="w-full max-w-4xl">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          {/* Introduction Section */}
          <div className="mb-6">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-lg">
              I am a software developer with over 3 years of experience and a Master’s degree in Computer Science. 
              My expertise lies in software development and machine learning, with a proven track record of developing real-time applications. 
              I am passionate about leveraging cutting-edge technologies to simplify complex problems and improve people's lives. 
              Driven by innovation, I continually seek opportunities to enhance my skills and contribute to impactful projects.
            </p>
          </div>

          {/* Areas of Interest Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Areas of Interest</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-105">
                <FaCog className="mr-3 text-2xl" />
                <span>Software Development</span>
              </button>
              <button className="bg-gradient-to-r from-green-400 via-teal-500 to-cyan-500 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-105">
                <FaRobot className="mr-3 text-2xl" />
                <span>AI/ML</span>
              </button>
              <button className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-105">
                <SiHiveBlockchain className="mr-3 text-2xl" />
                <span>Blockchain</span>
              </button>
              <button className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-105">
                <FaProjectDiagram className="mr-3 text-2xl" />
                <span>Algorithms</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    