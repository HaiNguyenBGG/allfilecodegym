function kiemTraNamNhuan() {
    const nam = document.getElementById("nam").value;
    const resultElement = document.getElementById("result");
    if (nam) { 
        if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
            resultElement.textContent = nam + " là năm nhuận.";
        } else {
            resultElement.textContent = nam + " không phải là năm nhuận.";
        }
    } else {
        resultElement.textContent = "Vui lòng nhập một năm hợp lệ!";
    }
}
function kiemTraEnter(event) {
    if (event.key === 'Enter') {
        kiemTraNamNhuan();
    }
}