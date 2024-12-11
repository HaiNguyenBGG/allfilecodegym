function checkage() {
    let age = document.getElementById("agenumber").value;
    if (age < 16) {
        document.getElementById("result").innerHTML = `${age} chưa đủ tuổi vào lớp 10.`;
    } else {
        document.getElementById("result").innerHTML = `${age} đủ tuổi vào lớp 10.`;
    }
}
function eventButton(event) {
    if (event.key == "Enter")
        checkage();
}