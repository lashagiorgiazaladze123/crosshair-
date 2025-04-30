document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll event for navigation background change
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(76, 175, 80, 0.95)';
        } else {
            nav.style.background = 'var(--primary-color)';
        }
    });

    // Add download counter (for demonstration)
    const downloadBtn = document.querySelector('.download-btn');
    let downloadCount = 0;
    
    downloadBtn.addEventListener('click', function() {
        downloadCount++;
        // You could add an API call here to update download count on server
        console.log(`Download count: ${downloadCount}`);
    });
});
