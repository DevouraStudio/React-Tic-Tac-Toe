# React Tic-Tac-Toe
 
A classic two-player Tic-Tac-Toe game built with React and Create React App.
 
## Features
 
- **Editable player names** — click "Edit" next to a player to rename them
- **Turn tracking** — the active player is highlighted during their turn
- **Win detection** — checks all rows, columns, and diagonals for a winner
- **Draw detection** — flags the game as a draw when the board fills with no winner
- **Move log** — displays a running history of every move made
- **Rematch** — reset the board and start a new round without a page reload
## Tech Stack
 
- [React](https://react.dev/) 19
- [Create React App](https://create-react-app.dev/) (`react-scripts`)
## Project Structure
 
```
src/
├── components/
│   ├── App.js              # Root component; holds game state and logic
│   ├── GameBoard/           # 3x3 game board grid
│   ├── GameOver/            # End-of-game screen (winner/draw + rematch)
│   ├── Log/                 # Move history list
│   └── Player/              # Player name/symbol display and edit form
├── winningConditions.js     # Row/column/diagonal combinations that win
├── index.js                 # App entry point
└── index.css                 # Global styles
public/
└── index.html                # HTML template
```
 
## Getting Started
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
### Installation
 
```bash
npm install
```
 
### Running Locally
 
```bash
npm start
```
 
Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads automatically when you make changes.
 
### Building for Production
 
```bash
npm run build
```
 
Builds an optimized production bundle to the `build/` folder.
 
### Running Tests
 
```bash
npm test
```
 
## How to Play
 
1. Player 1 (X) and Player 2 (O) take turns clicking squares on the board.
2. Optionally, click "Edit" on a player's name to personalize it before or during the game.
3. The first player to line up three symbols in a row, column, or diagonal wins.
4. If all nine squares fill up with no winner, the game ends in a draw.
5. Click "Rematch" to reset the board and play again.
## Created With
 
This project was originally created with [CodeSandbox](https://codesandbox.io/).

## Author

- Website - [DevouraStudio](https://www.devoura.ir)
- Frontendmentor - [@DevouraStudio](https://www.frontendmentor.io/profile/DevouraStudio)
- Github - [@DevouraStudio](https://www.github.com/DevouraStudio)
- Codepen - [@DevouraStudio](https://www.codepen.io/DevouraStudio)
- Codesandbox - [@DevouraStudio](https://codesandbox.io/u/DevouraStudio)