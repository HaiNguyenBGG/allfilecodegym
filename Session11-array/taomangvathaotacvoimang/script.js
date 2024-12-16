let citys = [];
function addElement() {
    let inputElement = document.getElementById("elementInput").value.trim();
    if (inputElement !== "" && citys.indexOf(inputElement) < 0) {
        citys.push(inputElement);
        displayArray();
        document.getElementById("elementInput").value = "";
    } else if (inputElement == "") {
        alert("Vui lòng nhập phần tử!");
    } else {
        alert("Phần tử đã tồn tại trong mảng. Vui lòng thêm giá trị khác!");
    }
}
function displayArray() {
    if (citys.length > 0) {
        document.getElementById("arrayDisplay").innerHTML = citys.join(", ");
    } else {
        document.getElementById("arrayDisplay").innerHTML = "Mảng hiện tại rỗng.";
    }
}
function removeElement() {
    let inputElement = document.getElementById("elementInput").value.trim();
    if (inputElement !== "" && citys.includes(inputElement) == true) {
        let index = citys.indexOf(inputElement);
        citys.splice(index, 1);
        alert(inputElement + " đã được xóa khỏi mảng.");
        document.getElementById("elementInput").value = "";
    } else if (inputElement === "") {
        alert("Vui lòng nhập phần tử!");
    } else {
        alert(inputElement + " không có trong mảng!");
    }
    displayArray();
}
function sortArray() {
    citys.sort();
    displayArray();
}
function reverseArray() {
    citys.reverse();
    displayArray();
}
function findElement() {
    const inputElementfind = document.getElementById("elementInput").value.trim();
    const indexfind = citys.indexOf(inputElementfind);
    const resultDissplay = document.getElementById("dissplayFind");
    if (indexfind != -1) {
        resultDissplay.textContent = `Vị trí của "${inputElementfind}" là: ${indexfind}`;
    } else {
        resultDissplay.textContent = `Không tìm thấy "${inputElementfind}" trong mảng`;
    }
}
function findmaxValue() {
    if (citys.length === 0) {
        document.getElementById("dissplayFind").textContent = "Mảng trống!";
        return;
    }
    const maxValue = Math.max(...citys);
    document.getElementById("dissplayFind").textContent = `Giá trị lớn nhất trong mảng là: ${maxValue}`;
}