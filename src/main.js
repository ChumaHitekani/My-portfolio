import './style.css'
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects, setupProjects } from './components/Projects.js';
import { renderEducation } from './components/Education.js';
import { renderContact, setupContactForm } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

function renderApp() {
  const app = document.querySelector('#app');
  const hash = window.location.hash;

  // Common Header
  let content = renderNavbar();

  if (hash === '#projects-view') {
    // Projects Page
    content += `
            <main class="pt-16">
                ${renderProjects()}
            </main>
        `;
  } else {
    // Home Page (Default)
    content += `
            <main>
                ${renderHero()}
                ${renderAbout()}
                ${renderSkills()}
                ${renderEducation()}
                ${renderContact()}
            </main>
        `;
  }

  // Common Footer
  content += renderFooter();

  app.innerHTML = content;

  // Re-initialize dynamic behaviors
  if (hash === '#projects-view') {
    setupProjects();
  } else {
    setupContactForm();
  }

  // Scroll to top on route change
  window.scrollTo(0, 0);
}

// Initial Render
renderApp();

// Handle Navigation
window.addEventListener('hashchange', renderApp);
