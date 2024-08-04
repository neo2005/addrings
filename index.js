import fs from 'node:fs'

this.readTokensRing('modules/add-token-rings/rings');

Hooks.on("init", function() {
  
  console.log("This code runs once the Foundry VTT software begins its initialization workflow.");
});



function readTokensRing(path){
	const files = fs.readdirSync(path);
	files.forEach(file => {
		const stat = fs.statSync(`${path}/${file}`)
		if(stat.isDirectory()){
			readTokensRing(`${path}/${file}`)
		}else{
      if(file === 'sprite-sheet.json'){
        const label = path.split("/").reverse();

        Hooks.on("initializeDynamicTokenRingConfig", (n) => {
          const s = new foundry.canvas.tokens.DynamicRingData({
            label: `${label}`,
            effects: {
              RING_PULSE: "TOKEN.RING.EFFECTS.RING_PULSE",
              RING_GRADIENT: "TOKEN.RING.EFFECTS.RING_GRADIENT",
              BKG_WAVE: "TOKEN.RING.EFFECTS.BKG_WAVE",
              INVISIBILITY: "TOKEN.RING.EFFECTS.INVISIBILITY"
            },
            spritesheet: `${path}/${file}`
          });
          n.addConfig(`${label}`, s);
        });
      }
		}
	})
}
