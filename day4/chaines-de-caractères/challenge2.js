 let prompt = require("prompt-sync")();
 compteur = 0 ;
 i = 0;
function compterLettre(chaine, caractere){
    while(chaine[i]!==undefined){
        if(chaine[i]===caractere){
            compteur ++;
        }
        
         i++ ;
    }
    return compteur;
}
let C = prompt("donner un texte chaine : ");
let B = prompt("donner moi un seul caractere :");
let A = compterLettre(C, B);
console.log(A);