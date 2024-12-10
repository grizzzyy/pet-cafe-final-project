// Cart functionality - adding item to cart
let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        cartCount++; // Increment the cart count
        document.getElementById('cart-count').textContent = cartCount; // Update the cart count display
        alert(this.getAttribute('data-item') + ' has been added to your order!'); // Notify the user
    });
});
