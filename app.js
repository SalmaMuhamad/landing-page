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
 * Define Global Variables
 * 
 */
// select all sections 
let sections = document.querySelectorAll('section');
let newUl = document.getElementById("navbar__list");
let newFragment = document.createDocumentFragment();

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

sections.forEach((section) => {
    let sectionName = section.getAttribute("data-nav");
    let newLi = document.createElement('li');
    let newLinkk = document.createElement('a');
    let newtext = document.createTextNode(sectionName);

    newLinkk.appendChild(newtext);

    newLinkk.addEventListener('click', function() {
        section.scrollIntoView({ behavior: "smooth" });
    });

    newLi.appendChild(newLinkk);
    newFragment.appendChild(newLi);


});

newUl.appendChild(newFragment);

//remove all active class

sections.forEach((section) => {


    section.classList.remove('your-active-class');

});

// Add class 'active' to section when near top of viewport

sections.forEach((section) => {
    let rect = section.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom < window.innerHeight) {
        section.classList.add('your-active-class');
        activeLink(section);
    }

});

//add active link
function activeLink(activeSection) {
    let links = document.querySelectorAll('a');
    let sectionNav = activeLink.getAttribute('data-nav');

    links.forEach((link) => {
        link.classList.remove('active-class');
    })

    links.forEach((link) => {
        if (link.textContent == sectionNav) {
            link.classList.add('active-class');
        }
    })

}



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click





// Set sections as active