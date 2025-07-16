# tic-tac-toe
Welcome to tic-tac-toe!

<h1>Project Overview</h1>
<ul>
<li>This game allows two players to play Tic Tac Toe in a browser, taking alternating turns as "X" and "O".</li>
<li>The game determines the winner, handles draws, and allows for resets.</li>
</ul>

<h1>Demo</h1>
<video src="front-end/Screen Recording 2025-07-16 at 5.46.51 PM.mp4" controls width="600">
   There is an error here.
</video>

<h1>Logic of the game</h1>
- The game board is represented as a 3x3 array of cells, each with a value of either "X", "O", or an empty string.

<div style="width: 100%; display: flex; justify-content: center; align-items: center; margin: 20px 0;">
    <table style="width:50px;border:1px solid white">
    <tr>
        <th style="border:1px solid white">0</th>
        <th style="border:1px solid white">1</th>
        <th style="border:1px solid white">2</th>
    </tr>
    <tr>
        <td style="border:1px solid white">3</td>
        <td style="border:1px solid white">4</td>
        <td style="border:1px solid white">5</td>
    </tr>
    <tr>
        <td style="border:1px solid white">6</td>
        <td style="border:1px solid white">7</td>
        <td style="border:1px solid white">8</td>
    </tr>
    </table>
</div>

- For each player (X or O), the combination of location for winning are:
  - 3 cells in a row: [0, 1, 2], [3, 4, 5], [6, 7, 8]
  - 3 cells in a column: [0, 3, 6], [1, 4, 7], [2, 5, 8]
  - 2 cells in a diagonal: [0, 4, 8], [2, 4, 6]
- The game determines the winner by checking if any of the winning combinations are filled with the same player's symbol.
- If no player has won and all cells are filled, the game is a draw.
- The game allows for resets, allowing players to start a new game without refreshing the page.
- This is the simpliest algorithm for 3x3 tic tac toe because there are not many squares on the board to check for a win. For a larger board, the number of winning combinations increases, making the algorithm more complex.
- If the board is larger (may be 16x16...), we can check the winner by checking 3 directions when user clicks on a square. We can check for a win by checking 3 directions: horizontal, vertical, and diagonal. If user gets winning consecutive square, we can declare that player as the winner.

<h1>Tech Stack</h1>
This project uses the following technologies:
<ul>
<li>React.js - Frontend frame work</li>
<li>JavaScript - Programming language</li>
<li>CSS - Styling language</li>
</ul>

<h1>Extend features (if having time)</h1>
<ul>
    <li>Add a timer to the game: time for a move for each plauyer</li>
    <li>Add a scoreboard to keep track of the number of wins for each player</li>
    <li>Add a feature to allow players to choose the size of the game board and number of consecutive moves required to win</li>
    <li>Add a feature to allow players to choose the symbol they want to use</li>
    <li>Add a feature to allow players to choose the difficulty of the game (easy, medium, hard)</li>
</ul>
