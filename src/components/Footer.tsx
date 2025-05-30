import React from 'react';
import { Link } from 'react-scroll';
import { GraduationCap as Graduation, Facebook, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Graduation className="text-blue-400" size={32} />
              <span className="text-2xl font-bold text-white">অর্বিট</span>
            </div>
            <p className="text-slate-300 mb-6">
              অর্বিট কোচিং সেন্টার - সেরা শিক্ষকের সাথে উন্নত শিক্ষার প্রতিশ্রুতি। এইচএসসি, এসএসসি থেকে প্রোগ্রামিং, ডাটা সায়েন্স সব কিছু একসাথে।
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Youtube size={20} />
              </a>
              <a href="mailto:eftekherali2000@gmail.com" className="bg-slate-700 hover:bg-blue-600 p-2 rounded-full transition-colors duration-300">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">দ্রুত লিংক</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  হোম
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  প্রশিক্ষক
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  কোর্সসমূহ
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">কোর্স ক্যাটাগরি</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  এইচএসসি কোর্স
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  এসএসসি কোর্স
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  প্রোগ্রামিং কোর্স
                </Link>
              </li>
              <li>
                <Link
                  to="courses"
                  smooth={true}
                  duration={500}
                  className="text-slate-300 hover:text-white flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  ডাটা সায়েন্স কোর্স
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">যোগাযোগ তথ্য</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">ঠিকানা:</span>
                <span className="text-slate-300">৭০ চেয়ারম্যান পাড়া, দক্ষিণ খান ঢাকা, ১২৩০</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">ফোন:</span>
                <span className="text-slate-300">০১৮২৯৩২৯৯০৭, ০১৭৭৯৮৭৫৭৭৩</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">ইমেইল:</span>
                <a href="mailto:eftekherali2000@gmail.com" className="text-slate-300 hover:text-white">
                  eftekherali2000@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">সময়:</span>
                <span className="text-slate-300">শনিবার - বৃহস্পতিবার: সকাল ৯টা - রাত ৮টা</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} অর্বিট কোচিং সেন্টার। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;