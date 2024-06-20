document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card-inner');

    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            card.style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseout', function() {
            card.style.transform = 'rotateY(0deg)';
        });
    });
});