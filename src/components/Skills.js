import { skills } from '../data/skills.js';

export function renderSkills() {
    let skillsHtml = '';

    for (const [category, items] of Object.entries(skills)) {
        const itemsHtml = items.map(skill => `
            <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span class="font-medium text-slate-700 dark:text-slate-200">${skill.name}</span>
                <span class="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">${skill.level}</span>
            </div>
        `).join('');

        skillsHtml += `
            <div class="mb-8 break-inside-avoid">
                <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 border-l-4 border-blue-500 pl-3">${category}</h3>
                <div class="grid grid-cols-1 gap-3">
                    ${itemsHtml}
                </div>
            </div>
        `;
    }

    return `
      <section id="skills" class="py-20 bg-white dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Technical Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${skillsHtml}
            </div>
        </div>
      </section>
    `;
}
