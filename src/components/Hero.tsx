import React from 'react';
import { Link } from 'react-scroll';
import { GraduationCap, BookOpen, Users, BarChart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-40 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8" data-aos="fade-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-slate-800">আপনার ভবিষ্যৎ উজ্জ্বল করুন</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                অর্বিট কোচিং সেন্টারে
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8">
              এইচএসসি, এসএসসি থেকে শুরু করে প্রোগ্রামিং, ডাটা সায়েন্স, ফুল স্ট্যাক ডেভেলপমেন্ট - 
              সবকিছু শিখুন অভিজ্ঞ শিক্ষকের সাথে। সেরা ফলাফল নিশ্চিত করুন।
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                to="courses"
                smooth={true}
                duration={500}
                className="btn-primary text-center text-sm md:text-base"
              >
                কোর্স দেখুন
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn-secondary text-center text-sm md:text-base"
              >
                যোগাযোগ করুন
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0" data-aos="fade-left">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-48 md:w-64 h-48 md:h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              <div className="relative z-10 bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center justify-center mb-4 md:mb-6">
                  <GraduationCap size={32} className="text-blue-600 mr-2 md:mr-3" />
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                    অর্বিট কোচিং সেন্টার
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-blue-50 transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
                    <BookOpen className="text-blue-600 mb-1 md:mb-2" size={24} />
                    <p className="text-center text-sm md:text-base font-medium">৮+ বিষয়</p>
                  </div>
                  <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-indigo-50 transition-all duration-300 hover:bg-indigo-100 hover:shadow-md">
                    <Users className="text-indigo-600 mb-1 md:mb-2" size={24} />
                    <p className="text-center text-sm md:text-base font-medium">১০০+ শিক্ষার্থী</p>
                  </div>
                  <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-purple-50 transition-all duration-300 hover:bg-purple-100 hover:shadow-md">
                    <BarChart className="text-purple-600 mb-1 md:mb-2" size={24} />
                    <p className="text-center text-sm md:text-base font-medium">৯৮% পাস</p>
                  </div>
                  <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-blue-50 transition-all duration-300 hover:bg-blue-100 hover:shadow-md">
                    <GraduationCap className="text-blue-600 mb-1 md:mb-2" size={24} />
                    <p className="text-center text-sm md:text-base font-medium">শ্রেষ্ঠ শিক্ষক</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;