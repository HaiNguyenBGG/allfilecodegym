function checkranking() {
    let diemkt = parseFloat(document.getElementById("diemkt").value);
    let diemthi = parseFloat(document.getElementById("diemthi").value);
    let diemcuoiki = parseFloat(document.getElementById("diemcuoiki").value);
    trungbinh = (diemkt + diemthi * 2 + diemcuoiki * 3) / 6;
    if (trungbinh => 0 && trungbinh <= 10) {
        if (trungbinh >= 9.0) {
            document.getElementById("result").innerHTML = `Điểm trung bình của bạn là: ${trungbinh.toFixed(2)}. Bạn xếp hạng Xuất sắc`;
        } else if (trungbinh >= 8.0) {
            document.getElementById("result").innerHTML = `Điểm trung bình của bạn là: ${trungbinh.toFixed(2)}. Bạn xếp hạng Giỏi`;
        } else if (trungbinh >= 6.5) {
            document.getElementById("result").innerHTML = `Điểm trung bình của bạn là: ${trungbinh.toFixed(2)}. Bạn xếp hạng Khá`;
        } else if (trungbinh >= 5.0) {
            document.getElementById("result").innerHTML = `Điểm trung bình của bạn là: ${trungbinh.toFixed(2)}. Bạn xếp hạng Trung bình`;
        } else {
            document.getElementById("result").innerHTML = `Điểm trung bình của bạn là: ${trungbinh.toFixed(2)}. Bạn xếp hạng Yếu`;
        }
    }
}
function enterButton(event) {
    if (event.key == "Enter") {
        checkranking();
    }
}