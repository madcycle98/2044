/*   nav transformation on scroll    */

const header = document.querySelector(".nav-js")
const sectionOne = document.querySelector(".content-zone-autos-h2")
const logo = document.querySelector(".nav-logo")
const logoImg = document.getElementById("nav-logo-img")
const navHeigth = document.querySelector(".nav-menu")
const navbarsLinks = document.querySelectorAll(".navbar-links-element")
const ctaNavbar = document.querySelector(".cta-navbar")
const nav1 = document.querySelector(".nav1")
const nav2 = document.querySelector(".nav2")


function widthChecker(){
if (window.screen.width >= 992) {
    const sectionOneOptions = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            logo.classList.add("logo-scrolled");
            logoImg.style.height = "20px"
            navHeigth.classList.add("nav-heigth");
            nav1.classList.add("nav1-scrolled")
            nav2.classList.add("nav2-scrolled")
            for (const multiples of navbarsLinks) {
                multiples.classList.add('navbar-links-element-scrolled');}
                ctaNavbar.classList.add("cta-navbar-scrolled");
          }
        else {
            header.classList.remove("nav-scrolled");
            logo.classList.remove("logo-scrolled");
            logoImg.style.height = "46px"
            navHeigth.classList.remove("nav-heigth");
            nav1.classList.remove("nav1-scrolled")
            nav2.classList.remove("nav2-scrolled")
            for (const multiples of navbarsLinks) {
                multiples.classList.remove('navbar-links-element-scrolled');}
            ctaNavbar.classList.remove("cta-navbar-scrolled");
        }
        });
    },
sectionOneOptions)

sectionOneObserver.observe(sectionOne)
  }
else {
}
}

widthChecker()

/*   Mobile hamburger menu    */

const primaryNav = document.querySelector(".nav-menu-mobile");
const navToggle = document.querySelector(".menu-toggle")
const nav = document.getElementById("nav-selector")

if (window.screen.width <= 1023) {
    nav.classList.remove("nav-js")
}
else if (window.screen.width > 1024) {
    nav.classList.add("nav-js")
}
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
    }

    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

