document.addEventListener('DOMContentLoaded', () => {
    const carData = JSON.parse(localStorage.getItem('products') || '[]'); // Lấy dữ liệu từ localStorage
    displayProducts(carData); // Gọi hàm hiển thị với carData

    // Hiển thị danh mục sản phẩm
    const carCategoryList = document.getElementById('car-category-list');
    carCategoryList.innerHTML = '';
    carData.forEach(car => {
        const listItem = document.createElement('li');
        listItem.textContent = `${car.make} ${car.model}`;
        listItem.className = 'list-group-item';
        carCategoryList.appendChild(listItem);
    });
});

if (!window.productsLoaded) {
    window.productsLoaded = true; // Đánh dấu đã load
    const carData = JSON.parse(localStorage.getItem('products') || '[]');
    displayProducts(carData);
}