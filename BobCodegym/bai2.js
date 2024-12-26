function checkTriangle(a, b, c) {
    let max = Math.max(a, b, c);
    let sumOfsquare = 0;
    let otherSidessum = a + b + c - max;
    if (otherSidessum <= max) {
        console.log("Không phải là tam giác");
        return;
    }
    if (max === a) {
        sumOfsquare = b * b + c * c;
    } else if (max === b) {
        sumOfsquare = a * a + c * c;
    } else {
        sumOfsquare = a * a + b * b;
    }

    if(sumOfsquare === max * max ){
        console.log("Đây là tam giác vuông.");
    } else {
        console.log("Đây là tam giác thường");
    }
}
function inputNumber(){
    let a = +prompt("Nhập độ dài cạnh thứ nhất: ");
    let b = +prompt("Nhập độ dài cạnh thứ hai: ");
    let c = +prompt("Nhập độ dài cạnh thứ ba: ");   
    checkTriangle(a,b,c);
}

inputNumber();
