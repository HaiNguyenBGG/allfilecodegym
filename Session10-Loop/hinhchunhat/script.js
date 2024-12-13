const width = 15;
const height = 5;
let hcn = " ";

for (let i = 1; i <= height; i++) {
    if (i === 1 || i === height) {
        hcn += "*".repeat(width) + "<br>";
    } else {
        hcn += "*" + "&nbsp&nbsp".repeat(width - 2) + "*" + "<br>";
    }
}
document.write(hcn);