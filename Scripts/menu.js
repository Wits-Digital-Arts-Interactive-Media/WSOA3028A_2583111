const root = "/WSOA3028A_2583111";

const menuItems = [
    { name: "Home", href: root + "/index.html" },
    { name: "Blogs", href: `${root}Blogs/index.html` },
    { name: "Essay", href: `${root}/Essay/index.html` },
    { name: "Portfolios", href: `${root}/Portfolios/index.html` },
    { name: "Design", href: `${root}/Design/index.html` },
];

export function initialiseMenu (currentPage) {
    const nav = document.querySelector ("header > nav")
    const ul = document.createElement ("ul")
    
    for (let menuItem of menuItems) {
        const li = document.createElement("li")
            if(currentPage !=menuItem.name){
                const a = document.createElement("a")
                a.innerText = menuItem.name
                a.setAttribute("href", menuItem.href)
                li.appendChild(a)
            } else { li.innerText=menuItem.name }
            ul.appendChild(li)
        }
        nav.appendChild(ul)
    }