/**
 * LUMINA Bakım Ürünleri - Etkileşim Dosyası (app.js)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBİL MENÜ (BURGER) ETKİLEŞİMİ
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        if (burger) {
            burger.addEventListener('click', () => {
                // Menüyü Aç/Kapat
                nav.classList.toggle('nav-active');

                // Link Animasyonları
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animasyonu (X şekline dönüşme)
                burger.classList.toggle('toggle');
            });
        }
    }

    // 2. YUMUŞAK KAYDIRMA (SMOOTH SCROLL) - Opsiyonel
    // Not: CSS'de 'scroll-behavior: smooth' var ancak bazı eski tarayıcılar için JS desteği:
    const smoothScroll = () => {
        const links = document.querySelectorAll('.nav-links a');
        for (const link of links) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Header payı
                        behavior: 'smooth'
                    });
                    
                    // Mobil menü açıksa kapat
                    const nav = document.querySelector('.nav-links');
                    if (nav.classList.contains('nav-active')) {
                        nav.classList.remove('nav-active');
                    }
                }
            });
        }
    }

    // 3. İLETİŞİM FORMU YÖNETİMİ
    const handleForm = () => {
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Form verilerini simüle edelim
                const name = form.querySelector('input[type="text"]').value;
                const email = form.querySelector('input[type="email"]').value;

                // Kullanıcıya şık bir geri bildirim ver
                alert(`Teşekkürler ${name}! Mesajın başarıyla iletildi. \n${email} adresine onay maili gönderdik.`);
                
                form.reset(); // Formu temizle
            });
        }
    }

    // 4. SCROLL EFFECT (NAVBAR RENK DEĞİŞİMİ)
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.boxShadow = 'none';
        }
    });

    // Fonksiyonları çalıştır
    navSlide();
    smoothScroll();
    handleForm();
});
