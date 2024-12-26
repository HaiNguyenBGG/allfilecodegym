function findFraction() {
    let input = prompt("Nhập phân số (dạng xx/yy):");
    if (!input.includes('/')) {
        return "Không phải là phân số";
    }
    let parts = input.split('/');
    if (
        parts.length !== 2 ||
        parts[0].trim() === "" ||
        parts[1].trim() === "" ||
        isNaN(parts[0]) ||
        isNaN(parts[1])
    ) {
        return "Không phải là phân số";
    }
    let numerator = parseInt(parts[0], 10);
    let denominator = parseInt(parts[1], 10);
    if (denominator === 0) {
        return "Không phải là phân số";
    }
    let gcd = function (a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };
    let divisor = gcd(Math.abs(numerator), Math.abs(denominator));
    numerator /= divisor;
    denominator /= divisor;
    if (denominator === 1) {
        return numerator.toString();
    }
    return `${numerator}/${denominator}`;
}
let result = findFraction();
console.log(result);