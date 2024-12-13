function tinhlai() {
    let P = parseFloat(document.getElementById("von").value);
    let r = parseFloat(document.getElementById("lai").value);
    let t = parseInt(document.getElementById("thang").value);

    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r <= 0 || t <= 0) {
        document.getElementById("result").innerText = "Vui lòng nhập đầy đủ thông tin:";
        return;
    }
    let total = P;
    for (let i = 1; i <= t; i++) {
        total += total * (r / 100);
    }
    document.getElementById("result").innerHTML = `Số tiền sau ${t} tháng là: ${total.toFixed(2)} VND`;
}