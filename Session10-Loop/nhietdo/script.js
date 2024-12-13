let nhietdo;
while(1) {
    let nhietdo = prompt("Nhập nhiệt độ");
    nhietdo = parseFloat(nhietdo);
    if(nhietdo>100){
        alert("Nhiệt độ cao quá. Vui lòng hạ nhiệt độ!");
    }else if(nhietdo<20){
        alert("Nhiệt độ thấp vui lòng tăng nhiệt độ");
    }else {
        alert("Nhiệt độ hợp lý");
        break;
    }
}