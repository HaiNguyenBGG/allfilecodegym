function checkValueIfElse() {
    let x = parseInt(document.getElementById("inputValue").value);
    let result = "";
    if (x < 0) {
        result = "Giá trị là số âm.";
    } else if (x === 0) {
        result = "Giá trị là 0.";
    } else if (x > 0) {
        result = "Giá trị là số dương.";
    } else {
        result = "Vui lòng nhập giá trị."
    }
    document.getElementById("result").innerText = result;
}
// function kiemTraEnter(event) {
//     if (event.key === 'Enter') {
//         checkValueIfElse();
//     }
// }
function kiemTraEnter(event) {
    if (event.key === 'Enter') {
        checkValueIfElse();
    }
}