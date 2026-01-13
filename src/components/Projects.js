import { projects } from '../data/projects.js';

export function renderProjects() {
    const projectsHtml = projects.map(project => `
        <div class="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            
            <div class="p-8">
                <div class="flex justify-between items-start mb-4">
                     <h3 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        ${project.title}
                    </h3>
                    <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-semibold">
                        Feature
                    </span>
                </div>
                
                <p class="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    ${project.description}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-8">
                    ${project.tech.map(t => `
                        <span class="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                            ${t}
                        </span>
                    `).join('')}
                </div>
                
                <a href="${project.link}" class="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    View Implementation <span class="ml-2">→</span>
                </a>
            </div>
        </div>
    `).join('');

    return `
      <section id="projects" class="py-20 bg-slate-50 dark:bg-slate-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
                <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    A showcase of enterprise-oriented applications and data-driven systems.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                ${projectsHtml}
            </div>
            
            <div class="mt-16 text-center">
                 <p class="text-slate-500 dark:text-slate-400 italic">
                    "Scalable web application foundations and data-driven decision systems."
                 </p>
            </div>
        </div>
      </section>
    `;
}
