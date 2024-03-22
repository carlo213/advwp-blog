// script.js

document.addEventListener("DOMContentLoaded", function() {
    const smoothScroll = (target) => {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScroll(targetElement);
            }
        });
    });
});
