import React from 'react';
import { GraduationCap, Award, Users, Target } from 'lucide-react';
import logo from "./logo.png"; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-indigo-950/50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            আমাদের সম্পর্কে
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm border border-indigo-800/50 transform transition-all duration-500 hover:scale-105">
            <div className="flex items-start mb-6">
              <div className="mr-4 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex flex-col items-center sm:items-start">
                  <img 
                    src={logo}
                    alt="ইফতেখার আলী ইফতি" 
                    className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-purple-300">প্রশিক্ষক পরিচিতি</h3>
                  <p className="text-gray-300 text-center sm:text-left">
                    <span className="text-lg font-medium text-white">ইফতেখার আলী ইফতি</span><br />
                    রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (রুয়েট), কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ থেকে স্নাতক। নটর ডেম কলেজের প্রাক্তন শিক্ষার্থী।
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">অভিজ্ঞতা</h3>
                <p className="text-gray-300">
                  বিগত কয়েক বছর ধরে এইচএসসি এবং এসএসসি শিক্ষার্থীদের পদার্থবিদ্যা, রসায়ন, উচ্চতর গণিত, আইসিটি সহ বিভিন্ন বিষয়ে পাঠদান করছেন। পাশাপাশি প্রোগ্রামিং, ডাটা সায়েন্স, ওয়েব ডেভেলপমেন্ট, মেশিন লার্নিং ইত্যাদি বিষয়ে অভিজ্ঞ।
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm border border-indigo-800/50 transform transition-all duration-500 hover:scale-105">
                <Users className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-300">ব্যক্তিগত মনোযোগ</h3>
                <p className="text-gray-300">
                  প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত মনোযোগ দেওয়া হয়, যাতে তারা সহজে বিষয়গুলো আয়ত্ত করতে পারে।
                </p>
              </div>
              
              <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm border border-indigo-800/50 transform transition-all duration-500 hover:scale-105">
                <Target className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-purple-300">লক্ষ্য-ভিত্তিক শিক্ষাদান</h3>
                <p className="text-gray-300">
                  পরীক্ষায় উচ্চ ফলাফল অর্জন এবং বাস্তব জীবনে প্রয়োগের উপর বিশেষ গুরুত্ব দেওয়া হয়।
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 backdrop-blur-sm border border-purple-500/30 transform transition-all duration-500 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-purple-300">আমাদের দর্শন</h3>
              <p className="text-gray-300">
                "অর্বিট" এর মূল লক্ষ্য হলো শিক্ষার্থীদের সর্বোচ্চ সম্ভাবনা অর্জনে সাহায্য করা। আমরা শুধু পরীক্ষার জন্য নয়, বরং আজীবন শেখার দক্ষতা বিকাশে বিশ্বাস করি। আমাদের শিক্ষা পদ্ধতি বৈজ্ঞানিক ও আধুনিক, যা শিক্ষার্থীদের চিন্তার দক্ষতা ও সৃজনশীলতা বাড়াতে সাহায্য করে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;