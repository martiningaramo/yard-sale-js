/* Const declaration */
const emailMenu = document.querySelector('.email-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuBtn = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.close-img');
const cartBtn = document.querySelector('.nav-cart');
const asideCart = document.querySelector('.product-detail');
const asideCartArrow = document.querySelector('.title-container');

/* Events Listeners */
emailMenu.addEventListener('click', toggleDesktopMenu);

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

cartBtn.addEventListener('click', toggleCartMenu);
asideCartArrow.addEventListener('click', toggleCartMenu);

/* Functions */
function toggleDesktopMenu(){
    asideCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    asideCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideCart.classList.toggle('inactive');
}