window.addEventListener('load', () => {
    const overlay = document.getElementById('welcome-overlay');

    //Slide down after 0.5s
    setTimeout(() => {
        overlay.classList.add('show');
    }, 500);

    //Slide back up after 4.0s
    setTimeout(() => {
        overlay.classList.remove('show');
    }, 4500);
})