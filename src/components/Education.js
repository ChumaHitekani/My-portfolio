export function renderEducation() {
    return `
      <section class="py-20 bg-slate-50 dark:bg-slate-950">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
            
                <!-- Education & Certs -->
                <div>
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">Education & Certifications</h2>
                    
                    <div class="mb-8 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <div class="flex justify-between items-start mb-2">
                             <h3 class="text-lg font-bold text-slate-900 dark:text-white">IT Qualification</h3>
                             <span class="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">2026</span>
                        </div>
                        <p class="text-slate-600 dark:text-slate-400 mb-2">Vaal University of Technology, Vanderbijlpark</p>
                        <p class="text-sm text-slate-500">Programming, Web Dev, Business Analysis, Networking</p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                             <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             </div>
                             <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Microsoft Certified: Azure Fundamentals</h4>
                                <p class="text-sm text-slate-500">AZ-900</p>
                             </div>
                        </div>
                        <div class="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                             <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             </div>
                             <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Cisco Certified Network Associate</h4>
                                <p class="text-sm text-slate-500">CCNA</p>
                             </div>
                        </div>
                    </div>
                </div>
                
                <!-- Achievements -->
                <div>
                     <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">Role Highlights</h2>
                     <div class="space-y-6">
                        <div class="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950"></div>
                             <h4 class="font-bold text-slate-900 dark:text-white mb-2">Designed AI-Based Analytics</h4>
                             <p class="text-slate-600 dark:text-slate-400">Developed RetailCast AI using Python and predictive analytics to solve historical data challenges.</p>
                        </div>
                         <div class="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950"></div>
                             <h4 class="font-bold text-slate-900 dark:text-white mb-2">Built School Platform</h4>
                             <p class="text-slate-600 dark:text-slate-400">Created a communication web application supporting performance tracking and information sharing.</p>
                        </div>
                         <div class="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-slate-950"></div>
                             <h4 class="font-bold text-slate-900 dark:text-white mb-2">Backend Integration</h4>
                             <p class="text-slate-600 dark:text-slate-400">Gained practical experience with Supabase authentication and scalable backend systems.</p>
                        </div>
                     </div>
                </div>
            
            </div>
        </div>
      </section>
    `;
}
