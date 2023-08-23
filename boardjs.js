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
// Modify the content of a specific cell
//divArray[0][1].textContent = "Modified";

// Modify the style of a specific cell
//divArray[1][2].style.backgroundColor = "lightblue";

var myChessBoard = [];
    


function initBoard() {

console.log("I am in initBoard");


var parentDiv = document.getElementById("chessboard");
var innerDivs = parentDiv.querySelectorAll("div");
//console.log(innerDivs);
// Iterate through the grid and populate the array
var rowCount = 8;
var colCount = 8;

for (var row = 0; row < rowCount; row++) {
myChessBoard[row] = [];
  for (var col = 0; col < colCount; col++) {
    myChessBoard[row][col] = innerDivs[row * colCount + col];
//    console.log(row,col);

    myChessBoard[row][col].addEventListener('click', function(event)
        {
            placeQueen(event);
  //          console.log(event);
        });
  }
}

const myBoard = document.getElementById("chessboard");
//console.log(myBoard);
//console.table(myBoard);
//console.table(myChessBoard.txtContent);

    myBoard.addEventListener('contextmenu', function(event)
        {
            printBoard(event);
        });
}//initBoard




//const myBoard = document.getElementById("chessboard");

//console.log(myBoard);
//console.log("BoardID Printed Above");


//innerDivs.addEventListener('click', function(event)
//        {
//            placeQueen(event);
//            console.log(event);
//        });

//    innerDivs.addEventListener('contextmenu', function(event)
//        {
//           // printQueen();
//            console.log(event);
//            printBoard();
//        });


//const myBoard = document.getElementById("chessboard");
//
//console.log(myBoard);
//console.log("BoardID Printed Above");
//    myBoard.addEventListener('click', function(event)
//        {
//            placeQueen(event);
//            console.log(event);
//        });
//
//    myBoard.addEventListener('contextmenu', function(event)
//        {
//           // printQueen();
//            console.log(event);
//            printBoard();
//        });


function printBoardArray()
{

   console.log("In printBoardArray");
    // Extract information for display
    const dataToDisplay = myChessBoard.map(row => row.map(node => node.textContent !== "" ? node.textContent : "-"));
    console.table(dataToDisplay);
    // const dataToDisplay = myChessBoard.map(row => row.map(node => {
    //  return {
    //   // TagName: node.tagId,
    //   Content: node.textContent,
    //    // Add more properties as needed
    //  };
    //}));

    // Display the data using console.table()
}

function printBoard()
{
// Iterate through the grid and populate the array
var rowCount = 8;
var colCount = 8;
for (var row = 0; row < rowCount; row++) 
  for (var col = 0; col < colCount; col++) 
  console.log("Content of div at row", row, "and column", col + ":", myChessBoard[row][col].textContent);
}



function placeQueen(event)
    {
    //console.log(myChessBoard);
    //console.log(event);
    //console.log(event.target.innerHTML);
    //console.log(event.target.id);
    event.target.innerHTML ="&#9819" 
    console.log("Clicking!!!!!!!");
    printBoardArray();
    }//placeQueen

    



//
//listen.addEventListener("mouseover", changeColor);
//console.log("After mouseover")
//    listen.addEventListener("onclick", placeQueen);
//console.log("After placeQueen")
//function changeColor() {
//    console.log("I am in changeColor")
//    document.getElementById("00").style.backgroundColor = "green";
//}
//function placeQueen() {
//  console.log("I am in placeQueen")
//  document.getElementById("00").style.backgroundColor = "green";
//  sq1.innerHTML = "&#9813";
//}
