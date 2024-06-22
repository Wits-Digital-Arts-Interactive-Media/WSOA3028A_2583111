document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-inner');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = 'rotateY(0deg)';
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