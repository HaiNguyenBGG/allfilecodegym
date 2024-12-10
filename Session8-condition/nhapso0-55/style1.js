function checkValueIfElse() {
    let x = parseInt(document.getElementById("inputValue").value);
    let result = "";
    if (x > 15) {
        result = "Ngày cuối tháng";
    } else
        result = " Ngày đầu tháng";
    document.getElementById("result").innerText = result;
}
function kiemTraEnter(event) {
    if (event.key === 'Enter') {
        checkValueIfElse();
    }
}