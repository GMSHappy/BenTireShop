// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('shrink', window.scrollY > 50);
});

// Slider logic
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let cur = 0;

function showSlide(idx) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  cur = idx;
}

// Dot click navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Auto slide every 10 seconds
setInterval(() => {
  showSlide((cur + 1) % slides.length);
}, 10000);

// Cookie modal handling
const cookieModal = document.getElementById('cookieModal');
const acceptBtn = document.getElementById('acceptBtn');

if (!localStorage.getItem('cookiesAccepted')) {
  cookieModal.style.display = 'flex';
}

acceptBtn.addEventListener('click', () => {
  localStorage.setItem('cookiesAccepted', '1');
  cookieModal.style.display = 'none';
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    obs.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ✅ Loader screen fix
window.addEventListener('load', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');
  if (loaderWrapper) {
    loaderWrapper.style.opacity = '0';
    setTimeout(() => loaderWrapper.style.display = 'none', 500);
  }
});
