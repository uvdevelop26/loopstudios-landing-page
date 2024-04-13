const heroSection = document.querySelector('#hero');
const btnOpenMenu = heroSection.querySelector('#mobileMenu');
const btnCloseMenu = heroSection.querySelector('#mobileMenuClose');
const modal = heroSection.querySelector('.modal');



btnOpenMenu.addEventListener('click', () => {
    modal.classList.add('show');
});

btnCloseMenu.addEventListener('click', () => {

    setTimeout(() => {
        modal.classList.remove('show');
    }, 600);
});