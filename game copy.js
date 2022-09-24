// define array for choices [ r, p, s]
// define array for computerchoice
// define var for playerChoice
// try{}

var wins = 0
var loss = 0
var tie = 0


var choices = ["r", "p", "s"]

var playerChoice = prompt("Please choose r, p, or s")
if (playerChoice == choices){
}else prompt("Please select r, p, or s to start")
    

//prompt() playerChoice

// if playerChoice is not equal to "r" "p" "s" then print you lose

//randomly choose computerChoice

var rand = Math.floor(Math.random()* choices.length)
var computerChoice = choices[rand]
alert("Computer Chose " + computerChoice)
if (playerChoice === computerChoice){
    alert("You've Tied")
    tie = tie + 1
} else if (playerChoice === "r" && computerChoice === "s" || playerChoice === "p" && computerChoice === "r" || playerChoice === "s" && computerChoice === "p")
    alert("You've Won!")
    



    
//compare choices 

//display (alert) results ("won, tied, lost round")



// show stats (number of wins, losses, ties)

// play again?
    // restart again
//else 
    //end game


