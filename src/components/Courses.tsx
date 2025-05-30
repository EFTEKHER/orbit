import React from 'react';
import { BookOpen, FlaskRound as Flask, Calculator, Monitor } from 'lucide-react';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className={`bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm border border-indigo-800/50 transition-all duration-500 hover:shadow-lg hover:shadow-${color}/20 group`}>
      <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${color}-500 to-${color}-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-indigo-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            এইচএসসি ও এসএসসি কোর্সসমূহ
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            এইচএসসি ও এসএসসি পরীক্ষার জন্য আমাদের বিশেষ কোর্সগুলো শিক্ষার্থীদের সেরা ফলাফল অর্জনে সাহায্য করে। প্রতিটি কোর্সে অভিজ্ঞ শিক্ষক দ্বারা পাঠদান করা হয়।
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CourseCard 
            icon={<BookOpen className="w-8 h-8 text-white" />}
            title="পদার্থবিদ্যা"
            description="এইচএসসি ও এসএসসি পর্যায়ের পদার্থবিদ্যার সকল অধ্যায় বিস্তারিতভাবে পড়ানো হয়। গাণিতিক সমস্যা সমাধান এবং ধারণাগত বিষয়গুলো সহজভাবে ব্যাখ্যা করা হয়।"
            color="purple"
          />
          
          <CourseCard 
            icon={<Flask className="w-8 h-8 text-white" />}
            title="রসায়ন"
            description="রসায়নের জটিল বিষয়গুলো সহজভাবে উপস্থাপন করা হয়। পরীক্ষায় প্রশ্নের ধরন অনুযায়ী শিক্ষার্থীদের প্রস্তুত করা হয় এবং মৌলিক ধারণাগুলো দৃঢ় করা হয়।"
            color="blue"
          />
          
          <CourseCard 
            icon={<Calculator className="w-8 h-8 text-white" />}
            title="উচ্চতর গণিত"
            description="ক্যালকুলাস, জ্যামিতি, বীজগণিতসহ উচ্চতর গণিতের সকল শাখা কভার করা হয়। নিয়মিত অনুশীলন ও পরীক্ষার মাধ্যমে দক্ষতা বৃদ্ধি করা হয়।"
            color="pink"
          />
          
          <CourseCard 
            icon={<Monitor className="w-8 h-8 text-white" />}
            title="আইসিটি"
            description="সিলেবাস অনুযায়ী সম্পূর্ণ আইসিটি বিষয় পড়ানো হয়। প্রোগ্রামিং, ডাটাবেস, নেটওয়ার্কিং সহ সকল দিক কভার করা হয়।"
            color="indigo"
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-8 backdrop-blur-sm border border-purple-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                বিশেষ সুবিধাসমূহ
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  নিয়মিত পরীক্ষা ও মূল্যায়ন
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  বিষয়ভিত্তিক নোট প্রদান
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  ছোট আকারের ক্লাস
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-purple-400 mr-2"></span>
                  অভিভাবকদের সাথে নিয়মিত যোগাযোগ
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-900/50 rounded-xl p-6 max-w-md">
              <h4 className="text-xl font-semibold mb-3 text-white">ভর্তি প্রক্রিয়া</h4>
              <p className="text-gray-300 mb-4">
                নতুন ব্যাচে ভর্তির জন্য আগে থেকেই যোগাযোগ করুন। সীমিত আসন সংখ্যা।
              </p>
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;