const burgerBtn = document.querySelector(".burger-icon")
const headerNav = document.querySelector(".header__nav")
console.log(headerNav.style.display);
burgerBtn.addEventListener('click', () => {
    headerNav.classList.toggle("hidden")
})