'use client';

import React, { useState, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Landing() {
  const [text] = useTypewriter({
    words: ['Sasun Madhuranga'],
    loop: 0, 
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section className="flex flex-col justify-center items-center h-[90vh] text-center bg-gradient-to-r from-gray-800 via-slate-800 to-indigo-950 text-white px-4">
      <h2 className="text-lg md:text-xl mb-2">Hi, I am</h2>

      <h1 className="text-4xl md:text-6xl font-extrabold">
        {text}
        <span className="text-white">|</span>
      </h1>

      <p className="mt-3 text-2xl md:text-3xl font-semibold">
         Full-Stack Developer
      </p>

      <h4 className="mt-4 max-w-2xl text-base md:text-lg text-gray-100">
        I build responsive and scalable web applications with{' '}
        <span className="font-bold text-white">React & Node.js</span>.
      </h4>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          View My Work
        </a>
        <a
          href="/sasun_madhuranga_resume.pdf"
          download
          className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
        >
          Download CV
        </a>
      </div>

      <div className="mt-6 flex gap-6">
        <a
          href="https://github.com/sasunmadhuranga"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <i className="fab fa-github text-2xl" aria-hidden="true"></i>
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/sasun-madhuranga/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <i className="fab fa-linkedin text-2xl" aria-hidden="true"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </section>
  );
}
