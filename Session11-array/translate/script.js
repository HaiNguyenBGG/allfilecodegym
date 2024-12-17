function translate_engvie() {
    let eng = ["One", "Two", "Six"];
    let vie = ["Một", "Hai", "Sáu"];
    let valueSub = document.getElementById("nhapValue").value;
    let index_eng = 0;
    let result = "";
    for (let i = 0; i < eng.length; i++) {
        if (valueSub == eng[i]) {
            index_eng = i;
            for (let j = 0; j < vie.length; j++) {
                if (index_eng == j) {
                    result = vie[j];
                }
            }
        }
    }
    document.getElementById("result").innerHTML = result;
}