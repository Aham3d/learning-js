// first game

let playGame = confirm("shall we play rock, paper and sciccor?");
if(playGame) {

        while (playGame) {
            const playerChoice = prompt("enter the move");
            if (playerChoice || playerChoice === "") {
                const player = playerChoice.trim().toLowerCase();
                if (
                player === "rock" || 
                player === "paper" || 
                player === "scissor"
                ) {

                const computerchoice = Math.floor(Math.random() * 3 + 1)
                const rpsArray = ["rock" , "paper", "scissor"];
                const computer = rpsArray[computerchoice]; 

                const result = player === computer ? "game tied!"
                    : player === "rock" && computer === "paper" 
                    ? `player: ${player} \ncomputer: ${computer}\n "Computer wins" `
                    : player === "paper" && computer === "scissors"
                    ? `player: ${player} \ncomputer: ${computer}\n "Computer wins" `
                    : player === "scissor" && computer === "rock" 
                    ? `player: ${player} \ncomputer: ${computer} \n "Computer wins" ` 
                    : `player: ${player} \ncomputer: ${computer} \n "player wins" `

                alert(result);

                playGame = confirm("Play Again?");
                if(!playGame) alert("ok, thanks for playing");
                continue;
            } else {
                alert("invalid move!");
                continue;
            }
        } else {
            alert("changed your mind?, may be later.");
            break;
        }
    } 
} 
else {
    alert("may be later?");
}