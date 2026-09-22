let prompt = require("prompt-sync")();

function remplacerCaractere(chaine, ancien, nouveau){
    resultat ="";
    for(let i = 0 ; i < chaine.length ; i++ ){
        if(chaine[i]=== ancien){
           resultat += nouveau ; 
        }
        else{ 
            resultat += chaine[i];
        }
    } 
return resultat ;
}
    let texte = prompt("donner un mot :");
    let nbancien = prompt("velliez donner caracter :");
    let  nbnouvau = prompt("velliez donner nouvau caracter :");
    let X = remplacerCaractere(texte, nbancien, nbnouvau);
    console.log(X)
