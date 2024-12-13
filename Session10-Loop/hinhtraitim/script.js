let heart = "";
let row = 6;
for (let i = row / 2; i <= row; i++) {
    for (let j = 1; j < row - i; j++) {
        heart += "&nbsp&nbsp";
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        heart += "*";
    }
    heart += "<br>";
}
for (let i = row; i >= 1; i--) {
    for (let j = i; j < row - i; j++) {
        heart += "&nbsp&nbsp";
    }
    for (let j = 1; j <= (2 * i - 1); j++) {
        heart += "*";
    }
    heart += "<br>";
}
document.write(heart);