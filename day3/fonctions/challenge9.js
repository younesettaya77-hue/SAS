let prompt = require("prompt-sync")();
let R = +prompt("donner le nomber :")
function compteur(VALEUR){

    return function retcompeur(){
        R ++ ;
        return R ; 
    }
}
let X = compteur();
 console.log(X());
 console.log(X());
 console.log(X());
