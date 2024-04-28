const root = "/WSOA3028A_2583111";

const menuItems = [
    { name: "Home", href: "/index.html" },
    { name: "Blogs", href: `/Blogs/index.html` },
    { name: "Essay", href: `/Essay/index.html` },
    { name: "Portfolios", href: `/Portfolios/index.html` },
    { name: "Design", href: `/Design/index.html` },
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");

    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        if (currentPage !== menuItem.name) {
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
        }

        ul.appendChild(li);
    }

    nav.appendChild(ul);
}