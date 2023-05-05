// initial page load function
// import bet list
import { BetEventList } from "./betEventList.js";
// import bet event
import { BetEvent } from "./betEvent.js";

export function initialPageLoad() {
  const content = document.querySelector("#content");
  createHeader(content);
  createMain(content);
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
  });

  // add the nav links
  const navLinks = ["Admin", "Viewer"];
  navLinks.forEach((link) => {
    const navLink = document.createElement("a");
    navLink.classList.add("header__nav-link");
    navLink.textContent = link;
    navList.appendChild(navLink);
    // add an event listener to the nav link
    navLink.addEventListener("click", () => {
      // if the nav link is admin, create the admin page
      if (link === "Admin") {
        createAdmin(content);
      }
      // if the nav link is viewer, create the viewer page
      if (link === "Viewer") {
        createViewer(content);
      }
    });
  });

  // append the nav list to the nav
  nav.appendChild(navList);
};

const createMain = (content) => {
  // for now, just create a div with a class of main
  // the rest of main will take place in the console for now
  const main = document.createElement("main");
  main.classList.add("main");
  content.appendChild(main);
  const betList = new BetEventList();

  // create a bet that will expire in the next minute
  const bet = new BetEvent(
    "Will Dan call the river?",
    "",
    "text",
    ".5",
    "me",
    "open",
    "nada"
  );
  betList.addBet(bet);
  betList.printBetList();
  betList.closeExpiredBets();

  // print the bet list every 10 seconds for 1 minute
  const interval = setInterval(() => {
    console.clear();
    betList.printBetList();
    betList.closeExpiredBets();
  }, 1000);

  // stop the interval after 1 minute
  setTimeout(() => {
    clearInterval(interval);
  }, 31000);
};

const createAdmin = (content) => {
  // reset the content
  content.innerHTML = "";
  createHeader(content);

  // for now, just create a div with a class of admin
  const admin = document.createElement("div");
  admin.classList.add("admin");
  // add some text
  const adminText = document.createElement("p");
  adminText.textContent = "This is the admin page";
  admin.appendChild(adminText);
  content.appendChild(admin);
};

const createViewer = (content) => {
  // reset the content
  content.innerHTML = "";
  createHeader(content);

  // for now, just create a div with a class of viewer
  const viewer = document.createElement("div");
  viewer.classList.add("viewer");
  // add some text
  const viewerText = document.createElement("p");
  viewerText.textContent = "This is the viewer page";
  viewer.appendChild(viewerText);
  content.appendChild(viewer);
};
