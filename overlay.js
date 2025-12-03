window.addEventListener('load', () => {
    const overlay = document.getElementById('welcome-overlay');
    const menuButton = document.getElementById('menu-button');

    //Slide down after 0.5s
    setTimeout(() => {
        overlay.classList.add('show');
    }, 500);

    //Slide back up after 4.0s
    setTimeout(() => {
        overlay.classList.remove('show');
    }, 4500);

    setTimeout(() => {
        menuButton.classList.remove('menu-hidden');
    }, 5700);
})