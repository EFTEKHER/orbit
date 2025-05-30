import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, you would send the form data to an email service
    // For this example, we'll simulate a successful form submission
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      setFormStatus({
        success: false,
        message: 'অনুগ্রহ করে সব তথ্য পূরণ করুন।'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        success: true,
        message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই যোগাযোগ করব।'
      });
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset();
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      }
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title" data-aos="fade-up">যোগাযোগ করুন</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">আমাদের সাথে যোগাযোগ করুন</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">ঠিকানা</h4>
                    <p className="text-slate-600">৭০ চেয়ারম্যান পাড়া, দক্ষিণ খান ঢাকা, ১২৩০</p>
                    <a 
                      href="https://maps.app.goo.gl/7KmVzGEx9f9ykpEm6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center mt-1"
                    >
                      গুগল ম্যাপে দেখুন
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">ফোন নম্বর</h4>
                    <p className="text-slate-600">০১৮২৯৩২৯৯০৭, ০১৭৭৯৮৭৫৭৭৩</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">ইমেইল</h4>
                    <p className="text-slate-600">eftekherali2000@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Clock className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800">সময়সূচি</h4>
                    <p className="text-slate-600">শনিবার - বৃহস্পতিবার: সকাল ৯টা - রাত ৮টা</p>
                    <p className="text-slate-600">শুক্রবার: সকাল ১০টা - বিকেল ৫টা</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-slate-800 mb-4">লোকেশন ম্যাপ</h4>
                <div className="rounded-lg overflow-hidden h-64 shadow-md">
                 <a href='https://maps.app.goo.gl/7KmVzGEx9f9ykpEm6' target="_blank" rel="noopener noreferrer">
                   <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.767954156969!2d90.4204!3d23.853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c64c103a8093%3A0xd660a4f50365294a!2sChairman%20Para%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="অর্বিট কোচিং সেন্টার লোকেশন"
                  ></iframe>
                 </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">আমাদের একটি বার্তা পাঠান</h3>
              
              {formStatus && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      আপনার নাম *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input-field"
                      placeholder="আপনার পূর্ণ নাম লিখুন"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      ইমেইল *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-field"
                      placeholder="আপনার ইমেইল লিখুন"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      ফোন নম্বর *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input-field"
                      placeholder="আপনার ফোন নম্বর লিখুন"
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-slate-700 mb-1">
                      কোর্স নির্বাচন করুন *
                    </label>
                    <select
                      id="course"
                      name="course"
                      className="input-field"
                      onChange={handleChange}
                      required
                    >
                      <option value="">কোর্স নির্বাচন করুন</option>
                      <option value="physics">পদার্থবিজ্ঞান</option>
                      <option value="chemistry">রসায়ন</option>
                      <option value="math">উচ্চতর গণিত</option>
                      <option value="ict">আইসিটি</option>
                      <option value="python">পাইথন প্রোগ্রামিং</option>
                      <option value="mern">ফুল স্ট্যাক ডেভেলপমেন্ট (MERN)</option>
                      <option value="data-science">ডাটা সায়েন্স ও মেশিন লার্নিং</option>
                      <option value="dsa">ডাটা স্ট্রাকচার এবং অ্যালগরিদম</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    বার্তা
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="input-field"
                    placeholder="আপনার প্রশ্ন বা মতামত লিখুন"
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  বার্তা পাঠান
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;