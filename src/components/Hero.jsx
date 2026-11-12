import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative min-h-[780px] bg-white overflow-hidden flex items-center">

      {/* Immagine di sfondo */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/image/hero-workspace.png"
          alt="Postazione di lavoro con computer e strumenti creativi"
          className="w-full h-full object-cover object-center"
        />

        {/* Protegge la leggibilità del testo */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-6 md:px-12 py-20">

        <div className="max-w-[600px]">

          <div className="flex items-center gap-4 mb-9">
            <span className="text-sm font-semibold tracking-[0.35em] uppercase text-[#142B4A]">
              Creative Portfolio
            </span>
            <span className="w-20 h-px bg-[#142B4A]/50" />
          </div>

          <p className="text-3xl font-light text-[#252A32] mb-2">
            Ciao, sono
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[#142B4A] mb-7">
            Mariana
            <br />
            Tabacaru
          </h1>

          <h2 className="text-3xl md:text-4xl font-light text-[#252A32] leading-tight mb-7">
            Web Developer
            <span className="font-semibold text-[#142B4A]"> & </span>
            <br />
            Graphic Designer
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10">
            Trasformo idee in esperienze digitali moderne,
            unendo strategia, creatività e attenzione ai dettagli.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="px-8 py-4 bg-[#142B4A] text-white font-semibold rounded-full shadow-lg hover:bg-[#203E65] hover:-translate-y-1 transition-all duration-300"
            >
              Progetti Web ↗
            </a>

            <Link
              to="/graphic-design"
              className="px-8 py-4 border-2 border-[#142B4A] text-[#142B4A] font-semibold rounded-full hover:bg-[#142B4A] hover:text-white transition-all duration-300"
            >
              Graphic Design ↗
            </Link>

          </div>

        </div>

        {/* Competenze inferiori */}
        <div className="flex flex-wrap gap-8 md:gap-12 mt-20 pt-7 border-t border-slate-300/70 max-w-[650px]">

          <span className="text-sm text-[#142B4A] font-medium">
            ⌘ &nbsp; Web Development
          </span>

          <span className="text-sm text-[#142B4A] font-medium">
            ✎ &nbsp; Graphic Design
          </span>

          <span className="text-sm text-[#142B4A] font-medium">
            ✦ &nbsp; Creative Solutions
          </span>

        </div>

      </div>

      {/* Immagine per dispositivi mobili */}
      <div className="md:hidden w-full absolute bottom-0 right-0 opacity-20">
        <img
          src="/image/hero-workspace.png"
          alt=""
          className="w-full object-cover"
        />
      </div>

    </section>
  );
}

export default Hero;