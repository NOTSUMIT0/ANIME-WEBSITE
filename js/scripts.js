document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slides img');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function changeSlide(direction) {
        clearInterval(slideInterval);
        if (direction === 1) {
            nextSlide();
        } else if (direction === -1) {
            prevSlide();
        }
        slideInterval = setInterval(nextSlide, 5000);
    }

    slideInterval = setInterval(nextSlide, 5000);
    showSlide(currentSlide);

    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);
        
        console.log("Form Submitted:", formProps);
        
        alert('Thank you for your message! We will get back to you soon.');
        
        contactForm.reset();
    });
});

function navigateToGenre(genre) {
    window.location.href = genre + '.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }
});
