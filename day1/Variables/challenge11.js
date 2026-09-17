let prompt = require("prompt-sync")();
let largeur = +prompt("donner moi largeur  : ");
let longueur = +prompt("donner moi longueur  : ");
Surface = longueur * largeur;
Périmètre = 2 * (longueur + largeur);
console.log("largeur  :"+ largeur+ "m" );
console.log("Longueur  :"+longueur + "m" );
console.log("Surface  :"+Surface + "m²" );
console.log("Périmètre  :"+Périmètre + "m" );
