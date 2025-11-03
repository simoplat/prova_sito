document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Filtri portfolio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Rimuovi active da tutti i bottoni
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Aggiungi active al bottone cliccato
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
            
            // Simulazione invio form
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Form inviato:', formValues);
            
            // Reset form
            this.reset();
            
            // Messaggio di successo
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
                
                // Chiudi menu mobile se aperto
                nav.classList.remove('active');
            }
        });
    });
});