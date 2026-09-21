let prompt = require("prompt-sync")();

function creerCompteur(valeurInitiale = 0){
    let moncompteur = valeurInitiale ;
    return function (){
        moncompteur ++;
        return moncompteur ; 
    }

}
let R = +prompt("donner le nomber :")
const compteur = creerCompteur(R);
 console.log(compteur());
 console.log(compteur());
 console.log(compteur());
