let citys = ["Hà Nội"];
function addElement() {
    let inputElement = document.getElementById("elementInput").value.trim();
    if (inputElement !== "") {
        citys.push(inputElement);
        displayArray();
        document.getElementById("elementInput").value = "";
    } else {
        alert("Vui lòng nhập phần tử!");
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
    if (inputElement !== "" && citys.includes(inputElement)) {
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