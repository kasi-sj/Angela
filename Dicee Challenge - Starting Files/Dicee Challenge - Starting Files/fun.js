var d1 = 0;
var d2 = 0;
d1 = Math.floor(Math.random()*6)+1;
d2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","./images/dice"+d1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+d2+".png");
if(d1>d2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}else if(d2>d1){
    document.querySelector("h1").innerHTML = " Play 2 Wins! 🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}