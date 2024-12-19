
// Bài 1: Tính bình phương của một số
function calculateSquare() {
    let number;
    do {
        number = prompt("Nhập một số để tính bình phương:");
        if (number === "" || isNaN(number)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (number === "" || isNaN(number));

    let result = number * number;
    document.getElementById("result1").innerHTML = "Bình phương của " + number + " là: " + result;
}

// Bài 2: Tính diện tích và chu vi hình tròn
function calculateCircle() {
    let radius;
    do {
        radius = prompt("Nhập bán kính hình tròn:");
        if (radius === "" || isNaN(radius)) {
            alert("Vui lòng nhập một số hợp lệ cho bán kính.");
        }
    } while (radius === "" || isNaN(radius));

    let area = Math.PI * Math.pow(radius, 2);
    let circumference = 2 * Math.PI * radius;
    document.getElementById("result2").innerHTML = "Diện tích: " + area.toFixed(2) + ", Chu vi: " + circumference.toFixed(2);
}

// Bài 3: Tính giai thừa của một số
function calculateFactorial() {
    let number;
    do {
        number = prompt("Nhập một số để tính giai thừa:");
        if (number === "" || isNaN(number)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (number === "" || isNaN(number));

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("result3").innerHTML = "Giai thừa của " + number + " là: " + factorial;
}

// Bài 4: Kiểm tra ký tự số
function checkIfNumber() {
    let character;
    do {
        character = prompt("Nhập một ký tự để kiểm tra xem nó có phải là số không:");
        if (character === "" || isNaN(character)) {
            alert("Vui lòng nhập một ký tự số hợp lệ.");
        }
    } while (character === "" || isNaN(character));

    if (!isNaN(character)) {
        document.getElementById("result4").innerHTML = "Đây là một ký tự số.";
    } else {
        document.getElementById("result4").innerHTML = "Đây không phải là một ký tự số.";
    }
}

// Bài 5: Tìm số nhỏ nhất trong 3 số
function findSmallestNumber() {
    let num1, num2, num3;
    do {
        num1 = prompt("Nhập số thứ nhất:");
        if (num1 === "" || isNaN(num1)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (num1 === "" || isNaN(num1));

    do {
        num2 = prompt("Nhập số thứ hai:");
        if (num2 === "" || isNaN(num2)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (num2 === "" || isNaN(num2));

    do {
        num3 = prompt("Nhập số thứ ba:");
        if (num3 === "" || isNaN(num3)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (num3 === "" || isNaN(num3));

    let smallest = Math.min(num1, num2, num3);
    document.getElementById("result5").innerHTML = "Số nhỏ nhất là: " + smallest;
}

// Bài 6: Kiểm tra số nguyên dương
function checkPositiveNumber() {
    let number;
    do {
        number = prompt("Nhập một số để kiểm tra xem có phải số nguyên dương không:");
        if (number === "" || isNaN(number) || number <= 0) {
            alert("Vui lòng nhập một số nguyên dương hợp lệ.");
        }
    } while (number === "" || isNaN(number) || number <= 0);

    document.getElementById("result6").innerHTML = number + " là số nguyên dương.";
}

// Bài 7: Đổi chỗ hai số nguyên
function swapNumbers() {
    let num1, num2;
    do {
        num1 = prompt("Nhập số thứ nhất:");
        if (num1 === "" || isNaN(num1)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (num1 === "" || isNaN(num1));

    do {
        num2 = prompt("Nhập số thứ hai:");
        if (num2 === "" || isNaN(num2)) {
            alert("Vui lòng nhập một số hợp lệ.");
        }
    } while (num2 === "" || isNaN(num2));

    [num1, num2] = [num2, num1];
    document.getElementById("result7").innerHTML = "Sau khi đổi chỗ: số thứ nhất là " + num1 + ", số thứ hai là " + num2;
}

// Bài 8: Đảo ngược mảng số nguyên
function reverseArray() {
    let array;
    do {
        array = prompt("Nhập mảng số nguyên, cách nhau bởi dấu phẩy (ví dụ: 1, 2, 3):");
        if (array === "") {
            alert("Vui lòng nhập mảng không rỗng.");
        }
    } while (array === "");

    let arrayValues = array.split(',').map(item => parseInt(item.trim()));
    arrayValues.reverse();
    document.getElementById("result8").innerHTML = "Mảng sau khi đảo ngược: " + arrayValues.join(', ');
}

// Bài 9: Kiểm tra ký tự trong mảng ký tự
function checkCharacterInArray() {
    let array;
    let character;
    do {
        array = prompt("Nhập mảng ký tự, cách nhau bởi dấu phẩy (ví dụ: a, b, c):");
        if (array === "") {
            alert("Vui lòng nhập mảng không rỗng.");
        }
    } while (array === "");

    do {
        character = prompt("Nhập ký tự để kiểm tra trong mảng:");
        if (character === "") {
            alert("Vui lòng nhập ký tự hợp lệ.");
        }
    } while (character === "");

    let arrayValues = array.split(',').map(item => item.trim());
    let count = arrayValues.filter(item => item === character).length;

    if (count > 0) {
        document.getElementById("result9").innerHTML = "Ký tự '" + character + "' xuất hiện " + count + " lần trong mảng.";
    } else {
        document.getElementById("result9").innerHTML = "Ký tự '" + character + "' không có trong mảng.";
    }
}