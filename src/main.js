import './style.css'
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderEducation } from './components/Education.js';
import { renderContact, setupContactForm } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  <main>
    ${renderHero()}
    ${renderAbout()}
    ${renderSkills()}
    ${renderProjects()}
    ${renderEducation()}
    ${renderContact()}
  </main>
  
  ${renderFooter()}
`;

setupContactForm();
