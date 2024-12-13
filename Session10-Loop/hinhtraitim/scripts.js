let rows = 6;  // Số dòng của trái tim
let output = '';

// Vẽ phần trên trái tim (hai nửa trái tim)
for (let i = rows / 2; i <= rows; i += 2) {
    // Vẽ khoảng trắng bên trái
    for (let j = 1; j < rows - i; j++) {
        output += ' ';
    }

    // Vẽ nửa trái tim bên trái
    for (let j = 1; j <= i; j++) {
        output += '*';
    }

    // Vẽ khoảng trắng giữa hai nửa trái tim
    for (let j = 1; j <= rows - i; j++) {
        output += ' ';
    }

    // Vẽ nửa trái tim bên phải
    for (let j = 1; j <= i; j++) {
        output += '*';
    }

    output += '<br>';  // Thêm xuống dòng mới
}

// Vẽ phần dưới trái tim (hình tam giác ngược)
for (let i = rows; i >= 1; i--) {
    // Vẽ khoảng trắng bên trái
    for (let j = i; j < rows; j++) {
        output += ' ';
    }

    // Vẽ các dấu sao
    for (let j = 1; j <= (i * 2) - 1; j++) {
        output += '*';
    }

    output += '<br>';  // Thêm xuống dòng mới
}

// In kết quả trực tiếp lên trang web
document.write(output);