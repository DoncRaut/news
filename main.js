// Hide-on-scroll header and shrink on scroll
let lastScrollTop = 0;
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 60) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
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

// Set active category based on page
document.addEventListener('DOMContentLoaded', function() {
    const page = document.body.getAttribute('data-page');
    if (page) {
        document.querySelectorAll('.categories a').forEach(a => {
            if (a.getAttribute('data-page') === page) a.classList.add('active');
        });
    }
});

// Load news articles
document.addEventListener('DOMContentLoaded', function() {
    // In production, fetch from API
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = `
        <div class="card">
            <img src="images/news1.jpg" alt="News">
            <div class="card-content">
                <h3>Global Climate Summit Begins</h3>
                <p>World leaders gather to discuss solutions...</p>
                <div class="timestamp">2 hours ago | World</div>
            </div>
        </div>
        <!-- More news cards -->
    `;
});