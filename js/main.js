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

    // Initialize default crosshair settings
    const crosshairSettings = {
        color: '#000000',
        thickness: 1,
        dotSize: 2,
        style: 'default'
    };

    // Function to generate crosshair image
    function generateCrosshair() {
        // Create a canvas element
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = 500;
        canvas.height = 500;
        
        // Clear canvas
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw crosshair
        ctx.strokeStyle = crosshairSettings.color;
        ctx.lineWidth = crosshairSettings.thickness;
        
        // Draw horizontal line
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - 100, canvas.height / 2);
        ctx.lineTo(canvas.width / 2 + 100, canvas.height / 2);
        ctx.stroke();
        
        // Draw vertical line
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2 - 100);
        ctx.lineTo(canvas.width / 2, canvas.height / 2 + 100);
        ctx.stroke();
        
        // Draw dot if enabled
        if (crosshairSettings.dotSize > 0) {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, crosshairSettings.dotSize, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Convert canvas to data URL
        const dataURL = canvas.toDataURL('image/png');
        
        // Create download link
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'custom-crosshair.png';
        
        // Trigger download
        link.click();
    }
});
