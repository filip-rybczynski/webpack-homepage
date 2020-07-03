import {greetingsFatArrow, greetingsRegular, autor} from './greetings.js';

const name = "Filip";
const DoB = 1994;
let today = new Date();
let age = new Date().getFullYear() - DoB;

let years;

let time =
  today.getHours() +
  ":" +
  (today.getMinutes() < 10 ? "0" : "") +
  today.getMinutes();

if (age % 10 < 5 && age % 10 > 1) {
  years = "lata";
} else if (age == 1) {
  years = "rok";
} else {
  years = "lat";
}

let clock = `Otworzyłeś tę stronę o godzinie ${time}`;

const test = document.querySelector(".timestamp--js");

if (test){
  test.innerHTML = `Witaj! ${clock}`;
}

/* alert('Eloszka! Sprawdź log'); */



const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

console.log(clock);

//below functions have been imported

greetingsRegular(name, age, years);

greetingsFatArrow(name, age, years);

autor.greetings();

const button = document.querySelector('.action--js');
if(button){
  console.log(button);

  var headingStatus = 0;
  
  button.addEventListener('click', () => {
    const heading =document.querySelector(".main-header");
    
      heading.innerHTML = "Niespodzianka! Teraz rządzi tu ziemniak";
      heading.classList.toggle('potato-class')
      
  });
}
