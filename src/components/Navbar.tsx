import React, { useState, useEffect } from 'react';
import { Menu, X, Orbit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-indigo-950/90 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <Orbit className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">অর্বিট</span>
          </a>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><a href="#hero" className="hover:text-purple-300 transition-colors duration-300">হোম</a></li>
            <li><a href="#about" className="hover:text-purple-300 transition-colors duration-300">আমাদের সম্পর্কে</a></li>
            <li><a href="#courses" className="hover:text-purple-300 transition-colors duration-300">কোর্সসমূহ</a></li>
            <li><a href="#programming" className="hover:text-purple-300 transition-colors duration-300">প্রোগ্রামিং</a></li>
            <li><a href="#contact" className="hover:text-purple-300 transition-colors duration-300">যোগাযোগ</a></li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-purple-300" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 pt-4 pb-4 items-center">
              <li><a href="#hero" onClick={toggleMenu} className="block py-2 hover:text-purple-300 transition-colors duration-300">হোম</a></li>
              <li><a href="#about" onClick={toggleMenu} className="block py-2 hover:text-purple-300 transition-colors duration-300">আমাদের সম্পর্কে</a></li>
              <li><a href="#courses" onClick={toggleMenu} className="block py-2 hover:text-purple-300 transition-colors duration-300">কোর্সসমূহ</a></li>
              <li><a href="#programming" onClick={toggleMenu} className="block py-2 hover:text-purple-300 transition-colors duration-300">প্রোগ্রামিং</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="block py-2 hover:text-purple-300 transition-colors duration-300">যোগাযোগ</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;