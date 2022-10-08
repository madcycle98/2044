/*   nav transformation on scroll    */

const header = document.querySelector(".nav-js")
const sectionOne = document.querySelector(".hero")
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

const sectionOneObserver = new IntersectionObserver(function(entries) {
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
}

widthChecker()

/*   Review Mover   */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 60,
    // slidesPerGroup: 3,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    loopFillGroupWithBlank: true,
    pagination: {
        dynamicBullets: true,
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView:1 ,
            spaceBetween:12 ,
        },
        400: {
            slidesPerView:1 ,
            spaceBetween:30 ,
        },
        500: {
            slidesPerView:2 ,
            spaceBetween:30 ,
        },
        720: {
            slidesPerView:2 ,
            spaceBetween:60 ,
        },
        950: {
            slidesPerView:3 ,
        }
    }
  });

/*   Mobile hamburger menu    */

const primaryNav = document.querySelector(".nav-menu-mobile");
const navToggle = document.querySelector(".menu-toggle")
const nav = document.getElementById("nav-selector")
const stickyMenu = document.getElementById("sticky-menu")

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
        stickyMenu.style.display = "none";
    }

    else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
        stickyMenu.style.display = "flex";
    }
})

/*   Go to Chi siamo    */

const chiSiamo = document.getElementById("csb-btn")

chiSiamo.addEventListener("click", () => {
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


/*   aggiungi underline a intersection con chi siamo    */

const chiSiamoCard = document.getElementById("chi-siamo-el")
const homeActif = document.getElementById("homeactif")

function chiSiamoGrandezza(){
if (window.screen.width < 992) {
    const sectionOneOptions = {};


const chiSiamoObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
                chiSiamo.classList.remove("actif");
                homeActif.classList.add("actif");
            console.log("bella")
        }
        else {
            chiSiamo.classList.add("actif");
            homeActif.classList.remove("actif");
            console.log("nonbella")
        }
        });
    },
sectionOneOptions)

chiSiamoObserver.observe(chiSiamoCard)
}
}

chiSiamoGrandezza()
