/* Const declaration */
const emailMenu = document.querySelector('.email-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuBtn = document.querySelector('.menu-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.close-img');
const cardsContainer = document.querySelector('.cards-container');
const cartBtn = document.querySelector('.nav-cart');
const asideCart = document.querySelector('.product-cart');
const asideCartArrow = document.querySelector('.title-container');
const asideProduct = document.querySelector('.product-detail');
const asideProductArrow = document.querySelector('.product-detail-close');

/* Events Listeners */
emailMenu.addEventListener('click', toggleDesktopMenu);

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

cartBtn.addEventListener('click', toggleCartMenu);
asideCartArrow.addEventListener('click', toggleCartMenu);

asideProductArrow.addEventListener('click', closeProductAside)

/* Functions */
function toggleDesktopMenu(){
    asideCart.classList.add('inactive');
    asideProduct.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    asideCart.classList.add('inactive');
    asideProduct.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideProduct.classList.add('inactive');
    asideCart.classList.toggle('inactive');
}

function openProductAside(){
    asideCart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideProduct.classList.remove('inactive');
}

function closeProductAside(){
    asideProduct.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Smartphone',
    price: 599.99,
    image: 'https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Monitor',
    price: 399.99,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 999.99,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Xbox Series S',
    price: 250.00,
    image: 'https://images.pexels.com/photos/12718988/pexels-photo-12718988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'PS5 Controller',
    price: 69.99,
    image: 'https://images.pexels.com/photos/9408469/pexels-photo-9408469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(array){

    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.classList.add('product-img');

        productImg.addEventListener('click', openProductAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productInfoCart = document.createElement('img');
        productInfoCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productInfoCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);