function kiemtra() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let bmi = weight / ((height / 100) ^ 2);
    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập thông tin";
        document.getElementById("result").classList.add("error");
        document.getElementById("weight").value ="";
        document.getElementById("height").value ="";
        return;
    }
    let category = "";
    if (bmi < 18) {
        category = "Gầy. Ăn thêm vào nhé!";
    } else if (bmi < 25) {
        category = "Cơ thể bạn đẹp đấy. Giữ vững nha!";
    } else if (bmi < 30) {
        category = "Giảm cân đi bro!";
    } else {
        category = "Bạn lăn được rồi đó nha";
    }
    document.getElementById("result").innerHTML = `BMI của bạn là: ${bmi.toFixed(2)}. Lời khuyên dành cho bạn: ${category}`;
    document.getElementById("result").classList.remove("error");
}
function enterButton(event) {
    if (event.key === 'Enter') {
        kiemtra();
    }
}