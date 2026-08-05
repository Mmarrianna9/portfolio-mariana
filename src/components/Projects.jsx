import React from 'react';

function Projects() {
  const projectList = [
    {
      title: "EdilNova",
      description: "Sito vetrina moderno, responsive e ottimizzato, progettato per dare un'identità digitale professionale nel settore edile e dei serramenti. Struttura pensata per valorizzare i servizi e facilitare il contatto diretto.",
      techs: ["React", "HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://edilnova-site.vercel.app/"
    },
    {
      title: "NovaInfissi",
      description: "Sito web corporate dal design pulito e moderno, progettato per un'azienda di infissi. Include sezioni vetrina ottimizzate e un calcolatore di preventivi interattivo pensato per migliorare l'esperienza e l'interazione dell'utente.",
      techs: ["React", "Tailwind CSS", "Vite"],
      link: "https://nova-infissi.vercel.app/"
    },
    {
      title: "New Hair Style",
      description: "Applicazione web gestionale e di servizio dedicata a un barber shop. Integra un sistema strutturato per la gestione dei servizi offerti e la prenotazione degli appuntamenti, unendo un backend robusto a un'interfaccia reattiva.",
      techs: ["React", "Spring Boot", "MySQL", "Java"],
      link: "https://new-hair-style.vercel.app/"
    },
    {
      title: "Rent-Car",
      description: "Piattaforma full-stack avanzata per il noleggio auto. Permette la gestione completa del parco macchine e delle richieste utente, garantendo flessibilità, efficienza e un flusso di navigazione fluido e sicuro.",
      techs: ["Java", "React", "Database SQL"],
      link: "https://rent-car-frontend-52em.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">I Miei Progetti</h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto rounded"></div>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">Una selezione dei miei lavori più recenti, sviluppati combinando design funzionale e logica full-stack.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 bg-sky-50 text-sky-700 rounded-md border border-sky-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-0">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors text-sm shadow-sm"
                >
                  Visita il progetto 
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;