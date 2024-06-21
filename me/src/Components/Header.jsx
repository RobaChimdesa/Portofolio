import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-800 text-white py-4 z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/">My Portfolio</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          {/* Add similar links for other pages */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;