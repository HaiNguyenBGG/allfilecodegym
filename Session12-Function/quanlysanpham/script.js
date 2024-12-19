let products = [];
let cart = [];
let editingIndex = -1;

// Tải dữ liệu từ localStorage
function loadData() {
    const savedProducts = localStorage.getItem("products");
    const savedCart = localStorage.getItem("cart");
    products = savedProducts ? JSON.parse(savedProducts) : [
        { name: "Áo", price: 100000, quantity: 10 },
        { name: "Quần", price: 200000, quantity: 5 },
        { name: "Giày", price: 300000, quantity: 2 }
    ];
    cart = savedCart ? JSON.parse(savedCart) : [];
}

// Lưu dữ liệu vào localStorage
function saveData() {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Hiển thị danh sách sản phẩm
function displayProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Xóa danh sách cũ
    products.forEach((product, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${product.name}</strong> 
            - Giá: ${product.price.toLocaleString()} VND
            - Số lượng: ${product.quantity}
            <span class="actions">
                <button onclick="buyProduct(${index})">Mua</button>
                <button onclick="prepareEditProduct(${index})">Sửa</button>
                <button onclick="deleteProduct(${index})">Xóa</button>
            </span>
        `;
        productList.appendChild(li);
    });
}

// Hiển thị giỏ hàng
function displayCart() {
    const cartList = document.getElementById("cartList");
    const totalAmount = document.getElementById("totalAmount");
    cartList.innerHTML = ""; // Xóa giỏ hàng cũ
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${item.name}</strong> 
            - Giá: ${item.price.toLocaleString()} VND 
            - Số lượng: <input type="number" value="${item.quantity}" min="1" onchange="updateCartQuantity(${index}, this.value)">
            <span class="actions">
                <button onclick="removeFromCart(${index})">Xóa</button>
            </span>
        `;
        cartList.appendChild(li);
    });

    totalAmount.textContent = total.toLocaleString();
}

// Thêm hoặc cập nhật sản phẩm
function addProduct() {
    const name = document.getElementById("productName").value.trim();
    const price = parseInt(document.getElementById("productPrice").value.trim(), 10);
    const quantity = parseInt(document.getElementById("productQuantity").value.trim(), 10);

    if (!name || isNaN(price) || isNaN(quantity)) {
        alert("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        return;
    }

    // Kiểm tra xem sản phẩm đã tồn tại trong danh sách
    const existingProductIndex = products.findIndex(product => product.name.toLowerCase() === name.toLowerCase());

    if (existingProductIndex !== -1) {
        // Sửa sản phẩm đã tồn tại
        products[existingProductIndex].price = price;
        products[existingProductIndex].quantity += quantity; // Cộng thêm số lượng vào sản phẩm đã có
    } else {
        // Thêm sản phẩm mới vào danh sách
        products.push({ name, price, quantity });
    }

    saveData(); // Lưu dữ liệu
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
    displayProducts();

    // Hiển thị lại nút Thêm và ẩn nút Cập nhật
    document.getElementById("addButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
}

// Chuẩn bị sửa sản phẩm
function prepareEditProduct(index) {
    const product = products[index];
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productQuantity").value = product.quantity;
    editingIndex = index;

    document.getElementById("addButton").style.display = "none";
    document.getElementById("updateButton").style.display = "inline-block";
}

// Cập nhật sản phẩm đã chỉnh sửa
function updateProduct() {
    const name = document.getElementById("productName").value.trim();
    const price = parseInt(document.getElementById("productPrice").value.trim(), 10);
    const quantity = parseInt(document.getElementById("productQuantity").value.trim(), 10);

    if (!name || isNaN(price) || isNaN(quantity)) {
        alert("Vui lòng nhập đầy đủ thông tin hợp lệ!");
        return;
    }

    if (editingIndex === -1 || editingIndex >= products.length) {
        alert("Không thể cập nhật sản phẩm!");
        return;
    }

    // Cập nhật thông tin sản phẩm
    products[editingIndex].name = name;
    products[editingIndex].price = price;
    products[editingIndex].quantity = quantity;

    // Reset trạng thái
    editingIndex = -1;

    saveData(); // Lưu dữ liệu
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";
    displayProducts();

    // Hiển thị lại nút Thêm và ẩn nút Cập nhật
    document.getElementById("addButton").style.display = "inline-block";
    document.getElementById("updateButton").style.display = "none";
}

// Xóa sản phẩm
function deleteProduct(index) {
    if (confirm(`Bạn có chắc muốn xóa sản phẩm "${products[index].name}"?`)) {
        products.splice(index, 1);
        saveData(); // Lưu dữ liệu
        displayProducts();
    }
}

// Mua sản phẩm
function buyProduct(index) {
    const product = products[index];

    // Kiểm tra xem sản phẩm còn tồn tại số lượng hay không
    if (product.quantity <= 0) {
        alert(`Sản phẩm "${product.name}" đã hết hàng!`);
        return;
    }

    // Thêm sản phẩm vào giỏ hàng với số lượng mặc định là 1
    const cartItem = cart.find(item => item.name === product.name);
    if (cartItem) {
        cartItem.quantity += 1; // Cộng thêm số lượng vào sản phẩm đã có trong giỏ hàng
    } else {
        cart.push({ name: product.name, price: product.price, quantity: 1 });
    }

    // Trừ số lượng vào sản phẩm chính
    product.quantity -= 1;

    saveData(); // Lưu dữ liệu
    displayProducts();
    displayCart();
}

// Cập nhật số lượng trong giỏ hàng
function updateCartQuantity(index, newQuantity) {
    newQuantity = parseInt(newQuantity, 10);
    if (isNaN(newQuantity) || newQuantity < 1) {
        alert("Số lượng không hợp lệ!");
        return;
    }

    cart[index].quantity = newQuantity;
    saveData(); // Lưu dữ liệu
    displayCart();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    const cartItem = cart[index];
    
    // Tìm sản phẩm trong danh sách chính
    const productIndex = products.findIndex(product => product.name === cartItem.name);
    
    if (productIndex !== -1) {
        // Cộng lại số lượng vào sản phẩm chính
        products[productIndex].quantity += cartItem.quantity;
    }
    
    // Xóa sản phẩm khỏi giỏ hàng
    cart.splice(index, 1);

    // Lưu dữ liệu và hiển thị lại
    saveData();
    displayProducts();
    displayCart();
}

// Hiển thị thông báo nếu giỏ hàng trống và ấn "Thanh toán"
document.getElementById("paymentButton").addEventListener("click", function() {
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn hiện đang trống. Vui lòng chọn sản phẩm trước khi thanh toán!");
    } else {
        document.getElementById("paymentSection").style.display = "block"; // Hiển thị phần thanh toán
    }
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("paymentSection").style.display = "none"; // Đóng phần thanh toán
});

document.getElementById("paidButton").addEventListener("click", function() {
    alert("Đã thanh toán thành công!"); // Xử lý hành động thanh toán thành công
    // Loại bỏ các mặt hàng đã thanh toán khỏi giỏ hàng
    cart = [];
    
    // Cập nhật lại giỏ hàng
    saveData();
    displayCart();
    document.getElementById("paymentSection").style.display = "none"; // Đóng phần thanh toán sau khi thanh toán thành công
});

// Hiển thị ảnh QR ở kích thước lớn
function showFullScreenQRCode(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    modalImg.src = img.src;

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Khởi tạo danh sách ban đầu
loadData(); // Tải dữ liệu từ localStorage
displayProducts();
displayCart();
