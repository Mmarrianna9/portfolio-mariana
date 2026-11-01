
import { useState } from 'react';

const projects = [
  {
    title: 'Brand Identity 04',
    category: 'Brand Identity',
    image: '/image/BrandIdentity/brand4.jpeg',
  },
  {
    title: 'Brand Identity 05',
    category: 'Brand Identity',
    image: '/image/BrandIdentity/brand5.png',
  },
  {
    title: 'Brand Identity 06',
    category: 'Brand Identity',
    image: '/image/BrandIdentity/brand6.png',
  },
  {
    title: 'Brand Identity 07',
    category: 'Brand Identity',
    image: '/image/BrandIdentity/brand7.jpeg',
  },
  {
    title: 'Brand Identity 08',
    category: 'Brand Identity',
    image: '/image/BrandIdentity/brand8.jpeg',
  },
  {
    title: 'Digital Design',
    category: 'Digital Design',
    image: '/image/DigitalDesign/Screenshot 2026-10-21 160711.png',
  },
  {
    title: 'Poster 01',
    category: 'Poster',
    image: '/image/Poster/social1.jpeg',
  },
  {
    title: 'Poster 02',
    category: 'Poster',
    image: '/image/Poster/social2.jpg',
  },
  {
    title: 'Poster 03',
    category: 'Poster',
    image: '/image/Poster/social3.png',
  },
  {
    title: 'Poster 04',
    category: 'Poster',
    image: '/image/Poster/social4.png',
  },
  {
    title: 'Poster 05',
    category: 'Poster',
    image: '/image/Poster/social5.png',
  },
  {
    title: 'Social Media Design',
    category: 'Social Media Design',
    image: '/image/SocialMediaDesign/SocialDisign1.jpeg',
  },
];

const categories = [
  'Tutti',
  'Brand Identity',
  'Digital Design',
  'Poster',
  'Social Media Design',
];

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
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <p className="text-sky-400 uppercase tracking-[0.3em] text-sm mb-5">
            Mariana · Portfolio creativo
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Graphic Design<span className="text-sky-400">.</span>
          </h1>

          <p className="text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Una selezione dei miei lavori creativi: identità visive,
            progetti digitali, poster e contenuti per i social media.
          </p>

          <a
            href="/#projects"
            className="inline-flex mt-8 text-sky-400 hover:text-white transition-colors"
          >
            ← Torna ai progetti web
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeCategory === category
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-sky-500 hover:text-sky-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <button
              type="button"
              key={project.image}
              onClick={() => setSelectedProject(project)}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-xl"
              aria-label={`Ingrandisci ${project.title}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 border border-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="pt-4">
                <p className="text-xs uppercase tracking-widest text-sky-600 mb-2">
                  {project.category}
                </p>
                <h2 className="text-lg font-semibold group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="relative max-w-5xl w-full max-h-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="block ml-auto mb-3 text-white text-sm px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20"
              aria-label="Chiudi anteprima"
            >
              ✕ Chiudi
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[75vh] w-full object-contain rounded-lg"
            />

            <div className="text-white mt-4">
              <p className="text-sky-400 text-sm">
                {selectedProject.category}
              </p>
              <h2 className="text-xl font-semibold mt-1">
                {selectedProject.title}
              </h2>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default GraphicPortfolio;

