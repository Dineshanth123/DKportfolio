import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-teal-500">My Portfolio</h1>
        
        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Links */}
        <div className={`md:flex md:items-center space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          {[
            'About',
            'Education',
            'Skills',
            'Projects',
            'Achievements',
            'DSA',
            'Internship',
            'Certifications',
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white hover:text-teal-500 transition-colors py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
