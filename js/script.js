document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile con blocco scroll
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const body = document.body;
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        // Aggiunge o rimuove il blocco dello scrolling sul body
        body.classList.toggle('no-scroll');
    });
    
    // Filtri portfolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Form contatti
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            console.log('Form inviato:', formValues);
            this.reset();
            alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
        });
    }
    
    // Smooth scroll per anchor links
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
                
                // IMPORTANTE: Chiude il menu e ripristina lo scroll al click su un link
                nav.classList.remove('active');
                body.classList.remove('no-scroll');
            }
        });
    });

    // Chiude il menu e sblocca lo scroll se si clicca su un link semplice della nav
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});

// Fix Resize: se la finestra supera i 768px (Desktop), 
// rimuove automaticamente il blocco dello scrolling e chiude il menu.
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.body.classList.remove('no-scroll');
        document.querySelector('.nav').classList.remove('active');
    }
});