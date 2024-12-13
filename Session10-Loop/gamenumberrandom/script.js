let randomNumber = 0;
let minRange = 1;
let maxRange = 4;
let userGuess = 0;

// Nút "Đoán"
document.getElementById('guessButton').onclick = function () {
    // Lấy giá trị người dùng nhập vào
    userGuess = parseInt(document.getElementById('guessInput').value);

    // Kiểm tra xem người dùng có nhập đúng định dạng số không
    if (isNaN(userGuess)) {
        document.getElementById('message').textContent = "Vui lòng nhập một m!";
        return;
    }

    // Sau khi nhập số đoán, bật nút "Quay"
    document.getElementById('spinButton').disabled = false;
    document.getElementById('message').textContent = "Đã nhập số đoán, giờ quay số!";
    document.getElementById('numberDisplay').textContent = ""; // Xóa thông báo kết quả

    // Tắt nút "Đoán" sau khi đã nhập
    document.getElementById('guessButton').disabled = true;
}
// Nút "Quay"
document.getElementById('spinButton').onclick = function () {
    // Quay vòng quay số
    let spinDegrees = Math.floor(Math.random() * 360) + 1800; // Quay ít nhất 5 vòng
    document.getElementById('spinWheel').style.transform = `rotate(${spinDegrees}deg)`;

    const numbers = [1, 2, 3, 4];
    // Sau khi quay xong, chọn số ngẫu nhiên
    setTimeout(function () {
        // Lấy số ngẫu nhiên sau khi quay
        let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

        // Hiển thị số ngẫu nhiên và so sánh với số đoán
        document.getElementById('numberDisplay').textContent = `Số ngẫu nhiên đã quay: ${randomNumber}`;

        if (userGuess === randomNumber) {
            document.getElementById('message').textContent = "Chúc mừng bạn đã đoán đúng!";
        } else {
            document.getElementById('message').textContent = `Bạn đoán sai. Số đúng là: ${randomNumber}`;
        }

        // Tắt nút "Quay" sau khi quay xong
        document.getElementById('spinButton').disabled = true;
    }, 3500); // Sau 3.5 giây, vòng quay sẽ dừng lại
}