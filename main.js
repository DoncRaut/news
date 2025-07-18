// Hide-on-scroll header and shrink on scroll
let lastScrollTop = 0;
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 60) {
        // Scroll Down: Hide header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll Up: Show header
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Highlight active category
document.querySelectorAll('.categories a').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.categories a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Optionally, set the first category as active on page load
document.addEventListener('DOMContentLoaded', function() {
    const current = document.querySelector('.categories a');
    if(current) current.classList.add('active');
});
  