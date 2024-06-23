
    document.addEventListener("DOMContentLoaded", () => {
        const artSlides = document.querySelectorAll('.art-slide');

        artSlides.forEach(slide => {
            slide.addEventListener('click', () => {
                window.location.href = './Portfolios/index.html';
            });
        });
    });