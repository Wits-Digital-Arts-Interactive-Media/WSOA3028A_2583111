document.addEventListener("DOMContentLoaded", function() {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        backToTopButton.style.display = (window.pageYOffset > 20) ? "block" : "none";
    }

    if (backToTopButton) {
        backToTopButton.addEventListener('click', scrollToTop);
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});