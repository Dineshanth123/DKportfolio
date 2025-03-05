import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaTrophy, FaStar } from 'react-icons/fa';

const dsaData = [
  {
    title: 'LeetCode',
    description: 'Problems Solved',
    count: 200,
    icon: <FaMedal />,
    color: 'bg-teal-600',
  },
  {
    title: 'HackerRank',
    description: 'Gold in Python & Problem Solving, Silver in SQL',
    count: 85,
    icon: <FaTrophy />,
    color: 'bg-yellow-500',
  },
  {
    title: 'InterviewBit',
    description: 'Problems Solved',
    count: 50,
    icon: <FaStar />,
    color: 'bg-blue-500',
  },
];

const DSA = () => {
  return (
    <section id="dsa" className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">DSA & Problem Solving</h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {dsaData.map((data, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center p-6 rounded-xl shadow-lg transition-transform duration-500 ${data.color} w-64`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-6xl mb-4">{data.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{data.title}</h3>
              <motion.p
                className="text-5xl font-bold mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              >
                {data.count}+
              </motion.p>
              <p className="text-sm text-white text-center">{data.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DSA;
