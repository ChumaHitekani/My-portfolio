import { projects } from '../data/projects.js';

export function renderProjects() {
    const projectsHtml = projects.map(project => `
        <div class="bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-700 transition-all duration-300 hover:shadow-2xl mb-20 group">
            
            <div class="md:flex">
                <div class="p-8 md:p-12 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 flex flex-col justify-center bg-slate-50 dark:bg-slate-900/50">
                    <h3 class="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        ${project.title}
                    </h3>
                    
                    <p class="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                        ${project.description}
                    </p>
                    
                    <div class="flex flex-wrap gap-2 mb-8">
                        ${project.tech.map(t => `
                            <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 shadow-sm">
                                ${t}
                            </span>
                        `).join('')}
                    </div>

                    <button 
                        class="view-gallery-btn inline-flex w-full justify-center md:w-auto items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/30"
                        data-src="${project.images && project.images.length > 0 ? project.images[0] : ''}"
                        data-title="${project.title}"
                        ${!project.images || project.images.length === 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}
                    >
                        View Gallery <span class="ml-2">→</span>
                    </button>
                </div>

                <div class="p-8 md:w-2/3 bg-slate-100 dark:bg-slate-900 relative">
                    <div class="absolute top-4 right-4 z-10 px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm pointer-events-none">
                        Scroll to view →
                    </div>
                    
                    <div class="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style="-ms-overflow-style: none; scrollbar-width: none;">
                        ${project.images && project.images.length > 0 ? project.images.map((img, index) => `
                            <div class="flex-none w-80 md:w-96 snap-center first:pl-2 last:pr-2">
                                <div class="rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-700 rotate-0 hover:rotate-1 transition-all duration-300 cursor-zoom-in group/image h-56 md:h-64 relative">
                                    <div class="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors z-10"></div>
                                    <img 
                                        src="${img}" 
                                        alt="${project.title} screenshot ${index + 1}" 
                                        class="w-full h-full object-cover project-image"
                                        data-project-title="${project.title}"
                                        loading="lazy"
                                    >
                                </div>
                            </div>
                        `).join('') : '<div class="w-full text-center text-slate-400 py-20">No preview images available</div>'}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    return `
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
                ${projectsHtml}
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
    `;
}

export function setupProjects() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxCounter = document.getElementById('lightbox-counter');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    // Selectors for triggers
    const images = document.querySelectorAll('.project-image');
    const galleryBtns = document.querySelectorAll('.view-gallery-btn');

    if (!lightbox) return;

    let currentGalleryImages = [];
    let currentIndex = 0;

    function updateLightboxState() {
        if (currentGalleryImages.length > 0) {
            const currentSrc = currentGalleryImages[currentIndex];
            lightboxImg.src = currentSrc;

            // Show/Hide navigation buttons based on gallery size
            if (currentGalleryImages.length > 1) {
                prevBtn.classList.remove('hidden');
                nextBtn.classList.remove('hidden');
                // Force layout update for transitions
                requestAnimationFrame(() => {
                    prevBtn.classList.remove('opacity-0');
                    nextBtn.classList.remove('opacity-0');
                });
                lightboxCounter.textContent = `${currentIndex + 1} / ${currentGalleryImages.length}`;
            } else {
                prevBtn.classList.add('hidden');
                nextBtn.classList.add('hidden');
                lightboxCounter.textContent = '';
            }
        }
    }

    function openLightbox(projectTitle, startSrc) {
        // Find all images belonging to this project from the DOM
        const projectImages = document.querySelectorAll(`.project-image[data-project-title="${projectTitle}"]`);
        currentGalleryImages = Array.from(projectImages).map(img => img.src);

        // Find start index
        currentIndex = currentGalleryImages.indexOf(startSrc);
        if (currentIndex === -1) currentIndex = 0;

        lightboxCaption.textContent = projectTitle;
        updateLightboxState();

        lightbox.classList.remove('hidden');
        requestAnimationFrame(() => {
            lightbox.classList.remove('opacity-0');
        });
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.add('opacity-0');
        setTimeout(() => {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
            currentGalleryImages = [];
        }, 300);
        document.body.style.overflow = '';
    }

    function showNext() {
        if (currentGalleryImages.length <= 1) return;
        currentIndex = (currentIndex + 1) % currentGalleryImages.length;
        updateLightboxState();
    }

    function showPrev() {
        if (currentGalleryImages.length <= 1) return;
        currentIndex = (currentIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
        updateLightboxState();
    }

    // Event Listeners for Images
    images.forEach(img => {
        img.addEventListener('click', (e) => {
            const title = e.target.getAttribute('data-project-title');
            openLightbox(title, e.target.src);
        });
    });

    // Event Listeners for "View Gallery" buttons
    galleryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            const title = button.getAttribute('data-title');
            const src = button.getAttribute('data-src'); // This is just the first image
            openLightbox(title, src);
        });
    });

    // Navigation Controls
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    closeBtn.addEventListener('click', closeLightbox);

    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('hidden')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
}
