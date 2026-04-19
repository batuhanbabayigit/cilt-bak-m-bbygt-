// Hamburger Menü
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-active');
      burger.classList.remove('toggle');
    });
  });
};

// Form Gönderim
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Mesajınız gönderildi!');
    contactForm.reset();
  });
}

// Etkileşim 1: Hero arka plan değiştir
const bgToggle = document.getElementById('bg-toggle');
if(bgToggle){
  bgToggle.addEventListener('click', () => {
    const hero = document.querySelector('.hero');
    hero.classList.toggle('alt-bg');
  });
}

// Etkileşim 2: Proje kartına tıklayınca alert
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`Seçtiğiniz proje: ${card.querySelector('h3').innerText}`);
  });
});

navSlide();
