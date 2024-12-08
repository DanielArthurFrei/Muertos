const carousel = document.querySelector('.carrossel');
const slides = document.querySelectorAll('.slide-carrossel');
let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth;
        const offset = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    function toggleMobileMenu() {
        const menu = document.querySelector('.menu-mobile');
        menu.classList.toggle('show');
    }

window.addEventListener('resize', updateCarousel);

document.querySelectorAll('.button').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
