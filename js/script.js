document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card, .editorial-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Hat Image Hover Effect (Cycle through angles)
    const hatContainer = document.querySelector('.hat-container');
    if (hatContainer) {
        const images = hatContainer.querySelectorAll('.product-img');
        let interval;
        let currentIndex = 0;

        hatContainer.addEventListener('mouseenter', () => {
            // Start cycling
            if (interval) clearInterval(interval);
            interval = setInterval(() => {
                // Hide current
                images[currentIndex].classList.remove('active');
                // Move to next
                currentIndex = (currentIndex + 1) % images.length;
                // Show next
                images[currentIndex].classList.add('active');
            }, 800);
        });

        hatContainer.addEventListener('mouseleave', () => {
            // Stop cycling and reset to front view
            if (interval) clearInterval(interval);
            images.forEach(img => img.classList.remove('active'));
            currentIndex = 0;
            images[0].classList.add('active');
        });
    }

    // Hero Slideshow
    const heroWrapper = document.querySelector('.hero-image-wrapper');
    if (heroWrapper) {
        const heroImages = heroWrapper.querySelectorAll('.hero-img');
        if (heroImages.length > 1) {
            let heroIndex = 0;
            setInterval(() => {
                heroImages[heroIndex].classList.remove('active');
                heroIndex = (heroIndex + 1) % heroImages.length;
                heroImages[heroIndex].classList.add('active');
            }, 1200);
        }
    }

    // Grid Overlay Toggle (Optional debug)
    const overlay = document.querySelector('.grid-overlay');
    document.addEventListener('keydown', (e) => {
        if (e.key === 'g' && e.ctrlKey) {
            overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
        }
    });
});
