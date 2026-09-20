let prompt = require("prompt-sync")();
let N = +prompt("veuillez Saisie un nomber N :");
let compteur = 0 ;
let somme = 0 ;
while(N !==0 ){
    somme = somme + N ;
    compteur ++;
    N = +prompt("veuillez Saisie un nomber N :");

   }
        console.log("Le nombre de valeurs saisies :"+compteur);
         console.log("La somme des valeurs saisies :"+somme);

        