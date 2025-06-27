'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger & close icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 text-black backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4">
        <h1 className="text-lg md:text-xl font-bold">Emata Michael Jr Rasco</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          <Link href="#home" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#experience" className="hover:underline">Experience</Link>
          <Link href="#projects" className="hover:underline">Projects</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>

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
          <Link href="#home" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#experience" className="hover:underline" onClick={() => setIsOpen(false)}>Experience</Link>
          <Link href="#projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
