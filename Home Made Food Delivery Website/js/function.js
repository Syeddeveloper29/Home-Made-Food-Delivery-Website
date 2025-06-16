const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});



const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');

burger.addEventListener('click', () => {
    const isOpen = navbar.classList.contains('active');

    if (!isOpen) {
        navbar.classList.add('active');
        icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
        navbar.classList.remove('active');
        setTimeout(() => {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }, 400);
    }
});



const subscribeHeading = document.querySelector('#subscribe-heading');

const changeSubscribeHeading = () => {
    if (window.innerWidth <= 478) {
        subscribeHeading.textContent = `Stay Hungry for More!`;
    } else {
        subscribeHeading.textContent = `🍽️ Stay Hungry for More!`
    }
}

window.addEventListener('load', changeSubscribeHeading);
window.addEventListener('resize', changeSubscribeHeading);



const scriptURL = 'https://script.google.com/macros/s/AKfycbw2xyA1na2uifS_w1QnmJXV8OG9iY2zoMUpxl7W_G0dJBZK9NpcbaarK1R4DbuKcq1sNQ/exec';
const form = document.forms['submit-to-google-sheet'];
const subscribeMessage = document.querySelector('.subscribe-last-text');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            subscribeMessage.textContent = `Thank you for subscribing!`;
            setTimeout(() => {
                subscribeMessage.textContent = ``;
                form.reset();
            }, 5000);
        })
        .catch(error => console.error('Error!', error.message));
});