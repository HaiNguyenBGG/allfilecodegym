function kiemtra(){
    let integerNumber = parseInt(document.getElementById("songuyen").value);
    if(integerNumber < 0){
        document.getElementById("result").innerHTML = `${integerNumber} nhỏ hơn 0.`;
    }else if(integerNumber > 0){
        
        document.getElementById("result").innerHTML = `${integerNumber} lớn hơn 0.`;
    }else{
        document.getElementById("result").innerHTML = `Vui lòng nhập số khác!`;
    }
}
function enterButton(event){
    if(event.key=="Enter"){
        kiemtra();
    }
}