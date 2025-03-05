import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaPython, 
  FaDatabase, 
  FaBootstrap, 
  FaKey 
} from 'react-icons/fa';

const internshipData = {
  company: 'KG IT Services',
  role: 'Full Stack Developer',
  duration: 'January 2024 - June 2024',
  achievements: [
    'Solved 75+ coding problems in Python.',
    'Developed a Learning Management System (LMS).',
    'Utilized React for frontend and Django for backend.',
    'Implemented JWT authentication for secure user sessions.',
    'Ensured responsive design using Bootstrap.',
  ],
  tools: ['React', 'Django', 'SQLite', 'Bootstrap', 'JWT'],
};

const iconMap = {
  React: <FaReact />,
  'Django': <FaPython />,
  SQLite: <FaDatabase />,
  Bootstrap: <FaBootstrap />,
  JWT: <FaKey />,
};

const Internship = () => {
  const [activeTab, setActiveTab] = useState('details');

  return (
    <section id="internship" className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Internship Experience</h2>

        <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="flex">
            <button
              className={`flex-1 py-4 text-center ${
                activeTab === 'details' ? 'bg-teal-600' : 'bg-gray-700'
              } transition-colors`}
              onClick={() => setActiveTab('details')}
            >
              Internship Details
            </button>
            <button
              className={`flex-1 py-4 text-center ${
                activeTab === 'tools' ? 'bg-teal-600' : 'bg-gray-700'
              } transition-colors`}
              onClick={() => setActiveTab('tools')}
            >
              Tools & Technologies
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'details' ? (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{internshipData.role}</h3>
                <p className="text-lg text-teal-400 mb-2">{internshipData.company}</p>
                <p className="text-sm text-gray-400 mb-4">{internshipData.duration}</p>
                <ul className="list-disc list-inside space-y-2">
                  {internshipData.achievements.map((item, index) => (
                    <li key={index} className="text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : (
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {internshipData.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md"
                  >
                    <div className="text-4xl text-teal-500 mb-2">
                      {iconMap[tool] || <FaPython />} 
                    </div>
                    <p className="text-sm text-white">{tool}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
