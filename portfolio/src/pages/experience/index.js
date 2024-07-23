import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const workExperienceData = [
    // {
    //   position: "Software Developer",
    //   company: "Tech Solutions Inc.",
    //   duration: "July 2021 - Present",
    //   description:
    //     "Worked on developing and maintaining web applications using React and Node.js. Implemented several new features and optimized existing ones, resulting in a 20% increase in performance.",
    //   responsibilities: [
    //     "Developed RESTful APIs using Node.js and Express",
    //     "Designed and implemented front-end components using React",
    //     "Collaborated with cross-functional teams to define and deliver new features",
    //     "Conducted code reviews and provided mentorship to junior developers",
    //   ],
    // },
    // {
    //   position: "Intern Software Engineer",
    //   company: "Innovative Tech Solutions",
    //   duration: "Jan 2021 - June 2021",
    //   description:
    //     "Assisted in the development of a mobile application using React Native. Worked closely with the design team to ensure a seamless user experience.",
    //   responsibilities: [
    //     "Developed mobile application features using React Native",
    //     "Worked with the design team to implement UI/UX improvements",
    //     "Participated in daily stand-up meetings and sprint planning sessions",
    //     "Tested and debugged application issues",
    //   ],
    // },
  ];

  return (
    <div className="flex flex-col items-center h-11/12 w-11/12 p-5 text-white">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="w-full max-w-4xl">
        {workExperienceData.map((work, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg mb-6 shadow-lg"
          >
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold flex items-center">
                <FaBriefcase className="mr-2" />
                {work.position}
              </h2>
              <p className=" flex items-center">
                <FaCalendarAlt className="mr-2" />
                {work.duration}
              </p>
            </div>

            <div className="flex flex-row justify-between items-center mb-2">
              <h3 className="text-xl font-medium mb-1 flex items-center">
                <FaBuilding className="mr-3" />
                {work.company}
              </h3>
            </div>

            <p className="text-md mb-2">{work.description}</p>
            <ul className="list-disc list-inside">
              {work.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
