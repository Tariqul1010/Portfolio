import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Toolkit from './sections/Toolkit';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certificates from './sections/Certificates';
import Resume from './sections/Resume';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import './App.css';

export default function App() {
  const showToast = (msg) => toast.info(msg);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero showToast={showToast} />
        <Toolkit />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Resume />
        <Contact showToast={showToast} />
      </main>
      <Footer />
      <BackToTop />
      <Toaster position="bottom-center" />
    </>
  );
}
