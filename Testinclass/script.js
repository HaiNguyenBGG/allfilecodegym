function kiemtra() {
    var txt = document.getElementById("nhap").value;
    switch (txt) {
        case "u":
        case "e":
        case "o":
        case "a":
        case "i":
            document.getElementById("result").innerHTML = "Là nguyên âm";
            break;
        default:
            document.getElementById("result").innerHTML = "Là phụ âm";
    }
}