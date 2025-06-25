'use client'

import Image from 'next/image';
import Link from 'next/link';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiVercel } from 'react-icons/si';
import { FcAndroidOs } from "react-icons/fc";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import type { ReactElement } from 'react';
import React, { useEffect, useRef, useState } from 'react';


interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

// ProjectCard Component
export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies = [], 
  githubUrl, 
  demoUrl 
}: ProjectCardProps) {
  // Helper function to get technology icons
  const getTechIcon = (tech: string): ReactElement => {
    const techIcons: Record<string, ReactElement> = {
      'React': <FaReact className="text-blue-500" />,
      'Next.js': <SiNextdotjs className="text-black" />,
      'Node.js': <FaNodeJs className="text-green-600" />,
      'Python': <FaPython className="text-yellow-500" />,
      'JavaScript': <FaJsSquare className="text-yellow-400" />,
      'Tailwind': <SiTailwindcss className="text-cyan-500" />,
      'MongoDB': <SiMongodb className="text-green-500" />,
      'Vercel': <SiVercel className="text-black-600" />,
      'Java': <FaJava className="text-blue-600" />,
      'Android':<FcAndroidOs />,
      'TailwindCss':<RiTailwindCssFill className='text-blue-600'/>,
      'Typescript':<BiLogoTypescript className='text-blue-400'/>
    };
    return techIcons[tech] || <span className="text-gray-500">{tech}</span>;
  };

  // Scrolling Animation
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const currentCard = cardRef.current;  // Save reference here

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '80px 0px',
    }
  );

  if (currentCard) {
    observer.observe(currentCard);
  }

  return () => {
    if (currentCard) {
      observer.unobserve(currentCard);
    }
  };
}, []);


  return (
    
    <div ref={cardRef} className={`
        bg-white rounded-lg shadow-lg overflow-hidden mb-8
        transition-all duration-800 ease-out transform-gpu origin-center
        ${isVisible 
          ? 'scale-100 opacity-100' 
          : 'scale-80 opacity-60'
        }
        hover:shadow-2xl hover:${isVisible ? 'scale-[1.02]' : 'scale-[0.82]'}
      `}>
      
      <div className="flex flex-col md:flex-row">
        {/* Left side - Content */}
        <div className="flex-1 p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h3>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          {/* Technology Icons */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech: string, index: number) => (
                <div key={index} className="flex items-center gap-1 text-sm">
                  {getTechIcon(tech)}
                  <span className="text-gray-600">{tech}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex hover:scale-110 items-center gap-2 bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <FaGithub />
                <span>Code</span>
              </Link>
            )}
            
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex hover:scale-110 items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </Link>
            )}
          </div>
        </div>
        
        {/* Image */}
        <div className="md:w-1/2">
          <div className="relative h-64 md:h-full">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
