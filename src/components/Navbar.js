"use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950">
      <div className="flex justify-between items-center px-5 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-100">My Portfolio</h1>

        <ul className="hidden md:flex gap-6">
          <li><a href="#about" className="text-gray-100 hover:text-gray-300">About</a></li>
          <li><a href="#projects" className="text-gray-100 hover:text-gray-300">Projects</a></li>
          <li><a href="#skills" className="text-gray-100 hover:text-gray-300">Skills</a></li>
          <li><a href="#contact" className="text-gray-100 hover:text-gray-300">Contact</a></li>
        </ul>

        <button
          className="md:hidden text-2xl text-gray-100 hover:text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-800 via-indigo-800 to-violet-700 w-full">
            <ul className="flex flex-col items-center gap-4 py-4">
            <li><a href="#about" className="text-gray-100 hover:text-gray-300" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#projects" className="text-gray-100 hover:text-gray-300" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#skills" className="text-gray-100 hover:text-gray-300" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#contact" className="text-gray-100 hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </div>
        )}

    </nav>
  );
}
