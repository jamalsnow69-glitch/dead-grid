import { useEffect, useState } from "react";
import { checkDevPassword, runConsoleCommand } from "../../game/consoleSystem.js";

export default function DevConsolePanel({ game, setGame, addLog }) {
  const [open, setOpen] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [command, setCommand] = useState("");

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.ctrlKey && event.altKey && event.key.toLowerCase() === "o") {
        setOpen(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function submitPassword() {
    if (checkDevPassword(password)) {
      setUnlocked(true);
      setPassword("");
      addLog("Developer console unlocked.");
    } else {
      addLog("Incorrect developer password.");
    }
  }

  function submitCommand() {
    const result = runConsoleCommand(command, game);
    setGame({
      ...result.game,
      log: [result.message, ...result.game.log]
    });
    setCommand("");
  }

  if (!open) return null;

  return (
    <section className="dev-console-panel">
      <button className="console-close" onClick={() => setOpen(false)}>
        X
      </button>

      {!unlocked ? (
        <>
          <h3>PASSWORD REQUIRED</h3>
          <input
            type="password"
            placeholder="Developer password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitPassword()}
          />
          <button onClick={submitPassword}>Unlock</button>
        </>
      ) : (
        <>
          <h3>DEAD GRID CONSOLE</h3>
          <input
            type="text"
            placeholder="Type command..."
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submitCommand()}
          />
          <button onClick={submitCommand}>Run</button>
        </>
      )}
    </section>
  );
}
