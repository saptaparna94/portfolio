"use client";

import { useState } from "react";

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 md:px-20 py-10">

      {/* Navbar */}
      <nav className="flex justify-between items-center mb-20">
        <h1 className="text-2xl font-bold tracking-wide">Saptaparna</h1>

        <div className="space-x-6 text-gray-300">

          {/* ABOUT */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              setShowAbout(true);
            }}
            className="hover:text-white transition"
          >
            About
          </a>

          {/* PROJECTS */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              setShowProjects(true);
            }}
            className="hover:text-white transition"
          >
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-32 max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          I'm <span className="text-blue-400">Saptaparna</span>, Software Developer
        </h2>

        <p className="mt-6 text-lg text-gray-300">
          I build modern web applications and intelligent ML systems with real-world impact.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition shadow-lg shadow-blue-500/30"
          >
            View Resume
          </a>

          <button
            onClick={() => setShowProjects(true)}
            className="px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition"
          >
            View Projects
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="mb-32 max-w-3xl">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>

        <button
          onClick={() => setShowAbout(true)}
          className="text-blue-400 hover:underline"
        >
          Click to view About Me
        </button>
      </section>

      {/* ABOUT MODAL (GLASSMORPHISM VERCEL STYLE) */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xl">

          {/* glow */}
          <div className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* card */}
          <div className="relative w-[90%] max-w-2xl rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl p-8">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">About Me</h2>

              <button
                onClick={() => setShowAbout(false)}
                className="text-gray-300 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-gray-200 text-sm leading-relaxed">

              <p>
                Software Developer with 8+ months of experience (including internship) building scalable web applications using Next.js and Ruby on Rails.
              </p>

              <p>
                Skilled in RESTful APIs, database optimization, AWS deployment, and full-stack development with secure authentication systems.
              </p>

              <p>
                Passionate about React, Next.js, and Machine Learning, focusing on building fast, scalable, and user-centric applications.
              </p>

            </div>

            <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>
      )}

      {/* PROJECTS DRAWER (FIXED - DOES NOT PUSH CONTENT DOWN) */}
      {showProjects && (
        <div className="fixed inset-0 z-50 flex">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowProjects(false)}
          />

          {/* DRAWER */}
          <div className="ml-auto w-full sm:w-[420px] h-full bg-white/10 backdrop-blur-2xl border-l border-white/10 shadow-2xl p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Projects</h2>

              <button
                onClick={() => setShowProjects(false)}
                className="text-gray-300 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            {/* PROJECT CARDS */}
            <div className="space-y-4 overflow-y-auto h-[90vh] pr-2">

              <div className="bg-white/10 border border-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                <h3 className="font-bold">Skill Assessment Platform</h3>
                <p className="text-sm text-gray-300 mt-2">
                  SaaS platform for tracking employee skills and performance.
                </p>
              </div>

              <div className="bg-white/10 border border-white/10 p-4 rounded-xl hover:bg-white/20 transition">
                <h3 className="font-bold">Myopia Detection</h3>
                <p className="text-sm text-gray-300 mt-2">
                  Deep learning model using ResNet-18 for vision analysis.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* CONTACT */}
      {/* CONTACT */}
<section id="contact" className="max-w-3xl">
  <h3 className="text-3xl font-semibold mb-6">Contact</h3>

  <div className="space-y-4">

    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition">
      <p className="text-sm text-gray-400">Email</p>
      <a
        href="mailto:saptaparnabhattacharjee33@email.com"
        className="text-blue-400 hover:underline"
      >
        saptaparnabhattacharjee33@email.com
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition">
      <p className="text-sm text-gray-400">GitHub</p>
      <a
        href="https://github.com/saptaparna94"
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        github.com/saptaparna94
      </a>
    </div>

    <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition">
      <p className="text-sm text-gray-400">LinkedIn</p>
      <a
        href="https://www.linkedin.com/in/saptaparna-bhattacharjee-ba0546248"
        target="_blank"
        className="text-blue-400 hover:underline"
      >
        View LinkedIn Profile
      </a>
    </div>

  </div>
</section>

    </main>
  );
}