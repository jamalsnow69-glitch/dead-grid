import { useState } from "react";
import { initialGameState } from "./game/initialState";
import HUDPanel from "./components/panels/HUDPanel";
import DevConsolePanel from "./components/panels/DevConsolePanel";

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
        <section className="panel">
          <h2>{game.location}</h2>
          <p>
            A dead suburb swallowed by weeds. The old world is silent, but not empty.
          </p>

          <button onClick={() => addLog("You searched the ruins.")}>
            Scavenge
          </button>

          <button onClick={() => addLog("You listened to the dead air.")}>
            Listen
          </button>
        </section>

        <section className="panel">
          <h2>Inventory</h2>
          {Object.entries(game.inventory).map(([item, amount]) => (
            <div key={item} className="item-row">
              {item}: {amount}
            </div>
          ))}
        </section>

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
