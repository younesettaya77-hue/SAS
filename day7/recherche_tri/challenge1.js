let prompt = require("prompt-sync")();
let nombres = [4, 8, 15, 16, 23, 42];
let Nbr = +prompt("veuillez entrer un nomber il existe ou non dans le tableaux :");
function rechercherexist(nb) {
    for (let i = 0; i < nombres.length; i++) {
        if (nb === nombres[i]) {
            return true;
        }
    }
    return false;
}
console.log(rechercherexist(Nbr));