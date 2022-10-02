// Mengatifkan untuk fungsi open menu dan close menu 

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const garis1 = document.getElementById('garis1');
const garis2 = document.getElementById('garis2');
const header = document.getElementById('header');



// handler menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        garis1.classList.toggle('garis1Rotation');
        garis2.classList.toggle('garis2Rotation');
        header.classList.toggle('header-color-mobile');
        navLogoHide.classList.toggle('nav__logo-hide');

    })
}

const navLink = document.querySelectorAll('#nav-link');

function linkAction() {
    navMenu.classList.remove('open');
    garis1.classList.remove('garis1Rotation');
    garis2.classList.remove('garis2Rotation');
    header.classList.remove('header-color-mobile');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll section link aktive
const sections = document.querySelectorAll('section[id]');

// scroll link acktive
function secrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', secrollActive);



// handler card skill show
const skillCardHeader = document.querySelectorAll('.skill__card-header');
const skillCard = document.getElementsByClassName('skill__card');


function toggleSkill() {

    let itemClass = this.parentNode.className

    for (let i = 0; i < skillCard.length; i++) {

        skillCard[i].className = 'skill__card skill__close';

    }

    if (itemClass === 'skill__card skill__close') return this.parentNode.className = 'skill__card skill__open';

}

skillCardHeader.forEach(card => {
    card.addEventListener('click', toggleSkill)
})