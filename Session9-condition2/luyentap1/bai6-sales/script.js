function tinhluong() {
    let doanhthu = parseInt(document.getElementById("doanhthu").value);
    let lcb = 5000000;
    let hoahong;
    if (doanhthu > 5000000000) {
        hoahong = doanhthu * 15 / 100;
    } else if (doanhthu >= 2000000000) {
        hoahong = doanhthu * 12 / 100;
    } else if (doanhthu >= 1000000000) {
        hoahong = doanhthu * 10 / 100;
    } else if (doanhthu >= 500000000) {
        hoahong = doanhthu * 9 / 100;
    } else if (doanhthu >= 200000000) {
        hoahong = doanhthu * 8 / 100;
    } else if (doanhthu >= 100000000) {
        hoahong = doanhthu * 7 / 100;
    } else if (doanhthu >= 50000000) {
        hoahong = doanhthu * 5 / 100;
    } else {
        hoahong = 0;
    }
    let luong = hoahong + lcb;
    document.getElementById("result").innerHTML = `Tổng lương của bạn là: ${luong}.`
}
function enterButton(event) {
    if (event.key == "Enter") {
        tinhluong();
    }
}