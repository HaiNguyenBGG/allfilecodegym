function enterArray() {
    let n = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu cách: ");
    let array = n.split(" ").map(Number);
    return array;
}
let enteredArray = enterArray();
console.log(enteredArray);
function isSymmetric(array) {
    let n = array.length;
    for (let i = 0; i < (n / 2); i++) {
        if (array[i] !== array[n - 1 - i]) {
            console.log("Không phải mảng đối xứng.")
            return;
        }
    }
    console.log("Là mảng đối xứng.");
    return;
}
isSymmetric(enteredArray);