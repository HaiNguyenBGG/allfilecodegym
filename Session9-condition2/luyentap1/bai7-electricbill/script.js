function electricbill() {
    let sodien = parseFloat(document.getElementById("sodien").value.toFixed(2));
    let tiendien;
    if (sodien <= 50) {
        tiendien = sodien * 1678;
    } else if (sodien <= 100){
        tiendien = (50*1678)+(sodien-50)*1734;
    }else if(sodien<=200){
        tiendien = (50*1678)+  (sodien-100)*
    }
}