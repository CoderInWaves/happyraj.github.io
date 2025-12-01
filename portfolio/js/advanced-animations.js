// Advanced Animations JavaScript

// Loading Spinner
window.addEventListener('load', () => {
    const loadingSpinner = document.getElementById('loadingSpinner');
    setTimeout(() => {
        loadingSpinner.style.opacity = '0';
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
        }, 500);
    }, 1000);
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scrollProgress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Magnetic Button Effect
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.magnetic-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Stats Counter Animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const finalNumber = target.textContent.replace(/\D/g, '');
            let currentNumber = 0;
            const increment = finalNumber / 50;
            
            const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    target.textContent = target.textContent;
                    clearInterval(counter);
                } else {
                    const suffix = target.textContent.replace(/\d/g, '');
                    target.textContent = Math.floor(currentNumber) + suffix;
                }
            }, 30);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const stats = document.querySelectorAll('.stat h3');
    stats.forEach(stat => statsObserver.observe(stat));
});

// Smooth Reveal Animation on Scroll
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .bounce-in');
    revealElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        revealObserver.observe(element);
    });
});

// Enhanced Cursor Trail
document.addEventListener('mousemove', (e) => {
    // Create multiple trail elements
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const cursor = document.createElement('div');
            cursor.className = 'cursor-trail';
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#2ecc71'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            cursor.style.background = randomColor;
            cursor.style.boxShadow = `0 0 10px ${randomColor}`;
            
            document.body.appendChild(cursor);
            
            setTimeout(() => {
                cursor.remove();
            }, 1000);
        }, i * 50);
    }
});