import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { CiMail } from "react-icons/ci";
//import { TypingEffect, MultiTypingEffect, AnimatedTyping } from "@/animations/typing";

export default function HomePage() {
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
          <div className="w-60 h-60 rounded-full border-4 border-gray-400 overflow-hidden mb-6">
            <Image
              src="/portrait_1.jpg"
              alt="Profile Picture"
              width={1280}
              height={960}
              className="w-full h-full object-cover scale-200 translate-x-4"
            />
          </div>
          
          <h2 className="text-2xl font-semibold mb-8 text-black text-center px-4">
            Hello! I&apos;m Michael, 
            a Computer Science undergraduate <br/> 
            with a passion for <span className="text-blue-800">full-stack development</span> and <span className="text-blue-800">cybersecurity</span>.
          </h2>
    
          {/* Icon-only buttons */}
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
        </div>
    </section>
  );
}