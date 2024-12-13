const size = 5;
let tamgiac = "";
for (let i = 1; i <= size; i++) {
    tamgiac += "*".repeat(i) + "<br>";
}
document.write(tamgiac);

tamgiac = "";
for (let i = size; i >= 1; i--) {
    tamgiac += "*".repeat(i) + "<br>";
}
document.write(tamgiac);

tamgiac = "";
for (let i = 1; i <= size; i++) {
    tamgiac += "&nbsp&nbsp".repeat(size-i) + "*".repeat(i) + "<br>";
}
document.write(tamgiac);

tamgiac = "";
for (let i = size; i >= 1; i--) {
    tamgiac += "&nbsp&nbsp".repeat(size-i) + "*".repeat(i) + "<br>";
}
document.write(tamgiac);
