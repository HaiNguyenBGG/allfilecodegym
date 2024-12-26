function enterArray() {
    let n = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu cách: ");
    let array = n.split(" ").map(Number);
    return array;
}
let enteredArray = enterArray();
console.log(enteredArray);
function arrange() {
    if (enteredArray.length < 2) {
        console.log("OK");
        return;
    }
    let difference = enteredArray[1] - enteredArray[0];
    for (let i = 1; i < enteredArray.length - 1; i++) {
        if (enteredArray[i + 1] - enteredArray[i] !== difference) {
            console.log("NO");
            return;
        }
    }
    console.log("OK");
}
arrange();