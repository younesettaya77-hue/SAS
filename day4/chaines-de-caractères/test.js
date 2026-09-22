
function  plusgrandmot(chaine){
   let  mot = "";
   let tab = [];
    for(let i = 0 ; i<chaine.length ; i++){
        if( chaine[i]!==" "){
            mot +=chaine[i];
        }
        else { tab.push(mot);
            mot = "";
        } 
    }
    tab.push(mot);
    let max = 0 ;
    let index = 0 ; 
    for(let i= 0 ;i<tab.length ; i++){
        if( tab[i].length> max){
        max = tab[i].length;
     }
     index = i ;
    }
    return tab[index] ;
}
let prompt = require("prompt-sync")();
let texte = prompt("donner une chaines de caractere :")
let X = plusgrandmot(texte);
    console.log(X)