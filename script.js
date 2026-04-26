// PRODUCT DATABASE
const products = [
    { id: 1, name: "Reusable Water Bottle", price: 15, eco: "Reduces plastic waste", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&h=200&fit=crop" },
    { id: 2, name: "Bamboo Toothbrush", price: 5, eco: "Biodegradable material", image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=200&fit=crop" },
    { id: 3, name: "Reusable Shopping Bag", price: 10, eco: "Replaces plastic bags", image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=300&h=200&fit=crop" },
    { id: 4, name: "Solar Power Bank", price: 25, eco: "Uses renewable energy", image: "https://i5.walmartimages.com/seo/42800mAh-Solar-Charger-Power-Bank-15W-Fast-Charging-Portable-Charger-with-4-Cables-USB-Battery-Pack-Compatible-with-iPhone-Android-Cell-Phone_7a9cd4a8-aaf5-4e96-886b-8deb870cff0f.68c7f8d73a763b88b0c64d3fe42a3ef7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF?w=300&h=200&fit=crop" },
    { id: 5, name: "Metal Straw Set", price: 8, eco: "Reduces single-use plastic", image: "https://m.media-amazon.com/images/I/81pZ71cKNnL.jpg?w=300&h=200&fit=crop" },
    { id: 6, name: "Eco Notebook", price: 12, eco: "Made from recycled paper", image: "https://www.allbranded.com/out/shop-us/pictures/generated/product/2/480_480_80/SM-3468GR_B_FR_3110.jpg?w=300&h=200&fit=crop" },
    { id: 7, name: "Compost Bin", price: 30, eco: "Helps reduce food waste", image: "https://m.media-amazon.com/images/I/61u+ISz7RsL.jpg?w=300&h=200&fit=crop" },
    { id: 8, name: "LED Light Bulbs", price: 20, eco: "Energy efficient", image: "https://m.media-amazon.com/images/I/61htYg6TZiL.jpg?w=300&h=200&fit=crop" },
    { id: 9, name: "Reusable Food Wrap", price: 14, eco: "Alternative to plastic wrap", image: "https://www.amesfarm.com/cdn/shop/articles/everything-you-need-to-know-about-beeswax-wraps-999251.jpg?v=1740106510&width=480?w=300&h=200&fit=crop" },
    { id: 10, name: "Eco Laundry Detergent", price: 18, eco: "Non-toxic ingredients", image: "https://legacy.earthbreeze.com/cdn/shop/files/FSV212PACKENF_1_b3d3ff0a-00fb-410a-9bbe-365a8efde828_1024x1024.png?v=1709850171?w=300&h=200&fit=crop" }
];

// DISPLAY PRODUCTS
function displayProducts(productArray) {
    const list = document.getElementById("product-list");
    if (!list) return;
    list.innerHTML = "";
    productArray.forEach(product => {
        list.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
                <h3>${product.name}</h3>
                <p><strong>$${product.price}</strong></p>
                <p>${product.eco}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

// SEARCH FUNCTION
function searchProducts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchValue)
    );
    displayProducts(filtered);
}

// ADD TO CART
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}

// LOAD PRODUCTS WHEN PAGE OPENS
displayProducts(products);

// DISPLAY CART ITEMS
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartDiv = document.getElementById("cart-items");
    const totalDiv = document.getElementById("total");
    if (!cartDiv) return;
    cartDiv.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartDiv.innerHTML += `
            <div class="product">
                <img src="${item.image}" alt="${item.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
            </div>
        `;
    });
    totalDiv.innerText = "Total: $" + total;
}

// CHECKOUT FUNCTION
function checkout() {
    window.location.href = "checkout.html";
}

// LOAD CART WHEN PAGE OPENS
displayCart();

// PLACE ORDER FUNCTION
function placeOrder() {
    alert("Payment Successful! Thank you for your purchase.");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
}
