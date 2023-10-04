// Constants for winning combinations
const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

// App state variables
let board;
let turn = "X";
let win;

// Cached DOM elements
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

/**
 * Initialize the game state.
 */
const init = () => {
    // Reset the board state
    board = Array(9).fill('');
    render();
};

/**
 * Check if there is a winner on the board.
 * @returns {'X' | 'O' | 'T' | null} winner or 'T' for tie, or null if no result yet.
 */
const getWinner = () => {
    for (const combo of winningCombos) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) {
            return board[combo[0]]; // 'X' or 'O' has won
        }
    }
    // Check for tie
    if (!board.includes('')) {
        return 'T'; // It's a tie
    }
    return null; // Game still ongoing
};

/**
 * Render the current state of the game to the UI.
 */
const render = () => {
    // Update board UI
    board.forEach((mark, idx) => {
        squares[idx].textContent = mark;
    });

    // Update message UI
    if (win === 'T') {
        messages.textContent = `That's a tie, queen!`;
    } else if (win) {
        messages.textContent = `${win} wins the game!`;
    } else {
        messages.textContent = `It's ${turn}'s turn!`;
    }
};

/**
 * Handle player's move on the board.
 * @param {Event} event - Click event.
 */
const handleTurn = (event) => {
    const idx = squares.indexOf(event.target);

    // Check if the square is already filled or the game has ended
    if (board[idx] || win) {
        return;
    }

    board[idx] = turn; // Set the move on the board
    turn = turn === 'X' ? 'O' : 'X'; // Switch player
    win = getWinner(); // Check for game end
    render(); // Update UI
};

// Event listeners
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);

// Start the game
init();
