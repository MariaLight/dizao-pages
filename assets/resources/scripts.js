// document.addEventListener('DOMContentLoaded', () => {
const menuItems = document.querySelectorAll('.burger-menu__item');
const menu = document.querySelector(".header-burger__menu");
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

// })