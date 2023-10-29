function App() {
  // Define the winning combinations for Tic-Tac-Toe
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  // Initialize the game board and current turn using React state
  const [board, setBoard] = React.useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = React.useState('X');

  // Define a variable to track the game's status
  let gameOver = false;

  // Event handler for handling player turns
  function handleTurn(event) {
    // Extract the index of the clicked square from the event
    let idx = event.target.id;

    // Check if the game is not over
    if (!gameOver) {
      // Create a new copy of the board array
      let newBoard = [...board];

      // Update the clicked square with the current player's symbol
      newBoard[idx] = turn;

      // Update the board state with the new state
      setBoard(newBoard);

      const winner = getWinner(newBoard, winningCombos);

      if (winner) {
        // Game is over, declare the winner
        gameOver = true;
        alert(`Player ${winner} wins!`);
      } else {
        // Switch the turn to the other player
        setTurn(turn === 'X' ? 'O' : 'X');
      
      // TODO: Add code here to check for a winner and end the game if necessary
    }
  }
  }

  function getWinner(board, winningCombos) {
    // Check each winning combination
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
  
      // Check if the squares in the current winning combination have the same symbol (X or O)
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return the winning symbol (X or O)
      }
    }
  
    // If there's no winner, return null
    return null;
  }


  function resetGame() {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setTurn('X');
    gameOver = false;
  }


  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <h2>It's {turn}'s turn!</h2>
      <div className="flex-container flex-column">
        <div className="flex-container flex-wrap" id="board" onClick={handleTurn}>
          {/* Render the game board */}
          {board.map((value, idx) => (
            <div className='square' key={idx} id={idx}>
              {value}
            </div>
          ))}
        </div>
        <button id="reset-button" onClick={resetGame}>Reset</button>  
      </div>
    </div>
  );
}


// Render the App component to the root element
ReactDOM.render(<App />, root)
