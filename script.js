// --- SVG Icons for Toggle ---
const sunIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
const moonIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.getAttribute('href').length > 1) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // --- CRITICAL FIX: Calculate the offset ---
          
          // The nav bar is h-16 (4rem or 64px). We will add 1.5rem (24px) padding.
          const HEADER_HEIGHT = 64; 
          
          // Get the position of the target element relative to the viewport
          const elementPosition = targetElement.getBoundingClientRect().top;
          
          // Calculate the new scroll position: current position + element's top - offset
          const offsetPosition = elementPosition + window.scrollY - HEADER_HEIGHT;

          window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
          });
        }
      }
    });
    });

    // 2. Dark/Light Mode Toggle Logic
    const toggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // --- Initial Icon Setup (Based on the class already set by the blocking script in <head>) ---
    if (htmlElement.classList.contains('dark')) {
        toggleButton.innerHTML = sunIcon; // Show sun icon
    } else {
        toggleButton.innerHTML = moonIcon; // Show moon icon
    }

    // --- Click Handler ---
    toggleButton.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            // Switch to Light
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            toggleButton.innerHTML = moonIcon;
        } else {
            // Switch to Dark
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            toggleButton.innerHTML = sunIcon;
        }
    });

});