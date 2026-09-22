let prompt = require("prompt-sync")();
function repeterChaine(chaine, fois){
    let resultat = "";
    for(i = 0 ; i < fois ; i++){
        resultat += chaine ;
    }
       return resultat ;
    }
    let texte = prompt("donner un mot :");
    let nbfois = +prompt("velliez donner nomber :");
    let X = repeterChaine(texte, nbfois);
console.log(X)



