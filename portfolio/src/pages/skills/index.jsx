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
        { name: "Keras", icon: <FaCode /> },
        // { name: "Computer Vision", icon: <FaCode /> },
       
        // { name: "Deep Learning", icon: <FaCode /> },
        // { name: "Neural Networks", icon: <FaCode /> }
      ],
      icon: <GiArtificialIntelligence  className="mr-2" />
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
      url: "https://leetcode.com/your-profile",
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
            <a key={index} href={profile.url} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg flex items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
              {profile.icon}
              <span className="text-lg">{profile.name}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="bg-gray-700 p-6 rounded-lg mb-6 shadow-lg">
            <div className="flex flex-row justify-between items-center mb-2">
              <h2 className="text-2xl font-semibold flex items-center">
                {skillCategory.icon}
                {skillCategory.category}
              </h2>
            </div>
            <ul className="list-disc list-inside ml-8">
              {skillCategory.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-md mb-1 flex items-center">
                  {skill.icon}
                  <span className="ml-2">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}







// import React from "react";

// export default function Skills() {
//   const skillsData = [
//     {
//       category: "Programming Languages",
//       skills: [
//         { name: "C", logo: "/images/skills/c.png" },
//         { name: "C++", logo: "/images/skills/cpp.png" },
//         { name: "Java", logo: "/images/skills/java.png" },
//         { name: "Python", logo: "/images/skills/python.png" },
//         { name: "PHP", logo: "/images/skills/php.png" },
//         { name: "Solidity", logo: "/images/skills/solidity.png" },
//         { name: "Golang", logo: "/images/skills/golang.png" },
//         { name: "SQL", logo: "/images/skills/sql.png" },
//       ]
//     },
//     {
//       category: "Web Development",
//       skills: [
//         { name: "HTML", logo: "/images/skills/html.png" },
//         { name: "CSS", logo: "/images/skills/css.png" },
//         { name: "JavaScript", logo: "/images/skills/javascript.png" },
//         { name: "TypeScript", logo: "/images/skills/typescript.png" },
//         { name: "React", logo: "/images/skills/react.png" },
//         { name: "Next.js", logo: "/images/skills/nextjs.png" },
//         { name: "Node.js", logo: "/images/skills/nodejs.png" },
//         { name: "REST APIs", logo: "/images/skills/restapi.png" },
//         { name: "jQuery", logo: "/images/skills/jquery.png" },
//         { name: "JSON", logo: "/images/skills/json.png" },
//       ]
//     },
//     {
//       category: "Tools and Technologies",
//       skills: [
//         { name: "Git", logo: "/images/skills/git.png" },
//         { name: "GitHub", logo: "/images/skills/github.png" },
//         { name: "OOP", logo: "/images/skills/oop.png" },
//         { name: "Agile", logo: "/images/skills/agile.png" },
//         { name: "CI/CD", logo: "/images/skills/cicd.png" },
//         { name: "Docker", logo: "/images/skills/docker.png" },
//         { name: "Kubernetes", logo: "/images/skills/kubernetes.png" },
//       ]
//     },
//     {
//       category: "Databases",
//       skills: [
//         { name: "MySQL", logo: "/images/skills/mysql.png" },
//         { name: "PostgreSQL", logo: "/images/skills/postgresql.png" },
//         { name: "NoSQL", logo: "/images/skills/nosql.png" },
//         { name: "MongoDB", logo: "/images/skills/mongodb.png" },
//       ]
//     }
//   ];

//   return (
//     <div className="flex flex-col items-center h-11/12 w-11/12 p-5 text-white">
//       <h1 className="text-4xl font-bold mb-8">Skills</h1>
//       <div className="w-full max-w-4xl">
//         {skillsData.map((skillCategory, index) => (
//           <div key={index} className="bg-gray-700 p-6 rounded-lg mb-6 shadow-lg">
//             <div className="flex flex-row justify-between items-center mb-2">
//               <h2 className="text-2xl font-semibold">
//                 {skillCategory.category}
//               </h2>
//             </div>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//               {skillCategory.skills.map((skill, skillIndex) => (
//                 <div key={skillIndex} className="flex flex-col items-center">
//                   <img
//                     src={skill.logo}
//                     alt={skill.name}
//                     className="w-16 h-16 object-contain mb-2"
//                   />
//                   <p className="text-md">{skill.name}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
