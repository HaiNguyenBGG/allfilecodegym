let fib0 = 0, fib1 = 1;
let n = +prompt("Nhập số lượng cần in ra:");
let n1 = +prompt("Nhập số lượng số chia hết cho 5 cần in ra:");
let count = 0;
console.log(fib0); //In ra số đầu tiên.
if (n1 > n) {
    console.log(`Số lượng trong danh sách ${n} số không đủ`);
} else {
    for (let i = 1; i < n; i++) {
        console.log(fib1); //In ra số tiếp theo
        let nextNumber = fib0 + fib1;
        fib0 = fib1;
        fib1 = nextNumber;
    }
    console.log("Các số chia hết cho 5 trong dãy Fibonacci:");
    fib0 = 0; // Khởi tạo lại giá trị ban đầu của dãy Fibonacci
    fib1 = 1;
    let count5 = 0;
    while (count5 < n1) {
        let nextNumber = fib0 + fib1;
        if (nextNumber % 5 === 0) {
            console.log(nextNumber);  // In ra số nếu chia hết cho 5
            count5++;
        }
        fib0 = fib1;
        fib1 = nextNumber;
    }
}

//Tìm 5 số đầu tiên dãy chia hết cho 5
// let n1 = prompt("Nhập số lượng số chia hết cho 5 cần in ra:");
// console.log("Các số chia hết cho 5 trong dãy gồm");
// let count = 0;
// let fib0_2 = 0, fib1_2 = 1;
// while (count < n1) {
//     let number5 = fib0_2 + fib1_2;
//     if (number5 % 5 === 0) {
//         console.log(number5);
//         count++;
//     }
//     fib0_2 = fib1_2;
//     fib1_2 = number5;
// }
// if (count < n1) {
//     console.log(`Không đủ ${n1} số chia hết cho 5 trong dãy Fibonacci.`);
// }