export function renderNavbar() {
    return `
      <nav class="fixed w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex-shrink-0">
                    <span class="text-xl font-bold text-slate-900 dark:text-white">Hitekani.dev</span>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex check-baseline space-x-4">
                        <a href="#about" class="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                        <a href="#skills" class="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
                        <a href="#projects-view" class="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
                        <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    `;
}
