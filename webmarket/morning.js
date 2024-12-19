// morning.js

// Hàm lọc chỉ các sản phẩm của Kia Morning
function displayMorningCars(cars) {
    // Lọc các sản phẩm có model là 'Morning' (Đảm bảo tên đúng chính xác)
    const morningCars = cars.filter(car => car.model === 'Morning');
    
    // Kiểm tra xem có đúng sản phẩm Morning không
    if (morningCars.length === 0) {
        console.log("Không có sản phẩm Kia Morning!");
    }

    // Gọi hàm để hiển thị xe Kia Morning
    morningCars.forEach(car => {
        displayCarVersions(car);
    });
}

// Hàm để hiển thị tất cả các phiên bản của một chiếc xe
function displayCarVersions(car) {
    const productContainer = document.getElementById('product-container');

    // Tạo container cho chiếc xe
    const carBox = document.createElement('div');
    carBox.classList.add('car-box');
    carBox.style.border = '1px solid #ddd';
    carBox.style.padding = '15px';
    carBox.style.margin = '10px 0';

    // Thêm thông tin về chiếc xe (make, model, year)
    const carInfo = document.createElement('div');
    carInfo.innerHTML = `
        <h3>${car.make} ${car.model} (${car.year})</h3>
        <p><strong>Loại xe:</strong> ${car.type}</p>
    `;
    carBox.appendChild(carInfo);

    // Lặp qua tất cả các phiên bản của chiếc xe
    car.variants.forEach(variant => {
        // Tạo một box cho mỗi phiên bản
        const variantBox = document.createElement('div');
        variantBox.classList.add('variant-box');
        variantBox.style.border = '1px solid #ccc';
        variantBox.style.padding = '10px';
        variantBox.style.marginTop = '10px';

        // Thêm ảnh của phiên bản
        const carImage = document.createElement('img');
        carImage.src = variant.image;
        carImage.alt = `${car.make} ${car.model} - ${variant.name}`;
        carImage.classList.add('car-image');
        variantBox.appendChild(carImage);

        // Thông tin về phiên bản
        const variantInfo = document.createElement('div');
        variantInfo.innerHTML = `
            <h4>${variant.name}</h4>
            <p><strong>Động cơ:</strong> ${variant.engine}</p>
            <p><strong>Hộp số:</strong> ${variant.transmission}</p>
            <p><strong>Màu sắc:</strong> ${variant.color}</p>
            <p><strong>Giá:</strong> ${variant.price || 'Liên hệ để biết giá'}</p>
        `;
        variantBox.appendChild(variantInfo);

        // Thêm các tính năng nổi bật
        if (variant.features && variant.features.length > 0) {
            const featuresList = document.createElement('ul');
            variant.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.textContent = feature;
                featuresList.appendChild(featureItem);
            });

            const featureTitle = document.createElement('h4');
            featureTitle.textContent = 'Tính năng nổi bật:';
            variantBox.appendChild(featureTitle);
            variantBox.appendChild(featuresList);
        }

        // Thêm nút mua và xem thông tin
        const buttonContainer = document.createElement('div');
        buttonContainer.style.marginTop = '10px';

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Mua';
        buyButton.style.padding = '10px';
        buyButton.style.marginRight = '10px';
        buyButton.style.backgroundColor = '#28a745';
        buyButton.style.color = '#fff';
        buyButton.style.border = 'none';
        buyButton.style.cursor = 'pointer';
        buyButton.addEventListener('click', () => {
            alert(`Mua ${car.make} ${car.model} ${variant.name}`);
        });
        buttonContainer.appendChild(buyButton);

        const infoButton = document.createElement('button');
        infoButton.textContent = 'Xem thông tin';
        infoButton.style.padding = '10px';
        infoButton.style.backgroundColor = '#007bff';
        infoButton.style.color = '#fff';
        infoButton.style.border = 'none';
        infoButton.style.cursor = 'pointer';
        infoButton.addEventListener('click', () => {
            alert(`Thông tin chi tiết về ${car.make} ${car.model} ${variant.name}`);
        });
        buttonContainer.appendChild(infoButton);

        variantBox.appendChild(buttonContainer);

        // Thêm phiên bản vào box chính của xe
        carBox.appendChild(variantBox);
    });

    // Thêm carBox vào container chính
    productContainer.appendChild(carBox);
}

// Gọi hàm khi trang morning.html được tải
document.addEventListener("DOMContentLoaded", () => {
    // Giả sử "cars" là mảng chứa thông tin về tất cả các dòng xe
    const cars = getCars(); // Giả sử bạn có một hàm getCars() để lấy dữ liệu
    displayMorningCars(cars); // Gọi hàm để chỉ hiển thị các sản phẩm Morning
});
