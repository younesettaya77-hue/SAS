let prompt = require("prompt-sync")();
let rayon = +prompt("donner moi Le rayon du réservoir : ");
let hauteur = +prompt("donner moi La hauteur du réservoir : ");
const π = 3.14159;
Volume = π * (rayon*rayon) * hauteur;
console.log("Rayon  : "+rayon+"m" );
console.log("Hauteur  : "+hauteur+"m" );
console.log("Volume : " + Volume + "m³" );

