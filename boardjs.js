// 8 Queen Puzzle
//
var brd = [];
var total = 0;    
let queen = "&#9819";

function initBoard() {

console.log("I am in initBoard ...");


var parentDiv = document.getElementById("chessboard");
var innerDivs = parentDiv.querySelectorAll("div");
// Iterate through the grid and populate the array

for (var i = 0; i < 8; i++) {
brd[i] = [];
  for (var j = 0; j < 8; j++) {
    brd[i][j] = innerDivs[i * 8 + j];
    brd[i][j].addEventListener('click', function(e)
        {
            placeOrDeleteQueen(e);
        });
  }
}

const myBoard = document.getElementById("chessboard");

    myBoard.addEventListener('contextmenu', function(cme)
        {
            printBoard(cme);
        });
}//initBoard


function printBoardArray()
{

   console.log("In printBoardArray");
    // Extract information for display
    const dataToDisplay = brd.map(row => row.map(node => node.textContent !== "" ? node.textContent : "-"));
    console.table(dataToDisplay);
}

function printBoard()
{
for (var i = 0; i < 8; i++) 
  for (var j = 0; j < 8; j++) 
  console.log("Content of div at row ", i, "and column ", j, ":", brd[i][j].textContent);
}



function placeQueen(event)
    {
    event.target.innerHTML ="&#9819" 
    console.log("Clicking...!!");
    printBoardArray();
    }//placeQueengg




function placeOrDeleteQueen(event)
    {
        let point = event.target.id; 
        console.log(event);
        console.log("To print tagId", event.target.id);
        //let feasible = false;
        let feasible_pt = check_for_feasibility(point);
        console.log("Completed feasibility test..for Point :", event.target.id, "retrutn valuge :",feasible_pt);
        console.log(feasible_pt);
        if (event.target.innerHTML == "" && feasible_pt)
        {
            console.log("In Click Event, Placing Queen at Point :", event.target.id);
            event.target.innerHTML = "&#9819"; 
            total = total + 1;
            console.log("Total Queens Place :",total);
            if (total == 8)
            {
            let message=document.getElementById("bottomMessage");
            message.innerHTML="You Solved the Puzzle!";
           // alert("You Solved the Puzzle..");
            document.getElementById("winningAudio").play();
            }
        }
        else if (event.target.innerHTML == "" && !feasible_pt)
        {
//           event.target.style.backgroundColor = "red";
                    console.log("error")
             document.getElementById("errorAudio").play();
        }
        else
        {
            event.target.innerHTML = ""; 
            total = total - 1;

            console.log("In Click Event, Deleting Queen!");
            console.log("Total Queens Place :",total);
        }
    printBoardArray();
    }// palaceDeleteQueen



    
function check_for_feasibility(pt)
{
 
 console.log("In Checking Feasibility to place the Queen @",pt)
 var r = Math.floor(pt / 10);
 var c = pt % 10;
 console.log("First digit:", r);   // Output: First digit: 2
 console.log("Second digit:", c); // Output: Second digit: 4
 

 if (row(r) || col(c) || fdu(r,c) || fdd(r,c) || bdu(r,c) || bdd(r,c))
    {
        console.log("Queen Fund, not feasible ");
   return false;
    }
        else
    {
    
        console.log("Queen not Fund, feasible ");
   return true;
    }
    }

//checking entire row
function row(r)
    {
            console.log("In Checking Row...: ",r);
            for (var i=0; i<8; i++)
            {
             console.log("Checking in Progress..!", brd[r][i].innerHTML);
             console.dir();
                if (brd[r][i].textContent === "♛") 
                    {
                    console.log("found the queen:",brd[r][i].innerHTML);
                    return true;
                    }
            }
   return false; 
    }

//checking entire column
function col(c)
{
            console.log("In Checking Row...: ",c);
            for (var i=0; i<8; i++)
            {
             console.log("Checking in Progress..!", brd[i][c].innerHTML);
             console.dir();
                if (brd[i][c].textContent === "♛") 
                    {
                    console.log("found the queen:",brd[i][c].innerHTML);
                    return true;
                    }
            }
   return false 
}



//checking right diaonal up path
function fdu(n,m)
{
       console.log("In Checking Diagonal Right up for point: (",n,m,")");
	while ((n >= 0) && (m < 8))
	{	
		if (brd[n][m].textContent === "♛")
		return true;
		else
		{
		n=n-1;
		m=m+1;
		}
	}
return false;	   
}

//checking right diaonal down path
function fdd(n,m)
{
       console.log("In Checking Diagonal Right Down for point: (",n,m,")");
	while ((n < 8) && (m >= 0))
	{	
		if (brd[n][m].textContent === "♛")
		return true;
		else
		{
		n=n+1;
		m=m-1;
		}
	}
return false;	   
}



//checking left diaonal up path
function bdu(n,m)
{
       console.log("In Checking Diagonal Left up for point: (",n,m,")");
	while ((n >= 0) && (m >= 0))
	{	
		if (brd[n][m].textContent === "♛")
		return true;
		else
		{
		n=n-1;
		m=m-1;
		}
	}
return false;	   
}

//checking left diaonal down path
function bdd(n,m)
{
       console.log("In Checking Diagonal Left Down for point: (",n,m,")");
	while ((n < 8) && (m < 8))
	{	
		if (brd[n][m].textContent === "♛")
		return true;
		else
		{
		n=n+1;
		m=m+1;
		}
	}
return false;	   
}


