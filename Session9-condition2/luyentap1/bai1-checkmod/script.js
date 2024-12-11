function kiemtra(){
    let a=parseInt(document.getElementById("nhapa").value);
    let b=parseInt(document.getElementById("nhapb").value);
    let m = a%b;
    if(m==0){
        document.getElementById("result").innerHTML = `${a} chia hết cho ${b}`;
    } else {
        document.getElementById("result").innerHTML = `${a} không chia hết cho ${b}`;
    }
}