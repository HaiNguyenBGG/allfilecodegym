// // let num = prompt("Nhập số: ");
// // let total = 0;
// // while (num != -1) {
// //     num = prompt("Nhập số: ");
// //     total+=num;
// //     alert(total);
// // }

// // let i = 1;
// // while (i < 50) {
// //     document.write("<hr width = " + i + "%>");
// //     i++;
// // }



// // let value = null;
// // do {
// //     value = prompt("Nhập số:");
// // } while (value < 1 || value > 10);
// // console.log(value);

// // var sout;
// // sout = "<table border ='1' width='300' cellspacing='0' cellpadding='3'>";
// // for (i = 1; i <= 10; i++) {
// //     sout = sout + "<tr>";
// //     for (j = 1; j <= 10; j++) {
// //         sout = sout + "<td>" + i * j + "</td>";
// //     }
// // }
// // sout = sout + "</table>";
// // document.write(sout);



// // let sout, i, j;
// // sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
// // i = j = 1;
// // while (i <= 10) {
// //     sout = sout + "<tr>";
// //     while (j <= 10) {
// //         sout = sout + "<td>" + i * j + "</td>";
// //         j++;
// //     }
// //     sout = sout + "</tr>";
// //     j = 1;
// //     i++;
// // }
// // sout = sout + "</table>";
// // document.write(sout);



// // let sout;
// // sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
// // for (i = 1; i <= 10; i++) {
// //     sout = sout + "<tr>";
// //     for (j = 1; j <= 10; j++) {
// //         sout = sout + "<td>" + i * j + "</td>";
// //     }
// //     sout = sout + "</tr>";
// // }
// // sout = sout + "</table>";
// // document.write(sout);

// // //Bài 1: Chẵn lẻ
// // let numbers = +prompt("Nhập số cần kiểm tra:");
// // if (numbers % 2 === 0) {
// //     alert("Là số chẵn.");
// // } else {
// //     alert("Là số lẻ.");
// // }

// // // Bài 2: Bội số của 3
// // for (let i = 1; i <= 50; i++) {
// //     if (i % 3 === 0) {
// //         console.log(i);
// //     }
// // }

// // // Bài 3:In hình tam giác
// // for (let i = 1; i <= 4; i++) {
// //     for (let j = 1; j <= i; j++) {
// //         document.write(j + "&nbsp;");
// //     }
// //     document.write("<br>");
// // }
// for (let i = 3; i <= 50; i = i + 3) {
//     document.write(i + '<br>');
// }


// var array =["item1", "item2", "item3"];
// // for (let i = 0; i < array.length; i++){
// //     console.log(array[i]);
// // }
// var firstvalue = array[1];
// console.log(firstvalue);

// const cars = ["BMW", "Volvo", "Kia", "Mazda"];
// for (let index in cars){
//     console.log(cars[index]);
// }

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16];
// for (let i = 0; i <= number.length - 1; i++) {
//     if (number[i] % 2 === 0) {
//         console.log(number[i]);
//     }
// }

const matrix = new Array(3);
let count = 1;
let sum = 0;
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(3);
    for (let j = 0; j < matrix.length; j++) {
        matrix[i][j] = count;
        count++;
        sum +=matrix[i][j];
    }
    // console.log(matrix[i]);
}
console.log(sum);