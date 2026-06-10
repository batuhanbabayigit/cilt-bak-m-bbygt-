# 🌿 Lumina — Cilt Bakım Ürünleri Web Sitesi

> *"Doğadan Gelen Işıltı — Bilimle harmanlanmış saf bitki özleri."*

Web Projesi Yönetimi dersi kapsamında geliştirilmiş, çok sayfalı ve tam responsive bir cilt bakım e-ticaret sitesi.

---

## 📋 İçindekiler

- [Proje Hakkında](#-proje-hakkında)
- [Özellikler](#-özellikler)
- [Kullanılan Teknolojiler](#-kullanılan-teknolojiler)
- [Proje Yapısı](#-proje-yapısı)
- [Sayfalar](#-sayfalar)
- [Ürünler](#-ürünler)
- [Kurulum](#-kurulum)
- [Geliştirici](#-geliştirici)

---

## 🌟 Proje Hakkında

**Lumina**, doğal ve bilimsel içerikleri bir araya getiren kurgusal bir cilt bakım markasının web sitesidir. Proje; HTML, CSS ve JavaScript ile sıfırdan geliştirilmiş olup modern bir arayüz sunar. Ürün verileri `products.json` dosyasından dinamik olarak yüklenir.

---

## ✨ Özellikler

- 📱 **Tam Responsive Tasarım** — Mobil, tablet ve masaüstü uyumlu
- 🍔 **Hamburger Menü** — Mobil cihazlarda otomatik hamburger menüye geçiş
- 🖼️ **Taşmayan Görseller** — Tüm ekran boyutlarında optimize görsel yönetimi
- 🛍️ **Dinamik Ürün Listesi** — `products.json` üzerinden JavaScript ile çekilen ürün kartları
- 🗂️ **Çok Sayfalı Yapı** — Ana Sayfa, Hakkımızda, Ürünler, İletişim ve Giriş sayfaları
- 🎨 **Modern UI** — Minimalist ve temiz tasarım dili

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Oran |
|-----------|------|
| JavaScript | %40.1 |
| HTML5 | %35.5 |
| CSS3 | %24.4 |

- **HTML5** — Sayfa yapısı ve semantik etiketler
- **CSS3** — Responsive tasarım, Flexbox/Grid, Media Query'ler
- **Vanilla JavaScript** — DOM manipülasyonu, JSON fetch, dinamik render
- **JSON** — Ürün veri kaynağı (`products.json`)

---

## 📁 Proje Yapısı

```
cilt-bak-m-bbygt-/
│
├── index.html          # Ana sayfa
├── products.json       # Ürün veri tabanı
├── style.css           # Global stiller
│
├── pages/
│   ├── about.html      # Hakkımızda
│   ├── project.html    # Ürünler sayfası
│   ├── contact.html    # İletişim
│   └── login.html      # Giriş
│
└── assests/            # Görseller ve medya dosyaları
```

---

## 📄 Sayfalar

| Sayfa | Dosya | Açıklama |
|-------|-------|----------|
| Ana Sayfa | `index.html` | Hero bölümü, marka tanıtımı |
| Hakkımızda | `pages/about.html` | Marka hikayesi ve değerler |
| Ürünler | `pages/project.html` | JSON'dan dinamik yüklenen ürün kartları |
| İletişim | `pages/contact.html` | İletişim formu |
| Giriş | `pages/login.html` | Kullanıcı giriş ekranı |

---

## 🧴 Ürünler

`products.json` dosyasında 6 ürün tanımlıdır:

| # | Ürün Adı | Kategori | Fiyat |
|---|----------|----------|-------|
| 1 | Lumina Glow Serum | Serum | ₺349 |
| 2 | Deep Aqua Moisturizer | Nemlendirici | ₺289 |
| 3 | SPF 50 Güneş Koruyucu | Güneş Koruma | ₺199 |
| 4 | Botanik Yüz Yağı | Bakım | ₺415 |
| 5 | Retinol Gece Serumu | Serum | ₺520 |
| 6 | Niasinamid Toner | Bakım | ₺165 |

---

## 🚀 Kurulum

Herhangi bir bağımlılık veya kurulum gerekmez. Projeyi klonlayıp tarayıcıda açabilirsiniz:

```bash
git clone https://github.com/batuhanbabayigit/cilt-bak-m-bbygt-.git
cd cilt-bak-m-bbygt-
```

Ardından `index.html` dosyasını tarayıcınızda açın. Ürünler sayfasının düzgün çalışması için bir yerel sunucu kullanmanız önerilir (örneğin VS Code'un **Live Server** eklentisi).

---

## 👤 Geliştirici

**Batuhan BABAYİĞİT**

- Ders: Web Projesi Yönetimi
- GitHub: [@batuhanbabayigit](https://github.com/batuhanbabayigit)

---

<p align="center">© 2026 Lumina — Tüm hakları saklıdır.</p>
