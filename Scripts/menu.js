const root = "/WSOA3028A_2583111";

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blogs", href: `${root}/blogs/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` },
    { name: "Design", href: `${root}/design/index.html` },
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.innerText = menuItem.name;
        a.setAttribute("href", menuItem.href);
        if (currentPage === menuItem.name) {
            a.classList.add("active"); // Add a class to the active menu item
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}