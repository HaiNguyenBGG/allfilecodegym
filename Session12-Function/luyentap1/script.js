// Bài 1: Hàm alertMessage()
function alertMessage() {
    const message = "Bấm bên dưới đi \u2193";
    document.getElementById("result1").innerHTML = message;
}

// Bài 2: Hàm tăng giá trị lên 1
function incrementValue(number) {
    return number + 1;
}

function displayIncrementedValue() {
    const number = parseInt(prompt("Nhập một số:"));
    if (isNaN(number)) {
        alert("Vui lòng nhập một số hợp lệ.");
        return;
    }
    const incrementedValue = incrementValue(number);
    document.getElementById("result2").innerHTML = "Giá trị sau khi tăng lên 1 là: " + incrementedValue;
}

// Bài 3: Hàm so sánh hai tham số
function compareAndSum() {
    const firstNumber = parseInt(prompt("Nhập tham số thứ nhất:"));
    if (isNaN(firstNumber)) {
        alert("Vui lòng nhập số hợp lệ cho tham số thứ nhất.");
        return;
    }

    let secondNumber;
    do {
        secondNumber = parseInt(prompt("Nhập tham số thứ hai:"));
        if (isNaN(secondNumber)) {
            alert("Vui lòng nhập số hợp lệ cho tham số thứ hai.");
        }
    } while (isNaN(secondNumber));

    // So sánh và hiển thị kết quả
    if (firstNumber > secondNumber) {
        document.getElementById("result3").innerHTML =
            `Giá trị của số thứ nhất (${firstNumber}) lớn hơn số thứ hai (${secondNumber}).`;
    } else if (firstNumber < secondNumber) {
        document.getElementById("result3").innerHTML =
            `Giá trị của tham số thứ nhất (${firstNumber}) nhỏ hơn số thứ hai (${secondNumber}).`;
    } else {
        document.getElementById("result3").innerHTML =
            `Giá trị của số thứ nhất (${firstNumber}) bằng số thứ hai (${secondNumber}).`;
    }
    //Hiển thị kết quả tổng
    const sum = firstNumber + secondNumber;
    document.getElementById("result3").innerHTML += `<br>Tổng của hai tham số là: ${sum}`;
}

// Bài 4: Hàm hiển thị giá trị trước và sau lời gọi hàm
function addNumbers(firstNum, secondNum) {
    let result = firstNum + secondNum;
    console.log("Giá trị trước khi tính tổng: ");
    console.log("firstNum: " + firstNum);
    console.log("secondNum: " + secondNum);
    return result;
}
function testAddNumbers() {

    let firstNum;
    do {
        firstNum = parseInt(prompt("Nhập tham số thứ nhất:"));
        if (isNaN(firstNum)) {
            alert("Vui lòng nhập số hợp lệ cho tham số thứ nhất.");
        }
    } while (isNaN(firstNum));

    let secondNum;
    do {
        secondNum = parseInt(prompt("Nhập tham số thứ hai:"));
        if (isNaN(secondNum)) {
            alert("Vui lòng nhập số hợp lệ cho tham số thứ hai.");
        }
    } while (isNaN(secondNum));

    document.getElementById("result4").innerHTML = `Giá trị trước khi tính tổng: Số thứ nhất= ${firstNum}, số thứ 2 = ${secondNum}`;

    let result = addNumbers(firstNum, secondNum);

    document.getElementById("result41").innerHTML = `Kết quả tính tổng: ${result}`;
}

// Bài 5: Hàm tìm tên chòm sao từ tên ngôi sao
function findConstellation() {
    const stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
    const constellations = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

    const starName = prompt("Nhập tên ngôi sao:");
    let found = false;

    // Tìm tên ngôi sao trong mảng và trả về tên chòm sao tương ứng
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].toLowerCase() === starName.toLowerCase()) {
            document.getElementById("result5").innerHTML = "Chòm sao của " + starName + " là: " + constellations[i];
            found = true;
            break;
        }
    }
    // Nếu không tìm thấy ngôi sao
    if (!found) {
        document.getElementById("result5").innerHTML = "Không tìm thấy ngôi sao nào với tên " + starName;
    }
}