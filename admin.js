// Admin dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Dashboard stats
    // In production, fetch from API
    updateDashboardStats();
});

function updateDashboardStats() {
    document.querySelectorAll('.stat-card p').forEach(card => {
        // Simulate loading data
        card.textContent = Math.floor(Math.random() * 1000);
    });
}