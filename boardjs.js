//
//Unicode : U+2655
//HTML Code : ♕
//Unicode : U+265B
//HTML Code : ♛
//
//
//If you want to represent the black queen (♛), you can replace &#9813; with &#9819; in the HTML code.
//
//

function initBoard() {
var listen = document.getElementById("sq1");
listen.addEventListener("mouseover", changeColor);
listen.addEventListener("onclick", placeQueen);

var listen = document.getElementById("sq2");
listen.addEventListener("mouseover", changeColor);
listen.addEventListener("onclick", placeQueen);
}


function changeColor() {
  document.getElementById("sq1").style.backgroundColor = "green";
    
}


function placeQueen() {
  document.getElementById("sq1").style.backgroundColor = "green";
  sq1.innerHTML = "&#9813";
}
