import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    title: 'B.E. Computer Science and Engineering',
    institution: 'KPR Institute of Engineering and Technology, Coimbatore',
    details: 'CGPA: 8.5 | Year: 2026',
  },
  {
    title: 'Higher Secondary (HSC)',
    institution: 'Kongu Vellalar Matric Higher Secondary School, Coimbatore',
    details: 'Aggregate: 95.2% | Year: 2022',
  },
  {
    title: 'Secondary School (SSLC)',
    institution: 'Kongu Vellalar Matric Higher Secondary School, Coimbatore',
    details: 'Aggregate: 97.4% | Year: 2020',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gray-900 z-10 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-white">Education</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl shadow-lg bg-gray-800 transition-transform duration-500 
              text-white relative overflow-hidden border-t-4 border-teal-500"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2">{edu.title}</h3>
                <p className="text-lg mb-1">{edu.institution}</p>
                <p className="text-md text-teal-400">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
