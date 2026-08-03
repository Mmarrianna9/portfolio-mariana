import React from 'react';

function Skills() {
  const techStack = [
    { name: "HTML5 & CSS3", category: "Frontend", level: "95%" },
    { name: "JavaScript (ES6+)", category: "Frontend", level: "90%" },
    { name: "React", category: "Frontend", level: "90%" },
    { name: "Vue.js", category: "Frontend", level: "80%" },
    { name: "Tailwind CSS", category: "Design", level: "90%" },
    { name: "Node.js", category: "Backend", level: "85%" },
    { name: "Java & Spring Boot", category: "Backend", level: "85%" },
    { name: "Python", category: "Backend", level: "80%" },
    { name: "MySQL & XAMPP", category: "Database", level: "85%" },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-100">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Competenze Tecniche</h2>
          <div className="w-16 h-1 bg-sky-500 mx-auto rounded"></div>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">Gli strumenti e le tecnologie che padroneggio per dare vita a soluzioni digitali complete ed efficienti.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-slate-800 text-lg">{tech.name}</h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-sky-100 text-sky-700 rounded-full">{tech.category}</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mt-4">
                <div className="bg-sky-600 h-full rounded-full" style={{ width: tech.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;