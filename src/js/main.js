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

let clock = `Otworzyłeś tę stronę o godzinie ${time}`;

const test = document.querySelector(".timestamp--js");

if (test) {
  test.innerHTML = `Witaj! ${clock}`;
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

button.addEventListener("click", () => {
  const heading = document.querySelector(".main-header");
  heading.classList.toggle("potato-class");

  if (headingStatus) {
    heading.innerHTML = "Filip Rybczyński - strona główna";
    headingStatus++;
  } else {
    heading.innerHTML = "Niespodzianka! Teraz rządzi tu ziemniak";
    headingStatus--;
  }
});

const nightMode = document.querySelector(".night-mode-toggle--js");

let isNightModeOn = 0;
const bodyGradient = getComputedStyle(
  document.querySelector(".body-background")
).backgroundImage;

nightMode.addEventListener("click", () => {
  if (isNightModeOn) {
    document.documentElement.style.setProperty(
      "--background-color",
      `${bodyGradient}`
    );
    document.documentElement.style.setProperty("--rich-color", "#1a3127");
    document.documentElement.style.setProperty("--light-background", "#99c6cf");
    nightMode.innerHTML = "Tryb nocny";
    isNightModeOn--;
  } else {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--rich-color", "#99c6cf");
    document.documentElement.style.setProperty("--light-background", "black");
    nightMode.innerHTML = "Tryb normalny";
    isNightModeOn++;
  }
});
