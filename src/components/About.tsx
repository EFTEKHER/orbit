import React from 'react';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            আমাদের সম্পর্কে
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 fade-in-up">
            <div className="flex items-start mb-6">
              <div className="mr-4 bg-blue-50 p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">প্রশিক্ষক পরিচিতি</h3>
                <div className="flex items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-600 mr-4 transform transition-transform duration-300 hover:scale-110">
                    <img 
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg" 
                      alt="ইফতেখার আলী ইফতি" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">ইফতেখার আলী ইফতি</h4>
                    <p className="text-gray-600">
                      রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (রুয়েট)<br />
                      কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  নটর ডেম কলেজের প্রাক্তন শিক্ষার্থী। বর্তমানে এইচএসসি ও এসএসসি শিক্ষার্থীদের পাশাপাশি প্রোগ্রামিং ও টেকনোলজি বিষয়ক প্রশিক্ষণ প্রদান করছেন।
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mr-4 bg-blue-50 p-3 rounded-lg">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">অভিজ্ঞতা</h3>
                <p className="text-gray-600">
                  বিগত কয়েক বছর ধরে এইচএসসি এবং এসএসসি শিক্ষার্থীদের পদার্থবিদ্যা, রসায়ন, উচ্চতর গণিত, আইসিটি সহ বিভিন্ন বিষয়ে পাঠদান করছেন। পাশাপাশি প্রোগ্রামিং, ডাটা সায়েন্স, ওয়েব ডেভেলপমেন্ট, মেশিন লার্নিং ইত্যাদি বিষয়ে অভিজ্ঞ।
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">ব্যক্তিগত মনোযোগ</h3>
                <p className="text-gray-600">
                  প্রতিটি শিক্ষার্থীর প্রতি ব্যক্তিগত মনোযোগ দেওয়া হয়, যাতে তারা সহজে বিষয়গুলো আয়ত্ত করতে পারে।
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">লক্ষ্য-ভিত্তিক শিক্ষাদান</h3>
                <p className="text-gray-600">
                  পরীক্ষায় উচ্চ ফলাফল অর্জন এবং বাস্তব জীবনে প্রয়োগের উপর বিশেষ গুরুত্ব দেওয়া হয়।
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-50 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">আমাদের দর্শন</h3>
              <p className="text-gray-600">
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