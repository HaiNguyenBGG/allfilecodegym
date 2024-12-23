// Lấy container danh mục xe
const categoryListContainer = document.getElementById('car-category-list');

// Hàm hiển thị danh mục xe
function displayCarCategories(carData) {
    carData.forEach(car => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = car.model; // Hiển thị tên dòng xe

        // Gắn sự kiện click để filter các phiên bản theo dòng xe
        listItem.addEventListener('click', () => {
            // Xóa nội dung cũ trong container phiên bản
            document.getElementById('car-models').innerHTML = '';

            // Hiển thị phiên bản của dòng xe được chọn
            displayCarModels([car]);
        });

        categoryListContainer.appendChild(listItem);
    });
}

// Gọi hàm hiển thị danh mục xe
displayCarCategories(carData);
