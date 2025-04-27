// Animation fade-in au scroll
const fadeEls = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.2 // Quand 20% de l'élément est visible
});

fadeEls.forEach(el => {
    appearOnScroll.observe(el);
});
