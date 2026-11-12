

import React, { useState } from 'react';

// Percorsi delle immagini
const createProjects = () => {
  const projects = [];

  // BRAND IDENTITY - 13 immagini
  for (let i = 1; i <= 13; i++) {
    projects.push({
      id: `brand-${i}`,
      title: `Brand Identity ${String(i).padStart(2, '0')}`,
      category: 'Brand Identity',
      image: `/image/BrandIdentity/brand${i}`,
    });
  }

  // DIGITAL DESIGN - 13 immagini
  for (let i = 1; i <= 13; i++) {
    projects.push({
      id: `digital-${i}`,
      title: `Digital Design ${String(i).padStart(2, '0')}`,
      category: 'Digital Design',
      image: `/image/DigitalDesign/grafica${i}`,
    });
  }

  // POSTER - 7 immagini
  for (let i = 1; i <= 7; i++) {
    projects.push({
      id: `poster-${i}`,
      title: `Poster ${String(i).padStart(2, '0')}`,
      category: 'Poster',
      image: `/image/Poster/social${i}`,
    });
  }

  // SOCIAL MEDIA DESIGN - 7 immagini
  for (let i = 1; i <= 7; i++) {
    projects.push({
      id: `social-${i}`,
      title: `Social Media Design ${String(i).padStart(2, '0')}`,
      category: 'Social Media Design',
      image: `/image/SocialMediaDesign/SocialDisign${i}`,
    });
  }

  return projects;
};

const projects = createProjects();

const categories = [
  'Tutti',
  'Brand Identity',
  'Digital Design',
  'Poster',
  'Social Media Design',
];

// Componente immagine con ricerca automatica dell'estensione
function PortfolioImage({ project, className }) {
  const extensions = ['.jpeg', '.jpg', '.png', '.webp'];
  const [extensionIndex, setExtensionIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const imageSrc = project.image + extensions[extensionIndex];

  const handleError = () => {
    if (extensionIndex < extensions.length - 1) {
      setExtensionIndex((current) => current + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className={`${className} flex items-center justify-center bg-slate-100`}>
        <div className="text-center p-4">
          <span className="text-3xl text-slate-300">✦</span>
          <p className="text-xs text-slate-400 mt-2">
            Immagine da aggiungere
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={project.title}
      loading="lazy"
      onError={handleError}
      className={className}
    />
  );
}

function GraphicPortfolio() {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'Tutti'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-white text-[#252A32]">

      {/* HERO */}
      <section className="relative bg-[#F3F5F7] overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32 relative z-10">

          <div className="flex items-center gap-4 mb-8">
            <span className="w-10 h-[2px] bg-[#142B4A]" />

            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#142B4A]">
              Creative Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#142B4A] mb-7">
            Graphic Design
            <span className="text-[#252A32]">.</span>
          </h1>

          <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
            La creatività prende forma attraverso colori,
            immagini e identità visive. Una selezione dei miei
            progetti di graphic design, brand identity,
            comunicazione digitale e visual design.
          </p>

          <div className="flex flex-wrap gap-8 mt-12 pt-7 border-t border-slate-300">

            <div>
              <p className="text-3xl font-bold text-[#142B4A]">40</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                Progetti
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#142B4A]">04</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                Categorie
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold text-[#142B4A]">MT</p>
              <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                Creative Portfolio
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GALLERIA */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">

        {/* Titolo */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#142B4A] font-semibold">
            Selected Works
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#252A32] mt-3">
            I miei progetti<span className="text-[#142B4A]">.</span>
          </h2>
        </div>

        {/* FILTRI */}
        <div className="flex flex-wrap gap-3 mb-12">

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#142B4A] text-white border-[#142B4A] shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-[#142B4A] hover:text-[#142B4A]'
              }`}
            >
              {category}

              <span className="ml-2 text-xs opacity-70">
                {category === 'Tutti'
                  ? projects.length
                  : projects.filter(
                      (p) => p.category === category
                    ).length}
              </span>
            </button>
          ))}

        </div>

        {/* NUMERO RISULTATI */}
        <div className="flex justify-between items-center mb-7">
          <p className="text-sm text-slate-500">
            Visualizzati {filteredProjects.length} progetti
          </p>

          <p className="text-xs uppercase tracking-widest text-slate-400">
            Mariana Tabacaru
          </p>
        </div>

        {/* GRIGLIA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-9">

          {filteredProjects.map((project) => (
            <button
              type="button"
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#142B4A] rounded-xl"
              aria-label={`Ingrandisci ${project.title}`}
            >

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#F3F5F7] border border-slate-200">

                <PortfolioImage
                  project={project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-[#142B4A]/0 group-hover:bg-[#142B4A]/10 transition-all duration-500" />

                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#142B4A] opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  ↗
                </div>

              </div>

              <div className="pt-5">

                <p className="text-xs uppercase tracking-[0.2em] text-[#142B4A] font-semibold mb-2">
                  {project.category}
                </p>

                <h3 className="text-lg font-semibold text-[#252A32] group-hover:text-[#142B4A] transition-colors">
                  {project.title}
                </h3>

              </div>

            </button>
          ))}

        </div>

      </section>

      {/* LIGHTBOX */}
      {selectedProject && (

        <div
          className="fixed inset-0 z-[100] bg-[#101827]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >

          <div
            className="relative max-w-6xl w-full"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="flex ml-auto mb-5 px-5 py-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Chiudi anteprima"
            >
              ✕ Chiudi
            </button>

            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">

              <div className="max-h-[75vh] bg-slate-100 flex items-center justify-center">

                <PortfolioImage
                  project={selectedProject}
                  className="max-h-[75vh] max-w-full object-contain"
                />

              </div>

              <div className="p-6">

                <p className="text-xs uppercase tracking-widest text-[#142B4A] font-semibold">
                  {selectedProject.category}
                </p>

                <h2 className="text-2xl font-bold text-[#252A32] mt-2">
                  {selectedProject.title}
                </h2>

              </div>

            </div>

          </div>

        </div>

      )}

      {/* CONTATTO FINALE */}
      <section className="bg-[#142B4A] py-16">

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <p className="text-blue-200 text-xs uppercase tracking-[0.3em] mb-3">
              Let's create something
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hai un progetto in mente?
            </h2>
          </div>

          <a
            href="/#contact"
            className="px-8 py-4 bg-white text-[#142B4A] font-semibold rounded-full hover:bg-slate-100 transition-all duration-300"
          >
            Contattami ↗
          </a>

        </div>

      </section>

    </main>
  );
}

export default GraphicPortfolio;