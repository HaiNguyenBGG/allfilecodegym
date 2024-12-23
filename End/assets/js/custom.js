// Hiển thị danh sách khách hàng
function displayCustomers(customers) {
    const customerTableBody = document.getElementById('customer-table-body');
    customerTableBody.innerHTML = ''; // Xóa nội dung cũ

    customers.forEach((customer, index) => {
        const statusIcon = customer.status === "Đã bán"
            ? "✔️"
            : customer.status === "Đang tư vấn"
                ? "🟡"
                : "❌";

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${customer.customerName}</td>
            <td>${customer.customerAddress}</td>
            <td>${customer.customerPhone}</td>
            <td>${customer.product}</td>
            <td>${statusIcon} ${customer.status || ''}</td>
            <td>${customer.purchaseDate || 'Không xác định'}</td>
            <td>
                <button class="btn btn-warning btn-sm edit-customer-btn" data-index="${index}">Sửa</button>
                <button class="btn btn-danger btn-sm delete-customer-btn" data-index="${index}">Xóa</button>
            </td>
        `;
        customerTableBody.appendChild(row);
    });

    attachCustomerEventListeners(customers);
}

// Gắn sự kiện sửa và xóa khách hàng
function attachCustomerEventListeners(customers) {
    // Sự kiện sửa khách hàng
    document.querySelectorAll('.edit-customer-btn').forEach((button) => {
        button.addEventListener('click', function () {
            const customerIndex = this.dataset.index;
            const customer = customers[customerIndex];

            // Điền thông tin khách hàng vào form
            document.getElementById('edit-customer-name').value = customer.customerName;
            document.getElementById('edit-customer-address').value = customer.customerAddress;
            document.getElementById('edit-customer-phone').value = customer.customerPhone;
            document.getElementById('edit-customer-product').value = customer.product;
            document.getElementById('edit-customer-status').value = customer.status || '';
            document.getElementById('edit-customer-date').value = customer.purchaseDate || '';

            // Hiển thị modal
            const editCustomerModal = new bootstrap.Modal(document.getElementById('editCustomerModal'));
            editCustomerModal.show();

            // Xóa sự kiện cũ trên nút lưu
            const saveButton = document.getElementById('save-customer-btn');
            saveButton.replaceWith(saveButton.cloneNode(true)); // Xóa sự kiện cũ
            const newSaveButton = document.getElementById('save-customer-btn');

            // Thêm sự kiện lưu
            newSaveButton.addEventListener('click', function () {
                // Cập nhật thông tin khách hàng
                customers[customerIndex].customerName = document.getElementById('edit-customer-name').value.trim();
                customers[customerIndex].customerAddress = document.getElementById('edit-customer-address').value.trim();
                customers[customerIndex].customerPhone = document.getElementById('edit-customer-phone').value.trim();
                customers[customerIndex].status = document.getElementById('edit-customer-status').value;
                customers[customerIndex].purchaseDate = document.getElementById('edit-customer-date').value;

                // Lưu lại localStorage
                localStorage.setItem('purchases', JSON.stringify(customers));
                displayCustomers(customers);

                // Ẩn modal
                editCustomerModal.hide();
            });
        });
    });

    // Sự kiện xóa khách hàng
    document.querySelectorAll('.delete-customer-btn').forEach((button) => {
        button.addEventListener('click', function () {
            const customerIndex = this.dataset.index;
            if (confirm('Bạn có chắc muốn xóa khách hàng này?')) {
                customers.splice(customerIndex, 1); // Xóa khách hàng khỏi danh sách

                // Lưu lại localStorage và cập nhật giao diện
                localStorage.setItem('purchases', JSON.stringify(customers));
                displayCustomers(customers);
            }
        });
    });
}

// Lấy dữ liệu từ localStorage và hiển thị
document.addEventListener('DOMContentLoaded', () => {
    const customers = JSON.parse(localStorage.getItem('purchases') || '[]');
    displayCustomers(customers);
});
