
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function checkPrimes() {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(",").map(num => parseInt(num.trim()));

    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
        alert("Có số trùng nhau, vui lòng nhập lại.");
        return;
    }
    const primes = numbers.filter(isPrime);
    let resultText = "Các số nguyên tố trong mảng là: ";
    if (primes.length > 0) {
        resultText += primes.join(", ");
    } else {
        resultText = "Không có số nguyên tố nào trong mảng.";
    }
    document.getElementById("result").innerText = resultText;
}