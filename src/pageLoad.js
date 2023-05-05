// initial page load function

export function initialPageLoad() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    header.textContent = "Bettify";
    header.classList.add("header");
    content.appendChild(header);

    const nav = document.createElement("nav");
    nav.classList.add("nav");
    content.appendChild(nav);
    
    const main = document.createElement("main");
    main.classList.add("main");
    content.appendChild(main);

    const footer = document.createElement("footer");
    footer.classList.add("footer");
    content.appendChild(footer);

    const footerText = document.createElement("p");
    footerText.textContent = "© 2023 by Mike Perkins";
    footer.appendChild(footerText);

}