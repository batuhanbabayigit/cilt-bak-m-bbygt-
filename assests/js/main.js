const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Menüyü Aç/Kapat
        nav.classList.toggle('nav-active');

        // Link Animasyonu
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger X Animasyonu
        burger.classList.toggle('toggle');
    });
document.addEventListener("mousemove", (e) => {
    const glow = document.querySelector(".glow");

    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
});
    // Menüden bir şeye tıklandığında menüyü kapat
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')){
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
}

// Form Gönderim Simülasyonu
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mesajınız başarıyla iletildi! Teşekkür ederiz.');
        contactForm.reset();
    });
}

navSlide();
