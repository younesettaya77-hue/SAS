function  plusgrandmot(chaine){
   let  mot = "";
   let tab = [];
    for(let i = 0 ; i<chaine.length ; i++){
        if( chaine[i]!=" "){
            mot +=chaine[i];
            mot = "";
        }
        else { tab[tab.length]+=R ;
            continue ;
        } 
    }
   
    }
    return motMax ;
let prompt = require("prompt-sync")();
let texte = prompt("donner une chaines de caractere :")
let X = plusgrandmot(texte);
    console.log(X)