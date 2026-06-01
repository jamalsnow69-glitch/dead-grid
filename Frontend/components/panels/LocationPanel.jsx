export default function LocationPanel({ game, addLog }) {
  return (
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
  );
}
