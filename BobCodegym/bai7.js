function enterArray() {
    let n = prompt("Nhập các phần tử của mảng, cách nhau bằng dấu cách: ");
    let array = n.split(" ");
    return array;
}
function print(array) {
    let isNumber = true;
    let isLetter = true;

    for (let char of array) {
        if (!/^\d$/.test(char)) {
            isNumber = false;
        }
        if (!/^[a-zA-Z]$/.test(char)) {
            isLetter = false;
        }
    }
    if (isNumber) {
        return 1;
    }
    if (isLetter) {
        return 0;
    }
    return -1;
}

let enteredArray = enterArray();
console.log("Mảng vừa nhập:", enteredArray);
let result = print(enteredArray);
console.log("Kết quả:", result);
