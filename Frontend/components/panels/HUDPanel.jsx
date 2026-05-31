export default function HUDPanel({ game }) {
  return (
    <section className="panel hud-panel">
      <span>Day: {game.day}</span>
      <span>Health: {game.health}</span>
      <span>Hunger: {game.hunger}</span>
      <span>Thirst: {game.thirst}</span>
      <span>Fatigue: {game.fatigue}</span>
      <span>Morale: {game.morale}</span>
      <span>Faction: {game.faction}</span>
    </section>
  );
}
