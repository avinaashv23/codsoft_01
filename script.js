// script.js - Gowtham Sivakumar Portfolio

// ============================================================
// 1. HAMBURGER MENU
// ============================================================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('.nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

// Close menu when clicking outside
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

// ============================================================
// 2. ACTIVE NAV LINK ON SCROLL
// ============================================================
const sections = document.querySelectorAll('section[id]');
const allNavLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
  var scrollPosition = window.scrollY + 80;

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPosition >= top && scrollPosition < bottom) {
      allNavLinks.forEach(function (link) {
        link.style.color = '';
      });
      var activeLink = document.querySelector('.nav-link[href="#' + id + '"]');
      if (activeLink) {
        activeLink.style.color = 'var(--accent)';
      }
    }
  });
}

window.addEventListener('scroll', updateActiveLink);

