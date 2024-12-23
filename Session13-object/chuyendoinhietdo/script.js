class Temperature {
    constructor(celsius) {
        if (celsius < -273) {
            throw new Error("Nhiệt độ không thể thấp hơn -273 độ C");
        }
        this.celsius = celsius;
    }

    toFahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }

    toKelvin() {
        return this.celsius + 273.15;
    }
}

function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    try {
        const temp = new Temperature(celsius);
        document.getElementById('output').innerHTML = `
        Nhiệt độ (C): ${temp.celsius.toFixed(2)}<br>
        Nhiệt độ (F): ${temp.toFahrenheit().toFixed(2)}<br>
        Nhiệt độ (K): ${temp.toKelvin().toFixed(2)}
      `;
    } catch (error) {
        alert(error.message);
    }
}