Hooks.on("initializeDynamicTokenRingConfig", (n) => {
  const s = new foundry.canvas.tokens.DynamicRingData({
    label: "Rusthenge Ring",
    spritesheet: "modules/addrings/rings/rusthenge/sprite-sheet.json"
  });
  n.addConfig("RuthengeRing", s);
});

Hooks.on("initializeDynamicTokenRingConfig", (n) => {
  const s = new foundry.canvas.tokens.DynamicRingData({
    label: "Bloodlord Ring",
    effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
    },
    spritesheet: "modules/addrings/rings/bloodlords/sprite-sheet.json"
  });
  n.addConfig("BloodlordRing", s);
});

Hooks.on("initializeDynamicTokenRingConfig", (n) => {
  const s = new foundry.canvas.tokens.DynamicRingData({
    label: "Seven Dooms Ring",
    effects: {
      RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
      RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
      BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
      INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
    },
    spritesheet: "modules/addrings/rings/sevendooms/sprite-sheet.json"
  });
  n.addConfig("SevenDoomsRing", s);
});