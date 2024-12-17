const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Sử dụng CORS để cho phép các request từ frontend
app.use(cors());

// Dữ liệu sản phẩm
const products = [
    { imgSrc: "nhankimcuongcaocap.jpg", title: "Nhẫn Kim Cương Cao Cấp", price: "50.000.000 VNĐ" },
    { imgSrc: "lactayvang24k.jpg", title: "Lắc Tay Vàng 24K", price: "15.000.000 VNĐ" },
    { imgSrc: "lactayvang24k.jpg", title: "Lắc Tay Vàng 24K", price: "15.000.000 VNĐ" },
    { imgSrc: "lactayvang24k.jpg", title: "Lắc Tay Vàng 24K", price: "15.000.000 VNĐ" },
];

// Route trả về dữ liệu sản phẩm
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});