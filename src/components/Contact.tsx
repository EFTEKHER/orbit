import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the data to the server here
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset submission status after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-indigo-950"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300">
            যোগাযোগ করুন
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            আমাদের সাথে যোগাযোগ করুন। আপনার যেকোনো প্রশ্ন বা জিজ্ঞাসার উত্তর দিতে আমরা সর্বদা প্রস্তুত।
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="bg-indigo-900/30 rounded-xl p-8 backdrop-blur-sm border border-indigo-800/50 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">আমাদের ঠিকানা</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-300 mb-1">অবস্থান</h4>
                    <p className="text-gray-300">৭০ চেয়ারম্যান পাড়া, দক্ষিণ খান, ঢাকা-১২৩০</p>
                    <a 
                      href="https://maps.app.goo.gl/7KmVzGEx9f9ykpEm6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300 inline-flex items-center mt-2"
                    >
                      গুগল ম্যাপে দেখুন
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-300 mb-1">ফোন নম্বর</h4>
                    <p className="text-gray-300">০১৮২৯৩২৯৯০৭</p>
                    <p className="text-gray-300">০১৭৭৯৮৭৫৭৭৩</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-300 mb-1">ইমেইল</h4>
                    <p className="text-gray-300">eftekherali2000@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-900/30 rounded-xl overflow-hidden backdrop-blur-sm border border-indigo-800/50 h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4891826175377!2d90.42140237599937!3d23.867446678613712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x93044f932c5dbd8a!2sDakshin%20Khan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1718107380642!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-indigo-900/30 rounded-xl p-8 backdrop-blur-sm border border-indigo-800/50">
            <h3 className="text-2xl font-semibold mb-6 text-white">আমাদের সাথে যোগাযোগ করুন</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">নাম</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-indigo-950/60 border border-indigo-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="আপনার নাম"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">ফোন নম্বর</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-indigo-950/60 border border-indigo-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="আপনার ফোন নম্বর"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">ইমেইল</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-indigo-950/60 border border-indigo-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="আপনার ইমেইল"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">বার্তা</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  className="w-full px-4 py-3 bg-indigo-950/60 border border-indigo-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="আপনার বার্তা লিখুন"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {isSubmitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
              </button>
              
              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                  আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;