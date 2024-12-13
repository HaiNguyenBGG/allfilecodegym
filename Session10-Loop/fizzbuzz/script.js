for (let i = 0; i < 100; i++) {
    let number = prompt("Nhập 1 số để hiển thị:");
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
        break;
    }
}