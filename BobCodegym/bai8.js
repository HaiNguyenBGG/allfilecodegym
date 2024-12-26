function enterArray() {
    let n = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu cách: ");
    let array = n.split(" ").map(Number);
    return array;
}
let enteredArray = enterArray();
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(enteredArray);
let result = enteredArray.every(isPrime);
console.log("Kết quả:", result ? "TRUE" : "FALSE");