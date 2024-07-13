let playerPositions = [0, 0]; // Player 1 and Player 2 positions
let currentPlayer = 0;

const rollButton = document.getElementById('rollButton');
const message = document.getElementById('message');
const player1Div = document.getElementById('player1');
const player2Div = document.getElementById('player2');

rollButton.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    playerPositions[currentPlayer] += diceRoll;

    // Move player
    if (playerPositions[currentPlayer] > 99) {
        playerPositions[currentPlayer] = 99; // Limit position
    }

    updatePlayerPositions();
    
    // Check for winner
    if (playerPositions[currentPlayer] === 99) {
        alert(`Player ${currentPlayer + 1} wins!`);
        resetGame();
    } else {
        currentPlayer = currentPlayer === 0 ? 1 : 0;
        message.innerText = `Player ${currentPlayer + 1}'s turn.`;
    }
});

function updatePlayerPositions() {
    player1Div.style.gridColumn = (playerPositions[0] % 10) + 1;
    player1Div.style.gridRow = Math.floor(playerPositions[0] / 10) + 2;
    player2Div.style.gridColumn = (playerPositions[1] % 10) + 1;
    player2Div.style.gridRow = Math.floor(playerPositions[1] / 10) + 2;
}

function resetGame() {
    playerPositions = [0, 0];
    currentPlayer = 0;
    message.innerText = "Welcome to Ludo! Player 1's turn.";
    updatePlayerPositions();
}
