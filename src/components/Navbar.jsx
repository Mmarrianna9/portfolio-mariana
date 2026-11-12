import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },

    { name: 'Progetti Web', href: '/#projects' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="group flex flex-col">
          <span className="text-xl font-bold tracking-[0.15em] text-slate-900">
            MARIANA<span className="text-blue-900">.</span>
          </span>

          <span className="text-[9px] tracking-[0.25em] text-slate-500 uppercase">
            Tabacaru · Portfolio
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/graphic-design"
            className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors"
          >
            Graphic Design
          </Link>

          <a
            href="/#contact"
            className="px-6 py-3 bg-[#142B4A] text-white text-sm font-semibold rounded-md hover:bg-[#203E65] transition-all duration-300 shadow-sm"
          >
            Contattami
            <span className="ml-2">↗</span>
          </a>

        </div>

        {/* MENU MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-900"
          aria-label="Apri menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <span className="text-3xl">×</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

      </div>

      {/* MENU MOBILE APERTO */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 space-y-5">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 font-medium hover:text-blue-900"
            >
              {link.name}
            </a>
          ))}

          <Link
            to="/graphic-design"
            onClick={() => setIsOpen(false)}
            className="block text-slate-700 font-medium hover:text-blue-900"
          >
            Graphic Design
          </Link>

          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#142B4A] text-white py-3 rounded-md font-semibold"
          >
            Contattami ↗
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;