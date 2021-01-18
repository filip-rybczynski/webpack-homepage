import { greetingsFatArrow, greetingsRegular, autor } from "./greetings.js";
import moment from "moment";

const name = "Filip";
const DoB = "1994-01-14";
let age = moment().diff(DoB, "years");

// let time2 =
//   today.getHours() +
//   ":" +
//   (today.getMinutes() < 10 ? "0" : "") +
//   today.getMinutes();

let years = "lat";

if (age % 10 < 5 && age % 10 > 1) {
  years = "lata";
} else if (age == 1) {
  years = "rok";
}

let time = moment().format("H:mm");

let clock = `Strona została otwarta o godzinie ${time}`;

const stamp = document.querySelector(".timestamp--js");

if (stamp) {
  stamp.innerHTML = clock;
}

/* alert('Eloszka! Sprawdź log'); */

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

console.log(clock);

//below functions have been imported

greetingsRegular(name, age, years);

greetingsFatArrow(name, age, years);

autor.greetings();

const button = document.querySelector(".action--js");

let headingStatus = 0;

const heading = document.querySelector(".main-header");

button.addEventListener("click", () => {
  heading.classList.toggle("potato-class");

  if (headingStatus) {
    heading.innerHTML = "Filip Rybczyński - strona główna";
    headingStatus++;
  } else {
    heading.innerHTML = "Niespodzianka! Teraz rządzi tu ziemniak";
    headingStatus--;
  }
});

const bodyGradient = getComputedStyle(
  document.querySelector(".body-background")
).backgroundImage;

const nightMode = document.querySelector(".night-mode--js");

let isNightMode = false;

// console.log(localStorage.getItem("nightMode"));

nightMode.addEventListener("change", () => {

  const homepageLinkBorder = document.querySelector(".navigation__link--homepage");

  if (isNightMode) {
    document.documentElement.style.setProperty(
      "--background-color",
      `${bodyGradient}`
    );
    document.documentElement.style.setProperty("--rich-color", "#1a3127");
    document.documentElement.style.setProperty("--light-background", "#99c6cf");
    document.documentElement.style.setProperty("--basic", "#124e61");
    document.documentElement.style.setProperty("--basic-navigation", "#124e61");
    document.documentElement.style.setProperty("--beige-text", "#f4e8c1");

    homepageLinkBorder.classList.toggle("navigation__link--homepage-nightmode");
    heading.classList.toggle("main-header-nightmode");
    isNightMode = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "#111111");
    document.documentElement.style.setProperty("--rich-color", "#99c6cf");
    document.documentElement.style.setProperty("--light-background", "#111111");
    document.documentElement.style.setProperty("--basic", "#99c6cf");
    document.documentElement.style.setProperty("--basic-navigation", "#111111");
    document.documentElement.style.setProperty("--beige-text", "#111111");

    homepageLinkBorder.classList.toggle("navigation__link--homepage-nightmode");
    heading.classList.toggle("main-header-nightmode");
    isNightMode = true;
  }
  });