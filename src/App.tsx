import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Programming from './components/Programming';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Programming />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;