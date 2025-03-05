import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <p className="text-center text-sm text-white-400">
        © {new Date().getFullYear()} @ Dinesh Kanth R | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
