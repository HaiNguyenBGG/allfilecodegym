// let num = prompt("Nhập số: ");
// let total = 0;
// while (num != -1) {
//     num = prompt("Nhập số: ");
//     total+=num;
//     alert(total);
// }

// let i = 1;
// while (i < 50) {
//     document.write("<hr width = " + i + "%>");
//     i++;
// }



// let value = null;
// do {
//     value = prompt("Nhập số:");
// } while (value < 1 || value > 10);
// console.log(value);

// var sout;
// sout = "<table border ='1' width='300' cellspacing='0' cellpadding='3'>";
// for (i = 1; i <= 10; i++) {
//     sout = sout + "<tr>";
//     for (j = 1; j <= 10; j++) {
//         sout = sout + "<td>" + i * j + "</td>";
//     }
// }
// sout = sout + "</table>";
// document.write(sout);



// let sout, i, j;
// sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
// i = j = 1;
// while (i <= 10) {
//     sout = sout + "<tr>";
//     while (j <= 10) {
//         sout = sout + "<td>" + i * j + "</td>";
//         j++;
//     }
//     sout = sout + "</tr>";
//     j = 1;
//     i++;
// }
// sout = sout + "</table>";
// document.write(sout);



// let sout;
// sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>"
// for (i = 1; i <= 10; i++) {
//     sout = sout + "<tr>";
//     for (j = 1; j <= 10; j++) {
//         sout = sout + "<td>" + i * j + "</td>";
//     }
//     sout = sout + "</tr>";
// }
// sout = sout + "</table>";
// document.write(sout);

// //Bài 1: Chẵn lẻ
// let numbers = +prompt("Nhập số cần kiểm tra:");
// if (numbers % 2 === 0) {
//     alert("Là số chẵn.");
// } else {
//     alert("Là số lẻ.");
// }

// // Bài 2: Bội số của 3
// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }

// // Bài 3:In hình tam giác
// for (let i = 1; i <= 4; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(j + "&nbsp;");
//     }
//     document.write("<br>");
// }
for (let i = 3; i <= 50; i = i + 3) {
    document.write(i + '<br>');
}
