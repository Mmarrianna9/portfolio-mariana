import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[780px] bg-slate-950 md:bg-white overflow-hidden flex items-center">

      {/* Immagine di sfondo (Visibile sia su Mobile che Desktop) */}
      <div className="absolute inset-0">
        <img
          src="/image/hero-workspace.png"
          alt="Postazione di lavoro con computer e strumenti creativi"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
        />

        {/* Overlay Sfocato / Gradiente per Proteggere la Leggibilità del Testo */}
        {/* Scuro e avvolgente su Mobile, Chiaro ed elegante su Desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/40 md:bg-gradient-to-r md:from-white md:via-white/95 md:to-transparent backdrop-blur-[2px] md:backdrop-blur-none" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto w-full px-6 md:px-12 py-16 md:py-20 flex flex-col justify-end md:justify-center min-h-[85vh] md:min-h-0">

        <div className="max-w-[600px]">

          {/* Etichetta Badge / Tag */}
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <span className="text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-sky-400 md:text-[#142B4A] bg-sky-950/60 md:bg-transparent px-3 py-1 md:p-0 rounded-full border border-sky-500/30 md:border-none backdrop-blur-sm">
              Creative Portfolio
            </span>
            <span className="w-12 md:w-20 h-px bg-sky-400/50 md:bg-[#142B4A]/50" />
          </div>

          {/* Saluto */}
          <p className="text-xl md:text-3xl font-light text-slate-300 md:text-[#252A32] mb-1 md:mb-2">
            Ciao, sono
          </p>

          {/* Titolo Principale */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold md:font-bold leading-[1.05] tracking-tight text-white md:text-[#142B4A] mb-5 md:mb-7 drop-shadow-md md:drop-shadow-none">
            Mariana
            <br />
            Tabacaru
          </h1>

          {/* Ruolo / Sottotitolo */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-slate-200 md:text-[#252A32] leading-tight mb-6 md:mb-7">
            Web Developer
            <span className="font-semibold text-sky-400 md:text-[#142B4A]"> & </span>
            <br className="hidden sm:inline" />
            Graphic Designer
          </h2>

          {/* Bio Breve */}
          <p className="text-base md:text-lg text-slate-300 md:text-slate-600 leading-relaxed max-w-lg mb-8 md:mb-10 font-normal">
            Trasformo idee in esperienze digitali moderne,
            unendo strategia, creatività e attenzione ai dettagli.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">

            <a
              href="#projects"
              className="w-full sm:w-auto text-center px-8 py-4 bg-sky-500 md:bg-[#142B4A] text-white font-semibold rounded-full shadow-lg shadow-sky-500/20 md:shadow-lg hover:bg-sky-400 md:hover:bg-[#203E65] hover:-translate-y-1 transition-all duration-300"
            >
              Progetti Web ↗
            </a>

            <Link
              to="/graphic-design"
              className="w-full sm:w-auto text-center px-8 py-4 border-2 border-white/80 md:border-[#142B4A] text-white md:text-[#142B4A] bg-white/10 md:bg-transparent backdrop-blur-md font-semibold rounded-full hover:bg-white hover:text-[#142B4A] transition-all duration-300"
            >
              Graphic Design ↗
            </Link>

          </div>

        </div>

        {/* Competenze inferiori */}
        <div className="flex flex-wrap gap-4 sm:gap-8 md:gap-12 mt-12 md:mt-20 pt-6 md:pt-7 border-t border-slate-700/60 md:border-slate-300/70 max-w-[650px]">

          <span className="text-xs md:text-sm text-slate-300 md:text-[#142B4A] font-medium flex items-center gap-1.5">
            <span className="text-sky-400 md:text-inherit">⌘</span> Web Development
          </span>

          <span className="text-xs md:text-sm text-slate-300 md:text-[#142B4A] font-medium flex items-center gap-1.5">
            <span className="text-sky-400 md:text-inherit">✎</span> Graphic Design
          </span>

          <span className="text-xs md:text-sm text-slate-300 md:text-[#142B4A] font-medium flex items-center gap-1.5">
            <span className="text-sky-400 md:text-inherit">✦</span> Creative Solutions
          </span>

        </div>

      </div>

    </section>
  );
}

export default Hero;