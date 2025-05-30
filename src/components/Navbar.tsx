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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-indigo-950/90 text-white shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <Orbit className="w-8 h-8 text-purple-700 group-hover:text-purple-300 transition-colors duration-300" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-700">অর্বিট</span>
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
            className="md:hidden text-white focus:outline-none p-2 hover:bg-purple-500/10 rounded-lg transition-colors duration-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-purple-300" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden fixed inset-x-0 top-[calc(100%)] bg-indigo-950/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <ul className="container mx-auto px-4 py-6 space-y-4">
            <li>
              <a 
                href="#hero" 
                onClick={toggleMenu} 
                className="block py-2 px-4 hover:bg-purple-500/10 rounded-lg transition-colors duration-300"
              >
                হোম
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={toggleMenu} 
                className="block py-2 px-4 hover:bg-purple-500/10 rounded-lg transition-colors duration-300"
              >
                আমাদের সম্পর্কে
              </a>
            </li>
            <li>
              <a 
                href="#courses" 
                onClick={toggleMenu} 
                className="block py-2 px-4 hover:bg-purple-500/10 rounded-lg transition-colors duration-300"
              >
                কোর্সসমূহ
              </a>
            </li>
            <li>
              <a 
                href="#programming" 
                onClick={toggleMenu} 
                className="block py-2 px-4 hover:bg-purple-500/10 rounded-lg transition-colors duration-300"
              >
                প্রোগ্রামিং
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={toggleMenu} 
                className="block py-2 px-4 hover:bg-purple-500/10 rounded-lg transition-colors duration-300"
              >
                যোগাযোগ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;