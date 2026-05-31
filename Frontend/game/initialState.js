export const initialGameState = {
  day: 1,
  location: "Ashvale Outskirts",
  health: 100,
  hunger: 20,
  thirst: 20,
  fatigue: 10,
  morale: 60,
  faction: "Unaffiliated",
  inventory: {
    scrap: 3,
    canned_food: 2,
    water_bottle: 2,
    old_knife: 1
  },
  quests: {
    waterPump: false,
    signalFound: false,
    militiaDeal: false
  },
  log: [
    "Dead Grid initialized.",
    "Fifteen years after the power died."
  ]
};
