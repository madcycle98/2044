/*   nav transformation on scroll    */

const header = document.querySelector(".nav-js")
const sectionOne = document.querySelector(".telephone-info-top")
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

/*   Go to Dove trovarci    */

const doveTrov = document.getElementById("dvtrv-btn")

doveTrov.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
        stickyMenu.style.display = "none";
    }

    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
        stickyMenu.style.display = "flex";
    }
})

/*   aggiungi underline a intersection con dove trovarci    */

const mappaDiv = document.getElementById("mappa-div")
const contattiId = document.getElementById("contatti-id")
const doveTrovarciId = document.getElementById("dvtrv-btn")

function mappaDivObserver(){
if (window.screen.width < 992) {
    const sectionOneOptions = {};


const chiSiamoObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            doveTrovarciId.classList.remove("actif");
            contattiId.classList.add("actif");
            console.log("bella")
        }
        else {
            doveTrovarciId.classList.add("actif");
            contattiId.classList.remove("actif");
            console.log("nonbella")
        }
        });
    },
sectionOneOptions)

chiSiamoObserver.observe(mappaDiv)
}
}

mappaDivObserver()