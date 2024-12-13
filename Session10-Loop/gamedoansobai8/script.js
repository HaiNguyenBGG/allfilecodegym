function startGame() {
    let min = parseInt(prompt("Nhập giá trị tối thiểu (ví dụ: 1):"));
    let max = parseInt(prompt("Nhập giá trị tối đa (ví dụ: 100):"));

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Khoảng giá trị không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    let songaunhien = Math.floor(Math.random() * (max - min + 1)) + min;

    let solanthu = 0;

    while (solanthu < 3) {
        let sodoan = parseInt(prompt(`Lần thử ${solanthu + 1}: Nhập số bạn đoán (từ ${min} đến ${max}):`));

        if (isNaN(sodoan) || sodoan < min || sodoan > max) {
            alert(`Số bạn nhập không hợp lệ, vui lòng nhập số trong khoảng từ ${min} đến ${max}.`);
            continue;
        }

        if (sodoan === songaunhien) {
            alert("Chúc mừng! Bạn đã đoán đúng.");
            return;
        } else if (sodoan > songaunhien) {
            alert("Số bạn đoán lớn hơn số cần tìm. Cố gắng thử lại!");
        } else {
            alert("Số bạn đoán nhỏ hơn số cần tìm. Cố gắng thử lại!");
        }
        solanthu++;
    }
    alert("Bạn đã hết lượt thử. Số đúng là: " + songaunhien);
}