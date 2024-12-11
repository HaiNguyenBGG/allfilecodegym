function checkValueSwitch() {
    let x = parseInt(document.getElementById("inputValue2").value);
    console.log(x.toString());
    let category = 0;
    if (x < 0) {
        category = -1;
    } else if (x === 0) {
        category = 0;
    } else {
        category = 1;
    }
    if (x.toString() === "NaN") {
        category = "NaN";
    }

    let result = "";
    switch (category) {
        case -1:
            result = "Giá trị là số âm.";
            break;
        case 0:
            result = "Giá trị là 0.";
            break;
        case 1:
            result = "Giá trị là số dương.";
            break;
        case "NaN":
            result = "Vui lòng nhập giá trị.";
            break;
        default:
            result = "Không xác định.";
    }
    document.getElementById("result").innerText = result;
}
function kiemTraEnter(event) {
    if (event.key === 'Enter') {
        checkValueSwitch();
    }
}