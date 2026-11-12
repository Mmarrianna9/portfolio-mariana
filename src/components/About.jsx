import React from 'react';
import { Link } from 'react-router-dom';


function About() {
  const webSkills = [
    'HTML', 'CSS', 'JavaScript', 'React',
    'Vue.js', 'Tailwind CSS', 'Node.js',
    'Java', 'Spring', 'Python', 'MySQL'
  ];

  const designSkills = [
    'Graphic Design', 'Brand Identity',
    'Logo Design', 'Social Media Design',
    'Digital Design', 'Typography'
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">

      {/* Decorazioni */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#EAF1F9] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        {/* Intestazione */}
        <div className="mb-16">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-[#142B4A]">
            Discover my story
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#252A32] mt-4">
            Chi sono<span className="text-[#142B4A]">.</span>
          </h2>

          <div className="w-16 h-1 bg-[#142B4A] mt-5 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-14 items-center">

          {/* TESTO */}
          <div className="lg:col-span-7">

            <p className="text-xl md:text-2xl text-[#142B4A] font-medium leading-relaxed mb-7">
              Creatività, tecnologia e passione per il mondo digitale.
            </p>

            <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg">

              <p>
                Ciao! Sono <strong className="text-[#252A32]">Mariana Tabacaru</strong>,
                Junior Full Stack Developer e Graphic Designer.
                Mi piace trasformare idee e concetti in progetti digitali
                capaci di unire estetica, funzionalità e semplicità.
              </p>

              <p>
                Nel mondo dello sviluppo web mi occupo di creare
                interfacce moderne e responsive, lavorando sia
                sulla parte frontend sia sulla logica backend.
                Utilizzo tecnologie come React, JavaScript,
                Tailwind CSS, Node.js, Java e MySQL.
              </p>

              <p>
                Accanto alla programmazione coltivo la mia passione
                per la comunicazione visiva: mi interessa progettare
                identità grafiche, loghi, contenuti digitali e
                composizioni visive curate nei dettagli.
              </p>

              <p>
                Sono una persona curiosa, precisa e motivata
                a imparare continuamente. Affronto ogni progetto
                come un'opportunità per sperimentare, migliorare
                e trovare soluzioni creative.
              </p>

            </div>

            {/* Punti di forza */}
            <div className="grid sm:grid-cols-3 gap-5 mt-10">

              <div className="border-l-2 border-[#142B4A] pl-4">
                <h3 className="font-bold text-[#252A32] mb-1">
                  Creatività
                </h3>
                <p className="text-sm text-slate-500">
                  Idee e soluzioni visive originali.
                </p>
              </div>

              <div className="border-l-2 border-[#142B4A] pl-4">
                <h3 className="font-bold text-[#252A32] mb-1">
                  Precisione
                </h3>
                <p className="text-sm text-slate-500">
                  Cura dei dettagli in ogni progetto.
                </p>
              </div>

              <div className="border-l-2 border-[#142B4A] pl-4">
                <h3 className="font-bold text-[#252A32] mb-1">
                  Crescita
                </h3>
                <p className="text-sm text-slate-500">
                  Curiosità e apprendimento continuo.
                </p>
              </div>

            </div>

            {/* Pulsante */}
            <div className="mt-10">
              <Link
                to="/graphic-design"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#142B4A] text-white font-semibold rounded-full hover:bg-[#203E65] hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-950/10"
              >
                Scopri i miei lavori
                <span>↗</span>
              </Link>
            </div>

          </div>

          {/* FOTOGRAFIA */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">

            <div className="relative w-72 h-72 md:w-[380px] md:h-[380px]">

              {/* Cerchio decorativo */}
              <div className="absolute inset-0 rounded-full border-[2px] border-[#142B4A]/20 scale-110" />

              <div className="absolute -top-3 -right-3 w-20 h-20 bg-[#DCE8F5] rounded-full" />

              <div className="absolute -bottom-4 -left-5 w-24 h-24 bg-[#142B4A] rounded-full opacity-10" />

              {/* Foto */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-2xl bg-slate-100">

                <img
                  src="/image/foto-mariana.png"
                  alt="Mariana Tabacaru - Full Stack Developer e Graphic Designer"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                />

              </div>

              {/* Etichetta */}
              <div className="absolute bottom-8 -left-10 bg-white shadow-xl border border-slate-100 rounded-xl px-5 py-4">

                <p className="text-sm font-bold text-[#142B4A]">
                  Mariana Tabacaru
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  Developer & Designer
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* COMPETENZE */}
        <div className="mt-28 pt-12 border-t border-slate-200">

          <div className="grid md:grid-cols-2 gap-14">

            {/* Web Development */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="text-2xl text-[#142B4A]">⌘</span>
                <h3 className="text-2xl font-bold text-[#252A32]">
                  Web Development
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {webSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#F3F5F7] border border-slate-200 rounded-full text-sm text-slate-700 hover:bg-[#142B4A] hover:text-white hover:border-[#142B4A] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Graphic Design */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="text-2xl text-[#142B4A]">✎</span>
                <h3 className="text-2xl font-bold text-[#252A32]">
                  Graphic & Visual Design
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {designSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#F3F5F7] border border-slate-200 rounded-full text-sm text-slate-700 hover:bg-[#142B4A] hover:text-white hover:border-[#142B4A] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;