document.addEventListener("DOMContentLoaded", () => {
    let artIndex = 0;
    const artSlides = document.querySelectorAll(".art-slide");

    function showArtSlide(index) {
        artSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextArtSlide() {
        artIndex = (artIndex + 1) % artSlides.length;
        showArtSlide(artIndex);
    }

    function prevArtSlide() {
        artIndex = (artIndex - 1 + artSlides.length) % artSlides.length;
        showArtSlide(artIndex);
    }

    document.querySelector(".prev-slide").addEventListener("click", prevArtSlide);
    document.querySelector(".next-slide").addEventListener("click", nextArtSlide);

    // Adding click event listeners to art slides
    artSlides.forEach((slide) => {
        slide.addEventListener("click", () => {
            window.location.href = "../Portfolios/index.html"; 
        });
    });

    showArtSlide(artIndex);

    setInterval(nextArtSlide, 5000); // Auto slide every 5 seconds
});