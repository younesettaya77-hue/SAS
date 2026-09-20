let prompt = require("prompt-sync")();
let N = +prompt("veuillez Saisie un nomber N :");
let deviseur = 0;
let compteur = 0 ;
for(let i = 1; i <= N ; i++){
    if(N % i === 0 ){
      console.log("les diviseur est : "+i);
     compteur ++;
    
}
    }
   
        console.log("nomber des diviseur est :"+compteur);