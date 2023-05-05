// initial page load function

export function initialPageLoad() {
    const content = document.querySelector("#content");
    createHeader(content);
}

const createHeader = (content) => {
    const header = document.createElement("header");
    header.classList.add("header");
    content.appendChild(header);

    const h1 = document.createElement("h1");
    h1.classList.add("header__title");
    h1.textContent = "BETTIFY";
    header.appendChild(h1);

    const nav = document.createElement("nav");
    nav.classList.add("header__nav");
    header.appendChild(nav);

    // add a hamburger menu icon
    const hamburger = document.createElement("button");
    hamburger.classList.add("header__hamburger");
    // get the hamburger unicode character
    const hamburgerUnicode = "\u2630";
    hamburger.innerHTML = hamburgerUnicode;
    nav.appendChild(hamburger);

    // add an event listener to the hamburger menu
    hamburger.addEventListener("click", () => {
        const navList = document.querySelector(".header__nav-list");
        navList.classList.toggle("header__nav-list--hidden");
        navList.classList.toggle("header__nav-list--active");
        // when the nav list toggles to active, I want a transition to occur
        // so I need to add a class that sets the transition property
             
        hamburger.classList.toggle("header__hamburger--hidden");
    });

    // add a div that appears when the hamburger menu is clicked
    // the div contains the nav links and a close button
    // initially the div is hidden
    const navList = document.createElement("div");
    navList.classList.add("header__nav-list");
    navList.classList.add("header__nav-list--hidden");
    nav.appendChild(navList);

    // add a close button to the nav list
    const close = document.createElement("button");
    close.classList.add("header__close");
    // get the close unicode character
    const closeUnicode = "\u2715";
    close.innerHTML = closeUnicode;
    navList.appendChild(close);

    // add an event listener to the close button
    close.addEventListener("click", () => {
        navList.classList.toggle("header__nav-list--active");
        navList.classList.toggle("header__nav-list--hidden");
        hamburger.classList.toggle("header__hamburger--hidden");
    }
    );

    // add the nav links
    const navLinks = ["Home", "Menu", "Contact"];
    navLinks.forEach((link) => {
        const navLink = document.createElement("a");
        navLink.classList.add("header__nav-link");
        navLink.textContent = link;
        navList.appendChild(navLink);
    });

    // append the nav list to the nav
    nav.appendChild(navList);
    
}
