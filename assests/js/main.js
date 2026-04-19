// Hamburger menü aç/kapat
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Etkileşim 1: Arka plan rengini değiştir
const colorBtn = document.getElementById('color-btn');
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// Etkileşim 2: Alert mesajı
const alertBtn = document.getElementById('alert-btn');
alertBtn.addEventListener('click', () => {
  alert('Mesajınız gönderildi!');
});
