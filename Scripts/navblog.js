const blogLinks = [
    "/WSOA3028A_2583111/Blogs/blog1.html",
    "/WSOA3028A_2583111/Blogs/blog2.html",
    "/WSOA3028A_2583111/Blogs/blog3.html",
    "/WSOA3028A_2583111/Blogs/blog4.html",
    "/WSOA3028A_2583111/Blogs/blog5.html",
    "/WSOA3028A_2583111/Blogs/blog6.html",
    "/WSOA3028A_2583111/Blogs/blog7.html",
    "/WSOA3028A_2583111/Blogs/blog8.html",
    "/WSOA3028A_2583111/Blogs/blog9.html",
    "/WSOA3028A_2583111/Blogs/blog10.html",
    "/WSOA3028A_2583111/Blogs/blog11.html",
    "/WSOA3028A_2583111/Blogs/blog12.html",
    "/WSOA3028A_2583111/Blogs/blog13.html",
];

const customNames = [
    "Blog Post 1: Imagining the Internet",
    "Blog Post 2: Interaction and the www",
    "Blog Post 3: Interaction Design for the Web",
    "Blog Post 4: The IxD Process",
    "Blog Post 5",
    "Blog Post 6: The Ethics of UI & UX Practice",
    "Blog Post 7",
    "Blog Post 8: Internet, Society and Design Justice",
    "Blog Post 9: The World in www",
    "Blog Post 10: Digital inequalities",
    "Blog Post 11: Digital Coloniality / Introduction to CSS",
    "Blog Post 12: Decolonising Technology / Responsive Design",
    "Blog Post 13: Ethical Internet / Flexbox",

];


document.addEventListener("DOMContentLoaded", function() {
    const navSection = document.createElement("section");
    navSection.classList.add("blog-nav-section");

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