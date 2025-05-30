import React, { useState } from 'react';
import { Book, Code, Database, BrainCircuit, Lightbulb, FlaskRound as Flask, Calculator, Monitor } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  category: 'academic' | 'professional';
  icon: React.ReactNode;
  description: string;
  features: string[];
}

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'professional'>('all');

  const courses: Course[] = [
    {
      id: 1,
      title: 'পদার্থবিজ্ঞান',
      category: 'academic',
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য পদার্থবিজ্ঞান কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 2,
      title: 'রসায়ন',
      category: 'academic',
      icon: <Flask className="w-12 h-12 text-blue-600" />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য রসায়ন কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 3,
      title: 'উচ্চতর গণিত',
      category: 'academic',
      icon: <Calculator className="w-12 h-12 text-blue-600" />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য উচ্চতর গণিত কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 4,
      title: 'আইসিটি',
      category: 'academic',
      icon: <Monitor className="w-12 h-12 text-blue-600" />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য আইসিটি কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 5,
      title: 'পাইথন প্রোগ্রামিং',
      category: 'professional',
      icon: <Code className="w-12 h-12 text-blue-600" />,
      description: 'বেসিক থেকে অ্যাডভান্সড লেভেল পর্যন্ত পাইথন প্রোগ্রামিং শিখুন। প্রজেক্ট ভিত্তিক হাতে-কলমে শিক্ষা।',
      features: ['পাইথন বেসিক', 'ওওপি কনসেপ্ট', 'ডাটা স্ট্রাকচার', 'ফাইল হ্যান্ডলিং', 'প্রজেক্ট']
    },
    {
      id: 6,
      title: 'ফুল স্ট্যাক ডেভেলপমেন্ট (MERN)',
      category: 'professional',
      icon: <Code className="w-12 h-12 text-blue-600" />,
      description: 'MongoDB, Express.js, React, Node.js স্ট্যাক শিখুন। বাস্তব প্রজেক্ট তৈরি করুন এবং ক্যারিয়ার শুরু করুন।',
      features: ['ফ্রন্টএন্ড ডেভেলপমেন্ট', 'ব্যাকএন্ড ডেভেলপমেন্ট', 'ডাটাবেস', 'API ইন্টিগ্রেশন', 'প্রজেক্ট']
    },
    {
      id: 7,
      title: 'ডাটা সায়েন্স ও মেশিন লার্নিং',
      category: 'professional',
      icon: <BrainCircuit className="w-12 h-12 text-blue-600" />,
      description: 'ডাটা সায়েন্স, মেশিন লার্নিং এবং ডিপ লার্নিং এর বেসিক থেকে অ্যাডভান্সড টপিক পর্যন্ত শিখুন।',
      features: ['ডাটা অ্যানালাইসিস', 'স্ট্যাটিসটিক্স', 'মেশিন লার্নিং মডেল', 'ডিপ লার্নিং', 'ডাটা ভিজুয়ালাইজেশন']
    },
    {
      id: 8,
      title: 'ডাটা স্ট্রাকচার এবং অ্যালগরিদম',
      category: 'professional',
      icon: <Database className="w-12 h-12 text-blue-600" />,
      description: 'জব ইন্টারভিউতে সফল হওয়ার জন্য ডাটা স্ট্রাকচার এবং অ্যালগরিদম শিখুন। প্রবলেম সলভিং স্কিল ডেভেলপ করুন।',
      features: ['অ্যারে, লিংকড লিস্ট, স্ট্যাক, কিউ', 'ট্রি, গ্রাফ', 'সার্চিং, সর্টিং', 'গ্রিডি, ডাইনামিক প্রোগ্রামিং', 'কমপ্লেক্সিটি অ্যানালাইসিস']
    },
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            আমাদের কোর্সসমূহ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            এইচএসসি, এসএসসি এবং প্রফেশনাল স্কিল ডেভেলপমেন্টের জন্য আমাদের বিশেষ কোর্সগুলো।
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button 
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('all')}
            >
              সব কোর্স
            </button>
            <button 
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'academic' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('academic')}
            >
              একাডেমিক
            </button>
            <button 
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeTab === 'professional' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('professional')}
            >
              প্রফেশনাল
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="bg-blue-50 p-3 rounded-xl inline-block mb-6 transform transition-transform duration-300 hover:scale-110">
                {course.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="space-y-2">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Book className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                ভর্তি হোন
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;