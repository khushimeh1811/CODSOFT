// --------- Toggle Icon Navbar ----------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// ----------- Scroll Section Active Link -----------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // ----------- Sticky Navbar ------------
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ----------- Remove Toggle Icon and Navbar on Scroll ------------
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ----------- Typed.js ------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Software Engineer','AI/ML Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
