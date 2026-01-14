export function renderContact() {
    return `
      <section id="contact" class="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-slate-900 dark:text-white mb-6">Let's Connect</h2>
            <div class="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            
            <p class="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                Currently available for <span class="font-bold text-blue-600 dark:text-blue-400">Internship</span> and <span class="font-bold text-blue-600 dark:text-blue-400">Junior Software Developer</span> opportunities.
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
                <a href="mailto:chumahitekani@gmail.com" class="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>Send me an Email</span>
                </a>
                
                <a href="https://www.linkedin.com/in/hitekani-chuma-4276b9381" target="_blank" class="group flex items-center gap-3 px-8 py-4 bg-[#0077b5] text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>Connect on LinkedIn</span>
                </a>
            </div>
        </div>
      </section>
    `;
}

export function setupContactForm() {
    // No-op since form is removed
}
