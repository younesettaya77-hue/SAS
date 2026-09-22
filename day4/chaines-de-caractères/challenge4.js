 let prompt = require("prompt-sync")();
 let compteur = 0 ;
function compterVoyelles(texte){
    for(i = 0 ; i < texte.length ; i++){
        if(
            texte[i]== "a" ||
             texte[i]== "e" ||
              texte[i]== "u" ||
               texte[i]== "i" ||
                texte[i]== "y" ||
           texte[i]== "o" ||
            texte[i]== "E" ||
             texte[i]== "A" ||
              texte[i]== "U" ||
               texte[i]== "I" ||
                texte[i]== "Y" ||
                 texte[i]== "O" 
        ){
            compteur ++;
        }
        
    }
    return compteur ;

}

let texte = prompt("donner un text :");
console.log(compterVoyelles(texte));