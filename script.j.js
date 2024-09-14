// Get references to DOM elements
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Toggle 'active' class on menu and navbar when menu icon is clicked
menu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
});

// Update active class based on scroll position
window.onscroll = () => {
    let scrollPosition = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
        }
    });
};



