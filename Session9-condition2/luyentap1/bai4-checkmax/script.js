function checkmax() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    if (num1 > num2 && num1 > num3) {
        document.getElementById("result").innerHTML = `${num1} là giá trị lớn nhất.`;
    } else if (num2 > num1 && num2 > num3) {
        document.getElementById("result").innerHTML = `${num2} là giá trị lớn nhất.`;
    } else{
        document.getElementById("result").innerHTML = `${num3} là giá trị lớn nhất.`;
    }
}
function enterButton(event) {
    if (event.key == "Enter") {
        checkmax();
    }
}