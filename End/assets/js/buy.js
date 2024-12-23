document.addEventListener('DOMContentLoaded', () => {
    function displayProducts(carData) {
        const carModelsContainer = document.getElementById('car-models');
        carModelsContainer.innerHTML = '';

        carData.forEach((car) => {
            const make = car.make || 'Không xác định';
            const model = car.model || 'Không xác định';

            const title = document.createElement('h3');
            title.textContent = `${make} ${model}`;
            title.className = 'car-title text-primary mb-3';
            carModelsContainer.appendChild(title);

            const variantsRow = document.createElement('div');
            variantsRow.className = 'row g-3';

            car.variants.forEach((variant) => {
                const variantName = variant.name || 'Không xác định';
                const price = variant.price || 'Liên hệ';

                const variantCard = document.createElement('div');
                variantCard.className = 'col-md-4 col-sm-6 card border-0 shadow';

                const img = document.createElement('img');
                img.src = variant.image || 'assets/images/default.jpg';
                img.alt = `${model} ${variantName}`;
                img.className = 'card-img-top';
                img.style.height = '200px';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';

                const nameElement = document.createElement('h5');
                nameElement.className = 'card-title';
                nameElement.textContent = variantName;

                const priceElement = document.createElement('p');
                priceElement.className = 'card-text text-danger fw-bold';
                priceElement.textContent = `Giá: ${Number(price.replace(/[^0-9]/g, '')).toLocaleString('vi-VN')} VNĐ`;

                const buyButton = document.createElement('button');
                buyButton.textContent = 'Mua';
                buyButton.className = 'btn btn-primary';
                buyButton.setAttribute('data-bs-toggle', 'modal');
                buyButton.setAttribute('data-bs-target', '#purchaseModal');
                buyButton.addEventListener('click', () => {
                    const modalTitle = document.getElementById('modal-title');
                    const modalProductInfo = document.getElementById('modal-product-info');
                    modalTitle.textContent = `Mua sản phẩm: ${make} ${model} - ${variantName}`;
                    modalProductInfo.textContent = `Giá: ${priceElement.textContent}`;
                });

                cardBody.appendChild(nameElement);
                cardBody.appendChild(priceElement);
                cardBody.appendChild(buyButton);

                variantCard.appendChild(img);
                variantCard.appendChild(cardBody);
                variantsRow.appendChild(variantCard);
            });

            carModelsContainer.appendChild(variantsRow);
        });
    }

    const carData = JSON.parse(localStorage.getItem('products') || '[]');
    displayProducts(carData);

    // Xử lý nút xác nhận mua
    const confirmPurchaseButton = document.getElementById('confirm-purchase');
    confirmPurchaseButton.addEventListener('click', () => {
        const customerName = document.getElementById('customer-name').value.trim();
        const customerAddress = document.getElementById('customer-address').value.trim();
        const customerPhone = document.getElementById('customer-phone').value.trim();

        if (!customerName || !customerAddress || !customerPhone) {
            alert('Vui lòng điền đầy đủ thông tin!');
            return;
        }

        const purchaseInfo = {
            customerName,
            customerAddress,
            customerPhone,
            product: document.getElementById('modal-title').textContent,
        };

        const purchases = JSON.parse(localStorage.getItem('purchases') || '[]');
        purchases.push(purchaseInfo);
        localStorage.setItem('purchases', JSON.stringify(purchases));

        alert('Đặt hàng thành công!');

        const purchaseForm = document.getElementById('purchase-form');
        purchaseForm.reset();

        const purchaseModal = bootstrap.Modal.getInstance(document.getElementById('purchaseModal'));
        purchaseModal.hide();
    });
});
