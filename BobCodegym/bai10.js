function enterArray() {
    let n = prompt("Nhập chuỗi bạn muốn kiểm tra nguyên âm: ");
    return n;
}
function checkString(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'ă', 'â', 'ô', 'ê', 'ư', 'á', 'à', 'ả', 'ã', 'ạ','ắ','ằ','ẵ','ẳ','ặ','ấ','ầ','ẫ','ẩ','ậ', 'é', 'è', 'ẻ', 'ẽ', 'ẹ','ề','ế','ể','ễ','ệ', 'í', 'ì', 'ỉ', 'ĩ', 'ị', 'ó', 'ò', 'ỏ', 'õ', 'ọ','ơ','ờ','ớ','ở','ỡ','ợ','ô','ồ','ố','ổ','ỗ','ộ', 'ú', 'ù', 'ủ', 'ũ', 'ụ','ừ','ứ','ử','ữ','ự','y', 'ý', 'ỳ', 'ỷ', 'ỹ', 'ỵ'];
    let result = new Set();
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            result.add(char);
        }
        
    }
    return Array.from(result);
}

let inputString = enterArray();
let result = checkString(inputString);
console.log(inputString);
console.log("Nguyên âm trong chuỗi:", result);