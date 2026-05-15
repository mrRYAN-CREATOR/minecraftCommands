elements.poop = {
    color: "#5c4033",
    behavior: behaviors.POWDER,
    category: "land",
    state: "solid",
    density: 1060,
    reactions: {
        "water": { elem1: "mud", elem2: null, chance: 0.1 },
        "fire": { elem1: "smoke", elem2: "fire", chance: 0.05 }
    }
};
