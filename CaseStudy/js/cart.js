const cart = [];

function addToCart(variant) {
    const car = carVariants.find(car => car.variant === variant);
    if (car) {
        const existingItem = cart.find(item => item.variant === variant);
        if (existingItem) {
            alert(`${car.make} ${car.model} ${car.variant} đã có trong giỏ hàng!`);
        } else {
            cart.push(car);
            alert(`${car.make} ${car.model} ${car.variant} đã được thêm vào giỏ hàng!`);
        }
        updateCartView();
        updateCartCount();
    }
}

function updateCartView() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<li class="list-group-item">Giỏ hàng trống</li>';
        return;
    }

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <strong>${item.make} ${item.model} ${item.variant}</strong>
                    <p>Loại: ${item.type} | Động cơ: ${item.engine}</p>
                </div>
                <button class="btn btn-danger btn-sm remove-item" data-index="${index}">Xóa</button>
            </li>
        `;
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            updateCartView();
            updateCartCount();
        });
    });
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length; // Số lượng sản phẩm trong giỏ
    cartCount.style.display = cart.length > 0 ? 'inline' : 'none';
}
