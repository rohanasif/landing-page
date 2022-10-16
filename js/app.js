/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const headings = document.querySelectorAll("h2");
const ul = document.querySelector("ul");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isNearTop(el) {
  return el.getBoundingClientRect().y >= 0 && el.getBoundingClientRect().y <= 20;
}

function isActive(el) {
  return el.classList.contains("active");
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let i = 0; i < headings.length; i++) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let text = document.createTextNode(headings[i].innerHTML);
  a.classList.add("menu__link");
  a.appendChild(text);
  li.appendChild(a);
  ul.appendChild(li);
}
const anchors = document.querySelectorAll("#navbar__list li");

// Add class 'active' to section when near top of viewport
for (let i = 0; i < sections.length; i++) {
  window.addEventListener("scroll", () => {
    if ((!isActive(sections[i]) && (isNearTop(sections[i])))) {
      sections[i].classList.add("active");
      anchors[i].classList.add("active");
    }
    else if ((isActive(sections[i]) && (!isNearTop(sections[i])))) {
      sections[i].classList.remove("active");
      anchors[i].classList.remove("active");
    }
  })
}


// Scroll to anchor ID using scrollTo event

for (let i = 0; i < sections.length; i++) {
  document.querySelectorAll("a")[i].addEventListener('click', () => sections[i].scrollIntoView({
    behavior: 'smooth'
  }));
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active