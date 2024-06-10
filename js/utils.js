// hamburger menu 

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelectorAll('.nav-menu');

    hamburger.addEventListener('click', () => {
        navMenu.forEach(menu => menu.classList.toggle('active'));
    });
});
