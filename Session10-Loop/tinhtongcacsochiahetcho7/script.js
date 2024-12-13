function tinhtong() {
    let soluong = parseInt(document.getElementById("soluong").value);
    let sum = 0;
    let number = 7;

    for (let i = 1; i <= soluong; i++) {
        sum += number;
        number += 7; 
    }

    document.getElementById("result").textContent = "Tổng các số chia hết cho 7 là: " + sum;
}