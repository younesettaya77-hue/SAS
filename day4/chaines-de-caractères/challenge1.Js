 let prompt = require("prompt-sync")();
 function compterCaracteres(chaine){
     compteur = 0 ;
     while(chaine[compteur]){
        compteur ++ ;
     }
      return compteur ;
    

 }
 let txte = prompt("donner un chaine de caractere : ");
 console.log(compterCaracteres(txte));
