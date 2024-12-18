const cars = [
    {
        make: 'Kia',
        model: 'Morning',
        type: 'Hatchback',
        year: 2024,
        colorOptions: ['Xanh lá', 'Trắng', 'Đen'],
        variants: [
            {
                name: 'AT 1.25 GT-Line',
                engine: '1.25L',
                transmission: 'Automatic',
                price: '',
                image: './kiaMorning/morningGTLine.jpg'
            },
            {
                name: 'AT 1.25 X-Line',
                engine: '1.25L',
                transmission: 'Automatic',
                price: '',
                image: './kiaMorning/morningXLine.jpg'
            },
            {
                name: 'MT 1.25',
                engine: '1.25L',
                transmission: 'Manual',
                price: '',
                image: './kiaMorning/morningMT.jpg'
            },
            {
                name: 'AT 1.25',
                engine: '1.25L',
                transmission: 'Automatic',
                price: '',
                image: './kiaMorning/morningAT.jpg'
            },
            {
                name: 'New Morning AT 1.25',
                engine: '1.25L',
                transmission: 'Automatic',
                price: '',
                image: './kiaMorning/morningNewAT.jpg'
            }
        ],
        features: [
            'Hệ thống an toàn',
            'Sạc không dây',
            'Apple CarPlay',
            'Android Auto',
            'Chế độ lái thể thao',
            'Điều hòa tự động',
            'Camera lùi'
        ]
    },
    {
        make: 'Kia',
        model: 'Soluto',
        type: 'Sedan',
        year: 2024,
        colorOptions: ['Trắng', 'Bạc', 'Đen', 'Đỏ'],
        variants: [
            {
                name: 'MT 1.4',
                engine: '1.4L',
                transmission: 'Manual',
                price: '',
                image: './kiaSoluto/solutoMT.jpg'
            },
            {
                name: 'MT 1.4 Deluxe',
                engine: '1.4L',
                transmission: 'Manual',
                price: '',
                image: './kiaSoluto/solutoMTDeluxe.jpg'
            },
            {
                name: 'AT 1.4',
                engine: '1.4L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSoluto/solutoAT.jpg'
            },
            {
                name: 'AT 1.4 Deluxe',
                engine: '1.4L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSoluto/solutoATDeluxe.jpg'
            }
        ],
        features: [
            'Hệ thống an toàn',
            'Màn hình cảm ứng',
            'Điều hòa tự động',
            'Camera lùi',
            'Apple CarPlay',
            'Android Auto'
        ]
    },
    {
        make: 'Kia',
        model: 'Sonet',
        type: 'SUV',
        year: 2024,
        colorOptions: ['Trắng', 'Xám', 'Đen', 'Đỏ'],
        variants: [
            {
                name: 'MT 1.5',
                engine: '1.5L',
                transmission: 'Manual',
                price: '',
                image: './kiaSonet/sonetMT.jpg'
            },
            {
                name: 'AT 1.5 Deluxe',
                engine: '1.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSonet/sonetDeluxe.jpg'
            },
            {
                name: 'AT 1.5 Luxury',
                engine: '1.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSonet/sonetLuxury.jpg'
            },
            {
                name: 'AT 1.5 Premium',
                engine: '1.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSonet/sonetPremium.jpg'
            }
        ],
        features: [
            'Màn hình cảm ứng',
            'Hệ thống an toàn',
            'Điều hòa tự động',
            'Apple CarPlay',
            'Android Auto'
        ]
    },
    {
        make: 'Kia',
        model: 'K3',
        type: 'Sedan',
        year: 2024,
        colorOptions: ['Trắng', 'Bạc', 'Đen', 'Đỏ'],
        variants: [
            {
                name: 'MT',
                engine: '1.6L',
                transmission: 'Manual',
                price: '',
                image: './kiaK3/k3MT.jpg'
            },
            {
                name: 'AT 1.6 Luxury',
                engine: '1.6L',
                transmission: 'Automatic',
                price: '',
                image: './kiaK3/k3Luxury.jpg'
            },
            {
                name: 'AT 1.6 Premium',
                engine: '1.6L',
                transmission: 'Automatic',
                price: '',
                image: './kiaK3/k3Premium.jpg'
            },
            {
                name: 'AT 2.0 Premium',
                engine: '2.0L',
                transmission: 'Automatic',
                price: '',
                image: './kiaK3/k3Premium20.jpg'
            }
        ],
        features: [
            'Màn hình cảm ứng',
            'Camera lùi',
            'Điều hòa tự động',
            'Cruise Control',
            'Apple CarPlay',
            'Android Auto'
        ]
    },
    {
        make: 'Kia',
        model: 'K5',
        type: 'Sedan',
        year: 2024,
        colorOptions: ['Đỏ', 'Trắng', 'Bạc', 'Xám'],
        variants: [
            {
                name: 'AT 2.0 Luxury',
                engine: '2.0L',
                transmission: 'Automatic',
                price: '',
                image: './kiaK5/k5Luxury.jpg'
            },
            {
                name: 'AT 2.0 Premium',
                engine: '2.0L',
                transmission: 'Automatic',
                price: '',
                image: './kiaK5/k5Premium20.jpg'
            },
            {
                name: 'AT 2.5 Premium',
                engine: '2.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaK5/k5Premium25.jpg'
            }
        ],
        features: [
            'Màn hình cảm ứng',
            'Hệ thống an toàn',
            'Camera 360',
            'Điều hòa tự động',
            'Apple CarPlay',
            'Android Auto',
            'Điều khiển giọng nói'
        ]
    },
    {
        make: 'Kia',
        model: 'Carnival',
        type: 'Minivan',
        year: 2024,
        colorOptions: ['Bạc', 'Trắng', 'Đỏ', 'Xanh'],
        variants: [
            {
                name: 'AT 2.2 Turbo Luxury Máy dầu',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaCarnival/carnivalLuxuryDiesel.jpg'
            },
            {
                name: 'AT 2.2 Turbo Premium Máy dầu',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaCarnival/carnivalPremiumDiesel.jpg'
            },
            {
                name: 'AT 2.2 Turbo Signature Máy dầu 7 ghế',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaCarnival/carnivalSignatureDiesel7.jpg'
            },
            {
                name: 'AT 2.2 Turbo Signature Máy dầu 8 ghế',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaCarnival/carnivalSignatureDiesel8.jpg'
            },
            {
                name: 'AT 3.5 Signature Máy xăng',
                engine: '3.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaCarnival/carnivalSignaturePetrol.jpg'
            }
        ],
        features: [
            'Ghế chỉnh điện',
            'Điều hòa tự động',
            'Màn hình giải trí cho hàng ghế sau',
            'Cửa trượt điện',
            'Apple CarPlay',
            'Android Auto'
        ]
    },
    {
        make: 'Kia',
        model: 'Sorento',
        type: 'SUV',
        year: 2024,
        colorOptions: ['Trắng', 'Xanh', 'Bạc', 'Đen'],
        variants: [
            {
                name: 'AT 2.2 Turbo Deluxe Máy dầu',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoDeluxeDiesel.jpg'
            },
            {
                name: 'AT 2.2 Turbo Luxury Máy dầu',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoLuxuryDiesel.jpg'
            },
            {
                name: 'AT 2.2 Turbo Premium Máy dầu',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoPremiumDiesel.jpg'
            },
            {
                name: 'AT 2.2 Turbo Signature Máy dầu 6 ghế',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoSignatureDiesel6.jpg'
            },
            {
                name: 'AT 2.2 Turbo Signature Máy dầu 7 ghế',
                engine: '2.2L Turbo',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoSignatureDiesel7.jpg'
            },
            {
                name: 'AT 2.5 Luxury Máy xăng',
                engine: '2.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoLuxuryPetrol.jpg'
            },
            {
                name: 'AT 2.5 Premium Máy xăng',
                engine: '2.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoPremiumPetrol.jpg'
            },
            {
                name: 'AT 2.5 Signature Máy xăng 6 ghế',
                engine: '2.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoSignaturePetrol6.jpg'
            },
            {
                name: 'AT 2.5 Signature Máy xăng 7 ghế',
                engine: '2.5L',
                transmission: 'Automatic',
                price: '',
                image: './kiaSorento/sorentoSignaturePetrol7.jpg'
            }
        ],
        features: [
            '3 hàng ghế',
            'Hệ thống an toàn',
            'Màn hình cảm ứng',
            'Camera 360',
            'Điều hòa tự động',
            'Apple CarPlay',
            'Android Auto'
        ]
    }
];
// Hàm tách các phiên bản từ dữ liệu cars thành các sản phẩm riêng
function flattenCars(cars) {
    const flattened = [];
    cars.forEach(car => {
        car.variants.forEach(variant => {
            flattened.push({
                make: car.make,
                model: car.model,
                type: car.type,
                year: car.year,
                colorOptions: car.colorOptions,
                features: car.features,
                variantName: variant.name,
                engine: variant.engine,
                transmission: variant.transmission,
                price: variant.price,
                image: variant.image
            });
        });
    });
    return flattened;
}

// Hàm xáo trộn mảng (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Chọn chỉ số ngẫu nhiên
        [array[i], array[j]] = [array[j], array[i]]; // Đổi chỗ các phần tử
    }
    return array;
}

// Hàm hiển thị các sản phẩm
function displayCars(cars) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Xóa nội dung cũ nếu có

    cars.forEach(car => {
        // Tạo container cho sản phẩm
        const carBox = document.createElement('div');
        carBox.classList.add('car-box'); // Thêm class để dễ dàng định dạng CSS
        carBox.style.border = '1px solid #ddd';
        carBox.style.padding = '15px';
        carBox.style.margin = '10px 0';

        // Thêm ảnh sản phẩm
        const carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.alt = `${car.make} ${car.model} - ${car.variantName}`;
        carImage.classList.add('car-image');  // Áp dụng lớp CSS

        carBox.appendChild(carImage);

        // Thông tin sản phẩm
        const carInfo = document.createElement('div');
        carInfo.innerHTML = `
            <h3>${car.make} ${car.model} (${car.year}) - ${car.variantName}</h3>
            <p><strong>Loại xe:</strong> ${car.type}</p>
            <p><strong>Động cơ:</strong> ${car.engine}</p>
            <p><strong>Hộp số:</strong> ${car.transmission}</p>
            <p><strong>Màu sắc:</strong> ${car.colorOptions.join(', ')}</p>
            <p><strong>Giá:</strong> ${car.price || 'Liên hệ để biết giá'}</p>
        `;
        carBox.appendChild(carInfo);

        // Tính năng nổi bật
        if (car.features && car.features.length > 0) {
            const featuresList = document.createElement('ul');
            car.features.forEach(feature => {
                const featureItem = document.createElement('li');
                featureItem.textContent = feature;
                featuresList.appendChild(featureItem);
            });

            const featureTitle = document.createElement('h4');
            featureTitle.textContent = 'Tính năng nổi bật:';
            carBox.appendChild(featureTitle);
            carBox.appendChild(featuresList);
        }

        productContainer.appendChild(carBox);
    });
}

// Gọi hàm flattenCars để xử lý dữ liệu
const flattenedCars = flattenCars(cars);

// Xáo trộn mảng cars trước khi hiển thị
const shuffledCars = shuffleArray(flattenedCars);

// Hiển thị các sản phẩm trên trang theo thứ tự ngẫu nhiên
displayCars(shuffledCars);

// Hàm xáo trộn mảng (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Chọn chỉ số ngẫu nhiên
        [array[i], array[j]] = [array[j], array[i]]; // Đổi chỗ các phần tử
    }
    return array;
}

function displayCarList() {
    const carList = document.querySelector('.listsanpham');
    carList.innerHTML = ''; // Xóa nội dung cũ

    // Xáo trộn danh sách các xe
    const shuffledCars = shuffleArray(cars);

    shuffledCars.forEach(car => {
        // Tạo phần tử li cho mỗi mẫu xe
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="arrow">▶</span>${car.model}`;

        // Xáo trộn danh sách biến thể của xe
        const shuffledVariants = shuffleArray(car.variants);

        // Tạo danh sách biến thể
        const list2Item = document.createElement('ul');
        list2Item.classList.add('variant-list');

        // Lặp qua các biến thể của xe và thêm vào danh sách
        shuffledVariants.forEach(variant => {
            const variantItem = document.createElement('li');
            variantItem.innerHTML = `<span class="arrow"></span>${variant.name}`;
            list2Item.appendChild(variantItem);
        });

        // Thêm sự kiện click vào mẫu xe
        listItem.addEventListener('click', function () {
            const existingList = listItem.nextElementSibling;

            // Kiểm tra nếu có danh sách hiện tại, thì ẩn nó
            if (existingList && existingList.classList.contains('variant-list')) {
                existingList.style.display = existingList.style.display === 'none' ? 'block' : 'none';
            } else {
                // Nếu chưa có danh sách, tạo và hiển thị nó
                listItem.parentNode.insertBefore(list2Item, listItem.nextSibling);
            }
        });

        // Thêm mẫu xe vào danh sách xe
        carList.appendChild(listItem);
    });
}

// Gọi hàm hiển thị danh sách xe ban đầu
displayCarList();

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchIcon = document.getElementById('search-icon');
    const productContainer = document.getElementById('product-container');

    // Hàm tìm kiếm các xe dựa trên từ khóa
    function searchCars(query) {
        // Lọc dữ liệu theo tên mẫu xe, biến thể hoặc các thuộc tính khác
        const results = flattenedCars.filter(car => {
            const modelMatch = car.model.toLowerCase().includes(query.toLowerCase());
            const variantMatch = car.variantName.toLowerCase().includes(query.toLowerCase());
            const featureMatch = car.features.some(feature => feature.toLowerCase().includes(query.toLowerCase()));
            return modelMatch || variantMatch || featureMatch;
        });

        // Hiển thị kết quả tìm kiếm nếu có
        if (results.length > 0) {
            displayCars(results);
        } else {
            productContainer.innerHTML = '<p>Không có xe phù hợp với từ khóa tìm kiếm.</p>'; // Thông báo không có kết quả
        }
    }

    // Hàm hiển thị các xe tìm được
    function displayCars(carsToDisplay) {
        productContainer.innerHTML = ''; // Xóa danh sách cũ

        carsToDisplay.forEach(car => {
            const carBox = document.createElement('div');
            carBox.classList.add('car-box'); // Thêm class để dễ dàng định dạng CSS
            carBox.style.border = '1px solid #ddd';
            carBox.style.padding = '15px';
            carBox.style.margin = '10px 0';

            // Thêm ảnh sản phẩm
            const carImage = document.createElement('img');
            carImage.src = car.image;
            carImage.alt = `${car.make} ${car.model} - ${car.variantName}`;
            carImage.classList.add('car-image');  // Áp dụng lớp CSS

            carBox.appendChild(carImage);

            // Thông tin sản phẩm
            const carInfo = document.createElement('div');
            carInfo.innerHTML = `
                <h3>${car.make} ${car.model} (${car.year}) - ${car.variantName}</h3>
                <p><strong>Loại xe:</strong> ${car.type}</p>
                <p><strong>Động cơ:</strong> ${car.engine}</p>
                <p><strong>Hộp số:</strong> ${car.transmission}</p>
                <p><strong>Màu sắc:</strong> ${car.colorOptions.join(', ')}</p>
                <p><strong>Giá:</strong> ${car.price || 'Liên hệ để biết giá'}</p>
            `;
            carBox.appendChild(carInfo);

            // Tính năng nổi bật
            if (car.features && car.features.length > 0) {
                const featuresList = document.createElement('ul');
                car.features.forEach(feature => {
                    const featureItem = document.createElement('li');
                    featureItem.textContent = feature;
                    featuresList.appendChild(featureItem);
                });

                const featureTitle = document.createElement('h4');
                featureTitle.textContent = 'Tính năng nổi bật:';
                carBox.appendChild(featureTitle);
                carBox.appendChild(featuresList);
            }

            productContainer.appendChild(carBox);
        });
    }

    // Lắng nghe sự kiện nhập liệu trong ô tìm kiếm
    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            searchCars(query);
        } else {
            displayCars(flattenedCars); // Hiển thị lại tất cả sản phẩm khi ô tìm kiếm trống
        }
    });

    // Lắng nghe sự kiện click vào biểu tượng tìm kiếm
    searchIcon.addEventListener('click', function () {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            searchCars(query);
        } else {
            displayCars(flattenedCars); // Hiển thị lại tất cả sản phẩm khi ô tìm kiếm trống
        }
    });

    // Hiển thị các sản phẩm ban đầu
    displayCars(flattenedCars);
});

function themvaogiohang(car) {
    // Giả sử giỏ hàng là một mảng
    const gioHang = JSON.parse(localStorage.getItem('gioHang')) || [];

    gioHang.push(car);

    // Lưu lại giỏ hàng vào localStorage
    localStorage.setItem('gioHang', JSON.stringify(gioHang));

    alert('Đã thêm vào giỏ hàng!');
}

//api location
fetch("https://provinces.open-api.vn/api/")
    .then(resp => resp.json())
    .then(data => {
        document.getElementById("location").innerHTML = data.map((item) => {
            return `<option value="${item.name}">${item.name}</option>`;
        })
    })
// JavaScript để xử lý sự kiện click
document.querySelectorAll('.listsanpham > li').forEach(item => {
    item.addEventListener('click', function () {
        // Toggle class 'expanded' để mở/đóng danh sách con
        this.classList.toggle('expanded');
    });
});
//Khởi tạo banner
const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

