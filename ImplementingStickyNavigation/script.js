// script.js
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const stickyNav = () => {
        if (window.scrollY > header.offsetTop) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    };
    window.addEventListener('scroll', stickyNav);
});
