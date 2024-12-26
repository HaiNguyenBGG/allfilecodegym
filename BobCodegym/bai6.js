function enterArray() {
    let n = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu cách: ");
    let array = n.split(" ").map(Number);
    return array;
}
// function print(array) {
//     let isEven = true;
//     let isOdd = true;

//     for (let num of array) {
//         if (num % 2 === 0) {
//             isOdd = false;
//         } else {
//             isEven = false;
//         }
//     }
//     if (isEven) {
//         return 1;
//     } else if (isOdd) {
//         return 0;
//     } else {
//         return -1;
//     }
// }

function print(array) {
    if (array.every(num => num % 2 === 0)) {
        return 1;
    }
    if (array.every(num => num % 2 !== 0)) {
        return 0;
    }
    return -1;
}
let enteredArray = enterArray();
console.log("Mảng vừa nhập:", enteredArray);
let result = print(enteredArray);
console.log("Kết quả:", result);
