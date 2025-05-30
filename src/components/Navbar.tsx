import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { GraduationCap as Graduation, Menu, X, BookOpen, User, PhoneCall } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', to: 'home', icon: <Graduation size={18} /> },
    { name: 'প্রশিক্ষক', to: 'about', icon: <User size={18} /> },
    { name: 'কোর্সসমূহ', to: 'courses', icon: <BookOpen size={18} /> },
    { name: 'যোগাযোগ', to: 'contact', icon: <PhoneCall size={18} /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 glass-effect shadow-md'
          : 'py-3 md:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            className="flex items-center space-x-2 cursor-pointer"
            smooth={true}
            duration={500}
          >
            <Graduation className="text-blue-600" size={28} />
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              অর্বিট
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="flex items-center space-x-1 text-sm lg:text-base font-medium text-slate-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn-primary text-sm lg:text-base py-2 px-4 md:py-3 md:px-6"
            >
              কোর্স ভর্তি
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-white rounded-lg shadow-lg p-4 animated-gradient text-white absolute left-4 right-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="flex items-center space-x-2 py-2 px-3 rounded-md hover:bg-white/10 transition-colors duration-300 cursor-pointer text-sm"
                  onClick={toggleMenu}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-secondary bg-white/90 hover:bg-white text-sm py-2"
                onClick={toggleMenu}
              >
                কোর্স ভর্তি
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;