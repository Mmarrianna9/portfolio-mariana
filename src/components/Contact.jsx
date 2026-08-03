import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Lavoriamo Insieme</h2>
        <div className="w-16 h-1 bg-sky-500 mx-auto rounded mb-6"></div>
        <p className="text-slate-300 max-w-xl mx-auto mb-10 text-lg">
          Hai un progetto in mente o stai cercando una figura Full Stack Developer e Web Designer motivata? Contattami, parliamone!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a 
            href="mailto:tuamail@esempio.com" 
            className="px-8 py-4 bg-sky-600 hover:bg-sky-500 font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2"
          >
            📧 Incolla la tua email / Scrivimi
          </a>
          <a 
            href="https://github.com/Mmarrianna9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            💻 Profilo GitHub
          </a>
        </div>

        <div className="border-t border-slate-800 pt-8 text-sm text-slate-500">
          <p>© 2026 Sviluppo & Design | Mariana Tabacaru. Tutti i diritti riservati.</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;