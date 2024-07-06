import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <button
        className="text-black focus:outline-none"
        onClick={toggleNavbar}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute right-0 top-0 mt-12 bg-white shadow-lg p-40">
          <ul className="space-y-14 text-right">
            <li>
              <Link to="/" className="text-black hover:text-gray-700" onClick={toggleNavbar}>Home</Link>
            </li>
            <li>
              <Link to="/product" className="text-black hover:text-gray-700" onClick={toggleNavbar}>Product</Link>
            </li>
            <li>
              <Link to="/career" className="text-black hover:text-gray-700" onClick={toggleNavbar}>Career</Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-gray-700" onClick={toggleNavbar}>Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
