
function footToMeter(foot) {
    const meter = 0.305 * foot;  
    return meter;
}

function meterToFoot(meter) {
    const foot = 3.279 * meter;  
    return foot;
}

function convertFeetToMeter() {
    const feet = parseFloat(document.getElementById("feetInput").value); 
    const meterInput = document.getElementById("meterInput");

    if (isNaN(feet) && meterInput.value === "") {
        alert("Vui lòng nhập một giá trị vào một trong hai ô");
        return;
    }

    if (!isNaN(feet)) {
        const result = footToMeter(feet);  
        meterInput.value = result.toFixed(2); 
    }
}

function convertMeterToFeet() {
    const meter = parseFloat(document.getElementById("meterInput").value);
    const feetInput = document.getElementById("feetInput");

    if (isNaN(meter) && feetInput.value === "") {
        alert("Vui lòng nhập một giá trị vào một trong hai ô");
        return;
    }

    if (!isNaN(meter)) {
        const result = meterToFoot(meter);
        feetInput.value = result.toFixed(2);
    }
}