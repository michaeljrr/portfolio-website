'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
import { TypingEffect } from "@/animations/typing";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [showCursor, setShowCursor] = useState(true);

  const [showSecond, setShowSecond] = useState(false);
  const [showSecondCursor, setShowSecondCursor] = useState(true);

  const [showThird, setShowThird] = useState(false);
  const [showThirdCursor, setShowThirdCursor] = useState(true);

  const [showFourth, setShowFourth] = useState(false);

  return (
    <section id="home" className="pt-20 p-8 min-h-screen relative flex flex-col justify-center">
        {/* Background Image Container with fixed aspect ratio */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/mountain.jpg"
            alt="Background Photo"
            fill
            className="object-cover opacity-30"
            style={{
              objectPosition: 'center center'
            }}
            priority
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          {/* Circular profile picture */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          <div className="w-60 h-60 rounded-full border-4 border-gray-400 overflow-hidden mb-6">
            <Image
              src="/portrait_1.jpg"
              alt="Profile Picture"
              width={1280}
              height={960}
              className="w-full h-full object-cover scale-200 translate-x-4"
            />
          </div>
          </motion.div>

          <p className="text-2xl font-semibold mb-8 text-center px-4 max-w-3xl mt-3 ">
            <TypingEffect
              text="Hello! I'm Michael, a Computer Science undergraduate with a passion for "
              speed={10}
              className="text-black"
              showCursor={showCursor}
              cursorClassName="text-blue-500"
              onComplete={() => {setShowCursor(false); setShowSecond(true)}}
            />

            {showSecond && (
              <TypingEffect
                text="full-stack development "
                speed={10}
                delay={0}
                className="text-blue-800"
                cursorClassName="text-blue-500"
                showCursor={showSecondCursor}
                onComplete={() => {setShowSecondCursor(false); setShowThird(true)}}
              />
            )}

            {showThird && (
              <TypingEffect
                text="and "
                speed={10}
                delay={0}
                className="text-black"
                cursorClassName="text-blue-500"
                showCursor={showThirdCursor}
                onComplete={() => {setShowThirdCursor(false); setShowFourth(true)}}
              />
            )}

            {showFourth && (
              <TypingEffect
                text="cybersecurity."
                speed={10}
                delay={0}
                className="text-blue-800"
                cursorClassName="text-blue-500"
              />
            )}



          </p>

          {/*
          <h2 className="text-2xl font-semibold mb-8 text-black text-center px-4">
            Hello! I&apos;m Michael, 
            a Computer Science undergraduate <br/> 
            with a passion for <span className="text-blue-800">full-stack development</span> and <span className="text-blue-800">cybersecurity</span>.
          </h2>*/}
    
          {/* Icon-only buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <div className="flex gap-4 justify-center flex-wrap">
            {/* Contact Me Button */}

            <Link 
              href="#contact" 
              className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:scale-110 transition-all duration-200"
            >
              <CiMail className='w-6 h-6 '/>
              Contact Me
            </Link>
            

            {/* GitHub Icon */}
            <a 
              href="https://github.com/michaeljrr" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-900 hover:scale-110 text-white p-3 rounded-full transition-all duration-200"
            >
              <FaGithub className="text-white w-6 h-6" />
            </a>
            
            {/* LinkedIn Icon */}
            <Link 
              href="https://www.linkedin.com/in/michaeljrr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 hover:scale-110 text-white p-3 rounded-full transition-all duration-200"
            >
              <FaLinkedin className="text-white w-6 h-6" />
            </Link>
          </div>
          </motion.div>
        </div>
    </section>
  );
}