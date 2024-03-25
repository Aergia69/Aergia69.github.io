const scrollToTopButton = document.getElementById('scroll-to-top');

// Show/hide the scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top of the page when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});