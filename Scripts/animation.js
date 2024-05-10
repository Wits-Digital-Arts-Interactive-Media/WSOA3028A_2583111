document.addEventListener("DOMContentLoaded", () => {
    const tumbleweed = document.getElementById("tumbleweed");  
    let angle = 0;
    setInterval(() => {
        angle += 10;
        tumbleweed.style.transform = `rotate(${angle}deg)`; 
    }, 100); 
});