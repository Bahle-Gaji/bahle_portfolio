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