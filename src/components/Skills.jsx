import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'Frontend', skills: ['HTML', 'CSS', 'React JS', 'Bootstrap','Tailwind CSS'], color: 'bg-gray-800' },
  { category: 'Backend', skills: ['Django', 'Node.js', 'Express.js'], color: 'bg-gray-800' },
  { category: 'Database', skills: ['MongoDB', 'MySQL', 'PostgreSQL'], color: 'bg-gray-800' },
  { category: 'Programming', skills: ['Java', 'JavaScript', 'Python'], color: 'bg-gray-800' },
  { category: 'Dev Tools', skills: ['MS Office', 'Figma', 'PowerBI', 'Postman', 'Git', 'GitHub'], color: 'bg-gray-800' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white text-center">Skills</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((group, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-lg ${group.color} transition-transform duration-300 hover:-translate-y-2`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="inline-block bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
