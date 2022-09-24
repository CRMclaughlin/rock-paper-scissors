
var wins = 0
var loss = 0
var tie = 0
var keepPlaying = true

while(keepPlaying){
// define array for choices [ r, p, s]
var choices = ["r", "p", "s"]

var rand = Math.floor(Math.random() * choices.length)

//prompt() playerChoice
var playerChoice = prompt("Please choose r, p, or s")
// if (humanChoice !== "r" || !)

console.log ("Player choice:", playerChoice)

if (!choices.includes(playerChoice)){
    alert("Bad Input")
    continue;
}

// define array for computerchoice
var computerChoice =choices [rand]
alert("Computer chose " + computerChoice )

var result

if (playerChoice === computerChoice) {
    tie++
    result = "tied 🙈"
} else if (
    playerChoice === "r" && computerChoice === "s" ||    
    playerChoice === "s" && computerChoice === "p" || 
    playerChoice === "p" && computerChoice === "r"
    ){
        wins++
        result = "Won! 🍾"
    } else {
        loss++
        result = "lost 😿"
    }

alert ("You " + result)

alert("Stats: \nWins: " + wins + " \nLosses " + loss + " \nTies" + tie)


keepPlaying = confirm("Want to play again")
}

// if playerChoice is not equal to "r" "p" "s" then print you lose

//randomly choose computerChoice


    



    
//compare choices 

//display (alert) results ("won, tied, lost round")



// show stats (number of wins, losses, ties)

// play again?
    // restart again
//else 
    //end game


