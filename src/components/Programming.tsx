import React from 'react';
import { Code, Database, GitBranch, Terminal } from 'lucide-react';

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-indigo-900/30 rounded-xl p-6 backdrop-blur-sm border border-indigo-800/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group">
      <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-3 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Programming: React.FC = () => {
  return (
    <section id="programming" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            প্রোগ্রামিং ও টেকনোলজি কোর্সসমূহ
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            আধুনিক প্রযুক্তি ও প্রোগ্রামিং-এর বিভিন্ন দিক শিখুন। আমাদের বিশেষায়িত কোর্সগুলো আপনাকে ক্যারিয়ার গড়তে সাহায্য করবে।
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TechCard 
            icon={<Code className="w-8 h-8 text-white" />}
            title="পাইথন প্রোগ্রামিং"
            description="পাইথন প্রোগ্রামিং ভাষার মৌলিক থেকে উন্নত পর্যায়ের সবকিছু শিখুন। ডাটা স্ট্রাকচার, অ্যালগরিদম, ওওপি ও বাস্তব প্রজেক্ট তৈরির মাধ্যমে দক্ষতা অর্জন করুন।"
          />
          
          <TechCard 
            icon={<GitBranch className="w-8 h-8 text-white" />}
            title="ফুল স্ট্যাক ডেভেলপমেন্ট (MERN স্ট্যাক)"
            description="MongoDB, Express.js, React.js, Node.js দিয়ে সম্পূর্ণ ওয়েব অ্যাপ্লিকেশন তৈরি করা শিখুন। ফ্রন্টএন্ড থেকে ব্যাকএন্ড পর্যন্ত সব দিক কভার করা হয়।"
          />
          
          <TechCard 
            icon={<Database className="w-8 h-8 text-white" />}
            title="ডাটা সায়েন্স ও মেশিন লার্নিং"
            description="ডাটা অ্যানালাইসিস, ভিজুয়ালাইজেশন, মেশিন লার্নিং এবং ডিপ লার্নিং এর মৌলিক ধারণা ও বাস্তব প্রয়োগ শিখুন।"
          />
          
          <TechCard 
            icon={<Terminal className="w-8 h-8 text-white" />}
            title="ডাটা স্ট্রাকচার ও অ্যালগরিদম"
            description="সফটওয়্যার ইঞ্জিনিয়ারিং জব ইন্টারভিউর জন্য প্রয়োজনীয় ডাটা স্ট্রাকচার ও অ্যালগরিদম সম্পর্কে বিস্তারিত শিখুন।"
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
                কেন আমাদের প্রোগ্রামিং কোর্স করবেন?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">বাস্তব প্রজেক্ট ভিত্তিক শিক্ষা</h4>
                    <p className="text-gray-300">শেখার সাথে সাথে বাস্তব প্রজেক্ট তৈরি করে পোর্টফোলিও গড়ুন</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">ইন্ডাস্ট্রি স্ট্যান্ডার্ড</h4>
                    <p className="text-gray-300">বর্তমান ইন্ডাস্ট্রির চাহিদা অনুযায়ী আপডেটেড কারিকুলাম</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">সীমিত ব্যাচ সাইজ</h4>
                    <p className="text-gray-300">প্রতিটি শিক্ষার্থীকে ব্যক্তিগত সহায়তা দেওয়ার জন্য ছোট ব্যাচ</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/70 to-indigo-900/70 p-8 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-white">রেজিস্ট্রেশন চলছে</h3>
                <p className="text-gray-300 mb-6">
                  নতুন ব্যাচে সীমিত আসন। আগে আসলে আগে পাবেন ভিত্তিতে ভর্তি নেওয়া হবে।
                </p>
                <a 
                  href="#contact" 
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  এখনই যোগাযোগ করুন
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programming;