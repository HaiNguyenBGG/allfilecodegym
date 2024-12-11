// let diem = +prompt("Nhập điểm của bạn:");

// if (diem > 0 && diem <= 100) {
//     if (diem >= 75) {
//         console.log("A");
//     } else if (diem >= 65) {
//         console.log("B");
//     } else if (diem >= 45) {
//         console.log("C");
//     } else {
//         console.log("D");
//     }
// } else {
//     console.log("Điểm không hợp lệ!");
// }

// let category;
// if (diem > 0 && diem <= 100) {
//     if (diem >= 75) {
//         category = "A";
//     } else if (diem >= 65) {
//         category = "B";
//     } else if (diem >= 45) {
//         category = "C";
//     } else {
//         category = "D";
//     }
// } else {
//     console.log("Điểm không hợp lệ!");
// }

// let result = "";

// switch (category) {
//     case "A":
//         result = "A";
//         break;
//     case "B":
//         result = "B";
//         break;
//     case "C":
//         result = "C";
//         break;
//     case "D":
//         result = "D";
//         break;
// }
// console.log(result);

let Number = prompt("Nhập số bạn muốn:");
const isEven = Number%2==0;
isEven ? console.log("Đây là số chẵn") : console.log("Đây là số lẻ");
