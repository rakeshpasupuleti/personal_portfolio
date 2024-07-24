import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaCodeBranch, FaRegImage, FaRegGrinBeam, FaCameraRetro, FaMicrochip } from 'react-icons/fa';
import { SiHiveBlockchain } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";

const projects = [
  {
    title: 'NFT Marketplace for Code Snippets',
    description: 'A platform for creating and trading NFTs.',
    icon: <SiHiveBlockchain className="text-4xl text-white-400" />, // Icon instead of image
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://nft-marketplace.example.com',
    date: 'Jan 2023 - May 2023',
    technologies: ['Blockchain', 'Web3.js', 'Solidity', 'Ethereum', 'React'],
  },
  {
    title: 'Action Detection in Videos',
    description: 'A project for detecting actions in videos using machine learning.',
    icon: <LuBrainCircuit className="text-4xl text-white-400" />, // Icon instead of image
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://action-detection.example.com',
    date: 'June 2023 - Sept 2023',
    technologies: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Numpy'],
  },
  {
    title: 'Database Management System for Restaurants',
    description: 'A DBMS designed specifically for managing restaurant operations.',
    icon: <FaDatabase className="text-4xl text-white-400" />, // Icon instead of image
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://dbms-restaurants.example.com',
    date: 'Aug 2022 - Dec 2022',
    technologies: ['MySQL', 'React', 'Node.js', 'RDMS'],
  },
  {
    title: 'Pintos Operating System Extension',
    description: 'Enhanced the Pintos OS with optimized system performance.',
    icon: <FaCodeBranch className="text-4xl text-white-400" />, // Icon instead of image
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://pintos-os-extension.example.com',
    date: 'Aug 2022 - Dec 2022',
    technologies: ['C/C++', 'Operating System'],
  },
  {
    title: 'Facial Recognition and Clustering',
    description: 'Custom facial clustering algorithm with high accuracy.',
    icon: <FaRegGrinBeam className="text-4xl text-white-400" />, // Icon instead of image
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://facial-recognition.example.com',
    date: 'Jan 2023 - May 2023',
    technologies: ['Computer Vision', 'Image Processing', 'Python', 'OpenCV'],
  },
  {
    title: 'Product Review Sentiment Analysis System',
    description: 'Analyzed product reviews with high accuracy.',
    icon: <LuBrainCircuit className="text-4xl text-white-400" />, // Icon instead of image
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://review-sentiment-analysis.example.com',
    date: '2024',
    technologies: ['NLP', 'Recommendation System', 'Python'],
  },
  {
    title: 'Camera Calibration Using Computer Vision',
    description: 'Calibrated a camera using a checkerboard pattern with high accuracy.',
    icon: <FaCameraRetro className="text-4xl text-white-400" />, // Icon for camera calibration
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://camera-calibration.example.com',
    date: '2024',
    technologies: ['Computer Vision', 'Image Processing', 'Python', 'OpenCV'],
  },
  {
    title: 'Designed and Developed High-Performance 8-bit Microprocessor',
    description: 'Created an 8-bit microprocessor with improved performance.',
    icon: <FaMicrochip className="text-4xl text-white-400" />, // Icon for microprocessor
    githubLink: 'https://github.com/rakeshpasupuleti',
    demoLink: 'https://microprocessor.example.com',
    date: '2024',
    technologies: ['Embedded Systems', 'Verilog', 'Vivado', 'FPGA'],
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-800 text-white min-h-screen">
      <h1 className="text-5xl font-bold mb-12 text-center">Projects</h1>
      <div className="w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg mb-8 shadow-lg flex flex-col lg:flex-row"
          >
            <div className="flex items-center justify-center w-24 h-24 bg-gray-600 rounded-full border-4 border-gray-600 mb-4 lg:mb-0 lg:mr-6 flex-shrink-0  ">
              {project.icon}
            </div>
            <div className="flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-3xl font-semibold pr-4">{project.title}</h2>
              </div>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    className="bg-gray-600 text-white py-1 px-4 rounded text-sm"
                  >
                    {tech}
                  </button>
                ))}
              </div>
              <div className="flex space-x-4 text-sm">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:underline"
                >
                  <FaExternalLinkAlt className="mr-1" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
