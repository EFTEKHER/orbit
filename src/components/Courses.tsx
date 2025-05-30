import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
      icon: <Lightbulb className="text-blue-600\" size={36} />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য পদার্থবিজ্ঞান কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 2,
      title: 'রসায়ন',
      category: 'academic',
      icon: <Flask className="text-green-600" size={36} />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য রসায়ন কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 3,
      title: 'উচ্চতর গণিত',
      category: 'academic',
      icon: <Calculator className="text-purple-600\" size={36} />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য উচ্চতর গণিত কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 4,
      title: 'আইসিটি',
      category: 'academic',
      icon: <Monitor className="text-indigo-600" size={36} />,
      description: 'এইচএসসি এবং এসএসসি শিক্ষার্থীদের জন্য আইসিটি কোর্স। সম্পূর্ণ সিলেবাস, বোর্ড প্রশ্ন সমাধান এবং চূড়ান্ত প্রস্তুতি।',
      features: ['সকল অধ্যায় বিস্তারিত আলোচনা', 'সাপ্তাহিক পরীক্ষা', 'মডেল টেস্ট', 'পূর্ববর্তী বোর্ড প্রশ্নের সমাধান']
    },
    {
      id: 5,
      title: 'পাইথন প্রোগ্রামিং',
      category: 'professional',
      icon: <Code className="text-yellow-600\" size={36} />,
      description: 'বেসিক থেকে অ্যাডভান্সড লেভেল পর্যন্ত পাইথন প্রোগ্রামিং শিখুন। প্রজেক্ট ভিত্তিক হাতে-কলমে শিক্ষা।',
      features: ['পাইথন বেসিক', 'ওওপি কনসেপ্ট', 'ডাটা স্ট্রাকচার', 'ফাইল হ্যান্ডলিং', 'প্রজেক্ট']
    },
    {
      id: 6,
      title: 'ফুল স্ট্যাক ডেভেলপমেন্ট (MERN)',
      category: 'professional',
      icon: <Code className="text-red-600" size={36} />,
      description: 'MongoDB, Express.js, React, Node.js স্ট্যাক শিখুন। বাস্তব প্রজেক্ট তৈরি করুন এবং ক্যারিয়ার শুরু করুন।',
      features: ['ফ্রন্টএন্ড ডেভেলপমেন্ট', 'ব্যাকএন্ড ডেভেলপমেন্ট', 'ডাটাবেস', 'API ইন্টিগ্রেশন', 'প্রজেক্ট']
    },
    {
      id: 7,
      title: 'ডাটা সায়েন্স ও মেশিন লার্নিং',
      category: 'professional',
      icon: <BrainCircuit className="text-blue-600\" size={36} />,
      description: 'ডাটা সায়েন্স, মেশিন লার্নিং এবং ডিপ লার্নিং এর বেসিক থেকে অ্যাডভান্সড টপিক পর্যন্ত শিখুন।',
      features: ['ডাটা অ্যানালাইসিস', 'স্ট্যাটিসটিক্স', 'মেশিন লার্নিং মডেল', 'ডিপ লার্নিং', 'ডাটা ভিজুয়ালাইজেশন']
    },
    {
      id: 8,
      title: 'ডাটা স্ট্রাকচার এবং অ্যালগরিদম',
      category: 'professional',
      icon: <Database className="text-green-600" size={36} />,
      description: 'জব ইন্টারভিউতে সফল হওয়ার জন্য ডাটা স্ট্রাকচার এবং অ্যালগরিদম শিখুন। প্রবলেম সলভিং স্কিল ডেভেলপ করুন।',
      features: ['অ্যারে, লিংকড লিস্ট, স্ট্যাক, কিউ', 'ট্রি, গ্রাফ', 'সার্চিং, সর্টিং', 'গ্রিডি, ডাইনামিক প্রোগ্রামিং', 'কমপ্লেক্সিটি অ্যানালাইসিস']
    },
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">আমাদের কোর্সসমূহ</h2>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-gray-200 rounded-lg" data-aos="fade-up">
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'all' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('all')}
            >
              সব কোর্স
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'academic' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('academic')}
            >
              একাডেমিক কোর্স
            </button>
            <button 
              className={`px-4 py-2 rounded-md ${activeTab === 'professional' ? 'bg-white shadow-md' : 'hover:bg-gray-100'}`}
              onClick={() => setActiveTab('professional')}
            >
              প্রফেশনাল কোর্স
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div 
              key={course.id} 
              className="course-card"
              data-aos="fade-up"
              data-aos-delay={(course.id % 4) * 100}
            >
              <div className="flex justify-center mb-4">
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{course.title}</h3>
              <p className="text-slate-600 mb-4 text-center">{course.description}</p>
              <div className="mb-6">
                <h4 className="font-medium mb-2 text-slate-800">বিশেষ সুবিধাসমূহ:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Book className="text-blue-600 mr-2 shrink-0 mt-1" size={16} />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="block text-center btn-primary w-full"
              >
                ভর্তি হোন
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;