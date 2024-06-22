document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-inner');

    let isAnimating = false;

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            if (!isAnimating) {
                card.classList.add('flipped');
            }
        });

        card.addEventListener('mouseout', function() {
            if (!isAnimating) {
                card.classList.remove('flipped');
            }
        });

        card.addEventListener('transitionstart', function() {
            isAnimating = true;
        });

        card.addEventListener('transitionend', function() {
            isAnimating = false;
        });

        card.addEventListener('click', function(event) {
            const anchorFront = card.querySelector('.card-front a');
            const anchorBack = card.querySelector('.card-back a');
            if (event.target === anchorFront || event.target === anchorBack) {
                window.location.href = event.target.href;
            }
        });
    });
});