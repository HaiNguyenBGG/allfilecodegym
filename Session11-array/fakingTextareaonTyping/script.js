const doanvan = "Bấm ít thôi hỏng phím!";
let nhapValue = 0;

function typeChar() {
    if (nhapValue < doanvan.length) {
        const outputElement = document.getElementById("output");
        outputElement.value += doanvan[nhapValue];
        nhapValue++;
    }
}
document.addEventListener("keypress", typeChar);