function enterArray() {
    let input = prompt("Nhập các phần tử của mảng (số chẵn lượng phần tử), cách nhau bằng dấu cách: ");
    let array = input.split(" ").map(Number);
    if (array.length % 2 !== 0) {
        console.log("Số phần tử phải là số chẵn!");
        return null;
    }
    return array;
}
function checkArray(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] >= arr[i + 1]) {
            return "NO";
        }
    }
    return "OK";
}
let enteredArray = enterArray();

if (enteredArray) {
    console.log("Mảng đã nhập:", enteredArray);
    let result = checkArray(enteredArray);
    console.log("Kết quả:", result);
}
