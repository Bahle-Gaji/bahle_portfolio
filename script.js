var typed = new Typed("#text", {
    strings:["stand out online.", "build credibility.", "attract more customers." 
    ],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
});

// In-place Nav
let nav = document.querySelector("nav");

window.addEventListener('scroll', () => {
    if(window.scroll > 100){
        nav.classList.add("sticky_nav");
    }
    else{
        nav.classList.remove("sticky_nav");
    }
})