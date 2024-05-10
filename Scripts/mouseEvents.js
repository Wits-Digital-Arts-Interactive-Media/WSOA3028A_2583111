export function handleMouseEvents() {
    const navLists = document.querySelectorAll('.navList');

    navLists.forEach(navList => {
        const anchors = navList.querySelectorAll('a');

        anchors.forEach(a => {
            a.addEventListener('mouseover', () => {
                a.style.fontSize = '1.5em';
                a.style.color = '#A020F0'; 
            });

            a.addEventListener('mouseout', () => {
                a.style.fontSize = '1em';
                a.style.color = '';
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleMouseEvents();
});