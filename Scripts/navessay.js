document.addEventListener("DOMContentLoaded", function() {
    const blogLinks = [
        "/WSOA3028A_2583111/Essay/Essay1.html",
        "/WSOA3028A_2583111/Essay/Essay2.html",
    ];

    const customNames = [
        "Essay 1: UX & UI Analysis",
        "Essay 2: Digital Colonialism",
    ];

    const summaries = [
        "An in-depth analysis of user experience (UX) and user interface (UI) design principles.",
        "A comprehensive study on the impact of digital colonialism in the modern world.",
    ];

    const navSection = document.createElement("section");
    navSection.classList.add("design-nav-section");

    const navList = document.createElement("ul");

    blogLinks.forEach((link, index) => {
        const listItem = document.createElement("li");
        const card = document.createElement("div");
        card.classList.add("card");

        const cardInner = document.createElement("div");
        cardInner.classList.add("card-inner");

        const cardFront = document.createElement("div");
        cardFront.classList.add("card-front");
        const anchor = document.createElement("a");
        anchor.href = link;
        anchor.textContent = customNames[index];
        cardFront.appendChild(anchor);

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        cardBack.textContent = summaries[index];

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        listItem.appendChild(card);
        navList.appendChild(listItem);
    });

    navSection.appendChild(navList);

    const main = document.createElement("main");
    main.appendChild(navSection);

    document.body.insertBefore(main, document.querySelector("footer"));
});