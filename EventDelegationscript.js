document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav');
    const content = document.getElementById('content');

    const pages = {
        home: 'Welcome to the Home page!',
        about: 'Learn more About us on this page.',
        services: 'Discover our Services here.',
        contact: 'Get in touch with us through the Contact page.'
    };

    // Event delegation for navigation links
    nav.addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target;

        if (target.tagName === 'A') {
            const page = target.getAttribute('data-page');
            content.textContent = pages[page] || 'Page not found.';
        }
    });
});
