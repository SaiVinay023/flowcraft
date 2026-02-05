// main.js - Central navigation and interactivity handler

document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeMobileMenu();
  initializeLanguageSwitcher();
  highlightActiveNavLink();
});

// Highlight active navigation link based on current page
function highlightActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a, #side-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || href.includes(currentPage))) {
      link.classList.add('active-link');
    }
  });
}

// Initialize main navigation functionality
function initializeNavigation() {
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// Initialize mobile menu toggle
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const sideMenu = document.getElementById('side-menu');
  
  if (menuToggle && sideMenu) {
    menuToggle.addEventListener('click', () => {
      sideMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        sideMenu.classList.add('hidden');
      }
    });
    
    // Close menu when clicking on a link
    sideMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        sideMenu.classList.add('hidden');
      });
    });
  }
}

// Initialize language switcher
function initializeLanguageSwitcher() {
  const languageSelect = document.getElementById('language-select');
  
  if (languageSelect) {
    // Load saved language or default to 'en'
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    
    // Apply language on change
    languageSelect.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      localStorage.setItem('selectedLanguage', selectedLang);
      applyLanguage(selectedLang);
    });
    
    // Apply language on page load
    applyLanguage(savedLanguage);
  }
}

// Apply selected language to page elements
function applyLanguage(lang) {
  // This function will work with translations.js
  // The translations.js file should handle the actual translation logic
  const event = new CustomEvent('languageChanged', { detail: { language: lang } });
  document.dispatchEvent(event);
}

// Utility function to update page title dynamically
function updatePageTitle(title) {
  document.title = title;
}

// Export functions for use in other scripts if needed
window.FlowcraftNav = {
  highlightActiveNavLink,
  initializeNavigation,
  initializeMobileMenu,
  initializeLanguageSwitcher,
  updatePageTitle
};
