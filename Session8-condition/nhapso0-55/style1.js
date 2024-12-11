function checkValueTest() {
    let x = parseInt(document.getElementById("inputValue").value);
    let result = "";

    switch (x) {
        case 1:
            result = "Là số dương.";
            break;
        case -1:
            result = "Là số âm";
            break;
        default:
            result = "Không xác định.";
    }
    document.getElementById("result").innerText = result;
}
function kiemTraEnter(event) {
    if (event.key === 'Enter') {
        checkValueTest();
    }
}