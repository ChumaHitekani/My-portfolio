export function renderAbout() {
    return `
      <section id="about" class="py-20 bg-white dark:bg-slate-900 overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center mb-20">
                <!-- Bio & Stats -->
                <div>
                    <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
                    <p class="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                        I am a motivated and solution-oriented software developer with a strong foundation in building meaningful web applications. My approach focuses on <strong class="text-slate-900 dark:text-white">quality, scalability, and cost efficiency</strong>, ensuring that every line of code contributes to a robust and maintainable system.
                    </p>
                    <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                         Beyond just coding, I am passionate about utilizing modern tools, including <strong class="text-slate-900 dark:text-white">AI coding agents</strong> and cloud infrastructure, to solve real-world problems.
                    </p>
                    
                    <div class="flex gap-4">
                        <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                             <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Final Year</div>
                             <div class="text-sm text-slate-500 dark:text-slate-400">IT Qualification</div>
                        </div>
                        <div class="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                             <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">2+</div>
                             <div class="text-sm text-slate-500 dark:text-slate-400">Major Projects</div>
                        </div>
                    </div>
                </div>
                
                <!-- Image Grid (Relocated) -->
                <div class="relative mt-12 lg:mt-0 flex items-center justify-center perspective-1000">
                    <!-- Background blobs -->
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>

                    <!-- Grid -->
                    <div class="relative grid grid-cols-2 gap-4 w-full max-w-md rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out p-4">
                        
                        <div class="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in delay-100 bg-slate-200 aspect-[4/5] hover:-translate-y-2 transition-transform duration-300">
                            <img src="/assets/hero/hero-1.jpg" alt="Portrait" class="w-full h-full object-cover">
                        </div>
                        
                        <div class="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in delay-200 mt-8 bg-slate-200 aspect-[4/5] hover:-translate-y-2 transition-transform duration-300">
                            <img src="/assets/hero/hero-2.jpg" alt="Coding" class="w-full h-full object-cover">
                        </div>

                        <div class="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in delay-300 -mt-8 bg-slate-200 aspect-[4/5] hover:-translate-y-2 transition-transform duration-300">
                            <img src="/assets/hero/hero-3.jpg" alt="Working" class="w-full h-full object-cover">
                        </div>

                        <div class="relative rounded-2xl overflow-hidden shadow-xl animate-scale-in delay-500 bg-slate-200 aspect-[4/5] hover:-translate-y-2 transition-transform duration-300">
                            <img src="/assets/hero/hero-4.jpg" alt="Lifestyle" class="w-full h-full object-cover">
                        </div>
                        
                    </div>
                </div>
            </div>

            <!-- Enterprise Capabilities (Full Width) -->
            <div class="relative bg-slate-900 rounded-2xl p-8 lg:p-12 shadow-2xl border border-slate-800">
                <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-50"></div>
                
                <h3 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                    Enterprise Capabilities
                </h3>
                
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <svg class="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                        <div>
                            <h4 class="font-semibold text-slate-200 mb-1">Data-Driven Systems</h4>
                            <p class="text-sm text-slate-400">Architecting systems that leverage data for actionable insights.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <svg class="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
                        <div>
                            <h4 class="font-semibold text-slate-200 mb-1">Scalable Architecture</h4>
                            <p class="text-sm text-slate-400">Building foundations ready for growth and high traffic.</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <svg class="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        <div>
                            <h4 class="font-semibold text-slate-200 mb-1">Secure Integration</h4>
                            <p class="text-sm text-slate-400">Implementing robust authentication and backend security.</p>
                        </div>
                    </div>
                    
                     <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <svg class="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                        <div>
                            <h4 class="font-semibold text-slate-200 mb-1">Modern Development</h4>
                            <p class="text-sm text-slate-400">Git version control, CI/CD, and agile workflows.</p>
                        </div>
                    </div>
                    
                     <div class="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <svg class="w-6 h-6 text-green-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                        <div>
                            <h4 class="font-semibold text-slate-200 mb-1">Documentation</h4>
                            <p class="text-sm text-slate-400">Clear, maintainable code and system documentation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    `;
}
