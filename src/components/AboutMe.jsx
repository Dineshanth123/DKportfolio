import React from "react";
import myimg from "../assets/myimg.jpeg";
import resume from "../assets/resume.pdf";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import interviewbitLogo from "../assets/interviewbitLogo.png"; 

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={myimg}
            alt="Dinesh Kanth"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg border-4 border-teal-500"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 mb-6">
            Hello! I'm Dinesh Kanth, a curious and passionate individual who
            thrives on discovering new experiences and finding inspiration in
            everyday moments. I love turning challenges into opportunities and
            believe in the power of a positive mindset and creativity.
          </p>
          <p className="text-gray-300 mb-8">
            Whether it's embracing new ideas or exploring different paths, I
            approach everything with adaptability and an open mind. Outside of
            work, I cherish moments spent connecting with people, exploring
            nature, and enjoying the simple joys of life. I’m constantly on the
            lookout for opportunities that allow me to learn, contribute, and
            grow as an individual.
          </p>

          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-teal-600 transition-colors mb-6"
          >
            Download Resume
          </a>

          <div className="flex gap-6 mt-6">
            <a
              href="https://github.com/Dineshanth123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-500 transition-colors"
              title="GitHub"
            >
              <FaGithub size={30} />
            </a>

            <a
              href="https://www.linkedin.com/in/dinesh-kanth-r-410693257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-500 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>

            <a
              href="https://www.hackerrank.com/profile/22CS035_KPRIET"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-500 transition-colors"
              title="HackerRank"
            >
              <FaHackerrank size={30} />
            </a>

            <a
              href="https://leetcode.com/u/Dinesh_Kanth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-500 transition-colors"
              title="LeetCode"
            >
              <SiLeetcode size={30} />
            </a>

            <a
              href="https://www.interviewbit.com/profile/dinesh-r_866/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110"
              title="InterviewBit"
            >
              <img
                src={interviewbitLogo}
                alt="InterviewBit"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
