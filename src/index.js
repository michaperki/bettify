// index.js

// import style sheet
import "./style.css";

// get the initialPageLoad function from the pageLoad module
import { initialPageLoad } from "./PageLoad.js";

initialPageLoad();

// logic for nav buttons
const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach((button) => {console.log(button.textContent)});

