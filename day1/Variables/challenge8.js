let prompt = require("prompt-sync")();
let tension_U = +prompt("donner moi La tension U en volts : ");
let intensité_I= +prompt("donner moi L'intensité I en ampères : ");
let temps_T = +prompt("donner moi Le temps t en heures : ");
Énergie = tension_U * intensité_I * temps_T
console.log("tension_U est: "+tension_U+" V");
console.log("intensité_I est: " +intensité_I+" A");
console.log("temps_T est:"+temps_T +" Heurs");
console.log("Énergie: "+ Énergie +" Wh");


