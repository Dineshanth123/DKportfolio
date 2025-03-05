import React from 'react';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import DSA from './components/DSA';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="pt-20 bg-gray-100">
      <Navbar />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <DSA />
      <Internship />
      <Certifications />
      <Footer />
      
      
    </div>
  );
};

export default App;
