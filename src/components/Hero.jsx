import React from 'react';
import profileImage from '../foto-mariana.jpeg';

function Hero() {
  return (
    <div className="relative py-24 md:py-32 bg-slate-900 text-white overflow-hidden flex items-center border-b border-slate-800">
      
      {/* Sfumature decorative sullo sfondo scuro */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10 w-full">
        
        {/* Riquadro centrale con sfumatura graduata più chiara */}
        <div className="bg-gradient-to-r from-slate-800/90 via-slate-800/70 to-slate-900/90 border border-slate-700/60 p-8 md:p-12 rounded-3xl shadow-2xl backdrop-blur-md grid md:grid-cols-12 gap-8 items-center">
          
          {/* Testo di presentazione (prende più spazio) */}
          <div className="md:col-span-7 text-center md:text-left">
            <span className="inline-block bg-sky-500/20 text-sky-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 shadow-inner border border-sky-500/30">
              Junior Full Stack Developer & Web Designer
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Ciao, sono <span className="text-sky-400">Mariana Tabacaru</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 mb-8 font-light leading-relaxed">
              Trasformo idee e requisiti in applicazioni web moderne, performanti e curate nei minimi dettagli. Dall'idea al deployment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-3.5 bg-sky-600 text-white font-bold rounded-lg text-base hover:bg-sky-500 transition-all duration-300 shadow-lg text-center"
              >
                Guarda i miei lavori
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-slate-700/60 text-white font-bold rounded-lg text-base border border-slate-600 hover:bg-slate-700 transition-all duration-300 text-center shadow-sm"
              >
                Contattami
              </a>
            </div>
          </div>

          {/* Foto tonda più grande e in evidenza con alone chiaro */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-56 h-56 md:w-68 md:h-68 lg:w-76 lg:h-76 rounded-full overflow-hidden shadow-2xl border-4 border-sky-400/40 ring-8 ring-sky-500/10 group bg-slate-700">
              <img 
                src={profileImage} 
                alt="Mariana Tabacaru" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;