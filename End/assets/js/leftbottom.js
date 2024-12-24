// Lấy container danh mục xe
const categoryListContainer = document.getElementById('car-category-list');

// Hàm hiển thị danh mục xe (chỉ hiển thị model)
function displayCarCategories(carData) {
    // Xóa nội dung cũ trong container danh mục xe
    categoryListContainer.innerHTML = '';

    // Duyệt qua dữ liệu xe và tạo danh sách model
    carData.forEach((car, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = car.name || `Dòng xe ${index + 1}`; // Hiển thị tên dòng xe (model)

        // Thêm dòng xe vào danh mục
        categoryListContainer.appendChild(listItem);
    });
}

// Lấy dữ liệu từ localStorage
const carDataFromStorage = JSON.parse(localStorage.getItem('products')) || [];

// Gọi hàm hiển thị danh mục xe
document.addEventListener('DOMContentLoaded', () => {
    displayCarCategories(carDataFromStorage);
});
