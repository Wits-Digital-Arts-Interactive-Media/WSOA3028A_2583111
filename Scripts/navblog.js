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
  
];

let currentIndex = blogLinks.indexOf(window.location.pathname);  

document.addEventListener("DOMContentLoaded", function() {
    const navSection = document.createElement("section");
    const navList = document.createElement("ul");

    blogLinks.forEach((link, index) => {
        const listItem = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.textContent = `Blog ${index + 1}`;
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    navSection.appendChild(navList);
    document.body.insertBefore(navSection, document.querySelector("footer"));
});

