 let prompt = require("prompt-sync")();
 function compterCaracteres(texte){
     i = 0 ;
     while(texte[i]){
        i ++ ;
     }
      return i ;
    

 }
 let C = prompt("donner un texte de caractere : ");
 let A = compterCaracteres(C);
 console.log(A);
