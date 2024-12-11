let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

img1.onclick = function(){
  let currentAlt = img1.alt;
  console.log(currentAlt);
  while (img1.alt===currentAlt) {
    img1.alt = Math.floor(Math.random() * 4).toString();
  }
  check();
}

img2.onclick = function(){
  let currentAlt = img2.alt;
  while (img2.alt===currentAlt) {
    img2.alt = Math.floor(Math.random() * 4).toString();
  }
  check();
}
img3.onclick = function(){
  let currentAlt = img3.alt;
  while (img3.alt===currentAlt) {
    img3.alt = Math.floor(Math.random() * 4).toString();
  }
  check();
}
img4.onclick = function(){
  let currentAlt = img4.alt;
  while (img4.alt===currentAlt) {
    img4.alt = Math.floor(Math.random() * 4).toString();
  }
  check();
}

function check(){
  if(img1.alt===img2.alt&&img2.alt===img3.alt&&img3.alt===img4.alt){
    alert("Win")
  }
}