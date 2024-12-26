function findMaxNumber() {
    let n = prompt("Nhập số có 4 chữ số:");
    if (isNaN(n) || n.toString().length !== 4) {
        return -1;
    }
    let maxNumber = -Infinity;
    for (let i = 0; i < 4; i++) {
        let str = n.toString();
        let newNumber = parseInt(str.slice(0, i) + str.slice(i + 1)); 
        if (newNumber > maxNumber) {
            maxNumber = newNumber;
        }
    }
    return maxNumber;
}
let result = findMaxNumber();
console.log(result);
