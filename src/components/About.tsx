import React from 'react';
import { GraduationCap, Award, Users, Target } from 'lucide-react';
import logo from "./logo.png"; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            আমাদের সম্পর্কে
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
              <div className="mr-0 sm:mr-4 bg-blue-50 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">প্রশিক্ষক পরিচিতি</h3>
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-blue-600 sm:mr-4 transform transition-transform duration-300 hover:scale-100">
                    <img 
                      src={logo} 
                      alt="ইফতেখার আলী ইফতি" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-900">ইফতেখার আলী ইফতি</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (রুয়েট)<br />
                      কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  নটর ডেম কলেজের প্রাক্তন শিক্ষার্থী। বর্তমানে এইচএসসি ও এসএসসি শিক্ষার্থীদের পাশাপাশি প্রোগ্রামিং ও টেকনোলজি বিষয়ক প্রশিক্ষণ প্রদান করছেন।
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start">
              <div className="mr-0 sm:mr-4 bg-blue-50 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">অভিজ্ঞতা</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  বিগত কয়েক বছর ধরে এইচএসসি এবং এসএসসি শিক্ষার্থীদের পদার্থবিদ্যা, রসায়ন, উচ্চতর গণিত, আইসিটি সহ বিভিন্ন বিষয়ে পাঠদান করছেন। পাশাপাশি প্রোগ্রামিং, ডাটা সায়েন্স, ওয়েব ডেভেলপমেন্ট, মেশিন লার্নিং ইত্যাদি বিষয়ে অভিজ্ঞ।
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">ব্যক্তিগত মনোযোগ</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত মনোযোগ দেওয়া হয়, যাতে তারা সহজে বিষয়গুলো আয়ত্ত করতে পারে।
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">লক্ষ্য-ভিত্তিক শিক্ষাদান</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  পরীক্ষায় উচ্চ ফলাফল অর্জন এবং বাস্তব জীবনে প্রয়োগের উপর বিশেষ গুরুত্ব দেওয়া হয়।
                </p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-6 bg-blue-50 rounded-xl p-4 sm:p-6 shadow-lg transform transition-all duration-500 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">আমাদের দর্শন</h3>
              <p className="text-gray-600 text-sm sm:text-base">
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