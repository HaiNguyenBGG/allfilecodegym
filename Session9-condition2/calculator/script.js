let display = document.getElementById("display");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += " " + operator + " ";
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

let display2 = document.getElementById("display");

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (key >= "0" && key <= "9") {
        display2.value += key;
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        display2.value += " " + key + " ";
    } else if (key === "Backspace") {
        display2.value = display.value.slice(0, -1);
    } else if (key === "Enter") {
        calculate();
    } else if (key === " ") {
        clearDisplay();
    }
});