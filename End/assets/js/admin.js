// Hiển thị danh sách sản phẩm
function displayProducts(products) {
    const productTableBody = document.getElementById('product-table-body');
    productTableBody.innerHTML = ''; // Xóa nội dung cũ

    products.forEach((product, productIndex) => {
        product.variants.forEach((variant, variantIndex) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${productIndex + 1}</td>
                <td>${product.name || 'Không xác định'}</td>
                <td>${product.type || 'Không xác định'}</td>
                <td>${product.year || 'Không xác định'}</td>
                <td>${variant.name || 'Không xác định'}</td>
                <td>${variant.engine || 'Không xác định'}</td>
                <td>${variant.transmission || 'Không xác định'}</td>
                <td>${variant.price || 'Liên hệ'}</td>
                <td>
                    <img src="${variant.image || ''}" alt="Ảnh" style="width: 50px; height: 50px; object-fit: cover;">
                </td>
                <td>
                    <button class="btn btn-warning btn-sm edit-btn" data-product-index="${productIndex}" data-variant-index="${variantIndex}">Sửa</button>
                    <button class="btn btn-danger btn-sm delete-btn" data-product-index="${productIndex}" data-variant-index="${variantIndex}">Xóa</button>
                </td>
            `;
            productTableBody.appendChild(row);
        });
    });

    attachEventListeners(products);
}

// Gắn sự kiện cho các nút "Sửa" và "Xóa"
function attachEventListeners(products) {
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productIndex = this.dataset.productIndex;
            const variantIndex = this.dataset.variantIndex;

            const product = products[productIndex];
            const variant = product.variants[variantIndex];

            // Điền thông tin vào modal chỉnh sửa
            document.getElementById('edit-name').value = product.name || '';
            document.getElementById('edit-type').value = product.type || '';
            document.getElementById('edit-year').value = product.year || '';
            document.getElementById('edit-variant-name').value = variant.name || '';
            document.getElementById('edit-engine').value = variant.engine || '';
            document.getElementById('edit-transmission').value = variant.transmission || '';
            document.getElementById('edit-price').value = variant.price || '';

            // Hiển thị ảnh hiện tại và chuẩn bị preview ảnh mới
            const previewImage = document.getElementById('preview-image');
            previewImage.src = variant.image || '';
            previewImage.style.display = variant.image ? 'block' : 'none';

            // Hiển thị modal
            const editModal = new bootstrap.Modal(document.getElementById('editModal'));
            editModal.show();

            document.getElementById('save-edit-btn').onclick = () => {
                // Cập nhật dữ liệu
                product.name = document.getElementById('edit-name').value;
                product.type = document.getElementById('edit-type').value;
                product.year = parseInt(document.getElementById('edit-year').value, 10);
                variant.name = document.getElementById('edit-variant-name').value;
                variant.engine = document.getElementById('edit-engine').value;
                variant.transmission = document.getElementById('edit-transmission').value;
                variant.price = document.getElementById('edit-price').value;

                // Kiểm tra file ảnh
                const imageFileInput = document.getElementById('edit-image-file');
                if (imageFileInput.files && imageFileInput.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        variant.image = e.target.result; // Lưu ảnh base64 vào dữ liệu
                        previewImage.src = variant.image; // Cập nhật ảnh xem trước
                    };
                    reader.readAsDataURL(imageFileInput.files[0]);
                }

                // Lưu vào localStorage
                localStorage.setItem('products', JSON.stringify(products));
                displayProducts(products);

                // Ẩn modal
                editModal.hide();
            };
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function () {
            const productIndex = this.dataset.productIndex;
            const variantIndex = this.dataset.variantIndex;

            // Xóa phiên bản
            products[productIndex].variants.splice(variantIndex, 1);

            // Xóa sản phẩm nếu không còn phiên bản
            if (products[productIndex].variants.length === 0) {
                products.splice(productIndex, 1);
            }

            // Cập nhật localStorage và hiển thị lại
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts(products);
        });
    });
}

// Lấy dữ liệu từ localStorage
const products = JSON.parse(localStorage.getItem('products') || '[]');

// Hiển thị sản phẩm sau khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});


document.addEventListener('DOMContentLoaded', () => {
    // Hàm hiển thị danh sách khách hàng
    function displayCustomers() {
        const customerTableBody = document.getElementById('customer-table-body');
        customerTableBody.innerHTML = ''; // Xóa nội dung cũ

        const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');

        purchases.forEach((purchase, index) => {
            const row = document.createElement('tr');

            const purchaseDate = new Date().toLocaleDateString(); // Lấy ngày hiện tại (có thể cập nhật theo yêu cầu)

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${purchase.customerName}</td>
                <td>${purchase.customerAddress}</td>
                <td>${purchase.customerPhone}</td>
                <td>${purchase.product}</td>
                <td>${purchaseDate}</td>
            `;

            customerTableBody.appendChild(row);
        });
    }

    // Hiển thị danh sách khách hàng khi tải trang
    displayCustomers();
});
