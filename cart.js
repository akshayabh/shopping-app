let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('cart-count').innerText = cartCount;
});

function addToCart(itemName, itemPrice) {
    cartCount++;
    cartItems.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    document.getElementById('cart-count').innerText = cartCount;
    showNotification();
}

function openCartPage() {
    window.location.href = 'cart.html';
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000); // Hide notification after 2 seconds
}