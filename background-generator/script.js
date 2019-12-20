var colorLeft = document.querySelector("#colorLeft");
var colorRight = document.querySelector("#colorRight");

function pickGradientColor(){
    var body = document.querySelector("body");
    body.style.background = "linear-gradient(45deg,#e9193e, #008af6)";
    body.style.background = "linear-gradient(45deg,"+String(colorLeft.value)+","+ String(colorRight.value) +")";
    
}
colorLeft.addEventListener("input",pickGradientColor);
colorRight.addEventListener("input",pickGradientColor);