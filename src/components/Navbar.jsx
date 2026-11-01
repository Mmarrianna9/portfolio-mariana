import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <a href="#" className="text-lg font-bold tracking-wider text-sky-400 hover:text-sky-300 transition-colors">
          SVILUPPO & DESIGN <span className="text-white font-light">| Mariana</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">Chi Sono</a>
          <a href="#skills" className="hover:text-sky-400 transition-colors">Competenze</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Progetti</a>
          <Link
            to="/graphic-design"
            className="hover:text-sky-400 transition-colors"
          >
            Graphic Design
          </Link>
          <a href="#contact" className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-all shadow-md">
            Contattami
          </a>
        </div>

        {/* Pulsante Menu Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu a tendina per Mobile */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 space-y-3">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-sky-400">Chi Sono</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-sky-400">Competenze</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-sky-400">Progetti</a>
          <Link
  to="/graphic-design"
  onClick={() => setIsOpen(false)}
  className="block text-slate-300 hover:text-sky-400"
>
  Graphic Design
</Link>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block text-center px-4 py-2 bg-sky-600 text-white rounded-lg">Contattami</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;