document.addEventListener("DOMContentLoaded", () => {
    const tumbleweed = document.getElementById("tumbleweed");
    if (!tumbleweed) return;

    let angle = 0;
    let position = 0;
    const speed = 1; 
    const rotationSpeed = 1; 

    const tumbleweedWidth = tumbleweed.offsetWidth;

    const rotateAndMoveTumbleweed = () => {
        angle += rotationSpeed;
        position += speed;

        if (position > window.innerWidth) {
            position = -tumbleweedWidth;
        }

        tumbleweed.style.transform = `translateX(${position}px) rotate(${angle}deg)`;

        requestAnimationFrame(rotateAndMoveTumbleweed);
    };

    requestAnimationFrame(rotateAndMoveTumbleweed);
});