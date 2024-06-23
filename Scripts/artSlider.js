document.addEventListener("DOMContentLoaded", () => {
    let artIndex = 0;
    let writingIndex = 0;

    const artSlides = document.querySelectorAll(".art-slide");
    const writingSlides = document.querySelectorAll(".writing-slide");

    function showArtSlide(index) {
        artSlides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function showWritingSlide(index) {
        writingSlides.forEach((slide, i) => {
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

    function nextWritingSlide() {
        writingIndex = (writingIndex + 1) % writingSlides.length;
        showWritingSlide(writingIndex);
    }

    // Function to show a slide
    function showSlide(slides, index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    // Event listener for previous slide button
    document.querySelector(".prev-slide").addEventListener("click", () => {
        prevArtSlide();
    });

    // Event listener for next slide button
    document.querySelector(".next-slide").addEventListener("click", () => {
        nextArtSlide();
    });

    // Link each art slide to Portfolio/index.html
    artSlides.forEach((slide, index) => {
        slide.addEventListener("click", () => {
            window.location.href = "./Portfolios/index.html";
        });
    });

    showArtSlide(artIndex);
    showWritingSlide(writingIndex);

    setInterval(nextArtSlide, 5000);
    setInterval(nextWritingSlide, 7500);
});