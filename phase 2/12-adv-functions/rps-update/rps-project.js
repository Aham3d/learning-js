let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0, 
  lost: 0,
  ties: 0 
};

updateScore();

// used above
// if (!score) {
//   score = {
//     wins: 0, 
//     lost: 0,  
//     ties: 0
//   };
// }

let isAutoPlaying = false; 
const intervalId = 0; 

function autoPlay() {
  if(!isAutoPlaying) {
     intervalId = setInterval(() => {
      const PlayerMove = pickComputerMove();
      playGame(PlayerMove);
    }, 2000);
    isAutoPlaying = true; 

  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

const rockBtn = document.querySelector('.rock-btn');
rockBtn.addEventListener('click', () => {
  playGame('rock');
});

const paperBtn = document.querySelector('.paper-btn');
paperBtn.addEventListener('click', () => {
  playGame('paper');
});

const scissorsBtn = document.querySelector('.scissors-btn')
scissorsBtn.addEventListener('click', () => {
  playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGame('rock');
  } else if(event.key === 'p') {
    playGame('paper');
  } else if(event.key === 's') {
    playGame('scissors');
  }
});

function playGame(PlayerMove) {
  const computerMove = pickComputerMove();

  let result = '';
  
  if(PlayerMove === 'scissors') {
    if (computerMove === 'Scissors') {
      result = 'Tie'; 
    } else if (computerMove === 'Paper') {
      result = 'you win';
    } else if (computerMove === 'Rock') {
      result = 'you lose'; 
    }

  } else if(PlayerMove === 'paper') {
    if (computerMove === 'Paper') {
    result = 'Tie'; 
    } else if (computerMove === 'Scissors') {
      result = 'you lose';
    } else if (computerMove === 'Rock') {
      result = 'you win'; 
    }

  } else if(PlayerMove === 'rock') {
    if (computerMove === 'Rock') {
    result = 'Tie'; 
    } else if (computerMove === 'Paper') {
      result = 'you lose';
    } else if (computerMove === 'Scissors') {
      result = 'you win'; 
    } 
  }

  // updating the score
  if(result === 'you win') {
    score.wins += 1; 
  } else if(result === 'you lose') {
    score.lost += 1;
  } else if(result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `
  you 
    <img src="${PlayerMove}-emoji.png" alt="">
    <img src="${computerMove}-emoji.png" alt="">
  computer`;
}

function updateScore() {
  document.querySelector('.js-score').innerHTML = `wins: ${score.wins} lost: ${score.lost} ties:${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = " ";  

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
};