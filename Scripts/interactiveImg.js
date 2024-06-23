document.addEventListener("DOMContentLoaded", () => {
    const artSlides = document.querySelectorAll('.art-slide figure img');
    artSlides.forEach(img => {
        img.addEventListener('click', () => {
            window.location.href = `${window.location.origin}/Portfolios/index.html`;
        });
    });
});