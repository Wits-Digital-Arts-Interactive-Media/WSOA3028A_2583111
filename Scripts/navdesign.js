const blogLinks = [
    "/WSOA3028A_2583111/Design/wireframes.html",
    "/WSOA3028A_2583111/Design/IDXprocess.html",
    "/WSOA3028A_2583111/Design/styleGuide.html",
];

const customNames = [
    "Wireframes",
    "IDX Process",
    "Style Guide",
];

document.addEventListener("DOMContentLoaded", function() {
    const navSection = document.createElement("section");
    navSection.classList.add("design-nav-section");

    const navList = document.createElement("ul");

    blogLinks.forEach((link, index) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.textContent = customNames[index]; 
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    navSection.appendChild(navList);
    document.body.insertBefore(navSection, document.querySelector("footer"));
});