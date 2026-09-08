document.addEventListener('DOMContentLoaded', function() {
    // ==============================
    // Mobile Menu
    // ==============================
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    const body = document.body;
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            const isOpen = nav.classList.toggle('active');
            body.classList.toggle('no-scroll', isOpen);
            
            // Animate hamburger to X
            if (isOpen) {
                menuToggle.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <line x1="6" y1="6" x2="18" y2="18"/>
                        <line x1="6" y1="18" x2="18" y2="6"/>
                    </svg>`;
            } else {
                menuToggle.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>`;
            }
        });

        // Close menu on nav link click
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                body.classList.remove('no-scroll');
                menuToggle.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <line x1="3" y1="6" x2="21" y2="6"/>
                        <line x1="3" y1="12" x2="21" y2="12"/>
                        <line x1="3" y1="18" x2="21" y2="18"/>
                    </svg>`;
            });
        });
    }

    // ==============================
    // Header scroll effect
    // ==============================
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // ==============================
    // Scroll Reveal Animations
    // ==============================
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    }



    // ==============================
    // Smooth scroll for anchor links
    // ==============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                nav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });
});

// Fix Resize: remove mobile menu state on desktop
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.body.classList.remove('no-scroll');
        const nav = document.getElementById('nav');
        if (nav) nav.classList.remove('active');
        
        const menuToggle = document.getElementById('menuToggle');
        if (menuToggle) {
            menuToggle.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>`;
        }
    }
});