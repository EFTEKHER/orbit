import React from 'react';
import { BookOpen, Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import logo from "./logo.png";

const About: React.FC = () => {
  const instructorImageUrl = "https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg";
  
  const achievements = [
    { icon: <GraduationCap className="text-blue-600" />, text: "রুয়েট, সিএসই থেকে স্নাতক" },
    { icon: <Briefcase className="text-blue-600" />, text: "নটর ডেম কলেজে থেকে উচ্চ মাধ্যমিক শিক্ষা " },
    { icon: <Award className="text-blue-600" />, text: "৫+ বছরের শিক্ষকতার অভিজ্ঞতা" },
    { icon: <CheckCircle className="text-blue-600" />, text: "2০০+ সফল শিক্ষার্থী" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">প্রশিক্ষকের পরিচিতি</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mt-16">
          <div className="md:w-2/5" data-aos="fade-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl transform rotate-3"></div>
              <img
                src={logo}
                alt="ইফতেখার আলী ইফতি"
                className="relative z-10 w-full h-auto rounded-xl object-cover shadow-xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
          
          <div className="md:w-3/5" data-aos="fade-left">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ইফতেখার আলী ইফতি
            </h3>
            <p className="text-slate-600 text-lg mb-6">
              <span className="font-medium text-slate-800">রুয়েট, সিএসই বিভাগ থেকে স্নাতক</span> এবং প্রাক্তন নটর ডেম কলেজের ছাত্র। ৫+ বছরের শিক্ষকতার অভিজ্ঞতা সহ বিভিন্ন বিষয়ে পারদর্শিতা। এইচএসসি এবং এসএসসি শিক্ষার্থীদের পদার্থবিদ্যা, রসায়ন, উচ্চতর গণিত, আইসিটি এবং প্রোগ্রামিং বিষয়ে দক্ষ প্রশিক্ষক।
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#courses" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <BookOpen size={18} />
                <span>কোর্স দেখুন</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;