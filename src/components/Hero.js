export function renderHero() {
    return `
      <section id="home" class="relative min-h-screen flex items-center pt-32 pb-20 lg:pt-0 lg:pb-0 overflow-hidden bg-slate-50 dark:bg-slate-950">
        
        <!-- Background 3D Scene -->
        <div class="absolute inset-0 z-0">
            <spline-viewer url="https://prod.spline.design/Ib3HuLuBCva-EMDU/scene.splinecode" class="w-full h-full"></spline-viewer>
        </div>

        <!-- Content Overlay -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pointer-events-none">
            <div class="max-w-2xl animate-fade-in-up pointer-events-auto">
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/90 dark:bg-blue-900/80 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                    <span class="relative flex h-2 w-2">
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Available for new projects
                </div>
                
                <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-8 drop-shadow-sm">
                    Building <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital</span> Experiences.
                </h1>
                
                <p class="text-lg sm:text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed max-w-lg font-medium drop-shadow-sm">
                    I craft scalable web applications and data-driven systems that solve real-world problems.
                </p>
                
                <div class="flex flex-wrap gap-4">
                    <a href="#projects" class="px-8 py-4 bg-blue-600/90 text-white rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25 backdrop-blur-sm">
                        View Work
                    </a>
                    <a href="#contact" class="px-8 py-4 bg-white/80 dark:bg-slate-800/80 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-full font-semibold hover:border-slate-300 dark:hover:border-slate-600 transition-all hover:-translate-y-1 backdrop-blur-sm">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
      </section>
    `;
}
