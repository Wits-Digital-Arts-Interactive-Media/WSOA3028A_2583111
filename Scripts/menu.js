const root = "/WSOA3028A_2583111";

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blogs", href: `${root}/Blogs/index.html` },
    { name: "Essay", href: `${root}/Essay/index.html` },
    { name: "Portfolio", href: `${root}/Portfolios/index.html` },
    { name: "Design", href: `${root}/Design/index.html` },
    { name: "Profile", href: `${root}/Profile/index.html` },
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
            a.classList.add("current");
        }
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}