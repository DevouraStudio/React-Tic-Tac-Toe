import { useState } from "react";

import "./Player.css";

export default function Player({ name, symbol, isActive, handlePlayerName }) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => setIsEditing((pre) => !pre);

  const handleNameChange = (event) => setPlayerName(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEditing((pre) => !pre);
    handlePlayerName(symbol, playerName);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={playerName}
              onChange={handleNameChange}
              placeholder="Name"
              required
            />
            <span className="player-symbol">{symbol}</span>
            <button>Save</button>
          </form>
        )}
        {!isEditing && <span className="player-symbol">{symbol}</span>}
        {!isEditing && <button onClick={handleEditClick}>Edit</button>}
      </span>
    </li>
  );
}
