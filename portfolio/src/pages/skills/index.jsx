
// import React from "react";
// import { FaCode, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaGolang } from "react-icons/fa6";
// import { SiLeetcode, SiGeeksforgeeks, SiSolidity, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiBootstrap, SiRedux, SiTypescript, SiNextdotjs, SiJquery, SiJson, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
// import { GiArtificialIntelligence } from "react-icons/gi";

// export default function Skills() {
//   const skillsData = [
//     {
//       category: "Programming Languages",
//       skills: [
//         { name: "C", icon: <FaCode /> },
//         { name: "C++", icon: <FaCode /> },
//         { name: "Java", icon: <FaJava /> },
//         { name: "Python", icon: <FaPython /> },
//         { name: "PHP", icon: <FaPhp /> },
//         { name: "Solidity", icon: <SiSolidity /> },
//         { name: "Golang", icon: <FaGolang /> },
//         { name: "SQL", icon: <FaDatabase /> }
//       ],
//       icon: <FaCode className="mr-2" />
//     },
//     {
//       category: "Web Development",
//       skills: [
//         { name: "HTML", icon: <FaHtml5 /> },
//         { name: "CSS", icon: <FaCss3Alt /> },
//         { name: "JavaScript", icon: <FaJsSquare /> },
//         { name: "Bootstrap", icon: <SiBootstrap /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//         { name: "TypeScript", icon: <SiTypescript /> },
//         { name: "React", icon: <FaReact /> },
//         { name: "Redux", icon: <SiRedux /> },
//         { name: "Next.js", icon: <SiNextdotjs /> },
//         { name: "Node.js", icon: <FaNodeJs /> },
//         { name: "REST APIs", icon: <FaCode /> },
//         { name: "jQuery", icon: <SiJquery /> },
//         { name: "JSON", icon: <SiJson /> }
//       ],
//       icon: <FaCode className="mr-2" />
//     },
//     {
//       category: "Databases",
//       skills: [
//         { name: "MySQL", icon: <SiMysql /> },
//         { name: "PostgreSQL", icon: <SiPostgresql /> },
//         { name: "NoSQL", icon: <FaDatabase /> },
//         { name: "MongoDB", icon: <SiMongodb /> }
//       ],
//       icon: <FaDatabase className="mr-2" />
//     },
//     {
//       category: "AI/ML",
//       skills: [
//         { name: "TensorFlow", icon: <SiTensorflow /> },
//         { name: "PyTorch", icon: <SiPytorch /> },
//         { name: "OpenCV", icon: <SiOpencv /> },
//         { name: "Scikit-Learn", icon: <FaCode /> },
//         { name: "Pandas", icon: <FaCode /> },
//         { name: "NumPy", icon: <FaCode /> },
//         { name: "Keras", icon: <FaCode /> }
//       ],
//       icon: <GiArtificialIntelligence className="mr-2" />
//     },
//     {
//       category: "Tools and Technologies",
//       skills: [
//         { name: "Git", icon: <FaTools /> },
//         { name: "GitHub", icon: <FaGithub /> },
//         { name: "OOP", icon: <FaTools /> },
//         { name: "Agile", icon: <FaTools /> },
//         { name: "CI/CD", icon: <FaTools /> },
//         { name: "Docker", icon: <FaDocker /> },
//         { name: "Kubernetes", icon: <FaTools /> }
//       ],
//       icon: <FaTools className="mr-2" />
//     }
//   ];

//   const profiles = [
//     {
//       name: "LeetCode",
//       url: "https://leetcode.com/your-profile",
//       icon: <SiLeetcode className="mr-2" />
//     },
//     {
//       name: "GeeksforGeeks",
//       url: "https://www.geeksforgeeks.org/user/rakeshpasupuleti01/",
//       icon: <SiGeeksforgeeks className="mr-2" />
//     },
//     {
//       name: "GitHub",
//       url: "https://github.com/rakeshpasupuleti/",
//       icon: <FaGithub className="mr-2" />
//     },
//     {
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/rakeshpasupuleti/",
//       icon: <FaLinkedin className="mr-2" />
//     }
//   ];

//   return (
//     <div className="flex flex-col items-center h-full w-full p-8 text-white bg-gray-900">
//       <h1 className="text-4xl font-bold mb-10">Skills</h1>

//       {/* Profiles Section */}
//       <div className="w-full max-w-6xl mb-10">
//         <h2 className="text-3xl font-semibold mb-6">Profiles</h2>
//         <div className="flex flex-wrap gap-6">
//           {profiles.map((profile, index) => (
//             <a
//               key={index}
//               href={profile.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
//             >
//               {profile.icon}
//               <span className="text-lg">{profile.name}</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="w-full max-w-6xl">
//         {skillsData.map((skillCategory, index) => (
//           <div key={index} className="bg-gray-800 p-6 rounded-lg mb-8 shadow-lg">
//             <div className="flex flex-row justify-between items-center mb-4">
//               <h2 className="text-2xl font-semibold flex items-center">
//                 {skillCategory.icon}
//                 {skillCategory.category}
//               </h2>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//               {skillCategory.skills.map((skill, skillIndex) => (
//                 <div
//                   key={skillIndex}
//                   className="bg-gray-700 p-4 rounded-lg flex items-center space-x-2"
//                 >
//                   {skill.icon}
//                   <span className="text-md">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { FaCode, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaGolang } from "react-icons/fa6";
// import { SiLeetcode, SiGeeksforgeeks, SiSolidity, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiBootstrap, SiRedux, SiTypescript, SiNextdotjs, SiJquery, SiJson, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
// import { GiArtificialIntelligence } from "react-icons/gi";

// export default function Skills() {
//   const skillsData = [
//     {
//       category: "Programming Languages",
//       skills: [
//         { name: "C", icon: <FaCode /> },
//         { name: "C++", icon: <FaCode /> },
//         { name: "Java", icon: <FaJava /> },
//         { name: "Python", icon: <FaPython /> },
//         { name: "PHP", icon: <FaPhp /> },
//         { name: "Solidity", icon: <SiSolidity /> },
//         { name: "Golang", icon: <FaGolang /> },
//         { name: "SQL", icon: <FaDatabase /> }
//       ],
//       icon: <FaCode className="text-4xl" />
//     },
//     {
//       category: "Web Development",
//       skills: [
//         { name: "HTML", icon: <FaHtml5 /> },
//         { name: "CSS", icon: <FaCss3Alt /> },
//         { name: "JavaScript", icon: <FaJsSquare /> },
//         { name: "Bootstrap", icon: <SiBootstrap /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//         { name: "TypeScript", icon: <SiTypescript /> },
//         { name: "React", icon: <FaReact /> },
//         { name: "Redux", icon: <SiRedux /> },
//         { name: "Next.js", icon: <SiNextdotjs /> },
//         { name: "Node.js", icon: <FaNodeJs /> },
//         { name: "REST APIs", icon: <FaCode /> },
//         { name: "jQuery", icon: <SiJquery /> },
//         { name: "JSON", icon: <SiJson /> }
//       ],
//       icon: <FaCode className="text-4xl" />
//     },
//     {
//       category: "Databases",
//       skills: [
//         { name: "MySQL", icon: <SiMysql /> },
//         { name: "PostgreSQL", icon: <SiPostgresql /> },
//         { name: "NoSQL", icon: <FaDatabase /> },
//         { name: "MongoDB", icon: <SiMongodb /> }
//       ],
//       icon: <FaDatabase className="text-4xl" />
//     },
//     {
//       category: "AI/ML",
//       skills: [
//         { name: "TensorFlow", icon: <SiTensorflow /> },
//         { name: "PyTorch", icon: <SiPytorch /> },
//         { name: "OpenCV", icon: <SiOpencv /> },
//         { name: "Scikit-Learn", icon: <FaCode /> },
//         { name: "Pandas", icon: <FaCode /> },
//         { name: "NumPy", icon: <FaCode /> },
//         { name: "Keras", icon: <FaCode /> }
//       ],
//       icon: <GiArtificialIntelligence className="text-4xl" />
//     },
//     {
//       category: "Tools and Technologies",
//       skills: [
//         { name: "Git", icon: <FaTools /> },
//         { name: "GitHub", icon: <FaGithub /> },
//         { name: "OOP", icon: <FaTools /> },
//         { name: "Agile", icon: <FaTools /> },
//         { name: "CI/CD", icon: <FaTools /> },
//         { name: "Docker", icon: <FaDocker /> },
//         { name: "Kubernetes", icon: <FaTools /> }
//       ],
//       icon: <FaTools className="text-4xl" />
//     }
//   ];

//   const profiles = [
//     {
//       name: "LeetCode",
//       url: "https://leetcode.com/your-profile",
//       icon: <SiLeetcode className="text-3xl" />
//     },
//     {
//       name: "GeeksforGeeks",
//       url: "https://www.geeksforgeeks.org/user/rakeshpasupuleti01/",
//       icon: <SiGeeksforgeeks className="text-3xl" />
//     },
//     {
//       name: "GitHub",
//       url: "https://github.com/rakeshpasupuleti/",
//       icon: <FaGithub className="text-3xl" />
//     },
//     {
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/rakeshpasupuleti/",
//       icon: <FaLinkedin className="text-3xl" />
//     }
//   ];

//   return (
//     <div className="flex flex-col items-center h-full w-full p-8 text-gray-900 bg-gradient-to-r from-blue-500 to-purple-600">
//       <h1 className="text-5xl font-extrabold text-white mb-12">Skills</h1>

//       {/* Profiles Section */}
//       <div className="w-full max-w-6xl mb-12">
//         <h2 className="text-4xl font-bold text-white mb-6">Profiles</h2>
//         <div className="flex flex-wrap gap-6 justify-center">
//           {profiles.map((profile, index) => (
//             <a
//               key={index}
//               href={profile.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white text-gray-800 font-semibold py-4 px-6 rounded-lg flex items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-100"
//             >
//               {profile.icon}
//               <span className="text-lg ml-2">{profile.name}</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Skills Section */}
//       <div className="w-full max-w-6xl">
//         {skillsData.map((skillCategory, index) => (
//           <div
//             key={index}
//             className="bg-white text-gray-800 p-6 rounded-lg mb-10 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
//           >
//             <div className="flex flex-row justify-between items-center mb-6">
//               <h2 className="text-3xl font-semibold flex items-center text-blue-600">
//                 {skillCategory.icon}
//                 <span className="ml-2">{skillCategory.category}</span>
//               </h2>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//               {skillCategory.skills.map((skill, skillIndex) => (
//                 <div
//                   key={skillIndex}
//                   className="bg-gray-100 p-4 rounded-lg flex items-center space-x-3 shadow-md hover:bg-gray-200 transition-colors"
//                 >
//                   <div className="text-2xl">{skill.icon}</div>
//                   <span className="text-lg font-medium">{skill.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";
import { FaCode, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks, SiSolidity, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiBootstrap, SiRedux, SiTypescript, SiNextdotjs, SiJquery, SiJson, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C", icon: <FaCode /> },
        { name: "C++", icon: <FaCode /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "Solidity", icon: <SiSolidity /> },
        { name: "Golang", icon: <FaGolang /> },
        { name: "SQL", icon: <FaDatabase /> }
      ],
      icon: <FaCode className="mr-2" />
    },
    {
      category: "Web Development",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJsSquare /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "jQuery", icon: <SiJquery /> },
        { name: "JSON", icon: <SiJson /> }
      ],
      icon: <FaCode className="mr-2" />
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "NoSQL", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ],
      icon: <FaDatabase className="mr-2" />
    },
    {
      category: "AI/ML",
      skills: [
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "PyTorch", icon: <SiPytorch /> },
        { name: "OpenCV", icon: <SiOpencv /> },
        { name: "Scikit-Learn", icon: <FaCode /> },
        { name: "Pandas", icon: <FaCode /> },
        { name: "NumPy", icon: <FaCode /> },
        { name: "Keras", icon: <FaCode /> }
      ],
      icon: <GiArtificialIntelligence className="mr-2" />
    },
    {
      category: "Tools and Technologies",
      skills: [
        { name: "Git", icon: <FaTools /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "OOP", icon: <FaTools /> },
        { name: "Agile", icon: <FaTools /> },
        { name: "CI/CD", icon: <FaTools /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Kubernetes", icon: <FaTools /> }
      ],
      icon: <FaTools className="mr-2" />
    }
  ];

  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/Rakeshpa/",
      icon: <SiLeetcode className="mr-2" />
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/rakeshpasupuleti01/",
      icon: <SiGeeksforgeeks className="mr-2" />
    },
    {
      name: "GitHub",
      url: "https://github.com/rakeshpasupuleti/",
      icon: <FaGithub className="mr-2" />
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rakeshpasupuleti/",
      icon: <FaLinkedin className="mr-2" />
    }
  ];

  return (
    <div className="flex flex-col items-center h-11/12 w-11/12 p-5 text-white">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>

      {/* Profiles Section */}
      <div className="w-full max-w-4xl mb-8">
        <h2 className="text-3xl font-semibold mb-4">Profiles</h2>
        <div className="flex flex-wrap gap-6">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              {profile.icon}
              <span className="text-lg">{profile.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg mb-6 shadow-lg">
            <div className="flex flex-row justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold flex items-center">
                {skillCategory.icon}
                {skillCategory.category}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillCategory.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="bg-gray-600 p-4 rounded-lg flex items-center space-x-2"
                >
                  {skill.icon}
                  <span className="text-md">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}















// import React from "react";
// import { FaCode, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaPhp, FaDocker, FaGithub, FaLinkedin } from "react-icons/fa";
// import { FaGolang } from "react-icons/fa6";
// import { SiLeetcode, SiGeeksforgeeks, SiSolidity, SiMysql, SiPostgresql, SiMongodb, SiTailwindcss, SiBootstrap, SiRedux, SiTypescript, SiNextdotjs, SiJquery, SiJson, SiTensorflow, SiPytorch, SiOpencv } from "react-icons/si";
// import { GiArtificialIntelligence } from "react-icons/gi";

// export default function Skills() {
//   const skillsData = [
//     {
//       category: "Programming Languages",
//       skills: [
//         { name: "C", icon: <FaCode /> },
//         { name: "C++", icon: <FaCode /> },
//         { name: "Java", icon: <FaJava /> },
//         { name: "Python", icon: <FaPython /> },
//         { name: "PHP", icon: <FaPhp /> },
//         { name: "Solidity", icon: <SiSolidity /> },
//         { name: "Golang", icon: <FaGolang /> },
//         { name: "SQL", icon: <FaDatabase /> }
//       ],
//       icon: <FaCode className="mr-2" />
//     },
//     {
//       category: "Web Development",
//       skills: [
//         { name: "HTML", icon: <FaHtml5 /> },
//         { name: "CSS", icon: <FaCss3Alt /> },
//         { name: "JavaScript", icon: <FaJsSquare /> },
//         { name: "Bootstrap", icon: <SiBootstrap /> },
//         { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//         { name: "TypeScript", icon: <SiTypescript /> },
//         { name: "React", icon: <FaReact /> },
//         { name: "Redux", icon: <SiRedux /> },
//         { name: "Next.js", icon: <SiNextdotjs /> },
//         { name: "Node.js", icon: <FaNodeJs /> },
//         { name: "REST APIs", icon: <FaCode /> },
//         { name: "jQuery", icon: <SiJquery /> },
//         { name: "JSON", icon: <SiJson /> }
//       ],
//       icon: <FaCode className="mr-2" />
//     },
   
//     {
//       category: "Databases",
//       skills: [
//         { name: "MySQL", icon: <SiMysql /> },
//         { name: "PostgreSQL", icon: <SiPostgresql /> },
//         { name: "NoSQL", icon: <FaDatabase /> },
//         { name: "MongoDB", icon: <SiMongodb /> }
//       ],
//       icon: <FaDatabase className="mr-2" />
//     },
//     {
//       category: "AI/ML",
//       skills: [
//         { name: "TensorFlow", icon: <SiTensorflow /> },
//         { name: "PyTorch", icon: <SiPytorch /> },
//         { name: "OpenCV", icon: <SiOpencv /> },
//         { name: "Scikit-Learn", icon: <FaCode /> },
//         { name: "Pandas", icon: <FaCode /> },
//         { name: "NumPy", icon: <FaCode /> },
//         { name: "Keras", icon: <FaCode /> },
//         // { name: "Computer Vision", icon: <FaCode /> },
       
//         // { name: "Deep Learning", icon: <FaCode /> },
//         // { name: "Neural Networks", icon: <FaCode /> }
//       ],
//       icon: <GiArtificialIntelligence  className="mr-2" />
//     },
//     {
//       category: "Tools and Technologies",
//       skills: [
//         { name: "Git", icon: <FaTools /> },
//         { name: "GitHub", icon: <FaGithub /> },
//         { name: "OOP", icon: <FaTools /> },
//         { name: "Agile", icon: <FaTools /> },
//         { name: "CI/CD", icon: <FaTools /> },
//         { name: "Docker", icon: <FaDocker /> },
//         { name: "Kubernetes", icon: <FaTools /> }
//       ],
//       icon: <FaTools className="mr-2" />
//     }
//   ];

//   const profiles = [
//     {
//       name: "LeetCode",
//       url: "https://leetcode.com/your-profile",
//       icon: <SiLeetcode className="mr-2" />
//     },
//     {
//       name: "GeeksforGeeks",
//       url: "https://www.geeksforgeeks.org/user/rakeshpasupuleti01/",
//       icon: <SiGeeksforgeeks className="mr-2" />
//     },
//     {
//       name: "GitHub",
//       url: "https://github.com/rakeshpasupuleti/",
//       icon: <FaGithub className="mr-2" />
//     },
//     {
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/rakeshpasupuleti/",
//       icon: <FaLinkedin className="mr-2" />
//     }
//   ];

//   return (
//     <div className="flex flex-col items-center h-11/12 w-11/12 p-5 text-white">
//       <h1 className="text-4xl font-bold mb-8">Skills</h1>

//       {/* Profiles Section */}
//       <div className="w-full max-w-4xl mb-8">
//         <h2 className="text-3xl font-semibold mb-4">Profiles</h2>
//         <div className="flex flex-wrap gap-6">
//           {profiles.map((profile, index) => (
//             <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
//               {profile.icon}
//               <span className="text-lg">{profile.name}</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="w-full max-w-4xl">
//         {skillsData.map((skillCategory, index) => (
//           <div key={index} className="bg-gray-700 p-6 rounded-lg mb-6 shadow-lg">
//             <div className="flex flex-row justify-between items-center mb-2">
//               <h2 className="text-2xl font-semibold flex items-center">
//                 {skillCategory.icon}
//                 {skillCategory.category}
//               </h2>
//             </div>
//             <ul className="list-disc list-inside ml-8">
//               {skillCategory.skills.map((skill, skillIndex) => (
//                 <li key={skillIndex} className="text-md mb-1 flex items-center">
//                   {skill.icon}
//                   <span className="ml-2">{skill.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





