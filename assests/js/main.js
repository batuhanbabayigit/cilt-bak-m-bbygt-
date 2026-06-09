// Ürünleri tutacak dizi
let products = [];
let filteredProducts = [];

// Sayfa açıldığında çalışır
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();

    const searchInput = document.getElementById("search");

    if (searchInput) {
        searchInput.addEventListener("keyup", searchProducts);
    }
});

// JSON dosyasından ürünleri çek
async function loadProducts() {
    try {
        const response = await fetch("products.json");
        products = await response.json();

        filteredProducts = [...products];

        displayProducts(filteredProducts);

    } catch (error) {
        console.error("Ürünler yüklenemedi:", error);
    }
}

// Ürünleri ekrana bas
function displayProducts(data) {

    const container = document.getElementById("product-list");

    if (!container) return;

    container.innerHTML = "";

    data.forEach(product => {

        container.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <span class="price">${product.price} TL</span>

                <div class="buttons">
                    <button onclick="addToCart(${product.id})">
                        Sepete Ekle
                    </button>

                    <button onclick="addToFavorite(${product.id})">
                        ❤️
                    </button>
                </div>

            </div>
        `;

    });
}

// Arama
function searchProducts() {

    const value =
        document.getElementById("search")
        .value
        .toLowerCase();

    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(value) ||
        product.description.toLowerCase().includes(value)
    );

    displayProducts(filteredProducts);
}

// Favorilere ekle
function addToFavorite(id) {

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(id)) {

        favorites.push(id);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("Favorilere eklendi");
    } else {
        alert("Bu ürün zaten favorilerde");
    }
}

// Sepete ekle
function addToCart(id) {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(id);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert("Ürün sepete eklendi");
}

// Favorileri görüntüle
function showFavorites() {

    let favorites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    let favProducts = products.filter(product =>
        favorites.includes(product.id)
    );

    displayProducts(favProducts);
}

// Sepeti görüntüle
function showCart() {

    let cart =
        JSON.parse(localStorage.getItem("cart")) || [];

    let cartProducts = products.filter(product =>
        cart.includes(product.id)
    );

    displayProducts(cartProducts);
}
