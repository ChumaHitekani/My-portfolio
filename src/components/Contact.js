export function renderContact() {
    return `
      <section id="contact" class="py-20 bg-white dark:bg-slate-900">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Let's Work Together</h2>
            <p class="text-xl text-slate-600 dark:text-slate-300 mb-12">
                Currently available for <span class="font-bold text-blue-600 dark:text-blue-400">Internship</span> and <span class="font-bold text-blue-600 dark:text-blue-400">Junior Software Developer</span> opportunities.
            </p>
            
            <form id="contact-form" class="max-w-md mx-auto space-y-4 text-left">
                <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input type="text" id="name" required class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Your Name">
                </div>
                 <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                    <input type="email" id="email" required class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com">
                </div>
                 <div>
                    <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea id="message" rows="4" required class="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can I help you?"></textarea>
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors">
                    Send Message
                </button>
            </form>
        </div>
      </section>
    `;
}

export function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = `mailto:chumahitekani@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
}
