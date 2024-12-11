function kiemtradays() {
    let month = parseInt(document.getElementById("nhaplieu").value);
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            document.getElementById("result").innerHTML = `Tháng ${month} có ${days} ngày.`;
            break;
        case 2:
            days = "28 ngày hoặc 29";
            document.getElementById("result").innerHTML = `Tháng ${month} có ${days} ngày.`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            document.getElementById("result").innerHTML = `Tháng ${month} có ${days} ngày.`;
            break;
        default:
            document.getElementById("result").innerHTML = `Không có tháng ${month}. Vui lòng nhập từ tháng 1 đến tháng 12.`;
            break;
    }
}
function enterButton(event) {
    if (event.key == "Enter") {
        kiemtradays();
    }
}