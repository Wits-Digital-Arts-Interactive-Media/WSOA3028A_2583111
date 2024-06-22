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
        "An in-depth analysis of the user interface (UI) and user experience (UX) design principles found on Takealot.com.",
        "A study on the impact of digital colonialism in the modern world through the lense of a South African web developer.",
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
        const anchorFront = document.createElement("a");
        anchorFront.href = link;
        anchorFront.textContent = customNames[index];
        cardFront.appendChild(anchorFront);

        const cardBack = document.createElement("div");
        cardBack.classList.add("card-back");
        const anchorBack = document.createElement("a");
        anchorBack.href = link;
        anchorBack.textContent = summaries[index];
        cardBack.appendChild(anchorBack);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        listItem.appendChild(card);
        navList.appendChild(listItem);
    });

    navSection.appendChild(navList);

    const main = document.createElement("main");
    main.appendChild(navSection);


    navSection.appendChild(navList);
    document.body.insertBefore(navSection, document.querySelector("footer"));
});