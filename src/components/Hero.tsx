import React, { useEffect, useState } from 'react';
import { Rocket, Sparkles, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-purple-700/20 -top-20 -left-20 blur-3xl animate-pulse"></div>
        <div className="absolute w-80 h-80 rounded-full bg-blue-700/20 bottom-10 right-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-72 h-72 rounded-full bg-pink-700/20 top-1/2 left-1/3 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className={`w-full lg:w-1/2 transition-all duration-1000 transform ${animate ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-purple-900 to-pink-800 p-0.5 rounded-md">
                <div className="bg-indigo-950 px-4 py-1 rounded-md flex items-center">
                  <Sparkles className="w-5 h-5 text-pink-700 mr-2" />
                  <span className="text-white text-sm">ভবিষ্যতের শিক্ষার নতুন দিগন্ত</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-900 via-pink-300 to-purple-800">
              <span className="block">অর্বিট কোচিং সেন্টার</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-purple-800">উৎকর্ষতার দিকে আপনার যাত্রা</span>
            </h1>
            
            <p className="text-lg md:text-xl text-black mb-8">
              এইচএসসি, এসএসসি এবং প্রোগ্রামিং শিক্ষার জন্য  অন্যতম সেরা কোচিং সেন্টার। আমরা আপনার সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center">
                কোর্স দেখুন
              </a>
              <a href="#contact" className="px-8 py-3 border border-purple-500 rounded-full text-black font-medium hover:bg-purple-500/10 transition-all duration-300 transform hover:-translate-y-1 text-center">
                যোগাযোগ করুন
              </a>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 flex justify-center transition-all duration-1000 delay-300 transform ${animate ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <div className="absolute inset-1 bg-indigo-950 rounded-full flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <Rocket className="w-20 h-20 text-purple-400 animate-bounce" style={{ animationDuration: '3s' }} />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="w-6 h-6 text-white" />
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