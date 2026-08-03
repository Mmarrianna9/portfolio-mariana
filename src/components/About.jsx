import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        {/* Titolo della sezione */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Chi Sono</h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto rounded"></div>
        </div>

        {/* Contenuto descrittivo */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Ciao! Sono <strong className="text-slate-900">Mariana Tabacaru</strong>, una <strong className="text-sky-600">Junior Full Stack Developer & Web Designer</strong>. La mia passione è dare vita a interfacce web moderne e funzionali, unendo la cura per il design all'efficienza della logica backend e dei database.
            </p>
            <p>
              Affronto ogni progetto con dedizione e precisione, curando ogni fase dello sviluppo: dalla struttura iniziale e stilizzazione con Tailwind CSS fino all'implementazione di logiche robuste in React, Node.js, Java e alla gestione dei dati con MySQL.
            </p>
          </div>

          {/* Box con i punti di forza rapidi */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Perché scegliere il mio approccio:</h3>
            
            <div className="flex items-start gap-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-600"><strong className="text-slate-800">Full Stack & Design:</strong> Gestione completa del progetto, dal layout visivo al database.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-600"><strong className="text-slate-800">Attenzione ai dettagli:</strong> Interfacce pulite, responsive e curate per qualsiasi dispositivo.</p>
            </div>
            
            <div className="flex items-start gap-3">
              <span className="text-sky-500 font-bold text-lg">✓</span>
              <p className="text-sm text-slate-600"><strong className="text-slate-800">Problem Solving:</strong> Capacità di trasformare requisiti complessi in codice pulito e manutenibile.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;