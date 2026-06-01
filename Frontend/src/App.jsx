import { useState } from "react";
import { initialGameState } from "./game/initialState.js";
import HUDPanel from "./components/panels/HUDPanel.jsx";
import DevConsolePanel from "./components/panels/DevConsolePanel.jsx";
import InventoryPanel from "./components/panels/InventoryPanel.jsx";
import LocationPanel from "./components/panels/LocationPanel.jsx";

export default function App() {
  const [game, setGame] = useState(initialGameState);

  function addLog(message) {
    setGame((current) => ({
      ...current,
      log: [message, ...current.log]
    }));
  }

  return (
    <div className="app-shell">
      <header className="title-panel">
        <h1>DEAD GRID</h1>
        <p>Fifteen years after the power died.</p>
      </header>

      <HUDPanel game={game} />

      <main className="game-layout">
        <LocationPanel game={game} addLog={addLog} />
        <InventoryPanel inventory={game.inventory} />

        <section className="panel log-panel">
          <h2>Log</h2>
          {game.log.map((entry, index) => (
            <p key={index}>&gt; {entry}</p>
          ))}
        </section>
      </main>

      <DevConsolePanel game={game} setGame={setGame} addLog={addLog} />
    </div>
  );
}
