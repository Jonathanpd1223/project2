function App() {
  return (
    <div>
      <h1>Tic-React-Toe</h1>
    </div>
    <h1>Tic-Tac-Toe</h1>
    <h2>It's X's turn!</h2>
    <div class="flex-container flex-column">
      <div class="flex-container flex-wrap" id="board">
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
        <div class="square"></div>
      </div>
      <button id="reset-button">reset</button>
    </div>
  )
}



ReactDOM.render(<App />, root)
