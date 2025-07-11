// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Animate divider on scroll
const divider = document.querySelector('.nav-divider');

if (divider) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        divider.classList.add('visible');
        divider.classList.remove('hidden');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(divider);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Lucide Icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Animate on Scroll Init
document.addEventListener("DOMContentLoaded", function () {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  // Auto-slide every 5 seconds
  setInterval(nextSlide, 10000);
});
 document.addEventListener("DOMContentLoaded", function () {
      const swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    });

 document.getElementById("language").addEventListener("change", function () {
    const lang = this.value;
    if (lang === "en") window.location.href = "index.html";
    if (lang === "fr") window.location.href = "index-fr.html";
    if (lang === "es") window.location.href = "index-es.html";
  });