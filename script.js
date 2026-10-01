/* =====================================================
   NITISH KUMAR PORTFOLIO — SCRIPT
===================================================== */

// ---------- MOBILE MENU ----------
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        menuToggle.textContent = navMenu.classList.contains('open') ? '✕' : '☰';
    });

    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            navMenu.classList.remove('open');
            menuToggle.textContent = '☰';
        });
    });
}

// ---------- HEADER SCROLL ----------
const header = document.querySelector('.header');

if (header) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ---------- ACTIVE NAV LINK ----------
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY + 150;

    sections.forEach(function(section) {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= top && scrollY < top + height) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ---------- CONTACT FORM ----------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const btn = contactForm.querySelector('.submit-btn');
        const original = btn.textContent;

        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(function() {
            btn.textContent = '✓ Message Sent!';

            setTimeout(function() {
                btn.textContent = original;
                btn.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1200);
    });
}

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});