let numbers;
while (true) {
    numbers = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"));
    if (isNaN(numbers) || numbers <= 0) {
        console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
    } else {
        break;
    }
}
let count = 0;
let num = 2;
while (count < numbers) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
        count++;
    }
    num++;
}

// let numbers = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"));
// if (isNaN(numbers) || numbers <= 0) {
//     console.log("Vui lòng nhập một số nguyên dương hợp lệ.");
// } else {
//     let primes = [];
//     let num = 2;
//     while (primes.length < numbers) {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(num);
//         }
//         num++;
//     }
//     console.log(primes.join(" "));
// }