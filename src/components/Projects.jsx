import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Learning Management System (LMS)",
    description:
      "A full-stack LMS with React, Django, and SQLite. Features JWT authentication and responsive Bootstrap design.",
    technologies: ["React", "Django", "SQLite", "JWT", "Bootstrap"],
    githubLink: "https://github.com/Dineshanth123/LMS/tree/master",
  },
  {
    title: "Milk Management System",
    description:
      "Web app to manage transactions between milk sellers and buyers using PostgreSQL for reliable data storage.",
    technologies: ["Django", "PostgreSQL"],
    githubLink: "https://github.com/Dineshanth123/milkhouse",
  },
  {
    title: "Power BI Dashboards",
    description:
      "Created 5 analytical dashboards using Power BI, MS Excel, and PostgreSQL.",
    technologies: ["Power BI", "Excel", "PostgreSQL"],
    githubLink:
      "https://www.linkedin.com/posts/dinesh-kanth-r-410693257_powerbi-dataanalytics-sql-activity-7301492826125611008-m4Wf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9IZ4wBXWfJdEDPEy9oSbKp_msbSBwjG-A",
  },
  {
    title: "Python CLI Applications",
    description:
      "Implemented numerical methods, machine learning tasks, and CPU scheduling algorithms as CLI tools.",
    technologies: ["Python"],
    githubLink: "https://github.com/Dineshanth123/numericalmethods",
  },
  {
    title: "Web Pages Collection",
    description:
      "Developed seven professional and responsive webpages.",
    technologies: ["HTML5","CSS3","Bootstrap"],
    githubLink: "https://github.com/Dineshanth123/Web-Page/tree/master",
  },
  {
    title: "DK Pharmaceuticals Management System",
    description:
      "Designed to streamline pharmaceutical inventory management.",
    technologies: ["React","Express.js","Node.js","Tailwind CSS","MongoDB"],
    githubLink: "https://github.com/Dineshanth123/DKPMS",
  },

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group relative w-full h-72 bg-white shadow-md rounded-xl overflow-hidden perspective"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              
              <div className="hidden lg:block">
                
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-600 text-white p-4 transition-transform duration-1000 transform group-hover:rotate-y-180 backface-hidden">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm">{project.description}</p>
                </div>

                
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 text-gray-800 p-4 transition-transform duration-1000 transform rotate-y-180 backface-hidden group-hover:rotate-y-0">
                  <h3 className="text-xl font-semibold mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-teal-600 text-white px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <FaGithub className="text-2xl" />
                    <span className="text-sm font-medium">View on GitHub</span>
                  </a>
                </div>
              </div>

             
              <div className="flex lg:hidden flex-col items-center justify-center bg-white text-gray-800 p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-teal-600 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                  <span className="text-sm font-medium">View on GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
