import "./Log.css";

export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row + 1},${turn.square.col + 1}`}>
          Player {turn.player} selected row #{turn.square.row + 1}, column #
          {turn.square.col + 1}
        </li>
      ))}
    </ol>
  );
}
