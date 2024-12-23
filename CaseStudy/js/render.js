function renderCarList() {
    const carList = document.getElementById('car-list');
    carList.innerHTML = carVariants.map(car => `
        <div class="col-md-4">
            <div class="card car-card">
                <img src="${car.image}" class="card-img-top" alt="${car.make} ${car.model}">
                <div class="card-body">
                    <h5>${car.make} ${car.model} ${car.variant}</h5>
                    <p>Loại: ${car.type}<br>Động cơ: ${car.engine}<br>Hộp số: ${car.transmission}</p>
                    <button class="btn btn-primary add-to-cart" data-variant="${car.variant}">Mua ngay</button>
                    <button class="btn btn-primary view-details" data-variant="${this.variant}">Xem chi tiết</button>
                </div>
            </div>
        </div>
    `).join('');
}
