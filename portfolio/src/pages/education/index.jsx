import React from "react";
import { FaUniversity, FaUserGraduate, FaCalendarAlt } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "State University of New York at Buffalo",
      gpaobtained: 4.0,
      gpagrand: 4.0,
      duration: "Aug 2022 - June 2024",
      description:
        "Specialized in Software Development, Machine learning, and Algorithms.",
      coursework: [
        "Algorithms Analysis and Design",
        "Algorithms for Modern Computer Systems",
        "Operating Systems",
        "Data Models and Query Languages",
        "Blockchain",
        "Computer Architecture",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision and Image Processing",
      ],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Andhra Loyola Institute of Engineering and Technology",
      gpaobtained: 8.5,
      gpagrand: 10,
      duration: "June 2017 - Aug 2021",
      description:
        "Focused on Software Development, Operating Systems, and Database management.",
      coursework: [
        "Programming Languages: C, C++, Java, Python",
        "Data Structures",
        "Advanced Data Structures ",
        "Analysis Of Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
        "Artificial Intelligence",
        "Machine Learning",
        "Neural Networks"
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center h-full min-h-screen w-full p-5 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Education</h1>
      <div className="w-full max-w-4xl">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 md:p-10 rounded-lg mb-6 shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h2 className="text-2xl font-semibold flex items-center mb-2 md:mb-0 text-xl ">
                <FaUserGraduate className="mr-2" />
                {edu.degree}
              </h2>
              <p className="flex items-center text-lg">
                <FaCalendarAlt className="mr-2" />
                {edu.duration}
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl font-medium mb-2 md:mb-0 flex items-center">
                <FaUniversity className="mr-3" />
                {edu.institution}
              </h3>
              <p className="flex items-center text-lg">
                GPA: {edu.gpaobtained} / {edu.gpagrand}
              </p>
            </div>

            <p className="text-md mb-4">{edu.description}</p>
            <ul className="list-disc list-inside text-sm md:text-base">
              {edu.coursework.map((course, courseIndex) => (
                <li key={courseIndex}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
