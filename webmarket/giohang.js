// Dữ liệu giỏ hàng (được tải từ localStorage)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Hàm hiển thị giỏ hàng
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');
    cartItems.innerHTML = ''; // Reset danh sách
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
        totalPrice.textContent = '0';
        return;
    }

    cart.forEach((item, index) => {
        total += parseFloat(item.price || 0);
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <p>${item.name}</p>
                <p>${item.price || 'Liên hệ'} VND</p>
                <button onclick="removeFromCart(${index})">Xóa</button>
            </div>
        `;
    });

    totalPrice.textContent = total.toLocaleString(); // Hiển thị tổng tiền
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cart.splice(index, 1); // Xóa sản phẩm theo chỉ số
    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật localStorage
    renderCart(); // Cập nhật hiển thị
}

// Hàm thanh toán
function checkout() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("Đang xử lý thanh toán...");
    // Reset giỏ hàng
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// Tải giỏ hàng khi khởi chạy trang
renderCart();