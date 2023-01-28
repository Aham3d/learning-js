// first game. rps v1

let playGame = confirm("shall we play rock, paper and sciccor?");
if(playGame) {

    let playerChoice = prompt("enter your move");
    if(playerChoice) {
        let player = playerChoice.trim().toLowerCase();
        if (player === "rock" || 
            player === "paper" || 
            player === "scissor") {

            let computerchoice = Math.floor(Math.random() * 3 + 1); 
            let computer = computerchoice === 1 ? "rock" 
            : computerchoice === 2 ? "paper" 
            : "scissor"; 

            let result = player === computer ? "game tied!"
            : player === "rock" && computer === "paper" 
            ? `player: ${player} \ncomputer: ${computer}\n "Computer wins" `
            : player === "paper" && computer === "scissors"
            ? `player: ${player} \ncomputer: ${computer}\n "Computer wins" `
            : player === "scissor" && computer === "rock" 
            ? `player: ${player} \ncomputer: ${computer} \n "Computer wins" ` 
            : `player: ${player} \ncomputer: ${computer} \n "player wins" `

            alert(result);

            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("ok, thanks for playing");
        }
        else {
            alert("invalid move");
        }
    }
    else {
        alert("changed your mind?, may be later");
    }
} 

else {
    alert("may be later");
}