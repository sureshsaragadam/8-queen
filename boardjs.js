

function initBoard() {
var listen = document.getElementById("sq1");
listen.addEventListener("mouseover", changeColor);

var listen = document.getElementById("sq2");
listen.addEventListener("mouseover", changeColor);
}


function changeColor() {
  document.getElementById("sq1").style.backgroundColor = "green";
}
