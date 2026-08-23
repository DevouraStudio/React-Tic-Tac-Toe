import "./GameOver.css"

export default function GameOver({ winner, rematch }) {
    return (
        <div id="game-over">
            <h2>GAME OVER!</h2>
            {winner && <p>Hooray, {winner} won the game!</p>}
            {!winner && <p>It's a draw, nobody won the game! :(</p>}
            <button onClick={rematch}>Rematch</button>
        </div>
    )
}