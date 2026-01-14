(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();function y(){return`
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
    `}function I(){return`
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
    `}function A(){return`
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
    `}const C={"Software Development":[{name:"Java",level:"Intermediate"},{name:"VB.NET",level:"Intermediate"},{name:"SQL & PL/SQL",level:"Functions, Triggers"}],"Web Development":[{name:"HTML5",level:"Advanced"},{name:"CSS3 / Tailwind",level:"Advanced"},{name:"JavaScript (ES6+)",level:"Intermediate"},{name:"PHP",level:"Basic"}],"Data & AI":[{name:"Python",level:"Data Analysis & Prediction"},{name:"AI Analytics",level:"RetailCast AI"}],"Systems & Tools":[{name:"Git & GitHub",level:"Version Control"},{name:"Supabase",level:"Auth & Backend"},{name:"Azure (AZ-900)",level:"Cloud Fundamentals"},{name:"Networking (CCNA)",level:"Network Basics"}]};function S(){let l="";for(const[e,r]of Object.entries(C)){const i=r.map(t=>`
            <div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-100 dark:border-slate-700">
                <span class="font-medium text-slate-700 dark:text-slate-200">${t.name}</span>
                <span class="text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-2 py-1 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">${t.level}</span>
            </div>
        `).join("");l+=`
            <div class="mb-8 break-inside-avoid">
                <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-4 border-l-4 border-blue-500 pl-3">${e}</h3>
                <div class="grid grid-cols-1 gap-3">
                    ${i}
                </div>
            </div>
        `}return`
      <section id="skills" class="py-20 bg-white dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Technical Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                ${l}
            </div>
        </div>
      </section>
    `}const B=[{id:1,title:"HLAMAZI",description:"A comprehensive digital solution.",tech:["Web Development","UI/UX Design"],link:"#",images:["/assets/HLAMAZI/LANDING.png","/assets/HLAMAZI/SERVICE.png"]},{id:2,title:"VISION - School Communication App",description:"A platform for teacher-learner communication and performance tracking. Features include dashboards for students and teachers, profile management, and course tracking.",tech:["Educational Tech","Communication","Dashboard"],link:"#",images:["/assets/VISION/SIGN UP.png","/assets/VISION/VB- STUDENT SIGN IN.png","/assets/VISION/VB- TEACHER SIGN IN.png","/assets/VISION/VB- PROFILE.png","/assets/VISION/VB- STUDENT DAS 1.png","/assets/VISION/VB- STUDENT DAS 2.png","/assets/VISION/VB- STUDENT COURSE DASHBOARD.png","/assets/VISION/VB- TEACHER DASHBOARD.png"]},{id:3,title:"FX AI",description:"An AI application where you insert a screenshot and it tells you to buy or sell. Includes analytics and signal processing.",tech:["AI","Financial Tech","Image Analysis"],link:"#",images:["/assets/FX AI/FX BUY SIGN.png","/assets/FX AI/FX ANALYTICS.png","/assets/FX AI/FX ANALYITICS 2.png","/assets/FX AI/FX RESULT.png","/assets/FX AI/FX PROFILE.png","/assets/FX AI/Screenshot 2026-01-13 153809.png","/assets/FX AI/Screenshot 2026-01-13 153938.png"]}];function L(){return`
      <section id="projects" class="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div class="text-center mb-20">
                <span class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
                <h2 class="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
                    Featured Work
                </h2>
                <div class="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
                <p class="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    A curated selection of our most impactful digital solutions, featuring advanced analytics and intuitive interfaces.
                </p>
            </div>
            
            <div class="flex flex-col">
                ${B.map(e=>`
        <div class="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl mb-20 group">
            
            <div class="md:flex">
                <div class="p-8 md:p-12 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 flex flex-col justify-center bg-slate-50 dark:bg-slate-900/50">
                    <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        ${e.title}
                    </h3>
                    
                    <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        ${e.description}
                    </p>
                    
                    <div class="flex flex-wrap gap-2 mb-8">
                        ${e.tech.map(r=>`
                            <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-sm">
                                ${r}
                            </span>
                        `).join("")}
                    </div>

                    <button 
                        class="view-gallery-btn inline-flex w-full justify-center md:w-auto items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
                        data-src="${e.images&&e.images.length>0?e.images[0]:""}"
                        data-title="${e.title}"
                        ${!e.images||e.images.length===0?'disabled style="opacity:0.5; cursor:not-allowed;"':""}
                    >
                        View Gallery <span class="ml-2">→</span>
                    </button>
                </div>

                <div class="p-8 md:w-2/3 bg-slate-100 dark:bg-slate-900 relative">
                    <div class="absolute top-4 right-4 z-10 px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm pointer-events-none">
                        Scroll to view →
                    </div>
                    
                    <div class="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style="-ms-overflow-style: none; scrollbar-width: none;">
                        ${e.images&&e.images.length>0?e.images.map((r,i)=>`
                            <div class="flex-none w-80 md:w-96 snap-center first:pl-2 last:pr-2">
                                <div class="rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700 rotate-0 hover:rotate-1 transition-all duration-300 cursor-zoom-in group/image h-56 md:h-64 relative">
                                    <div class="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors z-10"></div>
                                    <img 
                                        src="${r}" 
                                        alt="${e.title} screenshot ${i+1}" 
                                        class="w-full h-full object-cover project-image"
                                        data-project-title="${e.title}"
                                        loading="lazy"
                                    >
                                </div>
                            </div>
                        `).join(""):'<div class="w-full text-center text-slate-400 py-20">No preview images available</div>'}
                    </div>
                </div>
            </div>
        </div>
    `).join("")}
            </div>
            
            <!-- Lightbox Modal -->
            <div id="lightbox" class="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl hidden opacity-0 transition-opacity duration-300 flex items-center justify-center p-4">
                <button id="lightbox-close" class="absolute top-6 right-6 z-20 text-white/70 hover:text-white transition-colors">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <button id="lightbox-prev" class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all opacity-0 group-hover:opacity-100 hidden">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                
                <button id="lightbox-next" class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full transition-all opacity-0 group-hover:opacity-100 hidden">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                <div class="relative max-w-7xl w-full max-h-[90vh] flex flex-col items-center group">
                    <img id="lightbox-img" src="" alt="Full screen view" class="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl mb-4 select-none">
                    <p id="lightbox-caption" class="text-white/90 text-lg font-medium tracking-wide"></p>
                    <p id="lightbox-counter" class="text-white/50 text-sm mt-2"></p>
                </div>
            </div>
        </div>
      </section>
    `}function j(){const l=document.getElementById("lightbox"),e=document.getElementById("lightbox-img"),r=document.getElementById("lightbox-caption"),i=document.getElementById("lightbox-counter"),t=document.getElementById("lightbox-close"),s=document.getElementById("lightbox-prev"),d=document.getElementById("lightbox-next"),f=document.querySelectorAll(".project-image"),w=document.querySelectorAll(".view-gallery-btn");if(!l)return;let o=[],n=0;function b(){if(o.length>0){const a=o[n];e.src=a,o.length>1?(s.classList.remove("hidden"),d.classList.remove("hidden"),requestAnimationFrame(()=>{s.classList.remove("opacity-0"),d.classList.remove("opacity-0")}),i.textContent=`${n+1} / ${o.length}`):(s.classList.add("hidden"),d.classList.add("hidden"),i.textContent="")}}function p(a,c){const u=document.querySelectorAll(`.project-image[data-project-title="${a}"]`);o=Array.from(u).map(h=>h.src),n=o.indexOf(c),n===-1&&(n=0),r.textContent=a,b(),l.classList.remove("hidden"),requestAnimationFrame(()=>{l.classList.remove("opacity-0")}),document.body.style.overflow="hidden"}function x(){l.classList.add("opacity-0"),setTimeout(()=>{l.classList.add("hidden"),e.src="",o=[]},300),document.body.style.overflow=""}function m(){o.length<=1||(n=(n+1)%o.length,b())}function g(){o.length<=1||(n=(n-1+o.length)%o.length,b())}f.forEach(a=>{a.addEventListener("click",c=>{const u=c.target.getAttribute("data-project-title");p(u,c.target.src)})}),w.forEach(a=>{a.addEventListener("click",c=>{const u=c.target.closest("button"),h=u.getAttribute("data-title"),k=u.getAttribute("data-src");p(h,k)})}),d.addEventListener("click",a=>{a.stopPropagation(),m()}),s.addEventListener("click",a=>{a.stopPropagation(),g()}),t.addEventListener("click",x),l.addEventListener("click",a=>{a.target===l&&x()}),document.addEventListener("keydown",a=>{l.classList.contains("hidden")||(a.key==="Escape"&&x(),a.key==="ArrowRight"&&m(),a.key==="ArrowLeft"&&g())})}function E(){return`
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
    `}function N(){return`
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
    `}function M(){return`
      <footer class="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <div class="flex gap-4">
                    <a href="mailto:chumahitekani@gmail.com" class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        <span class="text-slate-600 dark:text-slate-300">chumahitekani@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/hitekani-chuma-4276b9381" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <svg class="w-5 h-5 text-blue-700 dark:text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <span class="text-slate-600 dark:text-slate-300">LinkedIn</span>
                    </a>
                     <a href="https://github.com/ChumaHitekani" target="_blank" class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <svg class="w-5 h-5 text-slate-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span class="text-slate-600 dark:text-slate-300">GitHub</span>
                    </a>
                </div>
                <div class="text-slate-500 dark:text-slate-400 text-sm">
                    © ${new Date().getFullYear()} Hitekani Chuma. Built with Vite & Tailwind.
                </div>
            </div>
        </div>
      </footer>
    `}function v(){const l=document.querySelector("#app"),e=window.location.hash;let r=y();e==="#projects-view"?r+=`
            <main class="pt-16">
                ${L()}
            </main>
        `:r+=`
            <main>
                ${I()}
                ${A()}
                ${S()}
                ${E()}
                ${N()}
            </main>
        `,r+=M(),l.innerHTML=r,e==="#projects-view"&&j(),window.scrollTo(0,0)}v();window.addEventListener("hashchange",v);
