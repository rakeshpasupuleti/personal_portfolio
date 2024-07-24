import React from "react";
import { FaBriefcase, FaBuilding, FaCalendarAlt } from "react-icons/fa";

export default function Experience() {
  const workExperienceData = [
    {
      position: "Software Developer",
      company: "Freelancing",
      duration: "July 2020 - Present",
      description:
        "Experienced in developing and optimizing web applications and backend solutions, and implementing AI/ML models to enhance business processes.",
      responsibilities: [
        "Developed and maintained responsive web applications for various clients using React.js, JavaScript, and HTML/CSS, ensuring cross-browser compatibility and enhancing user experience.",
        "Enhanced the performance and functionality of client web applications through the optimization of frontend code, reducing load times by 30% and increasing user engagement by 20%.",
        "Collaborated with clients to design, develop, and implement scalable backend solutions using SQL databases, improving data retrieval efficiency and system performance.",
        "Created and optimized SQL queries, stored procedures, and triggers to manage and manipulate large datasets for clients, leading to a 20% increase in query performance.",
        "Implemented RESTful APIs to facilitate seamless communication between frontend and backend systems, resulting in a more cohesive and functional application architecture for clients.",
        "Designed and deployed machine learning models that improved predictive accuracy by 18%, resulting in more efficient decision-making processes for clients.",
        "Leveraged AI techniques to automate data analysis tasks, reducing processing time by 40% and enabling faster insights for businesses.",
      ],
    },
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
    <div className="flex flex-col items-center h-full min-h-screen w-full p-5 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Work Experience</h1>
      <div className="w-full max-w-4xl">
        {workExperienceData.map((work, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 md:p-8 rounded-lg mb-6 shadow-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col md:w-3/4  md:mb-0">
                <h2 className="text-2xl font-semibold flex items-center mb-2">
                  <FaBriefcase className="mr-2" />
                  {work.position}
                </h2>
                <h3 className="text-xl font-medium flex items-center mb-2 ">
                  <FaBuilding className="mr-3" />
                  {work.company}
                </h3>
              </div>
              <p className="flex items-center text-lg md:text-md">
                <FaCalendarAlt className="mr-2" />
                {work.duration}
              </p>
            </div>

            <p className="text-md mb-2">{work.description}</p>
            <ul className="list-disc pl-6 text-sm md:text-base">
              {work.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="ml-[-20px]  pb-1">
                  {" "}
                  
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

// Developed and maintained responsive web applications using React.js, JavaScript, and HTML/CSS, ensuring cross-browser compatibility and enhancing user experience.
// Enhanced the performance and functionality of the web application through the optimization of frontend code, reducing load times by 30% and increasing user engagement by 20%.
// Collaborated with cross-functional teams to design, develop, and implement scalable backend solutions using SQL databases, improving data retrieval efficiency and system performance.
// Created and optimized SQL queries, stored procedures, and triggers to manage and manipulate large datasets, leading to a 20% increase in query performance.
// Implemented RESTful APIs to facilitate seamless communication between frontend and backend systems, resulting in a more cohesive and functional application architecture.
