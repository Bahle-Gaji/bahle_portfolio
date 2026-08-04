var typed = new Typed("#text", {
    strings: ["stand out online.", "build credibility.", "attract more customers."
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});

// In-place Nav
let nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add("sticky_nav");
    }
    else {
        nav.classList.remove("sticky_nav");
    }
});

const menu = document.querySelector(".menu");
const bars = document.querySelector(".bars");

bars.addEventListener('click', () => {
    menu.classList.toggle("active")
    bars.querySelector("i").classList.toggle("ri-menu-2-line");
    bars.querySelector("i").classList.toggle("ri-close-line");
});



const links = document.querySelectorAll(".menu a");

links.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");
        bars.querySelector("i").classList.toggle("ri-close-line");
        bars.querySelector("i").classList.toggle("ri-menu-2-line");

    });

});

// PORTFOLIO CARD ANIMATION

const fadedElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
}, {
    threshold: 0.2
}
);

fadedElements.forEach(item => {
    observer.observe(item);
});

// const portfolioCards = document.querySelectorAll(".portfolio_img");

// portfolioCards.forEach((card, index) => {
//     card.style.transitionDelay = `${index * 250}ms`;
// });