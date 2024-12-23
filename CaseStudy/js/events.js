function setupEvents() {
    // Mở giỏ hàng
    document.getElementById('cart-icon').addEventListener('click', () => {
        document.getElementById('cart-view').style.display = 'block';
        document.getElementById('car-list').style.display = 'none';
    });

    // Đóng giỏ hàng
    document.getElementById('close-cart').addEventListener('click', () => {
        document.getElementById('cart-view').style.display = 'none';
        document.getElementById('car-list').style.display = 'flex';
    });

    // Thêm sản phẩm vào giỏ hàng
    document.getElementById('car-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const variant = e.target.dataset.variant;
            addToCart(variant);
        }
    });
}