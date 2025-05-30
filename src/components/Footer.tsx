import React from 'react';
import { Orbit, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-indigo-950 border-t border-indigo-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Orbit className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">অর্বিট</span>
            </div>
            <p className="text-gray-400 mb-6">
              আমরা আপনার সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হল শিক্ষার্থীদের জ্ঞান ও দক্ষতা বৃদ্ধি করে তাদের ভবিষ্যৎ কেরিয়ার গঠনে সহায়তা করা।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-indigo-900/50 p-2 rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-purple-400" />
              </a>
              <a href="#" className="bg-indigo-900/50 p-2 rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-purple-400" />
              </a>
              <a href="#" className="bg-indigo-900/50 p-2 rounded-full hover:bg-purple-500/20 transition-colors duration-300">
                <Twitter className="w-5 h-5 text-purple-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#hero" className="hover:text-purple-300 transition-colors duration-300">হোম</a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors duration-300">আমাদের সম্পর্কে</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-purple-300 transition-colors duration-300">এইচএসসি/এসএসসি কোর্স</a>
              </li>
              <li>
                <a href="#programming" className="hover:text-purple-300 transition-colors duration-300">প্রোগ্রামিং কোর্স</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-300 transition-colors duration-300">যোগাযোগ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">যোগাযোগ করুন</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span>eftekherali2000@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-purple-400 mr-3" />
                <span>০১৮২৯৩২৯৯০৭, ০১৭৭৯৮৭৫৭৭৩</span>
              </li>
              <li className="flex items-start">
                <div>
                  <svg className="w-5 h-5 text-purple-400 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span>৭০ চেয়ারম্যান পাড়া, দক্ষিণ খান, ঢাকা-১২৩০</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-indigo-900/50 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} অর্বিট কোচিং সেন্টার। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;