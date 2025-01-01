let scoreStr = localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore() {
    score = scoreStr ? JSON.parse(scoreStr) : {
        win : 0,
        lost : 0,
        tie : 0,
};

score.displayScore = function() {
    return `Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
 };
 document.querySelector('#resultDisplay').value = `Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
}

let userChoice;
let computerChoice;
function generateComputerChoice() {
    let randomNum = Math.random() * 3;
    if (randomNum >= 0 && randomNum < 1) {
        computerChoice = 'Bat';
    } else if (randomNum >= 1 && randomNum < 2) {
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }
}

function inputAndCmp() {
    let resultMsg = '';
    
    if (userChoice === computerChoice) {
        resultMsg = 'It\'s a Tie!';
        score.tie++;
    } else if ((userChoice === 'Bat' && computerChoice === 'Ball') ||
               (userChoice === 'Ball' && computerChoice === 'Stump') ||
               (userChoice === 'Stump' && computerChoice === 'Bat')) {
        resultMsg = 'You Win!';
        score.win++;
    } else {
        resultMsg = 'Computer Wins!';
        score.lost++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#resultDisplay').value = `You : ${userChoice}, Computer : ${computerChoice}. ${resultMsg}. ${score.displayScore()}`;

}