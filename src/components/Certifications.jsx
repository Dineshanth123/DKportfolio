import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaAward, FaCertificate, FaStar } from 'react-icons/fa';

const badgesData = [
  {
    title: 'The Joy of Computing Using Python',
    provider: 'NPTEL (IIT Madras)',
    level: 'GOLD',
    icon: <FaMedal />,
    color: 'bg-yellow-500',
  },
  {
    title: 'Problem Solving through Programming in C',
    provider: 'NPTEL (IIT Madras)',
    level: 'ELITE',
    icon: <FaAward />,
    color: 'bg-teal-600',
  },
  {
    title: 'Web Development Certification',
    provider: 'Udemy',
    level: 'Certified in HTML, CSS, Python',
    icon: <FaCertificate />,
    color: 'bg-blue-500',
  },
  {
    title: 'Google Developer Badge',
    provider: 'Google',
    level: 'JavaScript',
    icon: <FaStar />,
    color: 'bg-red-500',
  },
];

const Badges = () => {
  return (
    <section id="certifications" className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Badges & Certifications</h2>

        <div className="overflow-x-auto flex gap-8 py-4">
          {badgesData.map((badge, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] flex-shrink-0 bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center">
                <div className={`text-6xl ${badge.color} p-4 rounded-full mb-4`}>
                  {badge.icon}
                </div>
                <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm shadow-md mb-4">
                  {badge.level}
                </span>

                <h3 className="text-xl font-semibold mb-2">{badge.title}</h3>
                <p className="text-gray-300 mb-4">{badge.provider}</p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;
