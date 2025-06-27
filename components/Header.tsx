'use client'; 
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 text-black backdrop-blur-md p-4 shadow-md">
        <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold ml-10">Emata Michael Jr Rasco</h1>
            <div className="flex justify-end gap-10 mr-10">
                <Link href="#home" className="hover:underline">
                Home
                </Link>
                <Link href="#about" className="hover:underline">
                About
                </Link>
                <Link href="#experience" className="hover:underline">
                Experience
                </Link>
                <Link href="#projects" className="hover:underline">
                Projects
                </Link>
                <Link href="#contact" className="hover:underline">
                Contact
                </Link>
            </div>
        </div>
    </header>
  );
}