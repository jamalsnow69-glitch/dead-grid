const DEV_PASSWORD = "deadgrid";

export function checkDevPassword(input) {
  return input === DEV_PASSWORD;
}

export function runConsoleCommand(command, game) {
  const parts = command.trim().split(" ");
  const base = parts[0]?.toLowerCase();

  const nextGame = structuredClone(game);

  if (!base) {
    return { game: nextGame, message: "No command entered." };
  }

  if (base === "help") {
    return {
      game: nextGame,
      message: "Commands: help, give <item> <amount>, set health <amount>, set day <amount>, teleport <location>"
    };
  }

  if (base === "give") {
    const amount = Number(parts.at(-1)) || 1;
    const item = parts.slice(1, -1).join("_").toLowerCase();

    if (!item) {
      return { game: nextGame, message: "Usage: give <item> <amount>" };
    }

    nextGame.inventory[item] = (nextGame.inventory[item] || 0) + amount;

    return {
      game: nextGame,
      message: `Added ${amount} ${item}.`
    };
  }

  if (base === "set" && parts[1] === "health") {
    nextGame.health = Number(parts[2]) || nextGame.health;
    return { game: nextGame, message: `Health set to ${nextGame.health}.` };
  }

  if (base === "set" && parts[1] === "day") {
    nextGame.day = Number(parts[2]) || nextGame.day;
    return { game: nextGame, message: `Day set to ${nextGame.day}.` };
  }

  if (base === "teleport") {
    nextGame.location = parts.slice(1).join(" ") || nextGame.location;
    return { game: nextGame, message: `Teleported to ${nextGame.location}.` };
  }

  return { game: nextGame, message: "Unknown command. Type help." };
}
