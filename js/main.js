/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    menutoggle = document.getElementById('nav-toggle')
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            menutoggle.classList.toggle('active')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    const toggle = document.getElementById("nav-toggle")
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    toggle.classList.remove('active')
    if(toggle){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            // document.getElementById("nav-toggle").style.transform = "rotate(-260deg)";
        })
    }
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 3000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .timeline__data,`, {
    interval: 200
})
