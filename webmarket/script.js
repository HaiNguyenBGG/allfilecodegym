let cart = []; // Mảng giỏ hàng

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

// Hàm render giỏ hàng
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const totalValue = document.getElementById('total-value');
    cartItems.innerHTML = ''; // Xóa giỏ hàng hiện tại

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
                    <span>${item.name}</span>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)" />
                    <span>$${item.price * item.quantity}</span>
                    <button onclick="removeFromCart('${item.name}')">Xóa</button>
                `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    totalValue.textContent = total;
}

// Hàm cập nhật số lượng sản phẩm
function updateQuantity(name, quantity) {
    const product = cart.find(item => item.name === name);
    if (product) {
        product.quantity = parseInt(quantity);
        renderCart();
    }
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
}