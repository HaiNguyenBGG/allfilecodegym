document.addEventListener('DOMContentLoaded', () => {
    renderCarList(); // Hiển thị danh sách xe
    setupEvents();   // Gắn các sự kiện
    updateCartView(); // Cập nhật giỏ hàng ban đầu
    updateCartCount(); // Cập nhật số lượng ban đầu
});

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            1000: { items: 1 }
        }
    });
});

