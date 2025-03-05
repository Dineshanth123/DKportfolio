import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaAward, FaTrophy, FaCrown, FaStar, FaCertificate } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const swiperStyles = `
  .swiper-button-next, .swiper-button-prev {
    color: #14b8a6; 
    transition: color 0.3s;
  }
  .swiper-button-next:hover, .swiper-button-prev:hover {
    color: #0f766e; 
  }
  .swiper-button-next::after, .swiper-button-prev::after {
    font-size: 2rem; 
    font-weight: bold;
  }
`;

const honorsData = [
  {
    title: 'Presented Paper at GECOST',
    description: 'Effortless Shopping: Unlocking Easy Access at Ration Shop',
    icon: <FaCertificate />,
  },
  {
    title: 'Top 5 Percentile in NPTEL',
    description: 'Awarded Shield & Cash Prize for The Joy of Computing Using Python',
    icon: <FaMedal />,
  },
  {
    title: 'Unacademy Aptitude Winner',
    description: 'Received Cash Prize for exceptional performance in General Aptitude',
    icon: <FaAward />,
  },
  {
    title: 'Event Organizer at KPRIET',
    description: 'Showcased leadership & event management skills',
    icon: <FaStar />,
  },
  {
    title: 'Best GitHub Contributor',
    description: 'Recognized for outstanding open-source contributions',
    icon: <FaCrown />,
  },
  {
    title: '1st Place in Debugging Contest',
    description: 'Won at KPRCAS with top debugging skills',
    icon: <FaTrophy />,
  },
];

const Honors = () => {
  return (
    <section id="achievements" className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Honors & Achievements</h2>

        
        <style>{swiperStyles}</style>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {honorsData.map((honor, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4 text-teal-500">{honor.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{honor.title}</h3>
                <p className="text-gray-300 text-sm text-center">{honor.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Honors;
