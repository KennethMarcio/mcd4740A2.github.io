// Navigation bar hamburger toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.menu-links').classList.toggle('active');
});

// Navigation bar scroll effect
window.addEventListener('scroll', () => {
    document.querySelector('.navigation-bar').classList.toggle('scrolled', window.scrollY > 0);
});

