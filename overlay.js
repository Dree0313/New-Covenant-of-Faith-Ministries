window.addEventListener('load', () => {
    const overlay = document.getElementById('welcome-overlay');
    const logoOverlay = document.getElementById('logo-overlay')
    const menuButton = document.getElementById('menu-button');


    //Welcome overlay slide down after 0.5s
    setTimeout(() => {
        overlay.classList.add('show');
    }, 500);

    setTimeout(() => {
        logoOverlay.classList.add('visible');
    }, 1000);

    setTimeout(() => {
        overlay.querySelector('.overlay-content').classList.add('hidden-content');
    }, 4000);

    //Welcome overlay slide back up & Logo overlay slide down after 5.0s
    setTimeout(() => {
        overlay.classList.remove('show');
        logoOverlay.classList.add('shrink');
    }, 5000);

    setTimeout(() => {
        menuButton.classList.remove('menu-hidden');
    }, 5700);
})