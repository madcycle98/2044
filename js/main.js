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

/* db */
const reviews = {
    review1 : {
        stars: 5,
        name: "Franco Ongaro",
        content: `5 stelle non bastano. Esperienza più che positiva. Macchina perfetta come da descrizione. 
        Il Sig. Enrico sempre cordiale, preparato e disponibile. 
        Quando si acquista un’auto, poter affidarsi ad una persona trasparente ed onesta è un valore aggiunto.`
    },
    review2 : {
        stars: 5,
        name: "Lucian Ambrosa",
        content: `comprato una renault megane usata, persona molto onesta e prezzo più che accessibile. Consiglio vivamente.`
    },
    review3 : {
        stars: 5,
        name: "Massimo Carraro",
        content: `Super esperienza e disponibilità da parte dello staff... usato super sicuro con Enrico Zaltron`
    },
    review4 : {
        stars: 5,
        name: "Ivan Cappellini",
        content: `Venditore professionale con vetture per tutte le tasche. Provare per credere. Consiglio!`
    },
    review5 : {
        stars: 5,
        name: "Michele Mike",
        content: `Il titolare è persona molto competente e disponibile. Ottima trattativa.`
    },
    review6 : {
        stars: 5,
        name: "Eugenio Stocchero",
        content: `Ottima professionalità e servizio post vendita assicurato.`
    },
    review7 : {
        stars: 5,
        name: "Alessandro Michielin",
        content: `Competente e preparato`
    },
    review8 : {
        stars: 5,
        name: "Simone Di Federico",
        content: `Persona competente e molto gentile. Consigliatissimo`
    },
    review9 : {
        stars: 5,
        name: "Paolo",
        content: `Sono molto soddisfatto dell'acquisto fatto. Enrico sempre presente e molto affidabile. 
        Quello che aveva riportato nell'annuncio l'ho ritrovato pienamente nella macchina acquistata. Lo suggerisco`
    },
    review10 : {
        stars: 5,
        name: "Marta-Rebeca Ionescu",
        content: `Consigliato. Molto gentile e onesto.`
    },
    review11 : {
        stars: 4,
        name: "Antonio Buglione",
        content: `Affidabile, corretto, puntuale.`
    },
    review12 : {
        stars: 5,
        name: "Alessandro",
        content: `Ho trovato nel Sig. Enrico tanta cortesia e pazienza. Ha cercato di assecondarmi in tutte le mie necessità, molto preparato e attento alle mie problematiche`
    }
}
/* /db */

function reviewsHtml(data) {
    document.getElementById("reviews.container").innerHTML =
        `<div class="review-card">
            <p class="review-writer">${""}</p>
            <img class="stars"${""}" alt="">
            <p class="review-text">${""}</p>
        </div>`
}

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

/*   Go to Vieni a Trovarci    */
