//Bài 1:Câu 1: Hàm tính diện tích hình tròn (không có tham số)
// Đề bài: Viết một hàm tính diện tích hình tròn với bán kính cố định là 5 (sử dụng Math.PI) và không có tham số.
function dienTichHinhTron() {
    const radius = 5;
    const area = Math.PI * radius * radius;
    return area;
}
console.log("Câu 1: Diện tích hình tròn là: ", dienTichHinhTron());

// Câu 2: Hàm tính diện tích hình tròn (có tham số)
// Đề bài: Viết một hàm tính diện tích hình tròn từ bán kính được truyền vào dưới dạng tham số.

function dienTichHinhTronts(radius) {
    if (radius <= 0) {
        throw new Error("Bán kính phải lớn hơn 0");
    }
    const area = Math.PI * radius * radius;
    return area;
}

console.log("Câu 2: Diện tích hình tròn là:", dienTichHinhTronts(5));

// Câu 3: Hàm tính chu vi hình tròn (không có tham số)
// Đề bài: Viết một hàm tính chu vi hình tròn với bán kính cố định là 5 (sử dụng Math.PI) và không có tham số.

function chuvihinhtron() {
    const radius = 5;
    const chuvi = 2 * Math.PI * radius;
    return chuvi;
}

console.log("Câu 3: Chu vi hình tròn là:", chuvihinhtron());

// Câu 4: Hàm tính chu vi hình tròn (có tham số)
// Đề bài: Viết một hàm tính chu vi hình tròn từ bán kính được truyền vào dưới dạng tham số.

function chuvihinhtronts(radius) {
    if (radius <= 0) {
        throw new Error("Bán kính phải lớn hơn 0");
    }
    const chuvi = 2 * Math.PI * radius;
    return chuvi;
}

console.log("Câu 4: Chu vi hình tròn là:", chuvihinhtronts(5));

// Câu 5: Kết hợp hàm tính diện tích và chu vi (có tham số)
// Đề bài: Viết một hàm có tham số tính đồng thời diện tích và chu vi hình tròn và in kết quả ra màn hình.

function hinhtron(radius) {
    if (radius <= 0) {
        throw new Error("Bán kính phải lớn hơn 0");
    }

    const area = Math.PI * radius * radius;
    const chuvi = 2 * Math.PI * radius;

    console.log("Câu 5:");
    console.log("Diện tích hình tròn là:", area);
    console.log("Chu vi hình tròn là:", chuvi);
}

hinhtron(5);