function displayProducts(carData) {
    const carModelsContainer = document.getElementById('car-models');
    carModelsContainer.innerHTML = ''; // Xóa nội dung cũ

    carData.forEach((car) => {
        const make = car.make || 'Không xác định';
        const model = car.model || 'Không xác định';
        const type = car.type || 'Không xác định';
        const year = car.year || 'Không xác định';

        // Tạo tiêu đề cho dòng xe
        const title = document.createElement('h3');
        title.textContent = `${make} ${model} (${type}, ${year})`;
        title.className = 'car-title text-primary mb-3';

        carModelsContainer.appendChild(title);

        // Tạo lưới các phiên bản của dòng xe
        const variantsRow = document.createElement('div');
        variantsRow.className = 'row g-3'; // Sử dụng bootstrap để căn chỉnh khoảng cách giữa các card

        car.variants.forEach((variant) => {
            const variantName = variant.name || 'Không xác định';
            const engine = variant.engine || 'Không xác định';
            const transmission = variant.transmission || 'Không xác định';
            const price = variant.price
                ? `Giá: ${Number(variant.price.replace(/[^0-9]/g, '')).toLocaleString('vi-VN')} VNĐ`
                : 'Giá: Liên hệ';

            // Tạo card cho từng phiên bản
            const variantCard = document.createElement('div');
            variantCard.className = 'col-md-4 col-sm-6 card border-0 shadow';

            // Hình ảnh
            const img = document.createElement('img');
            img.src = variant.image || 'assets/images/default.jpg';
            img.alt = `${model} ${variantName}`;
            img.className = 'card-img-top';
            img.style.height = '200px';
            img.style.objectFit = 'cover';

            // Card body
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            // Thêm các phần tử vào card
            const nameElement = document.createElement('h5');
            nameElement.className = 'card-title';
            nameElement.textContent = variantName;

            const engineElement = document.createElement('p');
            engineElement.className = 'card-text';
            engineElement.textContent = `Động cơ: ${engine}`;

            const transmissionElement = document.createElement('p');
            transmissionElement.className = 'card-text';
            transmissionElement.textContent = `Hộp số: ${transmission}`;

            const priceElement = document.createElement('p');
            priceElement.className = 'card-text text-danger fw-bold';
            priceElement.textContent = price;

            // Nút "Mua"
            const buyButton = document.createElement('button');
            buyButton.textContent = 'Mua';
            buyButton.className = 'btn btn-primary';
            buyButton.setAttribute('data-bs-toggle', 'modal');
            buyButton.setAttribute('data-bs-target', '#purchaseModal');
            buyButton.addEventListener('click', () => {
                const modalTitle = document.getElementById('modal-title');
                const modalProductInfo = document.getElementById('modal-product-info');
                modalTitle.textContent = `Mua sản phẩm: ${make} ${model} - ${variantName}`;
                modalProductInfo.textContent = `Động cơ: ${engine}, Hộp số: ${transmission}, Giá: ${price}`;
            });

            // Gắn các phần tử vào card
            cardBody.appendChild(nameElement);
            cardBody.appendChild(engineElement);
            cardBody.appendChild(transmissionElement);
            cardBody.appendChild(priceElement);
            cardBody.appendChild(buyButton);

            variantCard.appendChild(img);
            variantCard.appendChild(cardBody);
            variantsRow.appendChild(variantCard);
        });

        carModelsContainer.appendChild(variantsRow);
    });
}

// Kiểm tra nếu localStorage không có dữ liệu, thêm dữ liệu mặc định
if (!localStorage.getItem('products')) {
    const defaultData = [
        {
            make: 'Kia',
            model: 'Morning',
            type: 'Hatchback',
            year: 2024,
            variants: [
                {
                    name: 'AT 1.25 GT-Line',
                    engine: '1.25L',
                    transmission: 'Automatic',
                    price: '400000000',
                    image: 'assets/images/kiaMorning/morningGTLine.jpg',
                },
                {
                    name: 'AT 1.25 X-Line',
                    engine: '1.25L',
                    transmission: 'Automatic',
                    price: '450000000',
                    image: 'assets/images/kiaMorning/morningXLine.jpg',
                },
            ],
        },
        {
            make: 'Kia',
            model: 'Sonet',
            type: 'SUV',
            year: 2024,
            variants: [
                {
                    name: 'AT 1.5 Deluxe',
                    engine: '1.5L',
                    transmission: 'Automatic',
                    price: '600000000',
                    image: 'assets/images/kiaSonet/sonetDeluxe.jpg',
                },
            ],
        },
    ];
    localStorage.setItem('products', JSON.stringify(defaultData));
}
