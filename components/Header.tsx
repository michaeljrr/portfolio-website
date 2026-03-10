'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger & close icons
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 text-black backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <Link href="#home" className="text-lg md:text-xl font-bold">Emata Michael Jr Rasco</Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <nav className="hidden md:flex gap-8">
          <Link 
            href="#home" 
            className={`transition-all border-b-2 ${activeSection === 'home' ? 'border-black' : 'border-transparent'}`}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className={`transition-all border-b-2 ${activeSection === 'about' ? 'border-black' : 'border-transparent'}`}
          >
            About
          </Link>
          <Link 
            href="#certifications" 
            className={`transition-all border-b-2 ${activeSection === 'certifications' ? 'border-black' : 'border-transparent'}`}
          >
            Certifications
          </Link>
          <Link 
            href="#experience" 
            className={`transition-all border-b-2 ${activeSection === 'experience' ? 'border-black' : 'border-transparent'}`}
          >
            Experience
          </Link>
          <Link 
            href="#projects" 
            className={`transition-all border-b-2 ${activeSection === 'projects' ? 'border-black' : 'border-transparent'}`}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className={`transition-all border-b-2 ${activeSection === 'contact' ? 'border-black' : 'border-transparent'}`}
          >
            Contact
          </Link>
        </nav>

        </motion.div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="flex flex-col gap-4 bg-white/90 backdrop-blur-md px-4 pb-4 md:hidden">
          <Link 
            href="#home" 
            className={`transition-all border-b-2 ${activeSection === 'home' ? 'border-black' : 'border-transparent'}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="#about" 
            className={`transition-all border-b-2 ${activeSection === 'about' ? 'border-black' : 'border-transparent'}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#certifications" 
            className={`transition-all border-b-2 ${activeSection === 'certifications' ? 'border-black' : 'border-transparent'}`}
            onClick={() => setIsOpen(false)}
          >
            Certifications
          </Link>
          <Link 
            href="#experience" 
            className={`transition-all border-b-2 ${activeSection === 'experience' ? 'border-black' : 'border-transparent'}`}
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link 
            href="#projects" 
            className={`transition-all border-b-2 ${activeSection === 'projects' ? 'border-black' : 'border-transparent'}`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            className={`transition-all border-b-2 ${activeSection === 'contact' ? 'border-black' : 'border-transparent'}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
