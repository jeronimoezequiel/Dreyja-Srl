const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.getAttribute("id");
    });
});