// ===toggle==Menu====================================
let menuIcon = document.querySelector('#menu-icon');
let Navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  Navbar.classList.toggle('active');
};

// =Darkmood=========================================
let Darkmood = document.querySelector('#Darkmoon');
Darkmood.onclick = () => {
  Darkmood.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
};

// STICKY navbar===============================
window.onscroll = () =>{
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

// ==remove menu navbar when click navlinks============
menuIcon.classList.remove('bx-x');
Navbar.classList.remove('active')
};

// ==========Swiper-JS====================================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 60,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // ==scrollreveal=========================================
  ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 1500,
     delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.about-content, #skill2', { origin: 'right' });
    ScrollReveal().reveal('.home-content h1, .about-img img, #skill1', { origin: 'left' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });