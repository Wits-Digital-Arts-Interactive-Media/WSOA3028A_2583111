document.addEventListener('DOMContentLoaded', function() {
    const imageLinks = document.querySelectorAll('.image-link');

    imageLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const imageUrl = this.getAttribute('href');

            const fullscreenContainer = document.createElement('div');
            fullscreenContainer.classList.add('fullscreen-container');
            fullscreenContainer.innerHTML = `
                <div class="fullscreen-content">
                    <img src="${imageUrl}" alt="Fullscreen Artwork">
                    <button class="close-fullscreen-btn">&times;</button>
                </div>
            `;

            document.body.appendChild(fullscreenContainer);

            const closeBtn = fullscreenContainer.querySelector('.close-fullscreen-btn');
            closeBtn.addEventListener('click', function() {
                document.body.removeChild(fullscreenContainer);
            });
        });
    });
});