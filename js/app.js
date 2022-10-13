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
const headings = document.getElementsByTagName("h2");
const ulEl = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNav() {
    for(let i=0; i<headings.length; i++) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let text = document.createTextNode(headings[i].innerHTML);
        li.appendChild(a);
        a.appendChild(text);
        a.href = '#' + sections[i].id;
        ulEl.appendChild(li);
    }
}
createNav();


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const links = document.querySelectorAll(".navbar__menu ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


